# guccigu-blog

Honox + Hono ベースの個人ブログ。Cloudflare Pages にデプロイ。

## 技術スタック

- フレームワーク: [HonoX](https://github.com/honojs/honox) / [Hono](https://hono.dev)
- 言語: TypeScript
- スタイリング: Tailwind CSS 4
- コンテンツ: MDX (remark-frontmatter, rehype-pretty-code)
- ビルド: Vite
- デプロイ: Cloudflare Pages
- パッケージマネージャ: npm

## セットアップ

```bash
npm install
```

## 開発

```bash
npm run dev       # 開発サーバー起動
npm run build     # ビルド
npm run preview   # Wrangler でローカルプレビュー
npm run deploy    # Cloudflare Pages へデプロイ
npm run lint      # ESLint チェック
npm run lint:fix  # ESLint 自動修正
```

## 記事の追加

```bash
npm run plop
```

- 配置先: `app/posts/YYYYMM/slug-name.mdx`
- frontmatter:

  ```yaml
  title: 記事タイトル
  description: 記事の説明
  date: YYYY-MM-DD
  tags: [tag1, tag2]
  published: true
  ```

## ディレクトリ構成

```
app/
├── routes/         # ファイルベースルーティング
├── posts/YYYYMM/   # ブログ記事 (MDX)
├── components/     # UI コンポーネント
├── layouts/        # レイアウト (Header, Footer 等)
├── libs/           # ユーティリティ (記事データ読み込み等)
├── utils/          # ヘルパー関数
├── server.ts       # サーバーエントリポイント
└── client.ts       # クライアントエントリポイント
public/             # 静的アセット (画像等)
```
