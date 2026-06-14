export function Work() {
  return (
    <section id="work" className="py-24 px-6 max-w-5xl mx-auto">
      <h2
        className="font-serif font-bold text-fg mb-8 leading-tight"
        style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)' }}
      >
        Work
      </h2>
      <p className="font-sans text-base text-muted leading-[1.7] max-w-[65ch] mb-8">
        {/* TODO: update this description with your own words */}
        I build precise, fast software. From web apps to developer tools, I care about
        code that holds up and interfaces that get out of the way.
      </p>
      <a
        href="https://github.com/davidalves1"
        target="_blank"
        rel="noopener noreferrer"
        className="font-sans text-base text-muted hover:text-accent transition-colors duration-150"
      >
        → github.com/davidalves1
      </a>
    </section>
  )
}
