# システム仕様

## ページ構成

| URL | ルートファイル | 説明 |
|-----|--------------|------|
| `/` | `app/routes/index.tsx` | トップページ。全記事を日付降順で一覧表示 |
| `/posts` | `app/routes/posts.tsx` | ブログ記事一覧。トップページと同じ記事リストを表示 |
| `/posts/[slug]` | `app/routes/posts/[slug].tsx` | 個別記事ページ。SSG で全記事の静的ページを生成 |
| `/about` | `app/routes/about.tsx` | About ページ（現在「準備中」） |

### 特殊ルート

| ファイル | 役割 |
|---------|------|
| `app/routes/_renderer.tsx` | 全ページ共通の HTML テンプレート。`<html lang="ja">` でラップし、Header / Footer を含む |
| `app/routes/_error.tsx` | 500 エラーハンドラ。HTTPException はそのレスポンスを返し、それ以外は "Internal Server Error" を表示 |
| `app/routes/_404.tsx` | 404 ハンドラ。"404 Not Found" を表示 |

## 共通レイアウト (_renderer.tsx)

全ページに適用される HTML 構造:

```
<html lang="ja">
  <head>
    - charset, title, description, viewport, favicon
    - set-theme.js（本番）/ set-theme.ts（開発） ← ダークモードフラッシュ防止
    - client.ts ← クライアントサイドハイドレーション
    - style.css ← グローバルスタイル
  </head>
  <body class="max-w-7xl px-5 md:px-20 mx-auto">
    <Header />   ← ナビゲーション、テーマ切替、ハンバーガーメニュー
    {children}   ← ページコンテンツ
    <Footer />   ← コピーライト
  </body>
</html>
```

## 記事データフロー

```
MDX ファイル (app/posts/YYYYMM/*.mdx)
  ↓ Vite import.meta.glob（eager: true）
app/libs/posts.ts
  ↓ frontmatter 抽出 → published: true のみフィルタ → 日付降順ソート
getPosts() / getPost(slug)
  ↓
ルートハンドラ (index.tsx, posts.tsx, posts/[slug].tsx)
  ↓
コンポーネント (ArticleCardList → ArticleCard / MDX レンダリング)
```

### slug 生成ルール

ファイルパスから正規表現 `/(?<=[0-9]\/).+(?=\.mdx)/` で抽出する。

- 例: `../posts/202502/create-blog-by-honox.mdx` → slug: `create-blog-by-honox`
- URL: `/posts/create-blog-by-honox`

### SSG での動的ルート生成

`posts/[slug].tsx` では `ssgParams()` を使い、ビルド時に全記事のスラッグを列挙して静的 HTML を生成する。ランタイムでの API 呼び出しは行わない。

## 記事フォーマット

- ファイル形式: MDX
- 配置先: `app/posts/YYYYMM/slug-name.mdx`
- 段落内の改行には末尾に半角スペース2つを付ける

### frontmatter

```yaml
title: "記事タイトル"
description: "記事の説明"
date: "YYYY/MM/DD"
tags: "tag1,tag2"      # カンマ区切り文字列
published: true         # false の記事はビルド対象外
```

### Post 型

```typescript
type Formatter = {
  title: string;
  description: string;
  date: string;
  tags: string;          // カンマ区切り
  published: boolean;
};

type Post = Formatter & {
  path: string;
  slug: string;
  getElement: () => JSX.Element;
};
```

## ダークモード

- 方式: Tailwind CSS の `class` 戦略（`<html>` 要素の `dark` クラスで切替）
- 永続化: `localStorage.theme` に `"dark"` / `"light"` を保存
- フラッシュ防止: `set-theme.ts` を `<head>` 内で同期実行し、ハイドレーション前にテーマを適用
- フォールバック: localStorage に値がなければ `prefers-color-scheme: dark` を参照
- UI: ThemeButton コンポーネントで太陽/月アイコンを切替

## レスポンシブデザイン

- モバイルファースト（`md:` ブレークポイントでデスクトップ対応）
- モバイル: ハンバーガーメニュー（`backdrop-blur-md` 付きオーバーレイ）
- デスクトップ: インラインナビゲーション、スティッキーヘッダー
- コンテナ: `max-w-7xl` に `px-5 md:px-20` のパディング

## ナビゲーション

Header コンポーネントが提供するリンク:

- **Top** (`/`) — トップページ
- **Blog** (`/posts`) — 記事一覧
- **About** (`/about`) — About ページ

ロゴ（プロフィール画像 + サイト名）はトップページへのリンク。
