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

Finally, open [http://localhost:3000](http://localhost:3000) in your browser to view the developer documentation.

## Writing docs

### No "users"

When writing documentation, let’s avoid using the term “user” when referring to different types of people. This also applies to our documentation.

Finch’s customer → “Developer”

A Developer’s customer → “Customer” (or sometimes “Employer”)

A Developer’s customer’s customer → “Employer”

Finch’s frontend component that connects an employer’s provider with a developer → “Finch Connect”

An employer’s HRIS, Payroll, or Application Tracking systems → “Provider”

### No "ACNYMS"

Avoid using acronyms in documentation. The time they "save" does not justify the exclusion someone feels when they don't understand an acronym.

### Random

Avoid using sentences that use "refer to [here](link)" in documentation.

- Bad: "Your customer needs to go through Finch Connect again to reconnect their employment system if their initial connection has gone stale. You can read more [here](link)."
- Good: "Your customer needs to go through Finch Connect again to [reconnect their provider](link) if their initial connection has gone stale."

## Customizing docs

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
{% figure src="/images/image.png" alt="description of image" / %}
```

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

Since this website uses the [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin) plugin for styling markdown articles, if a custom tag (like `src/components/Provider-Compatibility.jsx`) is embedded into an article, but has custom styling, add the [not-prose](https://tailwindcss.com/docs/typography-plugin#undoing-typography-styles) css style to undue typography styles.

> We should probably start [validating Markdoc](https://markdoc.dev/docs/validation) tag syntax.

## OpenAPI

Our developer docs uses Stoplight.io/elements package to display our OpenAPI API Reference documentation. The URL to this OpenAPI specification is located in [https://github.com/Finch-API/finch-docs/tree/main/reference/employer](https://github.com/Finch-API/finch-docs/tree/main/reference/employer). This link needs to be updated in `src/pages/api-reference.jsx` and `src/components/layout.jsx` if this ever changes.

## Learn more

To learn more about the technologies used in this site template, see the following resources:

- [Tailwind CSS](https://tailwindcss.com/docs) - the official Tailwind CSS documentation
- [Next.js](https://nextjs.org/docs) - the official Next.js documentation
- [Headless UI](https://headlessui.dev) - the official Headless UI documentation
- [Markdoc](https://markdoc.dev) - the official Markdoc documentation
- [DocSearch](https://docsearch.algolia.com) - the official DocSearch documentation
