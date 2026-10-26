import { Linkedin, Twitter } from "lucide-react";

type ShareButtonsProps = {
  title: string;
  excerpt: string;
  url: string;
};

export function ShareButtons({ title, excerpt, url }: ShareButtonsProps) {
  // Suggested base text — pre-fills each platform's composer, editable by the reader.
  const shareText = `${title}\n\n${excerpt}`;

  const twitterHref = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    shareText,
  )}&url=${encodeURIComponent(url)}`;

  // The legacy share-offsite endpoint ignores custom text, so we open LinkedIn's
  // feed composer pre-filled with the suggestion. The pasted URL expands to a rich
  // preview via the post's OG tags.
  const linkedInHref = `https://www.linkedin.com/feed/?shareActive=true&text=${encodeURIComponent(
    `${shareText}\n\n${url}`,
  )}`;

  return (
    <div className="flex items-center gap-4">
      <span className="font-sans text-xs text-muted tracking-[0.08em] uppercase">
        Share
      </span>
      <a
        href={linkedInHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        className="text-muted hover:text-fg transition-colors duration-150"
      >
        <Linkedin className="h-4 w-4" />
      </a>
      <a
        href={twitterHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X"
        className="text-muted hover:text-fg transition-colors duration-150"
      >
        <Twitter className="h-4 w-4" />
      </a>
    </div>
  );
}
