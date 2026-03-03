import DiamondStar from "./DiamondStar";

export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="card-wrapper">
      {/* Corner diamonds */}
      <div className="diamond top-left"><DiamondStar size={18} /></div>
      <div className="diamond top-right"><DiamondStar size={18} /></div>
      <div className="diamond bottom-left"><DiamondStar size={18} /></div>
      <div className="diamond bottom-right"><DiamondStar size={18} /></div>

      {/* Edge lines connecting diamonds */}
      <div className="edge-line edge-top" />
      <div className="edge-line edge-bottom" />
      <div className="edge-line edge-left" />
      <div className="edge-line edge-right" />

      {/* Inner card */}
      <div className="card-inner">
        {children}
      </div>
    </div>
  );
}
