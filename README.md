# Dynamic Content Translation

Translate runtime dynamic content using `tx()` and `<Tx>` from gt-next — for strings that aren't known at build time.

**[Live Demo](https://dynamic-content-tx.generaltranslation.dev)** | **[General Translation Docs](https://generaltranslation.com/docs)**

## About

This example demonstrates how to translate dynamic content at runtime using General Translation's `tx()` function and `<Tx>` component. It simulates data from databases or APIs — quotes, notifications, and articles — and translates them on the fly in Next.js server components.

## GT Features Used

- `tx()` — Runtime string translation for dynamic content
- `<T>` — Static JSX translation (for UI chrome)
- `getGT()` — Server-side string translations (metadata, aria labels)
- `<Var>` — Dynamic value interpolation
- `<LocaleSelector>` — Language picker
- `loadTranslations` — Local translation storage

## Getting Started

```bash
git clone https://github.com/gt-examples/dynamic-content-tx.git
cd dynamic-content-tx
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Built With

- [Next.js](https://nextjs.org)
- [General Translation](https://generaltranslation.com) (gt-next)
- [Tailwind CSS](https://tailwindcss.com)
