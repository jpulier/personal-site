import Card from "@/components/Card";
import MessageBox from "@/components/MessageBox";
import EyeIllustration from "@/components/EyeIllustration";
import ContactStrip from "@/components/ContactStrip";
import GrainOverlay from "@/components/GrainOverlay";

export default function Home() {
  return (
    <div className="site-container">
      <div className="bg-wrapper" aria-hidden="true">
        <div className="bg-layer bg-bands" />
        <div className="bg-layer bg-blobs" />
        <GrainOverlay />
      </div>

      <main className="main-content">
        <Card>
          <div className="card-top">
            <div className="card-left">
              <h1 className="site-heading">JAKE PULIER</h1>
              <MessageBox />
            </div>
            <div className="card-right">
              <EyeIllustration />
            </div>
          </div>
          <ContactStrip />
        </Card>
      </main>
    </div>
  );
}
