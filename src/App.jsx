import React, { useEffect, useMemo, useState } from "react";
import {
  BarChart3,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  Rocket,
  Star,
  Users,
} from "lucide-react";

const tabs = [
  { id: "analyse", label: "Analyse", icon: BarChart3 },
  { id: "train", label: "Train", icon: BookOpen },
  { id: "testing", label: "Testing", icon: Users },
  { id: "deploy", label: "Deploy", icon: Rocket },
];

const videoSrc =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260319_165750_358b1e72-c921-48b7-aaac-f200994f32fb.mp4";

function App() {
  const [activeTab, setActiveTab] = useState("analyse");

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveTab((current) => {
        const currentIndex = tabs.findIndex((tab) => tab.id === current);
        return tabs[(currentIndex + 1) % tabs.length].id;
      });
    }, 4000);

    return () => window.clearInterval(interval);
  }, []);

  const activeOverlay = useMemo(() => <Overlay tab={activeTab} />, [activeTab]);

  return (
    <div className="min-h-screen bg-white text-black">
      <nav
        className="animate-fade-in-up mx-auto flex max-w-7xl items-center justify-between px-6 py-4"
        style={{ opacity: 0, animationDelay: "0.1s" }}
      >
        <a href="/" className="flex items-center gap-2" aria-label="Stellar.ai">
          <Star className="h-5 w-5 fill-black text-black" strokeWidth={1.8} />
          <span className="text-lg font-semibold">Stellar.ai</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <NavMenuItem label="Solutions" />
          <NavMenuItem label="For Teams" />
          <a href="/" className="text-sm text-gray-700 transition-colors hover:text-black">
            About Us
          </a>
          <a href="/" className="text-sm text-gray-700 transition-colors hover:text-black">
            Learn Hub
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a href="/" className="hidden text-sm text-gray-700 transition-colors hover:text-black sm:inline">
            Login
          </a>
          <a
            href="/"
            className="whitespace-nowrap rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-800"
          >
            Get started free
          </a>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-6 pt-24 pb-32 text-center">
        <div
          className="animate-fade-in-up mb-8 inline-flex items-center gap-2"
          style={{ opacity: 0, animationDelay: "0.2s" }}
        >
          <span className="flex h-6 w-6 items-center justify-center rounded border border-gray-300">
            <Star className="h-3.5 w-3.5 fill-black text-black" strokeWidth={1.6} />
          </span>
          <span className="text-sm font-medium text-black">4.9 rating from 18.3K+ users</span>
        </div>

        <h1
          className="animate-fade-in-up mb-5 text-6xl font-normal leading-[1.1] tracking-tight md:text-7xl lg:text-[80px]"
          style={{ opacity: 0, animationDelay: "0.3s" }}
        >
          Work Smarter. Move Faster.
          <br />
          <span className="bg-gradient-to-r from-black via-gray-500 to-gray-400 bg-clip-text text-transparent">
            AI Powers You Up.
          </span>
        </h1>

        <p
          className="animate-fade-in-up mx-auto mb-8 max-w-2xl text-lg text-gray-600 md:text-xl"
          style={{ opacity: 0, animationDelay: "0.4s" }}
        >
          Intelligent automation syncs with the tools you love to streamline tasks, boost output,
          and save time.
        </p>

        <div
          className="animate-fade-in-up mb-12"
          style={{ opacity: 0, animationDelay: "0.5s" }}
        >
          <a
            href="/"
            className="inline-flex rounded-full bg-black px-8 py-3 text-base font-medium text-white transition-colors hover:bg-gray-800"
          >
            Begin Free Trial
          </a>
        </div>

        <div
          className="animate-fade-in-up mx-auto mb-12 w-full max-w-2xl rounded-lg bg-gray-100 p-1"
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
                {index < tabs.length - 1 ? <span className="mx-1 h-5 w-px bg-gray-300" /> : null}
              </div>
            ))}
          </div>
        </div>

        <section
          className="animate-fade-in-up relative h-[400px] overflow-hidden rounded-3xl md:h-[500px]"
          style={{ opacity: 0, animationDelay: "0.7s" }}
          aria-label="Stellar.ai workspace preview"
        >
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="relative z-0 h-full w-full object-cover"
          />
          {activeOverlay}
        </section>

        <CompanyLogos />
      </main>
    </div>
  );
}

function NavMenuItem({ label }) {
  return (
    <a href="/" className="flex items-center gap-1 text-sm text-gray-700 transition-colors hover:text-black">
      {label}
      <ChevronDown className="h-3.5 w-3.5" strokeWidth={2} />
    </a>
  );
}

function TabButton({ tab, active, onClick }) {
  const Icon = tab.icon;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex h-11 min-w-[126px] items-center justify-center gap-2 rounded-md px-4 text-sm font-medium transition-all ${
        active ? "bg-white text-black shadow-sm" : "text-gray-600 hover:text-black"
      }`}
      aria-pressed={active}
    >
      <Icon className="h-4 w-4" strokeWidth={1.9} />
      {tab.label}
    </button>
  );
}

function Overlay({ tab }) {
  return (
    <div
      key={tab}
      className="animate-fade-in-overlay absolute inset-0 z-10 bg-black/20 opacity-0"
      aria-live="polite"
    >
      <div className="animate-slide-up-overlay absolute left-1/2 top-1/2 z-20 w-[88%] max-w-md rounded-2xl border border-white/30 bg-white/90 p-5 text-left shadow-2xl shadow-black/20 backdrop-blur-md md:p-6">
        {tab === "analyse" ? <AnalyseOverlay /> : null}
        {tab === "train" ? <TrainOverlay /> : null}
        {tab === "testing" ? <TestingOverlay /> : null}
        {tab === "deploy" ? <DeployOverlay /> : null}
      </div>
    </div>
  );
}

function AnalyseOverlay() {
  const steps = ["Connect tools", "Map workflows", "Assign AI agents", "Launch workspace"];

  return (
    <>
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-purple-600">
            Workspace setup
          </p>
          <h2 className="mt-1 text-xl font-semibold text-black">Set Up Your AI Workspace</h2>
        </div>
        <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-700">
          25%
        </span>
      </div>

      <div className="mb-5 h-2 overflow-hidden rounded-full bg-gray-200">
        <div className="h-full w-1/4 rounded-full bg-purple-600" />
      </div>

      <div className="space-y-3">
        {steps.map((step, index) => (
          <div key={step} className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white px-3 py-2.5">
            <span
              className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold ${
                index === 0 ? "bg-purple-600 text-white" : "bg-gray-100 text-gray-500"
              }`}
            >
              {index + 1}
            </span>
            <span className="text-sm font-medium text-gray-800">{step}</span>
          </div>
        ))}
      </div>
    </>
  );
}

function TrainOverlay() {
  const metrics = [
    ["Dataset sync", "92%"],
    ["Accuracy", "84%"],
    ["Latency", "128ms"],
    ["Signals", "41K"],
  ];

  return (
    <>
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-600">
            Model pipeline
          </p>
          <h2 className="mt-1 text-xl font-semibold text-black">AI Model Training</h2>
        </div>
        <span className="rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-700">
          67%
        </span>
      </div>

      <div className="mb-5 h-2 overflow-hidden rounded-full bg-gray-200">
        <div className="h-full w-[67%] rounded-full bg-orange-500" />
      </div>

      <div className="grid grid-cols-2 gap-3">
        {metrics.map(([label, value]) => (
          <div key={label} className="rounded-xl border border-gray-100 bg-white p-4">
            <p className="text-xs font-medium text-gray-500">{label}</p>
            <p className="mt-1 text-lg font-semibold text-black">{value}</p>
          </div>
        ))}
      </div>
    </>
  );
}

function TestingOverlay() {
  return (
    <>
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600">
            Quality gate
          </p>
          <h2 className="mt-1 text-xl font-semibold text-black">Test Suite Results</h2>
        </div>
        <CheckCircle2 className="h-9 w-9 text-emerald-500" strokeWidth={1.8} />
      </div>

      <div className="rounded-2xl bg-emerald-50 p-5">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm font-medium text-emerald-700">All checks passed</p>
            <p className="mt-2 text-4xl font-semibold text-black">127/127</p>
          </div>
          <span className="rounded-full bg-emerald-500 px-3 py-1 text-sm font-semibold text-white">
            Success
          </span>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs font-medium text-gray-600">
        <span className="rounded-lg bg-white px-2 py-2">API</span>
        <span className="rounded-lg bg-white px-2 py-2">UI</span>
        <span className="rounded-lg bg-white px-2 py-2">Security</span>
      </div>
    </>
  );
}

function DeployOverlay() {
  const items = ["Build optimized", "Secrets validated", "Rollback ready", "Monitoring active"];

  return (
    <>
      <div className="mb-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
          Release control
        </p>
        <h2 className="mt-1 text-xl font-semibold text-black">Deploy to Production</h2>
      </div>

      <div className="mb-5 space-y-3">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white px-3 py-2.5">
            <CheckCircle2 className="h-5 w-5 text-blue-500" strokeWidth={2} />
            <span className="text-sm font-medium text-gray-800">{item}</span>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="w-full rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
      >
        Deploy Now
      </button>
    </>
  );
}

function CompanyLogos() {
  return (
    <section
      className="animate-fade-in-up mt-24 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 text-gray-400"
      style={{ opacity: 0, animationDelay: "0.8s" }}
      aria-label="Company logos"
    >
      <span className="text-sm font-semibold tracking-[0.24em]">INTERSCOPE</span>
      <span className="text-sm font-bold tracking-tight">SPOTIFY</span>
      <span className="flex items-center gap-2 text-sm font-semibold">
        <span className="grid grid-cols-3 gap-0.5">
          {Array.from({ length: 9 }).map((_, index) => (
            <span key={index} className="h-1 w-1 rounded-full bg-gray-400" />
          ))}
        </span>
        Nexera
      </span>
      <span className="font-serif text-2xl italic">M3</span>
      <span className="flex items-center gap-2 text-sm font-semibold tracking-[0.18em]">
        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-[10px] tracking-normal">
          LC
        </span>
        LAURA COLE
      </span>
      <span className="flex items-center gap-2 text-sm font-semibold">
        <span className="flex items-center gap-0.5">
          <span className="h-1.5 w-1.5 rounded-full bg-gray-400" />
          <span className="h-1.5 w-1.5 rounded-full bg-gray-400" />
          <span className="h-1.5 w-1.5 rounded-full bg-gray-400" />
        </span>
        vertex
      </span>
    </section>
  );
}

export default App;
