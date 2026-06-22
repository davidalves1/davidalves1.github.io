import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-canvas transition-colors duration-200 ${
        scrolled ? "border-b border-border" : ""
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <a
          href="/"
          className="font-sans font-medium text-sm text-fg hover:text-accent transition-colors duration-150 tracking-wide"
        >
          davidalves1
        </a>
        <ul className="flex items-center gap-8 list-none m-0 p-0">
          <li>
            <Link to="/" className="font-sans text-sm text-muted hover:text-fg transition-colors duration-150">
              Home
            </Link>
          </li>
          <li>
            <Link to="/blog" className="font-sans text-sm text-muted hover:text-fg transition-colors duration-150">
              Blog
            </Link>
          </li>
          <li>
            <a href="/#contact" className="font-sans text-sm text-muted hover:text-fg transition-colors duration-150">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
