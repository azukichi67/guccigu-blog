# システム構成

## 技術スタック

| カテゴリ | ライブラリ | バージョン | 役割 |
|---------|-----------|-----------|------|
| Web フレームワーク | Hono | 4.7.5 | ルーティング、リクエスト/レスポンス処理 |
| メタフレームワーク | HonoX | 0.1.38 | ファイルベースルーティング、SSG、クライアントハイドレーション |
| CSS | Tailwind CSS | 4.0.6 | ユーティリティファースト CSS |
| CSS プラグイン | @tailwindcss/typography | 0.5.16 | prose クラスによるリッチテキストスタイリング |
| MDX | @mdx-js/rollup | 3.1.0 | MDX → JSX コンパイル |
| MDX プラグイン | remark-frontmatter | 5.0.0 | YAML frontmatter パース |
| MDX プラグイン | remark-mdx-frontmatter | 5.0.0 | frontmatter を export として抽出 |
| MDX プラグイン | rehype-pretty-code | 0.14.0 | コードブロックのシンタックスハイライト |
| ハイライト | shiki | 1.29.2 | rehype-pretty-code のハイライトエンジン（テーマ: one-dark-pro） |
| ユーティリティ | remeda | 2.21.0 | 関数型プログラミングユーティリティ（ソート等） |
| ユーティリティ | clsx + tailwind-merge | 2.1.1 / 3.3.0 | Tailwind クラスの安全な結合 |
| ビルド | Vite | 5.4.12 | ビルドツール、開発サーバー |
| デプロイ | Wrangler | 4.16.1 | Cloudflare Pages デプロイ |
| Scaffold | Plop | 4.0.1 | 記事テンプレート生成 |

## エントリポイント

### `app/server.ts` — サーバーエントリ

HonoX の `createApp()` でアプリケーションを初期化し、ファイルベースルーティングを有効化する。`showRoutes()` で登録済みルートをコンソール出力。

### `app/client.ts` — クライアントエントリ

HonoX の `createClient()` でクライアントサイドハイドレーションを実行。`_renderer.tsx` から `<Script src="/app/client.ts" />` として読み込まれる。

### `app/set-theme.ts` — テーマスクリプト

ページレンダリング前にダークモードを判定・適用するスクリプト。`<head>` 内で同期実行されるため、テーマフラッシュ（FOUC）を防止する。本番ビルドでは `dist/static/set-theme.js` に出力される。

## ビルドプロセス

`npm run build` は 3 段階のビルドを実行する:

```
1. vite build --mode client
   → クライアントサイドアセット（JS, CSS）をビルド

2. NODE_ENV=production vite build
   → サーバー + SSG ビルド
   → @hono/vite-ssg が全ルートの静的 HTML を生成
   → 動的ルート (posts/[slug]) は ssgParams() で全スラッグを列挙

3. vite build --mode script
   → app/set-theme.ts を dist/static/set-theme.js にビルド
   → emptyOutDir: false で既存出力を保持
```

ビルド出力先: `dist/`

## SSG (Static Site Generation)

- `@hono/vite-ssg` プラグインがビルド時に全ルートの HTML を生成
- 静的ルート (`/`, `/posts`, `/about`) はそのまま HTML 化
- 動的ルート (`/posts/[slug]`) は `ssgParams()` で全記事のスラッグを列挙し、各記事の HTML を事前生成
- ランタイムでの API 呼び出しやサーバーサイドレンダリングは行わない

## MDX パイプライン

```
*.mdx ファイル
  ↓ remark-frontmatter（YAML frontmatter をパース）
  ↓ remark-mdx-frontmatter（frontmatter を named export に変換）
  ↓ rehype-pretty-code（コードブロックにシンタックスハイライト適用）
      テーマ: one-dark-pro
      bypassInlineCode: true（インラインコードはスキップ）
      keepBackground: true
  ↓ @mdx-js/rollup（MDX → JSX コンパイル、jsxImportSource: "hono/jsx"）
  ↓ Vite import.meta.glob で一括読み込み
```

## スタイリング構成

### Tailwind CSS 4

- ダークモード: `class` 戦略（`darkMode: 'class'`）
- コンテンツスキャン対象: `./app/**/*.tsx`
- CSS エントリ: `app/style.css` → `@import "tailwindcss"` + `@plugin "@tailwindcss/typography"`

### カスタムテーマ

CSS 変数で light/dark のカラーを定義:

| 変数 | 用途 |
|-----|------|
| `--background` | 背景色 |
| `--foreground` | 文字色 |
| `--muted` | ミュート背景 |
| `--muted-foreground` | ミュート文字色 |
| `--card` / `--card-foreground` | カード要素 |

### フォント

- 見出し / ナビゲーション: **Alfa Slab One**（Google Fonts）
- 本文: **Noto Sans JP**（Google Fonts、weight 100-900）

### Typography プラグインのカスタマイズ

- リンク色: `#3182ce`（ホバー: `#2c5282`）
- インラインコード: グレー背景 + ダークモード対応
- `code::before` / `code::after` の疑似要素を無効化
- prose の `maxWidth: '100%'` で全幅表示

### コードブロックスタイリング (style.css)

- `figcaption[data-rehype-pretty-code-title]`: コードブロックタイトル（角丸上部、白文字 + グレー背景）
- `[data-highlighted-line]`: ハイライト行（`bg-sky-500/10`）
- `code[data-line-numbers]`: 行番号表示（CSS カウンター使用、桁数に応じた幅調整）

## デプロイ

- プラットフォーム: **Cloudflare Pages**
- 設定ファイル: `wrangler.json`
- プロジェクト名: `blog`
- ビルド出力: `./dist`
- 互換性フラグ: `nodejs_compat`
- デプロイコマンド: `npm run deploy`（ビルド + `wrangler pages deploy`）

## Vite 設定 (vite.config.ts)

### プラグイン構成

1. `honox()` — ファイルベースルーティング + 開発サーバー（Cloudflare アダプタ）
2. `ssg({ entry })` — SSG プラグイン
3. `mdx()` — MDX コンパイル + remark/rehype プラグイン
4. `build()` — Cloudflare Pages 向けビルド
5. `tailwindcss()` — Tailwind CSS Vite プラグイン
6. `tsconfigPaths()` — パスエイリアス解決（`@/*` → `./app/*`）

### 開発サーバー

- ホスト: `0.0.0.0`（外部アクセス許可）
- ファイル監視: ポーリングモード（`usePolling: true`, `interval: 1000`）— WSL2 環境対応

## 記事テンプレート生成 (Plop)

`npm run plop` で対話的に新規記事を作成:

- プロンプト: タイトル、スラッグ
- ヘルパー: `today`（YYYY/MM/DD）、`directory`（YYYYMM）
- 出力先: `app/posts/{{directory}}/{{slug}}.mdx`
- テンプレート: `plop-templates/article/article.mdx.hbs`
