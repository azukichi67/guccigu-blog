# CLAUDE.md

## プロジェクト概要

Honox + Hono ベースの個人ブログ。Cloudflare Pages にデプロイ。

## 技術スタック

- フレームワーク: Honox / Hono
- 言語: TypeScript (strict モード)
- スタイリング: Tailwind CSS 4
- コンテンツ: MDX (remark-frontmatter, rehype-pretty-code)
- ビルド: Vite
- デプロイ: Cloudflare Pages (Wrangler)
- パッケージマネージャ: npm

## コマンド

- `npm run dev` - 開発サーバー起動
- `npm run build` - ビルド (client → production → script の3段階)
- `npm run preview` - Wrangler でローカルプレビュー
- `npm run deploy` - Cloudflare Pages へデプロイ
- `npm run lint` - ESLint チェック
- `npm run lint:fix` - ESLint 自動修正
- `npm run plop` - 記事の雛形を生成

## ディレクトリ構成

```
app/
├── routes/        # ファイルベースルーティング
├── posts/YYYYMM/  # ブログ記事 (MDX)
├── components/    # UIコンポーネント
├── layouts/       # レイアウト (Header, Footer 等)
├── libs/          # ユーティリティ (記事データ読み込み等)
├── utils/         # ヘルパー関数
├── server.ts      # サーバーエントリポイント
└── client.ts      # クライアントエントリポイント
public/            # 静的アセット (画像等)
```

## コーディング規約

- パスエイリアス: `@/*` → `./app/*`
- ESLint + Prettier 連携 (eslint-config-prettier)
- インポート順序は eslint-plugin-import で自動整理
- 未使用インポートは eslint-plugin-unused-imports で検出

## ブログ記事

- ファイル形式: MDX
- 配置先: `app/posts/YYYYMM/slug-name.mdx`
- 段落内の改行には末尾に半角スペース2つを付ける
- frontmatter:
  ```yaml
  title: 記事タイトル
  description: 記事の説明
  date: YYYY-MM-DD
  tags: [tag1, tag2]
  published: true
  ```

## 詳細ドキュメント

- [システム仕様](docs/system-spec.md) - ページ構成、URL マッピング、データフロー、記事フォーマット、ダークモード、レスポンシブ対応
- [システム構成](docs/architecture.md) - 技術スタック詳細、ビルドプロセス、SSG、MDX パイプライン、スタイリング、デプロイ
- [コンポーネントリファレンス](docs/components.md) - コンポーネント、レイアウト、ライブラリ、ユーティリティの Props と役割
