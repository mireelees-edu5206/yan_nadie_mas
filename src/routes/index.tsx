import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Para mi niña hermosa — E & Y" },
      { name: "description", content: "Una carta rompecabezas victoriana con una canción dedicada." },
      { property: "og:title", content: "Para mi niña hermosa" },
      { property: "og:description", content: "Carta plegada victoriana con la canción Nadie Más." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;700&family=Playfair+Display:ital,wght@0,500;1,500&family=Cormorant+Garamond:ital,wght@0,400;1,400&display=swap",
      },
    ],
  }),
  component: Index,
});

const LYRICS = [
  "Do you think about me?",
  "Dime qué está pasando, ¿no lo detestas?",
  "Durmiendo en la misma cama con la misma almohada y no te acercas",
  "Nubes de llanto, hay luna llena",
  "Y llevas la misma hoodie verde con la misma cara puesta",
  "Pero esa hoodie huele a mí",
  "Y yo sé lo que te hace sentir",
  "Lo mismo que siento",
  "Cuando te veo a ti, cuando te veo a ti",
  "",
  "Cuatro días sin hablar",
  "Sin decirte \"buenos días\" al despertar",
  "Eso me hace mal",
  "Porque eres tú, no quiero a nadie más",
  "Porque eres tú, no quiero a nadie más",
  "Porque eres tú, no quiero a nadie más",
  "Porque eres tú, no quiero a nadie más",
  "",
  "No quiero a nadie más",
  "Es que eres tú, no quiero a nadie más",
  "Bebé, bebé, bebé, bebé",
  "Es que eres tú, no quiero a nadie más",
  "Bebé, bebé, bebé, bebé",
  "Es que eres tú, no quiero a nadie más",
  "Bebé, bebé, bebé, bebé",
  "Es que eres tú, no quiero a nadie más",
  "Sí, no quiero a nadie más",
  "No, no, no",
  "",
  "No entiendo pa qué te haces la difícil",
  "Perdiéndote en tu cel otra vez",
  "Es evidente que tú no lo sabes",
  "Bebé, me tienes a tus pies",
  "De rodillas, mujer maravilla",
  "Me matas y luego regresas la vida",
  "Oscuro en el mundo, tú llegas y brillas",
  "Lo sé (lo sé), lo sé",
  "",
  "Que yo no quiero perderte, hago lo posible",
  "Alguien como tú, ey, nada debatible",
  "Camino descalzo, crímenes terribles",
  "Acabo con el mundo si tú me lo pides",
  "Tengo mis bancarias, gástatelo en ti, yeah",
  "Carolina Herrera, Gucci, Louis V, yeah",
  "Yo te quiero a ti, yeah",
  "Dije: \"yo te quiero a ti\", yeah",
  "",
  "Porque eres tú, no quiero a nadie más (nadie más, nadie más)",
  "Porque eres tú, no quiero a nadie más (nadie más, nadie más)",
  "Porque eres tú, no quiero a nadie más (nadie más, nadie más)",
  "Porque eres tú, no quiero a nadie más",
  "",
  "No quiero a nadie más",
  "Es que eres tú, no quiero a nadie más",
  "Bebé, bebé, bebé, bebé",
  "Es que eres tú, no quiero a nadie más",
  "Bebé, bebé, bebé, bebé",
  "Es que eres tú, no quiero a nadie más",
  "Bebé, bebé, bebé, bebé",
  "Es que eres tú, no quiero a nadie más",
  "Sí, no quiero a nadie más",
  "No, no, no",
  "No-no-no, no-no, no, no",
];

// Ornamental rose SVG (red ink style)
function Rose({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round">
      <circle cx="50" cy="50" r="4" />
      <path d="M50 46c-3-2-6-1-7 2s1 6 4 6 5-2 5-5" />
      <path d="M50 54c3 2 6 1 7-2s-1-6-4-6-5 2-5 5" />
      <path d="M46 50c-2 3-1 6 2 7s6-1 6-4-2-5-5-5" />
      <path d="M54 50c2-3 1-6-2-7s-6 1-6 4 2 5 5 5" />
      <path d="M42 42c-4-3-9-2-11 2s1 9 5 10" />
      <path d="M58 58c4 3 9 2 11-2s-1-9-5-10" />
      <path d="M58 42c4-3 9-2 11 2s-1 9-5 10" />
      <path d="M42 58c-4 3-9 2-11-2s1-9 5-10" />
      <path d="M50 38c-6-4-14-2-17 4M50 62c6 4 14 2 17-4M38 50c-4-6-2-14 4-17M62 50c4 6 2 14-4 17" />
      <path d="M30 30c-6 4-8 12-4 18M70 70c6-4 8-12 4-18M70 30c6 4 8 12 4 18M30 70c-6-4-8-12-4-18" />
      <path d="M20 50c-3 8 0 18 8 22M80 50c3-8 0-18-8-22" strokeOpacity=".7" />
      <path d="M25 25l-6-6M75 75l6 6M75 25l6-6M25 75l-6 6" strokeOpacity=".5" />
      <path d="M15 60c-4 2-6 6-4 10M85 40c4-2 6-6 4-10" strokeOpacity=".5" />
    </svg>
  );
}

function Flourish({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 40" className={className} fill="none" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round">
      <path d="M10 20 Q40 5 70 20 T130 20 T190 20" />
      <path d="M10 20 Q40 35 70 20" strokeOpacity=".6" />
      <path d="M130 20 Q160 35 190 20" strokeOpacity=".6" />
      <circle cx="100" cy="20" r="2" />
      <path d="M95 15 L100 10 L105 15 M95 25 L100 30 L105 25" />
      <path d="M40 12c-2-3-5-3-7 0M160 28c2 3 5 3 7 0" strokeOpacity=".7" />
    </svg>
  );
}

function Monogram({ letter, className = "" }: { letter: string; className?: string }) {
  return (
    <div className={`relative font-display italic select-none ${className}`}>
      <span className="relative z-10">{letter}</span>
      <svg viewBox="0 0 80 80" className="absolute inset-0 w-full h-full text-ink/70" fill="none" stroke="currentColor" strokeWidth="0.6">
        <path d="M40 8 C 18 8, 8 22, 8 40 S 18 72, 40 72 62 58, 72 40 62 8, 40 8" strokeDasharray="2 3" />
        <path d="M40 14 C 22 14, 14 26, 14 40 S 22 66, 40 66 66 54, 66 40 58 14, 40 14" strokeOpacity=".5" />
        <path d="M12 12 q4 -4 8 0 M68 12 q-4 -4 -8 0 M12 68 q4 4 8 0 M68 68 q-4 4 -8 0" />
      </svg>
    </div>
  );
}

// Heart cover SVG — entwined victorian hearts with E and Y
function HeartCover() {
  return (
    <svg viewBox="0 0 400 400" className="w-full h-full text-ink" fill="none" stroke="currentColor" strokeLinecap="round">
      {/* outer ornamental border */}
      <rect x="20" y="20" width="360" height="360" strokeWidth="0.6" strokeDasharray="3 4" />
      <rect x="30" y="30" width="340" height="340" strokeWidth="0.4" />

      {/* corner roses */}
      <g transform="translate(20 20) scale(0.6)"><use href="#mini-rose" /></g>
      <g transform="translate(330 20) scale(0.6)"><use href="#mini-rose" /></g>
      <g transform="translate(20 330) scale(0.6)"><use href="#mini-rose" /></g>
      <g transform="translate(330 330) scale(0.6)"><use href="#mini-rose" /></g>

      <defs>
        <symbol id="mini-rose" viewBox="0 0 80 80" overflowclip-path="none">
          <g fill="none" stroke="currentColor" strokeWidth="0.7">
            <circle cx="40" cy="40" r="3"/>
            <path d="M40 37c-3-2-7 0-7 4s4 6 7 4M40 43c3 2 7 0 7-4s-4-6-7-4"/>
            <path d="M37 40c-2-3 0-7 4-7s6 4 4 7M43 40c2 3 0 7-4 7s-6-4-4-7"/>
            <path d="M30 30c-5-2-12 2-12 9s7 12 13 10M50 50c5 2 12-2 12-9s-7-12-13-10"/>
            <path d="M50 30c5-2 12 2 12 9s-7 12-13 10M30 50c-5 2-12-2-12-9s7-12 13-10"/>
          </g>
        </symbol>
      </defs>

      {/* Two interlaced hearts */}
      <g strokeWidth="1.2">
        <path d="M200 130 C 160 80, 90 100, 110 170 C 125 220, 200 280, 200 280 C 200 280, 275 220, 290 170 C 310 100, 240 80, 200 130 Z" />
        {/* inner heart, rotated slightly to look entwined */}
        <path d="M200 150 C 170 110, 115 125, 130 180 C 142 220, 200 265, 200 265 C 200 265, 258 220, 270 180 C 285 125, 230 110, 200 150 Z" strokeOpacity=".8" />
        {/* filigree inside */}
        <path d="M200 170 q-20 10 -30 30 t 0 50" strokeOpacity=".6" strokeDasharray="1 3"/>
        <path d="M200 170 q20 10 30 30 t 0 50" strokeOpacity=".6" strokeDasharray="1 3"/>
        <path d="M150 160 q10 -10 25 -8 M250 160 q-10 -10 -25 -8" strokeOpacity=".7"/>
        <circle cx="200" cy="205" r="3"/>
        <circle cx="200" cy="205" r="8" strokeOpacity=".5"/>
      </g>

      {/* Initials E (top) and Y (bottom) on the heart */}
      <text x="200" y="115" textAnchor="middle" fontFamily="Playfair Display, serif" fontStyle="italic" fontSize="46" fill="currentColor" stroke="none">E</text>
      <text x="200" y="320" textAnchor="middle" fontFamily="Playfair Display, serif" fontStyle="italic" fontSize="46" fill="currentColor" stroke="none">Y</text>

      {/* ribbon */}
      <path d="M120 305 Q200 340 280 305" strokeWidth="1"/>
      <path d="M120 305 l-12 8 l 14 -2 z M280 305 l12 8 l -14 -2 z" strokeWidth="1"/>

      {/* hint */}
      <text x="200" y="370" textAnchor="middle" fontFamily="Dancing Script, cursive" fontSize="14" fill="currentColor" stroke="none" opacity="0.7">— toca para abrir —</text>
    </svg>
  );
}

function InnerOrnament({ corner }: { corner: "tl" | "tr" | "bl" | "br" }) {
  const rot = { tl: 0, tr: 90, br: 180, bl: 270 }[corner];
  return (
    <div className="absolute inset-0 pointer-events-none text-ink/80" style={{ transform: `rotate(${rot}deg)` }}>
      <Rose className="absolute top-3 left-3 w-20 h-20" />
      <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full" fill="none" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round">
        <path d="M5 5 L195 5 L195 195" strokeDasharray="2 3" opacity=".7"/>
        <path d="M10 10 L190 10 L190 190" opacity=".5"/>
        <path d="M40 10 q10 8 0 16 M70 10 q10 8 0 16 M100 10 q10 8 0 16 M130 10 q10 8 0 16 M160 10 q10 8 0 16" opacity=".6"/>
        <path d="M190 40 q-8 10 -16 0 M190 70 q-8 10 -16 0 M190 100 q-8 10 -16 0 M190 130 q-8 10 -16 0 M190 160 q-8 10 -16 0" opacity=".6"/>
      </svg>
    </div>
  );
}

function Index() {
  // Unfold stages: 0 closed heart, 1 outer flaps open, 2 fully open
  const [stage, setStage] = useState(0);
  const next = () => setStage((s) => Math.min(2, s + 1));
  const back = () => setStage((s) => Math.max(0, s - 1));

  return (
    <div className="min-h-screen w-full bg-night text-ink-soft overflow-x-hidden">
      {/* ambient backdrop */}
      <div className="pointer-events-none fixed inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(120,30,40,0.25), transparent 60%), radial-gradient(ellipse at bottom, rgba(40,20,30,0.5), transparent 60%)",
        }}
      />

      {/* Header */}
      <header className="relative z-10 mx-auto max-w-2xl px-5 pt-8 pb-4 text-center">
        <p className="font-display italic text-base sm:text-lg leading-relaxed text-rose-50/95">
          para mi niña hermosa, siempre, siempre te amaré, no se que vaya a pasar en el futuro con nosotros, si sigas en tu posición de no querer ya nada, no se si la cambies, no se si d vdd ya no sientas nada, o quizá si lo sientas, sientas algo por mi, quizá quieras tratas d convencerte de que no pero en el fondo quiza si, no lo sé, pero por ahora te dedico esta canción
        </p>
        <div className="mt-4 flex justify-center text-rose-200/60">
          <Flourish className="w-64 h-8" />
        </div>
      </header>

      {/* Stage area */}
      <main className="relative z-10 flex flex-col items-center justify-center px-4 pb-20">
        <div className="stage">
          {/* Closed Heart */}
          <button
            onClick={next}
            aria-label="Abrir la carta"
            className={`heart-cover ${stage >= 1 ? "opened" : ""}`}
          >
            <div className="paper relative w-full h-full p-4">
              <HeartCover />
            </div>
          </button>

          {/* Outer envelope (stage 1) — four diamond flaps that open to reveal inner */}
          <div className={`envelope ${stage >= 1 ? "show" : ""} ${stage >= 2 ? "opened" : ""}`}>
            {/* center hint */}
            {stage === 1 && (
              <button
                onClick={next}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 px-5 py-2 rounded-full bg-ink/80 text-paper font-script text-lg shadow-xl hover:scale-105 transition"
              >
                toca para abrir más
              </button>
            )}
            {(["t","r","b","l"] as const).map((side) => (
              <div key={side} className={`flap flap-${side}`}>
                <div className="paper w-full h-full relative flex items-center justify-center">
                  <div className="absolute inset-2 border border-ink/40" />
                  <div className="text-ink font-display italic text-5xl opacity-80">
                    {side === "t" || side === "l" ? "E" : "Y"}
                  </div>
                  <Rose className="absolute -bottom-2 -right-2 w-16 h-16 text-ink/70" />
                </div>
              </div>
            ))}
          </div>

          {/* Fully open letter (stage 2) */}
          <div className={`letter ${stage >= 2 ? "show" : ""}`}>
            <div className="paper relative w-full p-5 sm:p-8">
              {/* four inner triangle ornaments */}
              <InnerOrnament corner="tl" />
              <InnerOrnament corner="tr" />
              <InnerOrnament corner="bl" />
              <InnerOrnament corner="br" />

              {/* diagonal fold lines */}
              <svg className="absolute inset-0 w-full h-full text-ink/30 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="0.15" strokeDasharray="0.5 0.8"/>
                <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="0.15" strokeDasharray="0.5 0.8"/>
              </svg>

              {/* central content */}
              <div className="relative z-10 flex flex-col items-center text-ink">
                <div className="flex items-center gap-3">
                  <Monogram letter="E" className="text-4xl sm:text-5xl w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center" />
                  <span className="font-script text-2xl sm:text-3xl">&</span>
                  <Monogram letter="Y" className="text-4xl sm:text-5xl w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center" />
                </div>
                <h1 className="font-display italic text-2xl sm:text-3xl mt-2">Nadie Más</h1>
                <Flourish className="w-48 sm:w-56 h-5 mt-1 text-ink/70" />

                <div className="mt-3 w-full max-w-sm">
                  <audio controls className="w-full rounded-lg bg-paper-deep/40 border border-ink/30">
                    <source src="/nsqk - NADIE MÁS.mp3" type="audio/mpeg" />
                    Tu navegador no soporta audio.
                  </audio>
                </div>

                <div className="mt-4 h-[38vh] sm:h-[42vh] overflow-y-auto px-3 sm:px-6 w-full max-w-xl text-center font-serifx leading-snug text-[14px] sm:text-[15px] custom-scroll">
                  {LYRICS.map((line, i) =>
                    line === "" ? (
                      <div key={i} className="h-2" />
                    ) : (
                      <p key={i} className="my-0.5">{line}</p>
                    )
                  )}
                </div>

                <button onClick={back} className="mt-4 px-4 py-1.5 rounded-full border border-ink/50 text-[11px] sm:text-xs uppercase tracking-[0.3em] text-ink/80 hover:bg-ink hover:text-paper transition">
                  ✦ cerrar la carta ✦
                </button>
              </div>
            </div>
          </div>
        </div>

        {stage === 1 && (
          <button onClick={back} className="mt-6 text-xs uppercase tracking-[0.3em] text-ink-soft/60 hover:text-ink-soft transition">
            ← volver
          </button>
        )}
      </main>


      <style>{`
        :root { --paper: #f1e3c4; --paper-deep:#d9c397; --ink:#8a1c2b; --ink-soft:#e9d6b8; --night:#15090d; }
        .bg-night { background: radial-gradient(ellipse at center, #1d0c11 0%, #0a0508 100%); }
        .text-ink-soft { color: var(--ink-soft); }
        .text-ink { color: var(--ink); }
        .text-ink\\/30 { color: rgba(138,28,43,0.3); }
        .text-ink\\/40 { color: rgba(138,28,43,0.4); }
        .text-ink\\/60 { color: rgba(138,28,43,0.6); }
        .text-ink\\/70 { color: rgba(138,28,43,0.7); }
        .text-ink\\/80 { color: rgba(138,28,43,0.8); }
        .border-ink\\/30 { border-color: rgba(138,28,43,0.3); }
        .border-ink\\/40 { border-color: rgba(138,28,43,0.4); }
        .bg-ink\\/80 { background-color: rgba(138,28,43,0.9); }
        .text-paper { color: var(--paper); }
        .bg-paper-deep\\/40 { background-color: rgba(217,195,151,0.4); }
        .font-script { font-family: 'Dancing Script', cursive; }
        .font-display { font-family: 'Playfair Display', serif; }
        .font-serifx { font-family: 'Cormorant Garamond', serif; }

        .paper {
          background:
            radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.5), transparent 50%),
            radial-gradient(ellipse at 80% 90%, rgba(120,80,40,0.25), transparent 60%),
            repeating-linear-gradient(45deg, rgba(120,80,40,0.04) 0 2px, transparent 2px 5px),
            linear-gradient(180deg, #f3e6c8, #e6d2a4);
          box-shadow:
            inset 0 0 60px rgba(120,80,40,0.35),
            0 30px 60px -20px rgba(0,0,0,0.7);
          border-radius: 4px;
        }

        .stage {
          position: relative;
          width: min(92vw, 560px);
          height: min(92vw, 560px);
          perspective: 1800px;
          transform-style: preserve-3d;
        }

        /* Heart cover */
        .heart-cover {
          position: absolute; inset: 0;
          transform-style: preserve-3d;
          transition: transform 1s cubic-bezier(.7,.05,.2,1), opacity .6s ease .3s;
          cursor: pointer;
          z-index: 40;
        }
        .heart-cover.opened {
          transform: rotateX(180deg) scale(.6);
          opacity: 0;
          pointer-events: none;
        }

        /* Envelope flaps */
        .envelope {
          position: absolute; inset: 0;
          opacity: 0;
          transition: opacity .5s ease;
          pointer-events: none;
        }
        .envelope.show { opacity: 1; pointer-events: auto; }
        .envelope.opened { opacity: 0; pointer-events: none; transition: opacity .6s ease .6s; }

        .flap {
          position: absolute;
          width: 50%; height: 50%;
          transform-style: preserve-3d;
          backface-visibility: hidden;
          transition: transform 1.1s cubic-bezier(.7,.05,.2,1);
        }
        .flap-t { top: 0; left: 25%; transform-origin: bottom center; clip-path: polygon(50% 100%, 0 0, 100% 0); }
        .flap-b { bottom: 0; left: 25%; transform-origin: top center; clip-path: polygon(50% 0, 0 100%, 100% 100%); }
        .flap-l { left: 0; top: 25%; transform-origin: right center; clip-path: polygon(100% 50%, 0 0, 0 100%); }
        .flap-r { right: 0; top: 25%; transform-origin: left center; clip-path: polygon(0 50%, 100% 0, 100% 100%); }

        .envelope.show .flap-t { transform: rotateX(0deg); }
        .envelope.show .flap-b { transform: rotateX(0deg); }
        .envelope.show .flap-l { transform: rotateY(0deg); }
        .envelope.show .flap-r { transform: rotateY(0deg); }

        .envelope.opened .flap-t { transform: rotateX(-175deg); }
        .envelope.opened .flap-b { transform: rotateX(175deg); }
        .envelope.opened .flap-l { transform: rotateY(175deg); }
        .envelope.opened .flap-r { transform: rotateY(-175deg); }

        /* Open letter — overlays stage and sizes to content */
        .letter {
          position: absolute;
          top: 50%; left: 50%;
          width: min(94vw, 640px);
          transform: translate(-50%, -50%) scale(.55) rotateZ(-4deg);
          transform-origin: center center;
          opacity: 0;
          transition: opacity .7s ease, transform 1s cubic-bezier(.2,.7,.2,1.1);
          pointer-events: none;
          z-index: 5;
        }
        .letter.show {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1) rotateZ(0deg);
          pointer-events: auto;
          transition-delay: .9s;
        }


        .custom-scroll::-webkit-scrollbar { width: 6px; }
        .custom-scroll::-webkit-scrollbar-thumb { background: rgba(138,28,43,0.4); border-radius: 3px; }
        .custom-scroll::-webkit-scrollbar-track { background: transparent; }

        audio { color-scheme: light; filter: sepia(.5) hue-rotate(-20deg) saturate(.9); }
      `}</style>
    </div>
  );
}
