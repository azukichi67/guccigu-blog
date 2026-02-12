# コンポーネントリファレンス

## UI コンポーネント (`app/components/`)

### ArticleCard

**ファイル:** `app/components/ArticleCard.tsx`

記事カードを1件表示するコンポーネント。

```typescript
type Props = {
  article: Post;
};
```

- タグ一覧: `article.tags` をカンマで split し、`#` 付きバッジとして表示（緑系配色）
- 日付: `article.date` をそのまま表示
- タイトル: `<h2>` で表示（`text-xl md:text-2xl`）
- ホバー時に `text-gray-500` に変化

### ArticleCardList

**ファイル:** `app/components/ArticleCardList.tsx`

記事カードのリストを表示するコンポーネント。

```typescript
type Props = {
  articles: Post[];
};
```

- `remeda` の `sortBy` で日付降順にソート
- 各記事を `<a href="/posts/{slug}">` でラップした `<li>` として描画
- 中央揃えレイアウト

### Title

**ファイル:** `app/components/Title.tsx`

セクションタイトルを表示するコンポーネント。

```typescript
type Props = PropsWithChildren; // hono/jsx
```

- `<h2>` 要素、Alfa Slab One フォント
- 背景色: `bg-slate-300`（ライト）/ `dark:bg-slate-600`（ダーク）
- `rounded-3xl` の角丸スタイル
- `cn()` ユーティリティでクラスを結合

## レイアウトコンポーネント (`app/layouts/`)

### Header

**ファイル:** `app/layouts/$Header.tsx`

サイトヘッダー。ナビゲーションとテーマ切替を含む。

- **ロゴ**: プロフィール画像 (`/images/icon.jpg`) + サイト名 "guccigu blog"（`/` へのリンク）
- **ナビリンク**: Top (`/`), Blog (`/posts`), About (`/about`)
- **モバイル**: `useState` でハンバーガーメニューの開閉を管理。`backdrop-blur-md` 付きオーバーレイ表示
- **デスクトップ**: インラインナビゲーション、`md:sticky` でスティッキーヘッダー
- **子コンポーネント**: HamburgerMenu, ThemeButton

### HamburgerMenu

**ファイル:** `app/layouts/$HamburgerMenu.tsx`

モバイル用ハンバーガーメニューボタン。

```typescript
type Props = {
  onClick: () => void;
  isMenuOpen: boolean;
};
```

- `md:hidden` でデスクトップでは非表示
- SVG アイコン: 閉じ状態は3本線、開き状態は X マーク

### ThemeButton

**ファイル:** `app/layouts/$ThemeButton.tsx`

ダークモード切替ボタン。

- `useState<boolean | null>(null)` でハイドレーションミスマッチを回避（初期値 `null` 時は空 `<div>` を返す）
- `useEffect` で初回マウント時に localStorage / システム設定からテーマを検出
- クリックで `document.documentElement` の `dark` クラスをトグルし、`localStorage.theme` に保存
- SVG アイコン: ライトモードは太陽、ダークモードは月

### Footer

**ファイル:** `app/layouts/Footer.tsx`

フッター。コピーライト表示のみ。

- 表示: "© 2025 guccigu blog. All rights reserved."
- 中央揃え、上部マージン付き

## ライブラリ (`app/libs/`)

### posts.ts

**ファイル:** `app/libs/posts.ts`

ブログ記事のデータ管理モジュール。

#### エクスポート

| 名前 | 型 | 説明 |
|------|-----|------|
| `posts` | `Post[]` | 全公開記事の配列（日付降順） |
| `getPosts()` | `() => Post[]` | `posts` を返す |
| `getPost(slug)` | `(slug: string) => Post` | スラッグで記事を検索。見つからなければ `throw Error` |

#### 内部処理

1. `import.meta.glob("../posts/**/*.mdx", { eager: true })` で全 MDX ファイルを読み込み
2. `published: true` の記事のみフィルタ
3. ファイルパスから `slugFrom()` でスラッグを抽出（正規表現: `/(?<=[0-9]\/).+(?=\.mdx)/`）
4. `remeda` の `sortBy` で日付降順ソート

## ユーティリティ (`app/utils/`)

### tailwind.util.ts

**ファイル:** `app/utils/tailwind.util.ts`

Tailwind CSS クラス結合ユーティリティ。

| 関数 | 説明 |
|------|------|
| `cn(...inputs: ClassValue[])` | `clsx` + `twMerge` で Tailwind クラスを安全に結合 |
| `sm(...inputs: string[])` | 各入力に `sm:` プレフィックスを付与してマージ |
| `md(...inputs: string[])` | 各入力に `md:` プレフィックスを付与してマージ |
