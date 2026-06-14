export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[90dvh] flex flex-col px-6 pt-14 max-w-5xl mx-auto"
    >
      <div className="flex-1 flex flex-col justify-center">
        <p className="font-sans text-xs font-medium tracking-[0.12em] uppercase text-muted mb-6">
          Senior Software Engineer
        </p>
        <h1
          className="font-serif font-bold text-fg leading-[0.92]"
          style={{ fontSize: "clamp(3.5rem, 8vw, 6rem)" }}
        >
          David
          <br />
          Alves
        </h1>
        <hr className="border-0 border-t border-border mt-8" />
        <p className="font-sans text-base text-muted leading-[1.7] max-w-[65ch] mt-8">
          Senior Software Engineer with more than 10 years of experience
          delivering scalable web applications used by millions of users. I
          focus on building reliable front-end architectures that balance
          performance, maintainability, and product goals. I actively develop
          with TypeScript, Node.js, Vue.js, React and Next.js. I raise
          engineering quality by defining standards, improving testing and
          delivery pipelines, and mentoring engineers to increase team
          effectiveness.
        </p>
      </div>

      <div
        className="py-10 text-muted text-sm font-sans select-none"
        aria-hidden
      >
        ↓
      </div>
    </section>
  );
}
