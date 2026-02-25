---
name: tech-blog-writer
description: Create and write technical blog posts in MDX format for a Honox-based blog. Use when the user asks to write a blog post, create a new article, draft a tech blog entry, or requests content about a specific technical topic for their blog. Triggers include phrases like "ブログ記事を書いて", "記事を作って", "○○について記事を書いて", "新しいポストを作って", or any request to produce blog content on a technical subject.
---

# Tech Blog Writer

Create technical blog posts as MDX files with proper frontmatter, conventions, and writing style.

## Workflow

### 1. Gather Requirements

Confirm with the user:
- **Topic**: What technical subject to cover
- **Slug**: kebab-case filename (e.g., `nextjs-app-router`)
- **Tags**: Comma-separated, no spaces (default: `"dev"`)

### 2. Create the MDX File

Run `npm run plop` to scaffold the file, or create it directly at:

```
app/posts/YYYYMM/slug-name.mdx
```

where `YYYYMM` is the current year-month (e.g., `202602`).

### 3. Write the Article

Read [references/blog-conventions.md](references/blog-conventions.md) for the full conventions reference before writing. Key rules:

- **Frontmatter**: `date` uses `/` separator (`2026/02/16`), `tags` comma-separated no spaces
- **Section headings**: Use `## ■ セクションタイトル` format
- **Code blocks**: Include `title`, `showLineNumbers`, and line highlighting (`{4}` or `{2-4}`) where appropriate
- **Line breaks**: IMPORTANT - Add two trailing spaces at the end of lines for soft breaks within paragraphs. The Write tool strips trailing whitespace, so after writing the MDX file, use `sed -i -e 'Ns/$/  /' <file>` (where N is the line number) to add trailing spaces to all paragraph-internal lines, then verify with `grep -n '  $' <file>`
- **No tables**: Do NOT use markdown table syntax (`| ... |`). Use bullet points instead
- **Tone**: Casual first-person Japanese, technical terms in English, short paragraphs
- **Structure**: Introduction → `## ■` sections with code examples → closing thoughts

### 4. Review with User

Present the draft and iterate based on feedback. Check:
- Technical accuracy of code examples
- Appropriate `description` for SEO
- Tags reflect the content
