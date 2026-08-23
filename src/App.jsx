import React, { useState, useMemo, useEffect } from "react";
import { projects, categories, stats, skills, REPO } from "./data/projects";

const LINKS = {
  github: "https://github.com/gopi-krishna-ai",
  email: "krishnagopi5600@gmail.com",
  phone: "8088337794",
  repo: REPO,
};

/* ------------------------------------------------------------------ */

function Reveal({ children, delay = 0 }) {
  const ref = React.useRef(null);

  // Start visible unless we can be sure the scroll-reveal will actually run.
  //
  // The animation is decoration; the content is the point. If IntersectionObserver
  // is missing, or the document is hidden at mount (background tab, prerender,
  // a frame that is not compositing), the observer never fires and gated content
  // would stay at opacity 0 forever — a blank page. Defaulting to visible means
  // the worst case is a missing fade, not missing content.
  const [shown, setShown] = useState(() => {
    if (typeof IntersectionObserver === "undefined") return true;
    if (typeof document !== "undefined" && document.visibilityState === "hidden") return true;
    return false;
  });

  useEffect(() => {
    const el = ref.current;
    if (!el || shown) return;

    const reveal = () => setShown(true);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);

    // Belt and braces: if the tab is backgrounded before the observer fires, or it
    // simply never fires, show the content anyway.
    const onHide = () => document.visibilityState === "hidden" && reveal();
    document.addEventListener("visibilitychange", onHide);
    const failsafe = setTimeout(reveal, 2500);

    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", onHide);
      clearTimeout(failsafe);
    };
  }, [shown]);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      {children}
    </div>
  );
}

function Section({ id, eyebrow, title, sub, children }) {
  return (
    <section id={id} className="max-w-6xl mx-auto px-6 py-20 scroll-mt-20">
      <Reveal>
        <p className="text-sm font-semibold tracking-[0.2em] uppercase text-cyan-400 mb-3">
          {eyebrow}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{title}</h2>
        {sub && <p className="text-slate-400 max-w-2xl leading-relaxed">{sub}</p>}
      </Reveal>
      <div className="mt-12">{children}</div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function ProjectCard({ p, delay }) {
  return (
    <Reveal delay={delay}>
      <a
        href={p.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-6
                   backdrop-blur transition-all duration-300 hover:-translate-y-1
                   hover:border-cyan-500/50 hover:bg-slate-900 hover:shadow-2xl hover:shadow-cyan-500/10"
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
              {p.name}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">{p.tag}</p>
          </div>
          {p.featured && (
            <span className="shrink-0 rounded-full bg-cyan-500/10 px-2.5 py-1 text-[10px]
                             font-bold uppercase tracking-wider text-cyan-400 border border-cyan-500/20">
              Featured
            </span>
          )}
        </div>

        <p className="mt-4 text-sm leading-relaxed text-slate-400">{p.blurb}</p>

        <div className="mt-5 rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3">
          <div className="text-xl font-bold text-cyan-400">{p.metric}</div>
          <div className="text-[11px] text-slate-500 mt-0.5">{p.metricNote}</div>
        </div>

        {p.highlight && (
          <p className="mt-4 border-l-2 border-amber-500/50 pl-3 text-xs italic leading-relaxed text-slate-400">
            {p.highlight}
          </p>
        )}

        <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
          {p.stack.map((s) => (
            <span
              key={s}
              className="rounded-md bg-slate-800/80 px-2 py-1 text-[11px] font-medium text-slate-300"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-cyan-400
                        opacity-0 transition-opacity group-hover:opacity-100">
          View source
          <span className="transition-transform group-hover:translate-x-0.5">→</span>
        </div>
      </a>
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */

export default function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const shown = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  const countFor = (id) =>
    id === "all" ? projects.length : projects.filter((p) => p.category === id).length;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans antialiased selection:bg-cyan-500/30">
      {/* ambient background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[30rem] w-[30rem] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute top-1/3 -left-40 h-[28rem] w-[28rem] rounded-full bg-indigo-500/10 blur-[120px]" />
      </div>

      {/* ---------------- nav ---------------- */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "border-b border-slate-800 bg-slate-950/85 backdrop-blur-lg" : ""
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br
                             from-cyan-400 to-indigo-500 text-sm font-black text-slate-950">
              GK
            </span>
            <span className="hidden font-bold text-white sm:inline">Gopi Krishna N</span>
          </a>
          {/* Links stay visible on mobile rather than collapsing into a hidden menu --
              an earlier version used `hidden md:flex`, which left phone visitors with
              no navigation at all. Only the GitHub button is dropped on small screens. */}
          <div className="flex items-center gap-4 text-xs font-medium text-slate-400 sm:gap-7 sm:text-sm">
            <a href="#about" className="transition-colors hover:text-cyan-400">About</a>
            <a href="#projects" className="transition-colors hover:text-cyan-400">Projects</a>
            <a href="#skills" className="hidden transition-colors hover:text-cyan-400 sm:inline">Skills</a>
            <a href="#contact" className="transition-colors hover:text-cyan-400">Contact</a>
            <a
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-lg border border-slate-700 px-4 py-2 text-white
                         transition-colors hover:border-cyan-500 hover:text-cyan-400 md:inline-block"
            >
              GitHub
            </a>
          </div>
        </nav>
      </header>

      {/* ---------------- hero ---------------- */}
      <section id="top" className="relative mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-800
                          bg-slate-900/60 px-4 py-1.5 text-xs font-medium text-slate-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Python Full Stack Developer Intern · Bengaluru
          </div>

          <h1 className="mt-7 text-4xl font-extrabold leading-[1.1] tracking-tight text-white md:text-6xl">
            I build machine learning
            <br />
            systems that{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              actually ship
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
            Twenty applied projects across machine learning, computer vision, NLP and full
            stack development — each trained on real public data, delivered as a working
            web application, and measured on held-out results rather than promises.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 px-7 py-3.5
                         font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all
                         hover:shadow-xl hover:shadow-cyan-500/40 hover:-translate-y-0.5"
            >
              View my work
            </a>
            <a
              href={LINKS.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-700 px-7 py-3.5 font-semibold text-white
                         transition-colors hover:border-cyan-500 hover:text-cyan-400"
            >
              Browse the code
            </a>
          </div>
        </Reveal>

        {/* stats */}
        <Reveal delay={150}>
          <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5 backdrop-blur"
              >
                <div className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text
                                text-3xl font-extrabold text-transparent">
                  {s.value}
                </div>
                <div className="mt-1 text-xs text-slate-500">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ---------------- about ---------------- */}
      <Section
        id="about"
        eyebrow="About"
        title="How I work"
        sub="I care more about whether a system holds up than whether the first number looks good."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <Reveal>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 h-full">
              <h3 className="font-bold text-white">Where I am now</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                Python Full Stack Developer Intern at{" "}
                <span className="text-slate-300">Pantech eLearning</span>, Jayanagar,
                Bengaluru. I studied at RR Institute of Technology, Bangalore.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                My aim is to work as an AI engineer, and I have been building toward that
                one project at a time.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 h-full">
              <h3 className="font-bold text-white">Test the data first</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                Before building anything, I check whether the dataset carries real signal.
                That habit saved a whole project once — the cricket data I was given turned
                out to be randomly generated, with a correlation of 0.014 between a
                player's past and future scores.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 h-full">
              <h3 className="font-bold text-white">Measure against a baseline</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                A score means nothing on its own. Six of these projects train several
                algorithms on the same split and report the ones that lost, and two check
                whether their confidence scores are actually honest.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={250}>
          <div className="mt-6 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6">
            <h3 className="font-bold text-white">The mistake I learned most from</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              My phishing detector scored <span className="text-white">95.5% F1</span> on
              held-out data. Then I tried it on{" "}
              <code className="rounded bg-slate-800 px-1.5 py-0.5 text-cyan-300">
                google.com
              </code>{" "}
              and it came back <span className="text-white">96.5% malicious</span>.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              In the training data, 91.7% of safe URLs had been stored without{" "}
              <code className="rounded bg-slate-800 px-1.5 py-0.5 text-cyan-300">http://</code>{" "}
              while 66.9% of malicious ones had it. The model had learned how somebody
              assembled a spreadsheet, not how phishing works. I fixed the features, the
              score dropped to <span className="text-white">90.3%</span> — and that lower
              number is the one I trust.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* ---------------- projects ---------------- */}
      <Section
        id="projects"
        eyebrow="Portfolio"
        title="Twenty projects, all measured"
        sub="Every figure below comes from a held-out test set. Click any card for the source, the dataset link and the full write-up."
      >
        <Reveal>
          <div className="mb-10 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setFilter(c.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                  filter === c.id
                    ? "bg-gradient-to-r from-cyan-500 to-indigo-500 text-white shadow-lg shadow-cyan-500/25"
                    : "border border-slate-800 bg-slate-900/50 text-slate-400 hover:border-slate-600 hover:text-white"
                }`}
              >
                {c.label}
                <span className="ml-2 opacity-60">{countFor(c.id)}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((p, i) => (
            <ProjectCard key={p.name} p={p} delay={Math.min(i, 5) * 60} />
          ))}
        </div>

        {/* earlier work */}
        <Reveal>
          <h3 className="mt-16 mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Earlier work
          </h3>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="max-w-xl">
                <h4 className="text-lg font-bold text-white">AI Resume Screening System</h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  Analyses resumes and suggests job matches using NLP. Built with Python,
                  Flask and scikit-learn, and deployed live.
                </p>
              </div>
              <div className="flex gap-3">
                <a
                  href="https://github.com/gofiiiiiii/ai-resume-screening-system"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-slate-700 px-5 py-2.5 text-sm font-semibold
                             text-white transition-colors hover:border-cyan-500 hover:text-cyan-400"
                >
                  GitHub
                </a>
                <a
                  href="https://ai-resume-screening-system-026r.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 px-5 py-2.5
                             text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
                >
                  Live demo
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ---------------- skills ---------------- */}
      <Section
        id="skills"
        eyebrow="Toolkit"
        title="What I build with"
        sub="Everything here I have used to ship something that runs, not just read about."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((g, i) => (
            <Reveal key={g.group} delay={i * 80}>
              <div className="h-full rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
                <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-cyan-400">
                  {g.group}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span
                      key={s}
                      className="rounded-lg bg-slate-800/80 px-3 py-1.5 text-sm text-slate-300
                                 transition-colors hover:bg-slate-700 hover:text-white"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------------- contact ---------------- */}
      <Section
        id="contact"
        eyebrow="Contact"
        title="Let's talk"
        sub="Open to AI and machine learning roles. The fastest way to reach me is email."
      >
        <Reveal>
          <div className="grid gap-4 sm:grid-cols-3">
            <a
              href={`mailto:${LINKS.email}`}
              className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-6
                         transition-all hover:-translate-y-1 hover:border-cyan-500/50"
            >
              <div className="text-2xl">✉️</div>
              <div className="mt-3 text-xs uppercase tracking-wider text-slate-500">Email</div>
              <div className="mt-1 break-all text-sm font-semibold text-white group-hover:text-cyan-400">
                {LINKS.email}
              </div>
            </a>
            <a
              href={`tel:+91${LINKS.phone}`}
              className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-6
                         transition-all hover:-translate-y-1 hover:border-cyan-500/50"
            >
              <div className="text-2xl">📞</div>
              <div className="mt-3 text-xs uppercase tracking-wider text-slate-500">Phone</div>
              <div className="mt-1 text-sm font-semibold text-white group-hover:text-cyan-400">
                {LINKS.phone}
              </div>
            </a>
            <a
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-6
                         transition-all hover:-translate-y-1 hover:border-cyan-500/50"
            >
              <div className="text-2xl">💻</div>
              <div className="mt-3 text-xs uppercase tracking-wider text-slate-500">GitHub</div>
              <div className="mt-1 text-sm font-semibold text-white group-hover:text-cyan-400">
                gopi-krishna-ai
              </div>
            </a>
          </div>
        </Reveal>
      </Section>

      {/* ---------------- footer ---------------- */}
      <footer className="border-t border-slate-800/80 py-10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6
                        text-sm text-slate-500">
          <span>© {new Date().getFullYear()} Gopi Krishna N</span>
          <a
            href={LINKS.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-cyan-400"
          >
            All 20 projects on GitHub →
          </a>
        </div>
      </footer>
    </div>
  );
}
