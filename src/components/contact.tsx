type ContactLink = {
  label: string;
  display: string;
  href: string;
};

const links: ContactLink[] = [
  {
    label: "GitHub",
    display: "github.com/davidalves1",
    href: "https://github.com/davidalves1",
  },
  {
    label: "LinkedIn",
    display: "linkedin.com/in/davidalves1",
    href: "https://linkedin.com/in/davidalves1",
  },
  {
    label: "Twitter",
    display: "@davida1ves",
    href: "https://twitter.com/davida1ves",
  },
  {
    label: "Email",
    display: "hello@davidalves1.com",
    href: "mailto:hello@davidalves1.com",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 pb-32 px-6 max-w-5xl mx-auto">
      <h2
        className="font-serif font-bold text-fg mb-4 leading-tight"
        style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)" }}
      >
        Contact
      </h2>
      <ul className="space-y-4 list-none m-0 p-0">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
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
  );
}
