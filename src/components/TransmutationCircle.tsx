// A faint, original alchemy-style transmutation circle drawn behind the page.
// Coordinates are in a 200x200 viewBox centered on the origin.

const R_OUTER = 98.5;
const R_RING = 90;
const R_INNER = R_RING / 2; // inscribed circle of the fire triangle
const DIAL_R = 36;

// Latin inscriptions in the outer band, one per gap between the corner nodes
// (angles are degrees clockwise from the top).
const OUTER_TEXT = [
  { from: 12, to: 108, text: "AEQVA PERMVTATIO" }, // equivalent exchange
  { from: 132, to: 228, text: "NIHIL ACQVIRITVR NISI PRIVS AMITTITVR" }, // nothing is gained unless something is first lost
  { from: 252, to: 348, text: "VNVM EST OMNIA · OMNIA VNVM" }, // one is all, all is one
];
const INNER_TEXT = "SOLVE ET COAGVLA ✦ ".repeat(3); // dissolve and coagulate

function polar(r: number, deg: number) {
  const a = ((deg - 90) * Math.PI) / 180;
  return [r * Math.cos(a), r * Math.sin(a)];
}

// A diameter line at the given angle.
function diag(r: number, deg: number) {
  const [x1, y1] = polar(r, deg);
  const [x2, y2] = polar(r, deg + 180);
  return { x1, y1, x2, y2 };
}

function polygon(r: number, sides: number, rotate = 0) {
  return Array.from({ length: sides }, (_, i) => polar(r, rotate + (360 / sides) * i).join(",")).join(" ");
}

// An arc for text to run along. Arcs across the bottom run the other way so
// their text reads upright; glyphs then hang inward, so the radius moves out.
function textArc(from: number, to: number, r: number, glyphHeight: number) {
  const bottom = (from + to) / 2 > 90 && (from + to) / 2 < 270;
  if (!bottom) {
    const [x1, y1] = polar(r, from);
    const [x2, y2] = polar(r, to);
    return `M${x1},${y1} A${r},${r} 0 0,1 ${x2},${y2}`;
  }
  const rb = r + glyphHeight;
  const [x1, y1] = polar(rb, to);
  const [x2, y2] = polar(rb, from);
  return `M${x1},${y1} A${rb},${rb} 0 0,0 ${x2},${y2}`;
}

// Classical alchemical symbols tied to fire, placed at the triangle's corners.
const SYMBOLS = [
  // Fire: triangle up
  <polygon points="0,-5 4.5,3 -4.5,3" />,
  // Sulfur (combustion): triangle over a cross
  <g>
    <polygon points="0,-6 3.5,0 -3.5,0" />
    <line x1="0" y1="0" x2="0" y2="6" />
    <line x1="-2.5" y1="3" x2="2.5" y2="3" />
  </g>,
  // Sun: circle with dot
  <g>
    <circle r="4" />
    <circle r="0.8" fill="currentColor" />
  </g>,
];

export default function TransmutationCircle() {
  const nodes = SYMBOLS.map((symbol, i) => {
    const [x, y] = polar(R_RING, i * 120);
    return (
      <g key={i} transform={`translate(${x} ${y})`}>
        <circle r="10" fill="var(--bg)" />
        <circle r="8" />
        {symbol}
      </g>
    );
  });

  const innerTextR = R_INNER - 4.5;

  // A tick every 2°, longer every 10° and longest every 30°.
  const dialTicks = Array.from({ length: 180 }, (_, i) => {
    const deg = i * 2;
    const len = deg % 30 === 0 ? 4.5 : deg % 10 === 0 ? 2.8 : 1.4;
    const [x1, y1] = polar(DIAL_R, deg);
    const [x2, y2] = polar(DIAL_R - len, deg);
    return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
  });

  return (
    <svg className="transmutation-circle" viewBox="-100 -100 200 200" aria-hidden="true">
      <defs>
        {OUTER_TEXT.map((t, i) => (
          <path key={i} id={`tc-arc-${i}`} d={textArc(t.from, t.to, R_RING + 2.6, 3.2)} />
        ))}
        <path
          id="tc-inner"
          d={`M0,${-innerTextR} A${innerTextR},${innerTextR} 0 1,1 0,${innerTextR} A${innerTextR},${innerTextR} 0 1,1 0,${-innerTextR}`}
        />
      </defs>

      <g fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinejoin="round">
        <circle r={R_OUTER} />
        <circle r={R_RING} />

        {/* Fire triangle, with its inscribed circle */}
        <polygon points={polygon(R_RING, 3)} />
        <circle r={R_INNER} />
        <circle r={innerTextR - 1.5} />

        {/* Precise center markings: a degree dial, crosshairs, nested geometry */}
        <g strokeWidth="0.25">
          <circle r={DIAL_R} />
          {dialTicks}
          <circle r="26" />
          <circle r="25" strokeDasharray="0.4 0.9" />
          <polygon points={polygon(26, 3)} />
          <polygon points={polygon(26, 3, 180)} />
          <polygon points={polygon(13, 6, 30)} />
          <circle r="13" />
          <circle r="6.5" />
          <line x1="0" y1={-DIAL_R} x2="0" y2={DIAL_R} />
          <line x1={-DIAL_R} y1="0" x2={DIAL_R} y2="0" />
          <line {...diag(DIAL_R, 45)} />
          <line {...diag(DIAL_R, -45)} />
          <circle r="1.2" />
          <circle r="0.35" fill="currentColor" />
        </g>

        {nodes}
      </g>

      <g className="tc-text" fill="currentColor">
        {OUTER_TEXT.map((t, i) => (
          <text key={i} fontSize="4.4" letterSpacing="0.9">
            <textPath href={`#tc-arc-${i}`} startOffset="50%" textAnchor="middle">
              {t.text}
            </textPath>
          </text>
        ))}
        <text fontSize="3" letterSpacing="0.6">
          <textPath href="#tc-inner" textLength={2 * Math.PI * innerTextR - 2} lengthAdjust="spacing">
            {INNER_TEXT}
          </textPath>
        </text>
      </g>
    </svg>
  );
}
