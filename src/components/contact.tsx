type ContactLink = {
  label: string
  display: string
  href: string
}

// TODO: Replace placeholder URLs with your actual links.
const links: ContactLink[] = [
  {
    label: 'GitHub',
    display: 'github.com/davidalves1',
    href: 'https://github.com/davidalves1',
  },
  {
    label: 'LinkedIn',
    display: 'linkedin.com/in/davidalves1', // TODO: replace with actual LinkedIn URL
    href: 'https://linkedin.com/in/davidalves1',
  },
  {
    label: 'Twitter',
    display: '@davidalves1', // TODO: replace with actual Twitter/X handle
    href: 'https://twitter.com/davidalves1',
  },
  {
    label: 'Email',
    display: 'hello@davidalves.com', // TODO: replace with actual email
    href: 'mailto:hello@davidalves.com',
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-24 pb-32 px-6 max-w-5xl mx-auto">
      <h2
        className="font-serif font-bold text-fg mb-4 leading-tight"
        style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)' }}
      >
        Contact
      </h2>
      <p className="font-sans text-base text-muted leading-[1.7] max-w-[65ch] mb-12">
        Open to interesting problems and good collaborations.
      </p>
      <ul className="space-y-4 list-none m-0 p-0">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              className="flex items-baseline gap-6 group w-fit"
            >
              <span className="font-sans text-xs text-muted tracking-[0.08em] uppercase w-16 shrink-0">
                {link.label}
              </span>
              <span className="font-sans text-base text-fg group-hover:text-accent transition-colors duration-150">
                {link.display}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
