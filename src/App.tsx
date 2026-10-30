import { useState } from "react";
import designStudioLogo from "./assets/design-studio-logo.png";
import hiresLogo from "./assets/hires-logo.png";
import previousHiresCommunity from "./assets/history/hires-1.jpg";
import previousHiresAudience from "./assets/history/hires-3.jpg";
import previousHiresEntrance from "./assets/history/hires-8.jpg";
import speakerPoster1 from "./assets/speakers/speaker-1.png";
import speakerPoster2 from "./assets/speakers/speaker-2.png";
import speakerPoster3 from "./assets/speakers/speaker-3.png";
import speakerPoster4 from "./assets/speakers/speaker-4.png";
import speakerPoster5 from "./assets/speakers/speaker-5.png";
import speakerPoster6 from "./assets/speakers/speaker-6.png";
import speakerPoster7 from "./assets/speakers/speaker-7.png";
import lottieWorkshop from "./assets/workshops/lottiefiles.png";
import joyWorkshop from "./assets/workshops/joy-banerjee.png";
import brandStorm from "./assets/events/brand-storm.png";
import zenigma from "./assets/events/zenigma.png";
import aashishSolanki from "./assets/fun-events/aashish-solanki.png";
import chinkiMinki from "./assets/fun-events/chinki-minki.png";
import mj5 from "./assets/fun-events/mj5.png";
import voxago from "./assets/partners/voxago.png";
import minimalTweaks from "./assets/partners/partner-2.png";
import designKul from "./assets/partners/partner-3.png";
import kuboCare from "./assets/partners/partner-4.png";
import awsCloudClubs from "./assets/partners/partner-5.png";
import madeWithCrochets from "./assets/partners/partner-6.png";
import nirvana from "./assets/partners/partner-7.png";
import memory1 from "./assets/memories/memory-1.jpg";
import memory2 from "./assets/memories/memory-2.jpg";
import memory3 from "./assets/memories/memory-3.jpg";
import memory4 from "./assets/memories/memory-4.jpg";
import memory5 from "./assets/memories/memory-5.png";
import memory6 from "./assets/memories/memory-6.png";
import memory7 from "./assets/memories/memory-7.png";
import memory8 from "./assets/memories/memory-8.png";
import memory9 from "./assets/memories/memory-9.png";
import memory10 from "./assets/memories/memory-10.jpg";
import hires25Mascot from "./assets/hires-25-mascot.png";
import merch1 from "./assets/merch/item-1.png";
import merch2 from "./assets/merch/item-2.png";
import merch3 from "./assets/merch/item-3.png";
import merch4 from "./assets/merch/item-4.png";
import merch5 from "./assets/merch/item-5.png";
import merch6 from "./assets/merch/item-6.png";
import merch7 from "./assets/merch/item-7.png";
import merch8 from "./assets/merch/item-8.png";
import merch9 from "./assets/merch/item-9.png";
import merch10 from "./assets/merch/item-10.png";

const merchArchive = [
  { image: merch1, name: "Diaries", type: "Merch" },
  { image: merch2, name: "Mugs", type: "Merch" },
  { image: merch3, name: "Postcards", type: "Merch" },
  { image: merch4, name: "Posters", type: "Print" },
  { image: merch5, name: "Stickers", type: "Merch" },
  { image: merch6, name: "T-shirts", type: "Merch" },
  { image: merch7, name: "Totebags", type: "Merch" },
  { image: merch8, name: "Speaker standee", type: "On-ground" },
  { image: merch9, name: "Design standee", type: "On-ground" },
  { image: merch10, name: "Badges", type: "Merch" },
];

const memoryImages = [
  memory1,
  memory2,
  memory3,
  memory4,
  memory5,
  memory6,
  memory7,
  memory8,
  memory9,
  memory10,
];

const previousPartners = [
  { image: voxago, name: "VOXAGO", role: "Community Partner" },
  { image: minimalTweaks, name: "Minimal Tweaks" },
  { image: designKul, name: "DesignKul" },
  { image: kuboCare, name: "KuboCare" },
  { image: awsCloudClubs, name: "AWS Cloud Clubs GGSIPU" },
  { image: madeWithCrochets, name: "Made With Crochets" },
  { image: nirvana, name: "Nirvana" },
];

const speakerPosters = [
  speakerPoster1,
  speakerPoster2,
  speakerPoster3,
  speakerPoster4,
  speakerPoster5,
  speakerPoster6,
  speakerPoster7,
];

const workshopArchive = [
  {
    image: lottieWorkshop,
    discipline: "Motion systems",
    title: "Workshop by LottieFiles",
    facilitator: "Anshul Gupta",
    description: "Creating and integrating purposeful animation with LottieFiles.",
  },
  {
    image: joyWorkshop,
    discipline: "Experience design",
    title: "Workshop by Joy Banerjee",
    facilitator: "VP Design, Zomato",
    description: "Crafting exceptional digital experiences through practical design thinking.",
  },
  {
    image: brandStorm,
    discipline: "Branding competition",
    title: "Brand Storm",
    facilitator: "Creativity meets identity",
    description: "A competitive brand-building challenge focused on strategy, identity and original thinking.",
  },
  {
    image: zenigma,
    discipline: "UI/UX hackathon",
    title: "Zenigma",
    facilitator: "Design the unimaginable",
    description: "A UI/UX competition challenging teams to solve, prototype and present under pressure.",
  },
];

const liveEvents = [
  { image: mj5, title: "MJ5 Dance Crew", type: "Dance performance" },
  { image: aashishSolanki, title: "Aashish Solanki", type: "Stand-up comedy" },
  { image: chinkiMinki, title: "Chinki Minki", type: "Live entertainment" },
];

const historySlides = [
  {
    image: previousHiresCommunity,
    alt: "The Hi-RES student team celebrating together on campus",
    index: "01",
    label: "THE COMMUNITY",
    title: "Built by students. Powered by shared creative energy.",
    copy: "Hi-RES has always been more than a programme. It is a student-led culture where designers, organisers and participants come together to make ambitious ideas real.",
  },
  {
    image: previousHiresAudience,
    alt: "A packed auditorium during a previous Hi-RES session",
    index: "02",
    label: "THE CONVERSATION",
    title: "Where ideas met a full room.",
    copy: "Previous sessions created space for students to listen, question and engage directly with experienced creative voices—turning an audience into an active design community.",
  },
  {
    image: previousHiresEntrance,
    alt: "Illustrated Hi-RES festival entrance installation at night",
    index: "03",
    label: "THE EXPERIENCE",
    title: "A festival people could step into.",
    copy: "From the first campus touchpoint to the final session, Hi-RES translated its visual identity into a physical experience designed to feel distinct, expressive and memorable.",
  },
];

const metrics = [
  { value: "05", label: "Events & competitions", note: "Planned formats" },
  { value: "04", label: "Workshops", note: "Curated sessions" },
  { value: "10+", label: "Speaker sessions", note: "Planned programme" },
  { value: "10K+", label: "Student footfall", note: "Expected" },
  { value: "2.5K+", label: "Participants", note: "Expected" },
  { value: "100+", label: "Internship fair & exhibitions", note: "Student portfolio participation" },
];

const reasons = [
  {
    number: "01",
    title: "IIT Roorkee",
    copy: "Access a highly engaged student community at one of India’s premier technical institutes.",
    tone: "acid",
  },
  {
    number: "02",
    title: "Design-first audience",
    copy: "Meet creators focused on visual design, UI/UX, branding, motion, photography and creative technology.",
    tone: "cyan",
  },
  {
    number: "03",
    title: "Experience-led",
    copy: "Move beyond logo placement. Integrate your brand directly into the way people experience Hi-RES.",
    tone: "orange",
  },
  {
    number: "04",
    title: "First-mover edge",
    copy: "Become one of the first brands to build an association with a recurring design platform at IIT Roorkee.",
    tone: "pink",
  },
];

function PolyObject() {
  return (
    <div className="poly-stage" aria-hidden="true">
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <svg
        className="poly-object"
        viewBox="0 0 420 420"
        role="presentation"
      >
        <defs>
          <linearGradient id="faceA" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#dfff00" />
            <stop offset="1" stopColor="#13efdc" />
          </linearGradient>
          <linearGradient id="faceB" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ff4e1a" />
            <stop offset="1" stopColor="#ff3eb5" />
          </linearGradient>
        </defs>
        <polygon points="210,38 365,128 320,310 210,382 96,308 54,128" fill="#4f25ff" />
        <polygon points="210,38 365,128 211,190 54,128" fill="url(#faceA)" />
        <polygon points="365,128 320,310 211,190" fill="#ff4e1a" />
        <polygon points="320,310 210,382 211,190" fill="url(#faceB)" />
        <polygon points="210,382 96,308 211,190" fill="#13efdc" />
        <polygon points="96,308 54,128 211,190" fill="#2d18a5" />
        <polyline points="210,38 211,190 210,382" fill="none" stroke="#111018" strokeWidth="5" />
        <polyline points="54,128 211,190 365,128" fill="none" stroke="#111018" strokeWidth="5" />
        <polyline points="96,308 211,190 320,310" fill="none" stroke="#111018" strokeWidth="5" />
        <polygon points="142,108 176,122 176,158 142,145" fill="#fffaf1" />
        <polygon points="248,100 287,118 287,156 248,139" fill="#111018" />
      </svg>
      <span className="object-label label-c">JAN / 2027</span>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHistory, setActiveHistory] = useState(0);
  const [activeWorkshop, setActiveWorkshop] = useState(0);
  const [activeMerch, setActiveMerch] = useState(0);

  const closeMenu = () => setMenuOpen(false);
  const selectedHistory = historySlides[activeHistory];

  return (
    <main>
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="wordmark" href="#top" onClick={closeMenu}>
          <img className="hires-nav-logo" src={hiresLogo} alt="" />
          <span className="wordmark-copy">
            <strong>HI-RES’27</strong>
            <small>ANNUAL DESIGN CONVERGENCE</small>
          </span>
        </a>
        <button
          className="menu-button"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          {menuOpen ? "CLOSE" : "MENU"}
        </button>
        <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          <a href="#about" onClick={closeMenu}>ABOUT</a>
          <a href="#why" onClick={closeMenu}>WHY HI-RES</a>
          <a href="#packages" onClick={closeMenu}>PARTNERSHIPS</a>
          <a
            className="organizer-lockup"
            href="https://www.instagram.com/designstudio.iitr/"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Design Studio IIT Roorkee on Instagram"
          >
            <small>ORGANISED BY</small>
            <img src={designStudioLogo} alt="Design Studio" />
          </a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            START A CONVERSATION <span>↗</span>
          </a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-grid" />
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-light" />
            IIT ROORKEE / DESIGN &amp; CREATIVE FESTIVAL
          </div>
          <h1>
            CREATE
            <span className="offset-word">COMPETE</span>
            <span className="outline-word">CONNECT</span>
          </h1>
          <p className="hero-intro">
            A new platform for the next generation of designers, makers and
            creative technologists.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#packages">
              EXPLORE PARTNERSHIPS <span>↘</span>
            </a>
            <span className="edition-stamp">JANUARY 2027<br />IIT ROORKEE</span>
          </div>
        </div>
        <PolyObject />
        <div className="festival-logo-card">
          <span>OFFICIAL FESTIVAL IDENTITY</span>
          <img src={hiresLogo} alt="Hi-RES Annual Design Convergence" />
        </div>
        <div className="hero-index">
          <span>DESIGN THE</span>
          <strong>NEXT</strong>
          <span>CHAPTER</span>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div>
          DESIGN IS A TEAM SPORT <b>✦</b> IIT ROORKEE <b>✦</b> HI-RES’27{" "}
          <b>✦</b> BUILD THE FIRST CHAPTER <b>✦</b> DESIGN IS A TEAM SPORT{" "}
          <b>✦</b> IIT ROORKEE <b>✦</b>
        </div>
      </div>

      <section className="manifesto section-pad" id="about">
        <div className="section-kicker">[ 001 / THE PLATFORM ]</div>
        <div className="manifesto-layout">
          <h2>
            MORE THAN AN EVENT.
            <span>A CREATIVE COLLISION.</span>
          </h2>
          <div className="manifesto-copy">
            <p>
              Hi-RES’27 is a new opportunity to build the design ecosystem at
              IIT Roorkee—bringing students, industry and ideas into one
              high-energy format.
            </p>
            <p className="micro-copy">
              Visual design / UI + UX / Branding / Motion / Photography /
              Creative technology
            </p>
          </div>
        </div>
      </section>

      <section className="memory-reel" aria-labelledby="memory-reel-title">
        <div className="memory-reel-head">
          <span className="section-kicker light">[ HI-RES / IN MOTION ]</span>
          <h2 id="memory-reel-title">MOMENTS THAT<br /><em>MADE HI-RES.</em></h2>
          <p>
            The questions, conversations, workshops and shared moments that
            turned a programme into a creative community.
          </p>
        </div>
        <div className="memory-marquee">
          <div className="memory-track">
            {[0, 1].map((setIndex) => (
              <div className="memory-set" key={setIndex} aria-hidden={setIndex === 1}>
                {memoryImages.map((image, index) => (
                  <figure className={`memory-frame memory-frame-${(index % 4) + 1}`} key={`${setIndex}-${image}`}>
                    <img
                      src={image}
                      alt={setIndex === 0 ? `A moment from a previous Hi-RES edition ${index + 1}` : ""}
                      loading="lazy"
                    />
                    <figcaption>HI-RES ARCHIVE / {String(index + 1).padStart(2, "0")}</figcaption>
                  </figure>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="memory-reel-foot">
          <span>QUESTIONS</span>
          <span>CONVERSATIONS</span>
          <strong>COMMUNITY IN MOTION</strong>
          <span>WORKSHOPS</span>
          <span>CREATIVE EXCHANGE</span>
        </div>
      </section>

      <section className="merch-lookbook" aria-labelledby="merch-lookbook-title">
        <div className="merch-lookbook-copy">
          <span className="section-kicker light">[ MERCH + STANDEES / ARCHIVE ]</span>
          <h2 id="merch-lookbook-title">HI-RES,<br /><em>OFF THE SCREEN.</em></h2>
          <p>
            A glimpse of the objects and on-ground graphics that carried the
            Hi-RES identity beyond the event programme.
          </p>
          <div className="merch-active-meta">
            <span>0{activeMerch + 1} / 10</span>
            <strong>{merchArchive[activeMerch].name}</strong>
            <small>{merchArchive[activeMerch].type}</small>
          </div>
        </div>

        <div className="merch-feature">
          <img
            key={merchArchive[activeMerch].image}
            src={merchArchive[activeMerch].image}
            alt={`Previous Hi-RES ${merchArchive[activeMerch].name}`}
            loading="lazy"
          />
        </div>

        <div className="merch-thumbnails" role="tablist" aria-label="Merch and standee archive">
          {merchArchive.map((item, index) => (
            <button
              className={activeMerch === index ? "is-active" : ""}
              key={item.name}
              type="button"
              role="tab"
              aria-selected={activeMerch === index}
              aria-label={`Show ${item.name}`}
              onClick={() => setActiveMerch(index)}
              onMouseEnter={() => setActiveMerch(index)}
              onFocus={() => setActiveMerch(index)}
            >
              <img src={item.image} alt="" loading="lazy" />
              <span>{String(index + 1).padStart(2, "0")}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="metrics-section">
        <div className="metrics-editorial-head section-pad">
          <span className="section-kicker">[ 002 / EVENT SNAPSHOT ]</span>
          <h2>ONE CAMPUS.<br />MANY WAYS IN.</h2>
          <p>
            A multi-format design festival built to create sustained
            participation—not a single moment of passive visibility.
          </p>
        </div>
        <div className="metrics-ledger">
          <article className="metric-feature">
            <div className="metric-feature-top">
              <span>PRIMARY SCALE INDICATOR</span>
              <span>EXPECTED / JAN 2027</span>
            </div>
            <strong>10K<span>+</span></strong>
            <div className="metric-feature-bottom">
              <h3>EXPECTED STUDENT<br />FOOTFALL</h3>
              <p>
                Across competitions, workshops, speaker sessions, the
                internship fair and portfolio exhibitions.
              </p>
            </div>
          </article>
          <div className="metric-lines">
            {metrics
              .filter((metric) => metric.label !== "Student footfall")
              .map((metric, index) => (
                <article className="metric-line" key={metric.label}>
                  <span className="metric-line-index">0{index + 1}</span>
                  <strong>{metric.value}</strong>
                  <div>
                    <h3>{metric.label}</h3>
                    <p>{metric.note}</p>
                  </div>
                </article>
              ))}
          </div>
        </div>
        <div className="transparency-bar">
          <span>HI-RES’27 / IIT ROORKEE</span>
          <strong>PROJECTED FIGURES ARE CLEARLY LABELLED.</strong>
          <span>PARTNERSHIP DECK / 2027</span>
        </div>
      </section>

      <section className="previous-partners" aria-labelledby="previous-partners-title">
        <div className="previous-partners-head">
          <div>
            <span className="section-kicker light">[ HI-RES COLLABORATION ARCHIVE ]</span>
            <h2 id="previous-partners-title"><em>PREVIOUS</em><br />PARTNERS.</h2>
          </div>
          <p>
            The creative, technical and community partners who helped bring
            previous Hi-RES experiences to life.
          </p>
        </div>
        <div className="partner-strip">
          <div className="partner-track">
            {[0, 1].map((setIndex) => (
              <div className="partner-set" key={setIndex} aria-hidden={setIndex === 1}>
                {previousPartners.map((partner, index) => (
                  <div className={`partner-logo partner-logo-${index + 1}`} key={`${setIndex}-${partner.name}`}>
                    <span>0{index + 1}</span>
                    <img src={partner.image} alt={setIndex === 0 ? partner.name : ""} loading="lazy" />
                    <small>
                      <strong>{partner.name}</strong>
                      {"role" in partner && <span>{partner.role}</span>}
                    </small>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="history-section" id="history">
        <div className="history-header section-pad">
          <div>
            <span className="section-kicker">[ ARCHIVE / PREVIOUS HI-RES ]</span>
            <h2>WE’VE SEEN<br />WHAT DESIGN<br /><em>CAN START.</em></h2>
          </div>
          <p>
            <span
              className="history-mascot"
              tabIndex={0}
              role="img"
              aria-label="Hi-RES’25 mascot sitting on the archive line"
            >
              <img src={hires25Mascot} alt="" />
              <small>HI-RES’25<br />MASCOT</small>
            </span>
            Hi-RES’27 builds on a real student-led foundation—carrying forward
            the community, dialogue and campus experience of Hi-RES into a more
            ambitious next chapter.
          </p>
        </div>

        <div className="history-stage">
          <img
            key={selectedHistory.image}
            src={selectedHistory.image}
            alt={selectedHistory.alt}
            loading="lazy"
          />
          <div className="history-shade" />
          <div className="history-slide-copy">
            <span>{selectedHistory.index} / {selectedHistory.label}</span>
            <h3>{selectedHistory.title}</h3>
            <p>{selectedHistory.copy}</p>
          </div>
          <div className="history-counter">
            <strong>0{activeHistory + 1}</strong>
            <span>/ 03</span>
          </div>
        </div>

        <div className="history-nav">
          <div className="history-thumbs">
            {historySlides.map((slide, index) => (
              <button
                className={activeHistory === index ? "is-active" : ""}
                key={slide.label}
                type="button"
                onClick={() => setActiveHistory(index)}
                aria-label={`Show ${slide.label.toLowerCase()} slide`}
              >
                <img src={slide.image} alt="" loading="lazy" />
                <span>{slide.index} — {slide.label}</span>
              </button>
            ))}
          </div>
          <div className="history-arrows">
            <button
              type="button"
              aria-label="Previous Hi-RES story"
              onClick={() => setActiveHistory((activeHistory + historySlides.length - 1) % historySlides.length)}
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Next Hi-RES story"
              onClick={() => setActiveHistory((activeHistory + 1) % historySlides.length)}
            >
              →
            </button>
          </div>
        </div>
      </section>

      <section className="speaker-archive" aria-labelledby="speaker-archive-title">
        <div className="speaker-archive-heading">
          <span>[ PREVIOUS SPEAKERS / HI-RES ]</span>
          <h2 id="speaker-archive-title">VOICES THAT<br /><em>MOVED THE ROOM.</em></h2>
          <p>
            Designers, founders and creative leaders who brought lived
            experience—not just theory—to the Hi-RES stage.
          </p>
        </div>
        <div className="speaker-marquee">
          <div className="speaker-track">
            {[0, 1].map((setIndex) => (
              <div
                className="speaker-set"
                key={setIndex}
                aria-hidden={setIndex === 1}
              >
                {speakerPosters.map((poster, index) => (
                  <figure className="speaker-poster" key={`${setIndex}-${poster}`}>
                    <img
                      src={poster}
                      alt={setIndex === 0 ? `Previous Hi-RES speaker creative ${index + 1}` : ""}
                      loading="lazy"
                    />
                    <figcaption>ARCHIVE / 0{index + 1}</figcaption>
                  </figure>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="speaker-strip-footer">
          <span>PAUSE TO EXPLORE</span>
          <strong>PAST VOICES. NEXT CONVERSATION.</strong>
          <span>HI-RES / IIT ROORKEE</span>
        </div>
      </section>

      <section className="workshop-showcase" aria-labelledby="workshop-showcase-title">
        <div className="workshop-showcase-copy">
          <span className="section-kicker light">[ PROGRAMME ARCHIVE / 2025 ]</span>
          <h2 id="workshop-showcase-title">IDEAS INTO<br /><em>ACTION.</em></h2>
          <p>
            Previous Hi-RES workshops and competitions gave students room to
            learn, make, solve and compete.
          </p>
          <div className="workshop-selector" role="tablist" aria-label="Previous workshops and competitions">
            {workshopArchive.map((workshop, index) => (
              <button
                className={activeWorkshop === index ? "is-active" : ""}
                key={workshop.title}
                type="button"
                role="tab"
                aria-selected={activeWorkshop === index}
                onClick={() => setActiveWorkshop(index)}
                onMouseEnter={() => setActiveWorkshop(index)}
                onFocus={() => setActiveWorkshop(index)}
              >
                <span>0{index + 1}</span>
                <div>
                  <strong>{workshop.discipline}</strong>
                  <small>{workshop.facilitator}</small>
                </div>
                <i>↗</i>
              </button>
            ))}
          </div>
        </div>

        <div className="workshop-visual">
          <figure className="workshop-active-card">
            <span className="workshop-active-label">ARCHIVE / 0{activeWorkshop + 1}</span>
            <img
              key={workshopArchive[activeWorkshop].image}
              src={workshopArchive[activeWorkshop].image}
              alt={workshopArchive[activeWorkshop].title}
              loading="lazy"
            />
            <figcaption>
              <strong>{workshopArchive[activeWorkshop].title}</strong>
              <p>{workshopArchive[activeWorkshop].description}</p>
            </figcaption>
          </figure>

          <div className="workshop-2027">
            <span>HI-RES’27 / JAN 2027</span>
            <strong>THIS YEAR,<br />MUCH MORE.</strong>
            <p>More workshops, competitions and hands-on creative formats.</p>
          </div>
        </div>
      </section>

      <section className="live-showcase" aria-labelledby="live-showcase-title">
        <div className="live-showcase-head">
          <span className="section-kicker">[ LIVE AT HI-RES / FUN EVENTS ]</span>
          <h2 id="live-showcase-title">WHEN THE<br /><em>LIGHTS SHIFT.</em></h2>
          <p>
            Beyond workshops and competitions, Hi-RES became a live campus
            experience—powered by dance, comedy and crowd-first entertainment.
          </p>
        </div>
        <div className="live-event-cards">
          {liveEvents.map((event, index) => (
            <article className={`live-event-card live-event-${index + 1}`} key={event.title}>
              <img src={event.image} alt={event.title} loading="lazy" />
              <div className="live-event-meta">
                <span>0{index + 1} / {event.type}</span>
                <h3>{event.title}</h3>
                <small>LIVE AT HI-RES ↗</small>
              </div>
            </article>
          ))}
        </div>
        <div className="live-showcase-foot">
          <span>DANCE</span>
          <span>COMEDY</span>
          <strong>ONE CAMPUS. THREE LIVE EXPERIENCES.</strong>
          <span>ENERGY</span>
          <span>COMMUNITY</span>
        </div>
      </section>

      <section className="why-section section-pad" id="why">
        <div className="why-title">
          <span className="section-kicker">[ 003 / THE ADVANTAGE ]</span>
          <h2>WHY<br />HI-RES?</h2>
          <p>Four reasons to get in at ground level.</p>
        </div>
        <div className="reasons-list">
          {reasons.map((reason) => (
            <article className={`reason-row ${reason.tone}`} key={reason.number}>
              <span>{reason.number}</span>
              <h3>{reason.title}</h3>
              <p>{reason.copy}</p>
              <i aria-hidden="true">↗</i>
            </article>
          ))}
        </div>
      </section>

      <section className="first-chapter">
        <div className="chapter-art" aria-hidden="true">
          <span className="chapter-wire one" />
          <span className="chapter-wire two" />
          <div className="chapter-core">1ST</div>
          <span className="chapter-caption">FOUNDING PARTNER<br />ACCESS GRANTED</span>
        </div>
        <div className="chapter-copy">
          <span className="section-kicker light">[ 004 / FOUNDING PARTNERS ]</span>
          <h2>BE PART OF THE<br /><em>FIRST CHAPTER.</em></h2>
          <p>
            Hi-RES is entering its next phase with an ambition to build a
            recurring design platform at IIT Roorkee.
          </p>
          <p>
            We are inviting a limited number of brands to become founding
            partners and help shape the experience from the ground up.
          </p>
          <a href="#packages">CLAIM YOUR POSITION <span>→</span></a>
        </div>
      </section>

      <section className="packages-section section-pad" id="packages">
        <div className="packages-header">
          <div>
            <span className="section-kicker">[ 005 / PARTNERSHIP LEVELS ]</span>
            <h2>PICK YOUR<br />PLAY.</h2>
          </div>
          <p>
            Explore the complete partnership opportunity and find the right
            place for your brand in Hi-RES’27.
          </p>
        </div>
        <div className="partnership-documents">
          <a
            className="document-card document-brochure"
            href="https://drive.google.com/file/d/1_yh7ZwaN-z-02K-CzZf-ORXNLJExZFxd/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <span className="document-index">01 / OVERVIEW</span>
            <div>
              <h3>SPONSORSHIP<br />BROCHURE</h3>
              <p>
                Meet Hi-RES’27, understand the festival, and explore the
                partnership opportunity.
              </p>
            </div>
            <span className="document-action">OPEN BROCHURE <strong>↗</strong></span>
          </a>
          <a
            className="document-card document-slabs"
            href="https://drive.google.com/file/d/174NBUkxfgDzWER-YjV49FzMGyIPvljO4/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <span className="document-index">02 / PARTNERSHIP OPTIONS</span>
            <div>
              <h3>SPONSORSHIP<br />SLABS</h3>
              <p>
                View every sponsorship slab, category partnership, and the
                complete set of brand deliverables.
              </p>
            </div>
            <span className="document-action">VIEW ALL SLABS <strong>↗</strong></span>
          </a>
        </div>
        <div className="custom-partnership">
          <div>
            <span>CUSTOM PARTNERSHIP / ACTIVATION / IN-KIND</span>
            <h3>NEED A DIFFERENT FORMAT?</h3>
          </div>
          <a href="#contact">
            LET’S BUILD IT <span>→</span>
          </a>
        </div>
      </section>

      <section className="value-section section-pad">
        <div className="section-kicker light">[ 006 / VALUE TRANSLATION ]</div>
        <div className="value-layout">
          <div>
            <span className="value-label">PARTNERSHIP VALUE / BUILT TO PERFORM</span>
            <h2>EVERY RUPEE<br /><em>WORKS FOR YOUR BRAND.</em></h2>
          </div>
          <ul>
            <li><span>01</span>Visibility across selected event touchpoints</li>
            <li><span>02</span>Planned social media integrations</li>
            <li><span>03</span>On-ground presence at selected venues</li>
            <li><span>04</span>Direct interaction with a design-first audience</li>
          </ul>
        </div>
        <p className="value-note">
          Exact deliverable counts are locked in the partnership agreement,
          based on the final event plan and selected tier.
        </p>
      </section>

      <footer id="contact">
        <div className="footer-top">
          <span>[ 007 / THE OPPORTUNITY ]</span>
          <h2>YOUR BRAND<br />MEETS THE NEXT<br /><em>GENERATION.</em></h2>
          <a
            href="https://www.instagram.com/designstudio.iitr/"
            target="_blank"
            rel="noreferrer"
          >
            VISIT INSTAGRAM <span>↗</span>
          </a>
        </div>
        <div className="contact-panel">
          <div className="contact-heading">
            <span>[ DIRECT CONTACT ]</span>
            <h3>LET’S BUILD THE<br />NEXT CHAPTER.</h3>
          </div>
          <article className="contact-card">
            <span>CONVENER / HI-RES</span>
            <h4>ABHINAV ARORA</h4>
            <a href="tel:+919877442177">+91 98774 42177</a>
            <a href="mailto:abhinav_a@bt.iitr.ac.in">abhinav_a@bt.iitr.ac.in ↗</a>
          </article>
          <article className="contact-card">
            <span>CO-CONVENER / HI-RES</span>
            <h4>VRINDA AGRAWAL</h4>
            <a href="tel:+918769210077">+91 87692 10077</a>
            <a href="mailto:vrinda_a@me.iitr.ac.in">vrinda_a@me.iitr.ac.in ↗</a>
          </article>
        </div>
        <div className="footer-bottom">
          <a className="footer-logo-pair" href="#top" aria-label="Hi-RES’27, organised by Design Studio">
            <img src={hiresLogo} alt="Hi-RES Annual Design Convergence" />
            <span>ORGANISED BY</span>
            <img src={designStudioLogo} alt="Design Studio" />
          </a>
          <p>IIT ROORKEE’S DESIGN &amp; CREATIVE FESTIVAL</p>
          <a
            className="footer-instagram"
            href="https://www.instagram.com/designstudio.iitr/"
            target="_blank"
            rel="noreferrer"
          >
            @DESIGNSTUDIO.IITR ↗
          </a>
          <p>© 2027 HI-RES / IITR</p>
        </div>
      </footer>
    </main>
  );
}
