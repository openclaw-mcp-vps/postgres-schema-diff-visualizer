export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Database Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
          Visual Diff for<br />
          <span className="text-[#58a6ff]">Database Schema Changes</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Upload two PostgreSQL schema files and instantly see what changed — added tables, dropped columns, modified constraints — all color-coded and exportable.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Access — $12/mo
        </a>
        <div className="mt-10 bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-left font-mono text-sm">
          <div className="flex gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57] inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#febc2e] inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#28c840] inline-block"></span>
          </div>
          <div className="space-y-1">
            <p className="text-[#3fb950]">+ TABLE users (added)</p>
            <p className="text-[#3fb950]">+   id SERIAL PRIMARY KEY</p>
            <p className="text-[#3fb950]">+   email VARCHAR(255) NOT NULL</p>
            <p className="text-[#f85149]">- TABLE accounts (removed)</p>
            <p className="text-[#e3b341]">~ TABLE orders (modified)</p>
            <p className="text-[#e3b341]">~   status VARCHAR(50) → VARCHAR(100)</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$12</p>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited schema comparisons",
              "Color-coded visual diff view",
              "Export diff as PDF or HTML",
              "Support for pg_dump output",
              "Column & constraint diffing",
              "Priority email support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#3fb950] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "What file formats are supported?",
              a: "Any standard PostgreSQL schema file — plain SQL DDL scripts or output from pg_dump --schema-only. Just paste or upload the file."
            },
            {
              q: "Can I compare schemas from different Postgres versions?",
              a: "Yes. The parser handles syntax from Postgres 12 through 16, so cross-version comparisons work without any extra configuration."
            },
            {
              q: "How do I export the diff report?",
              a: "After the diff is generated you can download it as a self-contained HTML file or a PDF — great for sharing with your team or attaching to a PR."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-20 text-center text-[#484f58] text-xs">
        &copy; {new Date().getFullYear()} Postgres Schema Diff Visualizer. All rights reserved.
      </footer>
    </main>
  )
}
