export default function ContactStrip() {
  return (
    <div className="contact-strip">
      <a
        href="https://www.instagram.com/pulyay/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
        aria-label="Instagram"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      </a>

      <a
        href="https://www.tiktok.com/@itspulyay_"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
        aria-label="TikTok"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
        </svg>
      </a>

      <a
        href="https://open.spotify.com/artist/01S3mAkOdHDp4L9qho7N6B?si=6MbJ4jSXTJ6qkNaWUcj2Bg"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
        aria-label="Spotify"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 15c2.5-1 5.5-1 8 0" />
          <path d="M7 12c3-1.5 7-1.5 10 0" />
          <path d="M6.5 9c3.5-2 8.5-2 11 0" />
        </svg>
      </a>
      <a
        href="https://www.linkedin.com/in/jakepulier/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
        aria-label="LinkedIn"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <path d="M8 11v5" />
          <path d="M8 8v.01" />
          <path d="M12 16v-5" />
          <path d="M16 16v-3a2 2 0 0 0-4 0" />
        </svg>
      </a>
    </div>
  );
}
