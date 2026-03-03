export default function EyeIllustration() {
  const cx = 90;
  const cy = 110;
  const archTop = 10;
  const archBottom = 175;
  const archLeft = 20;
  const archRight = 160;

  // Generate ~16 radiating lines from eye center, only upper hemisphere
  const rays = Array.from({ length: 16 }).map((_, i) => {
    const angle = (i * (180 / 16) * Math.PI) / 180 + Math.PI; // spread across top half
    const innerR = 35;
    const outerR = i % 2 === 0 ? 65 : 52;
    return {
      x1: cx + Math.cos(angle) * innerR,
      y1: cy + Math.sin(angle) * innerR,
      x2: cx + Math.cos(angle) * outerR,
      y2: cy + Math.sin(angle) * outerR,
      midX: cx + Math.cos(angle) * (outerR * 0.6),
      midY: cy + Math.sin(angle) * (outerR * 0.6),
    };
  });

  // Dots between rays at ~60% radius
  const dots = Array.from({ length: 15 }).map((_, i) => {
    const angle1 = (i * (180 / 16) * Math.PI) / 180 + Math.PI;
    const angle2 = ((i + 1) * (180 / 16) * Math.PI) / 180 + Math.PI;
    const midAngle = (angle1 + angle2) / 2;
    const dotR = 38;
    return {
      cx: cx + Math.cos(midAngle) * dotR,
      cy: cy + Math.sin(midAngle) * dotR,
    };
  });

  return (
    <svg
      width="180"
      height="200"
      viewBox="0 0 180 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="eye-illustration"
    >
      <defs>
        {/* Clip path matching arch shape so rays stay inside */}
        <clipPath id="arch-clip">
          <path
            d={`M${archLeft} ${archBottom} V80 C${archLeft} 40 50 ${archTop} ${cx} ${archTop} C130 ${archTop} ${archRight} 40 ${archRight} 80 V${archBottom} Z`}
          />
        </clipPath>
      </defs>

      {/* Arch shape — closed at bottom with flat edge */}
      <path
        d={`M${archLeft} ${archBottom} V80 C${archLeft} 40 50 ${archTop} ${cx} ${archTop} C130 ${archTop} ${archRight} 40 ${archRight} 80 V${archBottom} Z`}
        stroke="black"
        strokeWidth="2"
        className="eye-arch-bg"
      />

      {/* Radiating lines clipped to arch */}
      <g clipPath="url(#arch-clip)">
        {rays.map((r, i) => (
          <line
            key={i}
            x1={r.x1}
            y1={r.y1}
            x2={r.x2}
            y2={r.y2}
            stroke="black"
            strokeWidth="1.5"
          />
        ))}
      </g>

      {/* Dots between rays */}
      <g clipPath="url(#arch-clip)">
        {dots.map((d, i) => (
          <circle key={`dot-${i}`} cx={d.cx} cy={d.cy} r="1.5" fill="black" />
        ))}
      </g>

      {/* Outer eye shape */}
      <ellipse cx={cx} cy={cy} rx="32" ry="18" stroke="black" strokeWidth="2" fill="none" />

      {/* Inner iris */}
      <circle cx={cx} cy={cy} r="12" stroke="black" strokeWidth="2" fill="none" />

      {/* Pupil */}
      <circle cx={cx} cy={cy} r="5" fill="black" />

      {/* Pupil highlight */}
      <circle cx={cx - 2} cy={cy - 2} r="1.5" fill="white" />

      {/* Eyelid for blink animation */}
      <ellipse
        cx={cx}
        cy={cy + 3}
        rx="33"
        ry="15"
        className="eye-eyelid"
      />

      {/* Top decoration — plant/leaf motif */}
      {/* Central stem */}
      <line x1="90" y1="22" x2="90" y2="55" stroke="black" strokeWidth="1.2" />
      {/* Left branches */}
      <line x1="90" y1="32" x2="78" y2="26" stroke="black" strokeWidth="1" />
      <line x1="90" y1="40" x2="75" y2="35" stroke="black" strokeWidth="1" />
      <line x1="90" y1="48" x2="78" y2="44" stroke="black" strokeWidth="1" />
      {/* Right branches */}
      <line x1="90" y1="32" x2="102" y2="26" stroke="black" strokeWidth="1" />
      <line x1="90" y1="40" x2="105" y2="35" stroke="black" strokeWidth="1" />
      <line x1="90" y1="48" x2="102" y2="44" stroke="black" strokeWidth="1" />

      {/* Bottom horizontal lines */}
      <line x1="35" y1="155" x2="145" y2="155" stroke="black" strokeWidth="0.8" />
      <line x1="45" y1="163" x2="135" y2="163" stroke="black" strokeWidth="0.6" />
    </svg>
  );
}
