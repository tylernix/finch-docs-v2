# Finch Docs v2

Finch Docs v2 is built using [Tailwind CSS](https://tailwindcss.com) and [Next.js](https://nextjs.org) and powered by [Markdoc](https://markdoc.dev/), the new open source Markdown-based authoring framework (which Stripe uses to power their own documentation website).

## Demo

Live demo -> <https://finch-docs-v2.vercel.app/>

![Finch Docs light version](/src/images/finch-docs-example-light.png)
![Finch Docs dark version](/src/images/finch-docs-example-dark.png)

## Getting started

To get started with this template, first install the npm dependencies:

```bash
npm install
cp .env.example .env.local
```

Next, run the development server:

```bash
npm run dev
```

Finally, open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## Customizing

You can start editing documents by modifying the files in the `/src/docs` folder. The site will auto-update locally as you edit these files.

### Creating a new document

1. Create a new .md file in the `src/pages/docs` folder
1. Update the navigation object in `src/components/Layout.jsx` with a link.

### Markdoc

Markdoc is a [Markdown-based](https://www.markdownguide.org/getting-started/) document format and a framework for content publishing. Markdoc adds a few extensions to the markdown syntax to enable a powerful way to extend the documentation with custom components. [Tags](https://markdoc.dev/docs/tags) are the main way of adding custom componets to a Markdoc document.

Markdoc comes with a few [built-in tags](https://markdoc.dev/docs/tags#built-in-tags), but Finch has created a few custom-defined tags. You can view them back going to `/markdoc/tags.js`. Once a tag has been defined (even using a custom React component), you can embed the tag in a regular markdown file by enclosing the tag with `{%` and `%}`.

### Custom Finch tags

Our custom tags are listed below:

```markdown
{% callout type="warning" title="Note" %}
  text
{% /callout %}
```

```markdown
{% tabs %}
{% tab label="Request" %}
{% /tab %}
{% tab label="Response" %}
{% /tab %}
{% /tabs %}
```

## OpenAPI

Our developer docs uses Stoplight.io/elements package to display our OpenAPI API Reference documentation. The URL to this OpenAPI specification is located in [https://github.com/Finch-API/finch-docs/tree/main/reference/employer](https://github.com/Finch-API/finch-docs/tree/main/reference/employer). This link needs to be updated in `src/pages/api-reference.jsx` and `src/components/layout.jsx` if this ever changes.

## Learn more

To learn more about the technologies used in this site template, see the following resources:

- [Tailwind CSS](https://tailwindcss.com/docs) - the official Tailwind CSS documentation
- [Next.js](https://nextjs.org/docs) - the official Next.js documentation
- [Headless UI](https://headlessui.dev) - the official Headless UI documentation
- [Markdoc](https://markdoc.dev) - the official Markdoc documentation
- [DocSearch](https://docsearch.algolia.com) - the official DocSearch documentation
