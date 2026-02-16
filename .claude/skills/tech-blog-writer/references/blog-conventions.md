# ブログ記事規約リファレンス

## Frontmatter スキーマ

```yaml
title: "記事タイトル"
description: "記事の説明（SEO用、1-2文）"
date: "YYYY/MM/DD"
tags: "tag1,tag2"
published: true
```

- `date`: スラッシュ区切り（例: `2026/02/16`）
- `tags`: カンマ区切り、スペースなし（例: `"dev,honox,tailwind"`）
- `published`: `false` でビルドから除外（下書き管理用）

## ファイル配置

- パス: `app/posts/YYYYMM/slug-name.mdx`
- ディレクトリ: `YYYYMM`（例: `202602`）
- ファイル名: kebab-case（例: `nextjs-app-router.mdx`）
- 新規作成コマンド: `npm run plop`（タイトルとslugを対話入力）

## MDX 記法

### 見出し

セクション見出しには `## ■` を使う:

```markdown
## ■ セクションタイトル
```

### コードブロック

属性を活用する:

````markdown
```typescript title="app/server.ts" showLineNumbers
// コード
```

```typescript {4} title="example.ts" showLineNumbers
// 4行目がハイライトされる
```

```typescript {2-4} title="example.ts"
// 2-4行目がハイライトされる
```
````

### 段落内改行

段落内で改行する場合、行末に半角スペース2つを付ける。

**重要**: MDX では行末に半角スペース2つを付けることで、段落内で改行できる。
複数の文を同じ段落にまとめる場合は必ず行末にスペース2つを付けること。

### 表（テーブル）

**markdown の表形式（`| ... |`）は使用できない。** 代わりに箇条書きを使う：

```markdown
❌ 使用不可：
| 項目 | 値 |
|---|---|
| A | 1 |

✅ 使用可：
- **項目A**: 値1
- **項目B**: 値2
```

### リンク

```markdown
[リンクテキスト](https://example.com)
```

## 文体ガイドライン

- 一人称視点（「自分は」「やってみました」）
- カジュアルだが技術的に正確
- 日本語ベース、フレームワーク名・技術用語は英語のまま
- 短い段落で区切る
- 公式ドキュメントや関連記事へのリンクを含める
- 締めに感想や今後の展望を入れる

## 記事構成パターン

1. **導入** - 何について書くか、動機や背景を簡潔に
2. **セクション（`## ■`）** - 技術的な内容を順を追って説明
3. **コード例** - title・行ハイライト・showLineNumbers を活用
4. **まとめ** - 感想、ハマったポイント、今後の展望
