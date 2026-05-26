## プロジェクト概要

Honox + Hono ベースの個人ブログ。Cloudflare Pages にデプロイ。

## コマンド

- `npm run dev` - 開発サーバー起動
- `npm run build` - ビルド (client → production → script の3段階)
- `npm run preview` - Wrangler でローカルプレビュー
- `npm run deploy` - Cloudflare Pages へデプロイ
- `npm run lint` - ESLint チェック
- `npm run lint:fix` - ESLint 自動修正
- `npm run plop` - 記事の雛形を生成

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
