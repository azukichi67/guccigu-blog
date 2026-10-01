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

**注意**: Write ツールは末尾の空白を除去することがある。MDX ファイルを Write で書き出した後、必ず Bash の `sed` コマンドで段落内改行が必要な行に末尾スペース2つを追加すること。

手順:
1. Write ツールで MDX ファイルを作成する
2. 段落内で改行している行（次の行と空行を挟まずに続く文章行）を特定する
3. `sed -i -e 'Ns/$/  /' <file>` で該当行に末尾スペース2つを追加する（N は行番号）
4. `grep -n '  $' <file>` で正しく追加されたことを確認する

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

## 文体・記事構成

`writing-style` スキルに従う。
