import { T, Var } from "gt-next";
import { tx, getGT } from "gt-next/server";
import { LocaleSelector } from "gt-next";

// Simulated dynamic data — imagine this comes from a database or API
const quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    category: "motivation",
  },
  {
    text: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein",
    category: "perseverance",
  },
  {
    text: "Simplicity is the ultimate sophistication.",
    author: "Leonardo da Vinci",
    category: "design",
  },
];

const notifications = [
  { message: "Your order has been shipped and is on its way.", timestamp: "2 hours ago" },
  { message: "A new security update is available for your account.", timestamp: "5 hours ago" },
  { message: "Your subscription will renew in three days.", timestamp: "1 day ago" },
];

const articles = [
  {
    title: "Understanding Server Components in Modern Web Development",
    summary:
      "Server components allow developers to render parts of the UI on the server, reducing bundle size and improving performance for end users.",
  },
  {
    title: "The Future of Real-Time Translation Technology",
    summary:
      "Advances in machine translation are making it possible to translate dynamic content on the fly, opening new doors for multilingual applications.",
  },
];

export default async function Home() {
  const gt = await getGT();

  // tx() for string-level runtime translation of dynamic content
  const translatedQuotes = await Promise.all(
    quotes.map(async (q) => ({
      text: await tx(q.text),
      author: q.author,
      category: await tx(q.category),
    }))
  );

  const translatedNotifications = await Promise.all(
    notifications.map(async (n) => ({
      message: await tx(n.message),
      timestamp: await tx(n.timestamp),
    }))
  );

  const translatedArticles = await Promise.all(
    articles.map(async (a) => ({
      title: await tx(a.title),
      summary: await tx(a.summary),
    }))
  );

  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-neutral-200">
      <header className="border-b border-neutral-800 bg-neutral-950">
        <div className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a
              href="https://generaltranslation.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-neutral-400 hover:text-neutral-200 transition-colors"
            >
              General Translation
            </a>
            <span className="text-neutral-700">/</span>
            <T>
              <h1 className="text-sm font-semibold text-neutral-100">
                Dynamic Content Translation
              </h1>
            </T>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/gt-examples/dynamic-content-tx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-neutral-200 transition-colors"
              aria-label="View on GitHub"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <LocaleSelector />
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12 space-y-16">
        {/* Intro */}
        <section>
          <T>
            <h2 className="text-2xl font-semibold text-neutral-100 mb-3">
              Runtime translation of dynamic content
            </h2>
            <p className="text-base text-neutral-400 max-w-xl leading-relaxed">
              This demo shows how to translate content that is not known at build
              time. Using <code className="text-neutral-300">{"<Tx>"}</code> and{" "}
              <code className="text-neutral-300">tx()</code>, dynamic strings
              from databases, APIs, or user input can be translated on the fly in
              server components.
            </p>
          </T>
        </section>

        {/* Section 1: Quotes translated with tx() */}
        <section>
          <T>
            <h3 className="text-lg font-semibold text-neutral-100 mb-2">
              Translated quotes
            </h3>
            <p className="text-sm text-neutral-500 mb-6">
              These quotes are defined as plain strings and translated at request
              time using <code className="text-neutral-400">tx()</code>.
            </p>
          </T>
          <div className="space-y-4">
            {translatedQuotes.map((q, i) => (
              <div
                key={i}
                className="border border-neutral-800 rounded-lg p-5 bg-neutral-900/50"
              >
                <p className="text-neutral-200 italic leading-relaxed mb-3">
                  &ldquo;{q.text}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-500">
                    &mdash; {q.author}
                  </span>
                  <span className="text-xs text-neutral-600 bg-neutral-800 px-2 py-1 rounded">
                    {q.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Notifications translated with tx() */}
        <section>
          <T>
            <h3 className="text-lg font-semibold text-neutral-100 mb-2">
              Translated notifications
            </h3>
            <p className="text-sm text-neutral-500 mb-6">
              Notification messages from a simulated backend, each translated
              individually with <code className="text-neutral-400">tx()</code>.
            </p>
          </T>
          <div className="space-y-3">
            {translatedNotifications.map((n, i) => (
              <div
                key={i}
                className="flex items-start gap-3 border border-neutral-800 rounded-lg p-4 bg-neutral-900/50"
              >
                <div className="w-2 h-2 mt-2 rounded-full bg-blue-500 shrink-0" />
                <div>
                  <p className="text-sm text-neutral-200">{n.message}</p>
                  <p className="text-xs text-neutral-600 mt-1">{n.timestamp}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Articles translated with tx() */}
        <section>
          <T>
            <h3 className="text-lg font-semibold text-neutral-100 mb-2">
              Translated articles
            </h3>
            <p className="text-sm text-neutral-500 mb-6">
              Article titles and summaries from a content source, translated at
              runtime using <code className="text-neutral-400">tx()</code>.
            </p>
          </T>
          <div className="space-y-4">
            {translatedArticles.map((a, i) => (
              <div
                key={i}
                className="border border-neutral-800 rounded-lg p-5 bg-neutral-900/50"
              >
                <h4 className="text-base font-medium text-neutral-100 mb-2">
                  {a.title}
                </h4>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {a.summary}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section>
          <T>
            <h3 className="text-lg font-semibold text-neutral-100 mb-4">
              How it works
            </h3>
            <div className="border border-neutral-800 rounded-lg p-5 bg-neutral-900/50 space-y-4">
              <div>
                <h4 className="text-sm font-medium text-neutral-200 mb-1">
                  tx() for strings
                </h4>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  The <code className="text-neutral-300">tx()</code> function
                  translates a plain string at runtime on the server. It accepts
                  any string value and returns the translated version for the
                  current locale.
                </p>
              </div>
              <div className="border-t border-neutral-800 pt-4">
                <h4 className="text-sm font-medium text-neutral-200 mb-1">
                  {"<Tx>"} for JSX
                </h4>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  The <code className="text-neutral-300">{"<Tx>"}</code>{" "}
                  component works like{" "}
                  <code className="text-neutral-300">{"<T>"}</code>, but
                  translates its children at runtime instead of at build time.
                  Use it when the content inside is dynamic or not known ahead of
                  time.
                </p>
              </div>
              <div className="border-t border-neutral-800 pt-4">
                <h4 className="text-sm font-medium text-neutral-200 mb-1">
                  When to use runtime translation
                </h4>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Use <code className="text-neutral-300">tx()</code> and{" "}
                  <code className="text-neutral-300">{"<Tx>"}</code> for content
                  that comes from external sources: databases, APIs, CMS
                  platforms, or user input. For static UI text known at build
                  time, prefer{" "}
                  <code className="text-neutral-300">{"<T>"}</code> and{" "}
                  <code className="text-neutral-300">getGT()</code> for better
                  performance.
                </p>
              </div>
            </div>
          </T>
        </section>
      </main>
    </div>
  );
}
