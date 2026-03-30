import Image from "next/image";
import LastLogin from "@/components/LastLogin";
import HitCounter from "@/components/HitCounter";

export default function Home() {
  const navLinks = [
    { label: "Listen", href: "#listen" },
    { label: "Watch", href: "#watch" },
    { label: "About", href: "#about" },
    { label: "Shop", href: "#shop" },
  ];

  const nav = (
    <nav className="retro-nav">
      {navLinks.map((link) => (
        <a key={link.href} href={link.href}>
          {link.label}
        </a>
      ))}
    </nav>
  );

  const marqueeText =
    "\u2605 PULYAY \u2605 NEW MUSIC COMING SOON \u2605 PULYAY \u2605 NYC / LA \u2605 ";

  return (
    <>
      <div className="marquee">
        <div className="marquee-content">
          <span>{marqueeText}</span>
          <span>{marqueeText}</span>
        </div>
      </div>

      {nav}

      <div className="panel-grid">
        <section id="profile" className="panel panel-full">
          <div className="panel-header">Profile</div>
          <div className="panel-body">
            <div className="profile-layout">
              <div className="profile-photo-area">
                <Image
                  src="/portrait.jpg"
                  alt="PULYAY"
                  width={200}
                  height={200}
                  priority
                  className="profile-photo"
                />
                <div className="online-indicator">
                  <span className="online-dot" />
                  <span className="online-text">Online Now!</span>
                </div>
              </div>
              <div className="profile-info">
                <div className="profile-name">PULYAY</div>
                <hr className="profile-divider" />
                <div className="profile-detail">New York / Los Angeles</div>
                <div className="profile-detail">
                  <span className="profile-detail-label">last login: </span>
                  <LastLogin />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="listen" className="panel">
          <div className="panel-header">Music / Listen</div>
          <div className="panel-body">
            <div className="listen-embed">
              <iframe
                src="https://open.spotify.com/embed/artist/01S3mAkOdHDp4L9qho7N6B?utm_source=generator&theme=0"
                width="100%"
                height={352}
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
            <a
              href="https://open.spotify.com/artist/01S3mAkOdHDp4L9qho7N6B"
              target="_blank"
              rel="noopener noreferrer"
              className="retro-button"
            >
              OPEN IN SPOTIFY &rarr;
            </a>
          </div>
        </section>

        <section id="watch" className="panel">
          <div className="panel-header">Watch</div>
          <div className="panel-body">
            <div className="watch-embed">
              {/* TODO: replace with actual YouTube video ID */}
              <iframe
                src="https://www.youtube.com/embed/oDk8IeeiS4E"
                width="100%"
                height={300}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <a
              href="https://youtube.com/@pulyay"
              target="_blank"
              rel="noopener noreferrer"
              className="retro-button"
            >
              WATCH ON YOUTUBE &rarr;
            </a>
          </div>
        </section>

        <section id="about" className="panel">
          <div className="panel-header">About</div>
          <div className="panel-body">
            <div className="blurb-label">&lt;About me&gt;</div>
            <div className="blurb-text">
              <p>sensitive young man</p>
              <p>likes to eat sushi and make music</p>
              <p>of all varieties</p>
              <p>in nyc</p>
            </div>
          </div>
        </section>

        <section id="links" className="panel">
          <div className="panel-header">Links</div>
          <div className="panel-body">
            <div className="links-grid">
              <a href="https://open.spotify.com/artist/01S3mAkOdHDp4L9qho7N6B" target="_blank" rel="noopener noreferrer" className="link-box" aria-label="Spotify">Spotify</a>
              <a href="https://youtube.com/@pulyay" target="_blank" rel="noopener noreferrer" className="link-box" aria-label="YouTube">YouTube</a>
              <a href="https://www.instagram.com/pulyay/" target="_blank" rel="noopener noreferrer" className="link-box" aria-label="Instagram">Instagram</a>
              <a href="https://www.tiktok.com/@itspulyay_" target="_blank" rel="noopener noreferrer" className="link-box" aria-label="TikTok">TikTok</a>
            </div>
          </div>
        </section>

        <section id="shop" className="panel">
          <div className="panel-header">Shop</div>
          <div className="panel-body">
            <div className="shop-teaser">&#128284; MERCH COMING SOON</div>
            <p className="shop-subtle">stay tuned</p>
          </div>
        </section>
      </div>

      <HitCounter />

      {nav}
    </>
  );
}
