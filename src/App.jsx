import React, { useEffect, useMemo, useState } from "react";
import {
  BadgeCheck,
  Banknote,
  BriefcaseBusiness,
  Building2,
  Calculator,
  ChevronDown,
  CircleDollarSign,
  ClipboardCheck,
  FileText,
  Handshake,
  HeartPulse,
  Home,
  Languages,
  Mail,
  MapPin,
  Menu,
  Phone,
  Scale,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingDown,
  Users,
} from "lucide-react";

const whatsappUrl = "https://wa.link/xjm3uj";
const directWhatsappUrl =
  "https://wa.me/+60122892421?text=I%20want%20to%20know%20more!";

const images = {
  logo: "https://noblewealth.my/wp-content/uploads/2026/06/logo-white-wording-transp-background-1024x683.png",
  hero: "https://noblewealth.my/wp-content/uploads/2026/06/WHO-WE-ARE-1024x819.png",
  who: "https://noblewealth.my/wp-content/uploads/2026/06/WHO-WE-ARE.jpg",
  housing:
    "https://noblewealth.my/wp-content/uploads/2026/06/mortgage-house-loan-website-login-graphic-concept-1024x683.jpg",
  refinancing:
    "https://noblewealth.my/wp-content/uploads/2026/06/business-team-meeting-around-table-with-laptop-coffee-1024x586.jpg",
  investment: "https://noblewealth.my/wp-content/uploads/2026/06/IMG_0758-768x1024.jpg",
  business:
    "https://noblewealth.my/wp-content/uploads/2026/06/group-young-businessman-businesswoman-brainstorming-ideas-working-together-1024x576.jpg",
  commercial:
    "https://noblewealth.my/wp-content/uploads/2026/06/COLLAB-WITH-OTHER-REAL-ESTATE-AGENCY-1-768x1024.jpg",
  protection: "https://noblewealth.my/wp-content/uploads/2026/06/HALL-MEETING-1024x768.jpg",
  estate: "https://noblewealth.my/wp-content/uploads/2026/06/real-estate-sector_investment.avif",
  chris: "https://noblewealth.my/wp-content/uploads/2026/06/Founder_CHRIS-CHONG-731x1024.png",
  jack: "https://noblewealth.my/wp-content/uploads/2026/06/SENIOR-PARTNER_JACK-WAI-675x1024.png",
  altan: "https://noblewealth.my/wp-content/uploads/2026/06/Screenshot-2026-06-20-021008.png",
  speaker: "https://noblewealth.my/wp-content/uploads/2026/06/SPEAKER-EVENT.jpg",
};

const navItems = [
  ["About Us", "#about-us"],
  ["Services", "#services"],
  ["Why Us", "#why-us"],
  ["How It Works", "#how-it-works"],
  ["Testimonials", "#testimonials"],
  ["Contact", "#contact"],
];

const tabs = [
  {
    id: "assess",
    label: "Assess",
    icon: ClipboardCheck,
    eyebrow: "Step 1",
    title: "Free Assessment",
    progress: "24h",
    color: "emerald",
    body: "Share your goal and basic financial details via WhatsApp. NobleWealth pre-assesses your eligibility within 24 hours.",
    points: ["Goal review", "DSR check", "CCRIS / CTOS screen", "Loan-fit view"],
  },
  {
    id: "compare",
    label: "Compare",
    icon: Calculator,
    eyebrow: "Step 2",
    title: "Compare & Plan",
    progress: "Banks",
    color: "amber",
    body: "Your best options are compared across banks with full cost-and-savings breakdowns in plain language.",
    points: ["Rates", "Tenure", "Margin", "Break-even"],
  },
  {
    id: "process",
    label: "Process",
    icon: FileText,
    eyebrow: "Step 3",
    title: "We Handle the Process",
    progress: "End-to-end",
    color: "blue",
    body: "Documents, submission, bank follow-up, and lawyer coordination are handled until the loan is disbursed.",
    points: ["Documents", "Bank submission", "Follow-up", "Legal coordination"],
  },
  {
    id: "protect",
    label: "Protect",
    icon: ShieldCheck,
    eyebrow: "Step 4",
    title: "Ongoing Protection",
    progress: "Review",
    color: "violet",
    body: "Your loan and protection plan are reviewed as life changes: new property, new family, new goals.",
    points: ["MRTA vs MLTA", "Medical cover", "Critical illness", "Estate planning"],
  },
];

const services = [
  {
    title: "Housing Loan Planning",
    image: images.housing,
    icon: Home,
    text: "First home or next home - we assess your DSR, CCRIS, and CTOS standing before you commit, so your loan application is approved the first time. No wasted bookings, no surprise rejections.",
  },
  {
    title: "Refinancing & Cash-Out",
    image: images.refinancing,
    icon: TrendingDown,
    text: "Still paying yesterday's interest rate? NobleWealth compares packages across banks and shows your real savings, upfront costs, and break-even timeline. Need funds for renovation, business, or your next investment? Use property value at home loan rates - not personal loan rates.",
  },
  {
    title: "Investment Property Financing",
    image: images.investment,
    icon: CircleDollarSign,
    text: "Buying your second or third property? NobleWealth structures financing to maximise margin - up to 90% on your third property - while keeping your overall commitments healthy.",
  },
  {
    title: "SME & Business Financing",
    image: images.business,
    icon: BriefcaseBusiness,
    text: "Working capital, term loans, or government-backed schemes - business owners get guidance on the right financing to grow, including what banks actually look for in company accounts.",
  },
  {
    title: "Commercial Property Financing",
    image: images.commercial,
    icon: Building2,
    text: "Buying a shop lot, office, or factory under personal name or company (Sdn Bhd)? NobleWealth compares margin, tenure, and rates across banks, then advises the best purchase structure.",
  },
  {
    title: "Loan Protection & Insurance Planning",
    image: images.protection,
    icon: HeartPulse,
    text: "A home loan is a 30-35 year commitment. NobleWealth compares MRTA vs MLTA, plus medical and critical illness coverage, so the family keeps the house no matter what happens.",
  },
  {
    title: "Will & Estate Planning",
    image: images.estate,
    icon: Scale,
    text: "Property is often the biggest asset. NobleWealth helps put a proper will and estate plan in place, so it passes to the right hands without delay or dispute.",
  },
];

const reasons = [
  {
    title: "Bank-neutral advice",
    icon: Banknote,
    text: "NobleWealth compares across banks and works for you, not any single bank.",
  },
  {
    title: "Numbers first",
    icon: Calculator,
    text: "Every recommendation comes with clear calculation: savings, costs, and break-even before you sign.",
  },
  {
    title: "Pre-assessment before application",
    icon: ClipboardCheck,
    text: "Eligibility is checked upfront so you never burn a CCRIS record on a doomed application.",
  },
  {
    title: "One advisor, end to end",
    icon: Handshake,
    text: "Loan approval, legal process, and protection planning stay under one point of contact.",
  },
  {
    title: "Bilingual service",
    icon: Languages,
    text: "Service is available in English and Mandarin / 中文服务.",
  },
];

const testimonials = [
  {
    quote:
      "I had a RM1.5 million home loan. Chris ran the full calculation - including all the refinancing costs - and after refinancing it still saved me RM250,000 in total interest.",
    person: "Homeowner",
    location: "Selangor",
  },
  {
    quote:
      "With a few property loans, my monthly commitment was around RM6,000+. Jack advised me to refinance one property to settle my personal loan, credit cards, and property loan together - it brought my commitment down to RM4,000+ a month.",
    person: "Property Investor",
    location: "Klang Valley",
  },
  {
    quote:
      "I booked the factory I'd been renting for the past 10 years. My own relationship manager couldn't get me the loan. Thanks to Chris, I secured financing at 90%.",
    person: "Lee",
    location: "Business Owner",
  },
];

const team = [
  { name: "Chris Chong", role: "Founder", image: images.chris },
  { name: "Jack Wai", role: "Senior Partner", image: images.jack },
  { name: "Altan Law", role: "Senior Partner", image: images.altan },
];

function App() {
  const [activeTab, setActiveTab] = useState("assess");

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveTab((current) => {
        const currentIndex = tabs.findIndex((tab) => tab.id === current);
        return tabs[(currentIndex + 1) % tabs.length].id;
      });
    }, 4000);

    return () => window.clearInterval(interval);
  }, []);

  const activeOverlay = useMemo(
    () => tabs.find((tab) => tab.id === activeTab) ?? tabs[0],
    [activeTab],
  );

  return (
    <div className="min-h-screen bg-white text-neutral-950">
      <nav
        className="animate-fade-in-up mx-auto flex max-w-7xl items-center justify-between px-6 py-4"
        style={{ opacity: 0, animationDelay: "0.1s" }}
      >
        <a href="/" className="flex items-center gap-3" aria-label="NobleWealth Advisory">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-950 text-white">
            <Sparkles className="h-4 w-4 fill-white" strokeWidth={1.8} />
          </span>
          <span className="text-lg font-semibold tracking-tight">NobleWealth</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.slice(0, 5).map(([label, href], index) =>
            index === 1 ? (
              <NavMenuItem key={label} label={label} href={href} />
            ) : (
              <a
                key={label}
                href={href}
                className="text-sm text-neutral-700 transition-colors hover:text-black"
              >
                {label}
              </a>
            ),
          )}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="tel:+60162209575"
            className="hidden text-sm text-neutral-700 transition-colors hover:text-black sm:inline"
          >
            +60162209575
          </a>
          <a
            href={whatsappUrl}
            className="whitespace-nowrap rounded-full bg-neutral-950 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
          >
            Free assessment
          </a>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 md:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </nav>

      <main>
        <section className="mx-auto max-w-7xl px-6 pt-20 pb-24 text-center md:pt-24">
          <div
            className="animate-fade-in-up mb-8 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-2"
            style={{ opacity: 0, animationDelay: "0.2s" }}
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-100">
              <Star className="h-3.5 w-3.5 fill-amber-600 text-amber-600" strokeWidth={1.6} />
            </span>
            <span className="text-sm font-medium text-black">
              12+ years in mortgage and SME loan financing
            </span>
          </div>

          <h1
            className="animate-fade-in-up mx-auto mb-5 max-w-5xl text-5xl font-normal leading-[1.06] tracking-tight md:text-7xl lg:text-[80px]"
            style={{ opacity: 0, animationDelay: "0.3s" }}
          >
            Your Property Loan Advisor.
            <br />
            <span className="bg-gradient-to-r from-neutral-950 via-amber-700 to-neutral-500 bg-clip-text text-transparent">
              Building Noble Wealth.
            </span>
          </h1>

          <p
            className="animate-fade-in-up mx-auto mb-8 max-w-3xl text-lg leading-8 text-neutral-600 md:text-xl"
            style={{ opacity: 0, animationDelay: "0.4s" }}
          >
            NobleWealth helps Malaysian homeowners, property investors, and business owners secure
            the right financing, reduce interest costs, and protect what they have built with one
            trusted advisor.
          </p>

          <div
            className="animate-fade-in-up mb-12 flex flex-col items-center justify-center gap-3 sm:flex-row"
            style={{ opacity: 0, animationDelay: "0.5s" }}
          >
            <a
              href={whatsappUrl}
              className="inline-flex rounded-full bg-neutral-950 px-8 py-3 text-base font-medium text-white transition-colors hover:bg-neutral-800"
            >
              Get a Free Loan Assessment
            </a>
            <a
              href={directWhatsappUrl}
              className="inline-flex rounded-full border border-neutral-300 px-8 py-3 text-base font-medium text-neutral-900 transition-colors hover:border-neutral-900"
            >
              WhatsApp Us Now
            </a>
          </div>

          <div
            className="animate-fade-in-up mx-auto mb-12 w-full max-w-2xl rounded-lg bg-neutral-100 p-1"
            style={{ opacity: 0, animationDelay: "0.6s" }}
          >
            <div className="grid grid-cols-2 gap-1 md:hidden">
              {tabs.map((tab) => (
                <TabButton
                  key={tab.id}
                  tab={tab}
                  active={activeTab === tab.id}
                  onClick={() => setActiveTab(tab.id)}
                />
              ))}
            </div>

            <div className="hidden items-center justify-center md:flex">
              {tabs.map((tab, index) => (
                <div key={tab.id} className="flex items-center">
                  <TabButton
                    tab={tab}
                    active={activeTab === tab.id}
                    onClick={() => setActiveTab(tab.id)}
                  />
                  {index < tabs.length - 1 ? (
                    <span className="mx-1 h-5 w-px bg-neutral-300" />
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          <section
            className="animate-fade-in-up relative h-[460px] overflow-hidden rounded-3xl md:h-[540px]"
            style={{ opacity: 0, animationDelay: "0.7s" }}
            aria-label="NobleWealth advisory preview"
          >
            <img
              src={images.hero}
              alt="NobleWealth advisory team"
              className="relative z-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <HeroOverlay tab={activeOverlay} />
          </section>

          <StatsBar />
        </section>

        <section id="about-us" className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[0.95fr_1.05fr] md:items-center">
          <div
            className="animate-fade-in-up overflow-hidden rounded-3xl"
            style={{ opacity: 0, animationDelay: "0.1s" }}
          >
            <img src={images.who} alt="NobleWealth team discussion" className="h-full w-full object-cover" />
          </div>
          <div
            className="animate-fade-in-up text-left"
            style={{ opacity: 0, animationDelay: "0.2s" }}
          >
            <SectionEyebrow>Who We Are</SectionEyebrow>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Mortgage and financial advisory based in Petaling Jaya.
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              NobleWealth Advisory works with all major banks in Malaysia to match you with the
              financing package that fits your profile, not just the first offer on the table.
            </p>
            <p className="mt-4 text-lg leading-8 text-neutral-600">
              Whether you are buying your first home, refinancing to save on interest, growing your
              business, or purchasing commercial property under your company, NobleWealth handles
              the numbers, paperwork, and bank negotiations.
            </p>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-20">
          <div
            className="animate-fade-in-up mx-auto max-w-3xl text-center"
            style={{ opacity: 0, animationDelay: "0.1s" }}
          >
            <SectionEyebrow>Our Services</SectionEyebrow>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Financing products and advisory services.
            </h2>
            <p className="mt-5 text-lg leading-8 text-neutral-600">
              Choose the right financing route before you commit to a property, refinance, or
              business facility.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} delay={`${0.2 + index * 0.05}s`} />
            ))}
          </div>
        </section>

        <section id="why-us" className="bg-neutral-950 px-6 py-20 text-white">
          <div className="mx-auto max-w-7xl">
            <div
              className="animate-fade-in-up max-w-3xl"
              style={{ opacity: 0, animationDelay: "0.1s" }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-300">
                Why NobleWealth
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                Bank-neutral, numbers-first advice.
              </h2>
            </div>
            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
              {reasons.map((reason, index) => (
                <ReasonCard key={reason.title} reason={reason} delay={`${0.2 + index * 0.08}s`} />
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-20">
          <div
            className="animate-fade-in-up mx-auto max-w-3xl text-center"
            style={{ opacity: 0, animationDelay: "0.1s" }}
          >
            <SectionEyebrow>How It Works</SectionEyebrow>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              From WhatsApp to disbursement.
            </h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {tabs.map((step, index) => (
              <StepCard key={step.id} step={step} index={index} delay={`${0.2 + index * 0.08}s`} />
            ))}
          </div>
        </section>

        <section id="testimonials" className="mx-auto max-w-7xl px-6 py-20">
          <div
            className="animate-fade-in-up mx-auto max-w-3xl text-center"
            style={{ opacity: 0, animationDelay: "0.1s" }}
          >
            <SectionEyebrow>Testimonials</SectionEyebrow>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Real financing outcomes.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.person}
                testimonial={testimonial}
                delay={`${0.2 + index * 0.08}s`}
              />
            ))}
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[1fr_1fr] md:items-center">
          <div
            className="animate-fade-in-up text-left"
            style={{ opacity: 0, animationDelay: "0.1s" }}
          >
            <SectionEyebrow>Join Our Team</SectionEyebrow>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Referral income for real estate agents, insurance agents, and ex-bankers.
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              NobleWealth is recruiting advisors who want to add mortgage advisory to their income.
              The live offer includes referral commissions, full training, and access to PCE/CEILLI
              pathways.
            </p>
            <a
              href={whatsappUrl}
              className="mt-8 inline-flex rounded-full bg-neutral-950 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-neutral-800"
            >
              Talk to Us About Joining
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
            {team.map((member, index) => (
              <TeamCard key={member.name} member={member} delay={`${0.2 + index * 0.08}s`} />
            ))}
          </div>
        </section>

        <section id="contact" className="px-6 py-20">
          <div
            className="animate-fade-in-up mx-auto grid max-w-7xl overflow-hidden rounded-3xl bg-neutral-950 text-white md:grid-cols-[1.1fr_0.9fr]"
            style={{ opacity: 0, animationDelay: "0.1s" }}
          >
            <div className="p-8 md:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-300">
                Ready to find out how much you can save?
              </p>
              <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl">
                Get a free assessment with Chris Chong.
              </h2>
              <div className="mt-8 grid gap-4 text-sm text-neutral-200 sm:grid-cols-2">
                <ContactLine icon={Users} text="Chris Chong - Managing Partner" />
                <ContactLine icon={Phone} text="+60162209575" href="tel:+60162209575" />
                <ContactLine icon={Mail} text="chrischong@noblewealth.group" href="mailto:chrischong@noblewealth.group" />
                <ContactLine icon={MapPin} text="Petaling Jaya, Selangor" />
              </div>
              <a
                href={whatsappUrl}
                className="mt-8 inline-flex rounded-full bg-white px-8 py-3 text-base font-semibold text-neutral-950 transition-colors hover:bg-amber-100"
              >
                Get My Free Assessment
              </a>
            </div>
            <img src={images.speaker} alt="NobleWealth event speaker" className="h-full min-h-[360px] w-full object-cover" />
          </div>
        </section>
      </main>
    </div>
  );
}

function NavMenuItem({ label, href }) {
  return (
    <a href={href} className="flex items-center gap-1 text-sm text-neutral-700 transition-colors hover:text-black">
      {label}
      <ChevronDown className="h-3.5 w-3.5" strokeWidth={2} />
    </a>
  );
}

function SectionEyebrow({ children }) {
  return <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-700">{children}</p>;
}

function TabButton({ tab, active, onClick }) {
  const Icon = tab.icon;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex h-11 min-w-[126px] items-center justify-center gap-2 rounded-md px-4 text-sm font-medium transition-all ${
        active ? "bg-white text-black shadow-sm" : "text-neutral-600 hover:text-black"
      }`}
      aria-pressed={active}
    >
      <Icon className="h-4 w-4" strokeWidth={1.9} />
      {tab.label}
    </button>
  );
}

function HeroOverlay({ tab }) {
  const colorMap = {
    emerald: ["text-emerald-700", "bg-emerald-100", "bg-emerald-500"],
    amber: ["text-amber-700", "bg-amber-100", "bg-amber-500"],
    blue: ["text-blue-700", "bg-blue-100", "bg-blue-500"],
    violet: ["text-violet-700", "bg-violet-100", "bg-violet-500"],
  };
  const colors = colorMap[tab.color] ?? colorMap.emerald;

  return (
    <div
      key={tab.id}
      className="animate-fade-in-overlay absolute inset-0 z-20 opacity-0"
      aria-live="polite"
    >
      <div className="animate-slide-up-overlay absolute left-1/2 top-1/2 z-30 w-[88%] max-w-md rounded-2xl border border-white/30 bg-white/95 p-5 text-left shadow-2xl shadow-black/20 backdrop-blur-md md:p-6">
        <div className="mb-5 flex items-center justify-between gap-4">
          <div>
            <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${colors[0]}`}>
              {tab.eyebrow}
            </p>
            <h2 className="mt-1 text-xl font-semibold text-black">{tab.title}</h2>
          </div>
          <span className={`rounded-full px-3 py-1 text-sm font-semibold ${colors[0]} ${colors[1]}`}>
            {tab.progress}
          </span>
        </div>
        <p className="mb-5 text-sm leading-6 text-neutral-600">{tab.body}</p>
        <div className="space-y-3">
          {tab.points.map((point, index) => (
            <div key={point} className="flex items-center gap-3 rounded-xl border border-neutral-100 bg-white px-3 py-2.5">
              <span className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold ${
                index === 0 ? `${colors[2]} text-white` : "bg-neutral-100 text-neutral-500"
              }`}
              >
                {index + 1}
              </span>
              <span className="text-sm font-medium text-neutral-800">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatsBar() {
  const stats = [
    ["12+ years", "mortgage and SME loan financing"],
    ["All major banks", "bank-neutral package comparison"],
    ["24 hours", "initial eligibility pre-assessment"],
    ["English + Mandarin", "bilingual advisory service"],
  ];

  return (
    <section
      className="animate-fade-in-up mt-16 grid gap-4 rounded-3xl border border-neutral-200 bg-white p-4 text-left shadow-sm md:grid-cols-4"
      style={{ opacity: 0, animationDelay: "0.8s" }}
      aria-label="NobleWealth highlights"
    >
      {stats.map(([value, label]) => (
        <div key={value} className="rounded-2xl bg-neutral-50 p-5">
          <p className="text-xl font-semibold text-neutral-950">{value}</p>
          <p className="mt-2 text-sm leading-5 text-neutral-600">{label}</p>
        </div>
      ))}
    </section>
  );
}

function ServiceCard({ service, delay }) {
  const Icon = service.icon;

  return (
    <article
      className="animate-fade-in-up overflow-hidden rounded-2xl border border-neutral-200 bg-white text-left shadow-sm"
      style={{ opacity: 0, animationDelay: delay }}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img src={service.image} alt={service.title} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
      </div>
      <div className="p-5">
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-700">
          <Icon className="h-5 w-5" strokeWidth={1.8} />
        </div>
        <h3 className="text-lg font-semibold tracking-tight text-neutral-950">{service.title}</h3>
        <p className="mt-3 text-sm leading-6 text-neutral-600">{service.text}</p>
      </div>
    </article>
  );
}

function ReasonCard({ reason, delay }) {
  const Icon = reason.icon;

  return (
    <article
      className="animate-fade-in-up rounded-2xl border border-white/10 bg-white/5 p-5 text-left"
      style={{ opacity: 0, animationDelay: delay }}
    >
      <Icon className="h-6 w-6 text-amber-300" strokeWidth={1.8} />
      <h3 className="mt-5 text-base font-semibold text-white">{reason.title}</h3>
      <p className="mt-3 text-sm leading-6 text-neutral-300">{reason.text}</p>
    </article>
  );
}

function StepCard({ step, index, delay }) {
  const Icon = step.icon;

  return (
    <article
      className="animate-fade-in-up rounded-2xl border border-neutral-200 bg-white p-5 text-left shadow-sm"
      style={{ opacity: 0, animationDelay: delay }}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
          Step {index + 1}
        </span>
        <Icon className="h-5 w-5 text-neutral-500" />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-neutral-950">{step.title}</h3>
      <p className="mt-3 text-sm leading-6 text-neutral-600">{step.body}</p>
    </article>
  );
}

function TestimonialCard({ testimonial, delay }) {
  return (
    <article
      className="animate-fade-in-up rounded-2xl border border-neutral-200 bg-neutral-50 p-6 text-left"
      style={{ opacity: 0, animationDelay: delay }}
    >
      <BadgeCheck className="h-6 w-6 text-amber-700" />
      <p className="mt-5 text-base leading-7 text-neutral-800">"{testimonial.quote}"</p>
      <div className="mt-6 border-t border-neutral-200 pt-4">
        <p className="font-semibold text-neutral-950">{testimonial.person}</p>
        <p className="text-sm text-neutral-500">{testimonial.location}</p>
      </div>
    </article>
  );
}

function TeamCard({ member, delay }) {
  return (
    <article
      className="animate-fade-in-up overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm"
      style={{ opacity: 0, animationDelay: delay }}
    >
      <div className="aspect-[3/4] bg-neutral-100">
        <img src={member.image} alt={member.name} className="h-full w-full object-cover object-top" />
      </div>
      <div className="p-4 text-left">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">{member.role}</p>
        <h3 className="mt-1 text-lg font-semibold text-neutral-950">{member.name}</h3>
      </div>
    </article>
  );
}

function ContactLine({ icon: Icon, text, href }) {
  const content = (
    <>
      <Icon className="h-4 w-4 shrink-0 text-amber-300" />
      <span>{text}</span>
    </>
  );

  if (href) {
    return (
      <a href={href} className="flex items-center gap-3 transition-colors hover:text-white">
        {content}
      </a>
    );
  }

  return <p className="flex items-center gap-3">{content}</p>;
}

export default App;
