import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function CaseStudyModal({ open, onClose }) {
  const handleClose = () => {
    onClose?.();
  };

  useEffect(() => {
    if (!open) return;

    /** @param {KeyboardEvent} e */
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };

    document.addEventListener("keydown", onKey);

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  const titleMap = {
    hit: "Health of IT (HIT)",
    chatbots: "AI/ML Chatbot Containerization",
    hotlist: "HotList Search Service",
    mire: "MIRE File Viewer",
  };

  const title = titleMap[open] ?? "Case Study";

  return createPortal(
    <div
      className="
        fixed inset-0 z-60 flex items-center justify-center p-4 sm:p-6
        h-screen supports-[height:100dvh]:h-dvh
        overflow-y-auto overscroll-contain
        pt-[env(safe-area-inset-top)]
        pb-[env(safe-area-inset-bottom)]
      "
      style={{ touchAction: "pan-y" }}
    >
      {/* Overlay */}
      <button
        type="button"
        aria-label="Close dialog"
        onClick={handleClose}
        className="absolute inset-0 bg-black/30 dark:bg-black/50 backdrop-blur-[2px]"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label={`${title}: Case Study`}
        className="
          relative z-70 w-full max-w-3xl rounded-2xl p-6 shadow-2xl
          ring-1 ring-black/10 dark:ring-white/10
          bg-white/65 dark:bg-zinc-900/70
          backdrop-blur-lg
          max-h-[90dvh] overflow-y-auto
        "
      >
        {/* Sticky header */}
        <div className="sticky top-0 z-10 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md rounded-full p-2">
          <div className="grid grid-cols-3 items-center">
            <span />
            <h3 className="text-xl font-semibold text-center">{title}</h3>
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close dialog"
              className="justify-self-end rounded-full p-2 hover:bg-black/5 dark:hover:bg-white/10"
            >
              ✕
            </button>
          </div>
        </div>

        {/* ===================== HIT CASE STUDY ===================== */}
        {open === "hit" && (
          <>
            <p className="mt-3 text-sm opacity-90">
              <strong>Case Study</strong>
              <br />
              Enterprise microservices platform for real-time product health, alerts, and a web
              dashboard. Built on .NET 8 Azure Functions with Cosmos DB and Azure Service Bus,
              deployed via Terraform and Azure Pipelines.
            </p>

            <div className="mt-5 rounded-xl p-4 ring-1 ring-black/5 dark:ring-white/10 bg-white/90 dark:bg-zinc-900/60">
              <p className="text-xs mb-2 font-medium opacity-70">Landscape Architecture</p>

              <svg viewBox="0 0 1080 620" className="w-full max-w-5xl mx-auto">
                <defs>
                  <linearGradient id="g1" x1="0" x2="1">
                    <stop offset="0%" stopColor="#f69fae" />
                    <stop offset="100%" stopColor="#9fa7ff" />
                  </linearGradient>
                  <linearGradient id="g2" x1="0" x2="1">
                    <stop offset="0%" stopColor="#ffbb99" />
                    <stop offset="100%" stopColor="#d1c2ff" />
                  </linearGradient>
                </defs>

                {/* UI (left) */}
                <rect x="24" y="70" width="160" height="100" rx="12" fill="url(#g1)" opacity=".16" stroke="currentColor" strokeOpacity=".25" />
                <text x="104" y="122" textAnchor="middle" className="fill-current text-[12px]">Dashboard UI</text>

                {/* Subnet: Gateway */}
                <rect x="210" y="52" width="200" height="140" rx="16" fill="url(#g2)" opacity=".12" stroke="currentColor" strokeOpacity=".35" strokeDasharray="6 6" />
                <text x="310" y="72" textAnchor="middle" className="fill-current text-[12px]">Subnet</text>

                {/* SHARED RG: Core Services */}
                <rect x="430" y="20" width="620" height="320" rx="16" fill="url(#g2)" opacity=".10" stroke="currentColor" strokeOpacity=".45" strokeDasharray="8 6" />
                <text x="740" y="40" textAnchor="middle" className="fill-current text-[12px] font-medium">Subnet</text>

                {/* SHARED RG: Data */}
                <rect x="470" y="350" width="220" height="200" rx="16" fill="url(#g2)" opacity=".10" stroke="currentColor" strokeOpacity=".45" strokeDasharray="8 6" />
                <text x="580" y="368" textAnchor="middle" className="fill-current text-[12px] font-medium">Shared Resource Group</text>

                {/* Outputs / External */}
                <rect x="880" y="360" width="170" height="145" rx="16" fill="url(#g2)" opacity=".10" stroke="currentColor" strokeOpacity=".35" strokeDasharray="6 6" />
                <text x="965" y="378" textAnchor="middle" className="fill-current text-[12px]">External Outputs</text>

                {/* Gateway */}
                <rect x="240" y="98" width="140" height="70" rx="10" fill="url(#g1)" opacity=".25" />
                <text x="310" y="131" textAnchor="middle" className="fill-current text-[12px]">core-gateway (exp)</text>

                {/* Notification: EXP / PRC / SYS */}
                <rect x="460" y="84" width="120" height="46" rx="10" fill="url(#g1)" opacity=".25" />
                <text x="520" y="110" textAnchor="middle" className="fill-current text-[12px]">notification (exp)</text>
                <rect x="460" y="136" width="120" height="46" rx="10" fill="url(#g1)" opacity=".25" />
                <text x="520" y="162" textAnchor="middle" className="fill-current text-[12px]">notification (prc)</text>
                <rect x="460" y="188" width="120" height="46" rx="10" fill="url(#g1)" opacity=".25" />
                <text x="520" y="214" textAnchor="middle" className="fill-current text-[12px]">notification (sys)</text>

                {/* Product: EXP / PRC / SYS */}
                <rect x="590" y="84" width="120" height="46" rx="10" fill="url(#g1)" opacity=".25" />
                <text x="650" y="110" textAnchor="middle" className="fill-current text-[12px]">product (exp)</text>
                <rect x="590" y="136" width="120" height="46" rx="10" fill="url(#g1)" opacity=".25" />
                <text x="650" y="162" textAnchor="middle" className="fill-current text-[12px]">product (prc)</text>
                <rect x="590" y="188" width="120" height="46" rx="10" fill="url(#g1)" opacity=".25" />
                <text x="650" y="214" textAnchor="middle" className="fill-current text-[12px]">product (sys)</text>

                {/* Group: EXP / PRC / SYS */}
                <rect x="720" y="84" width="120" height="46" rx="10" fill="url(#g1)" opacity=".25" />
                <text x="780" y="110" textAnchor="middle" className="fill-current text-[12px]">group (exp)</text>
                <rect x="720" y="136" width="120" height="46" rx="10" fill="url(#g1)" opacity=".25" />
                <text x="780" y="162" textAnchor="middle" className="fill-current text-[12px]">group (prc)</text>
                <rect x="720" y="188" width="120" height="46" rx="10" fill="url(#g1)" opacity=".25" />
                <text x="780" y="214" textAnchor="middle" className="fill-current text-[12px]">group (sys)</text>

                {/* User: EXP / PRC / SYS */}
                <rect x="850" y="84" width="120" height="46" rx="10" fill="url(#g1)" opacity=".25" />
                <text x="910" y="110" textAnchor="middle" className="fill-current text-[12px]">user (exp)</text>
                <rect x="850" y="136" width="120" height="46" rx="10" fill="url(#g1)" opacity=".25" />
                <text x="910" y="162" textAnchor="middle" className="fill-current text-[12px]">user (prc)</text>
                <rect x="850" y="188" width="120" height="46" rx="10" fill="url(#g1)" opacity=".25" />
                <text x="910" y="214" textAnchor="middle" className="fill-current text-[12px]">user (sys)</text>

                {/* Core Mail (SYS only) */}
                <rect x="720" y="252" width="250" height="48" rx="10" fill="url(#g1)" opacity=".25" />
                <text x="845" y="280" textAnchor="middle" className="fill-current text-[12px]">core-mail (sys)</text>

                {/* Application Insights */}
                <rect x="500" y="378" width="160" height="46" rx="10" fill="url(#g1)" opacity=".25" />
                <text x="580" y="405" textAnchor="middle" className="fill-current text-[12px]">Application Insights</text>

                {/* App Configuration */}
                <rect x="500" y="430" width="160" height="46" rx="10" fill="url(#g1)" opacity=".25" />
                <text x="580" y="457" textAnchor="middle" className="fill-current text-[12px]">App Configuration</text>

                {/* Key Vault */}
                <rect x="500" y="482" width="160" height="46" rx="10" fill="url(#g1)" opacity=".25" />
                <text x="580" y="509" textAnchor="middle" className="fill-current text-[12px]">Key Vault</text>

                {/* External: M365 + Email */}
                <rect x="900" y="392" width="120" height="44" rx="8" fill="url(#g1)" opacity=".25" />
                <text x="960" y="418" textAnchor="middle" className="fill-current text-[12px]">M365</text>
                <rect x="900" y="444" width="120" height="44" rx="8" fill="url(#g1)" opacity=".25" />
                <text x="960" y="470" textAnchor="middle" className="fill-current text-[12px]">Email</text>

                {/* Arrows */}
                <line x1="184" y1="120" x2="240" y2="130" stroke="currentColor" strokeWidth="2" />
                <polygon points="240,130 232,125 232,135" fill="currentColor" />
                <line x1="380" y1="130" x2="460" y2="107" stroke="currentColor" strokeWidth="2" />
                <polygon points="460,107 452,102 452,112" fill="currentColor" />
                <line x1="650" y1="214" x2="580" y2="388" stroke="currentColor" strokeWidth="2" />
                <polygon points="580,388 575,382 585,382" fill="currentColor" />
                <line x1="520" y1="212" x2="560" y2="388" stroke="currentColor" strokeWidth="2" opacity=".7" />
                <polygon points="560,388 555,382 565,382" fill="currentColor" opacity=".7" />
                <line x1="780" y1="212" x2="620" y2="388" stroke="currentColor" strokeWidth="2" opacity=".5" />
                <line x1="910" y1="212" x2="640" y2="388" stroke="currentColor" strokeWidth="2" opacity=".5" />
                <line x1="845" y1="300" x2="960" y2="392" stroke="currentColor" strokeWidth="2" />
                <polygon points="960,392 952,388 952,396" fill="currentColor" />
                <line x1="845" y1="300" x2="960" y2="444" stroke="currentColor" strokeWidth="2" />
                <polygon points="960,444 952,440 952,448" fill="currentColor" />
              </svg>
            </div>

            <div className="mt-5 grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold">My role</p>
                <ul className="list-disc ml-5 mt-1 space-y-1">
                  <li>Owned 12+ .NET 8 microservices end-to-end</li>
                  <li>Designed REST APIs with OpenAPI</li>
                  <li>Cosmos DB modeling &amp; Service Bus messaging</li>
                  <li>Observability (structured logging, envelopes)</li>
                  <li>CI/CD with Terraform + Azure Pipelines</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">Impact</p>
                <ul className="list-disc ml-5 mt-1 space-y-1">
                  <li>Cut content-update effort on dashboard by ~60%</li>
                  <li>80%+ unit test coverage (NUnit/Moq)</li>
                  <li>Faster root-cause analysis via cross-service traceability</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {[
                ".NET 8", "Azure Functions", "Cosmos DB", "Service Bus",
                "Terraform", "Azure Pipelines", "OpenAPI", "Vue.js", "NUnit", "Moq", "Logging",
              ].map((t) => (
                <span key={t} className="text-xs px-2 py-1 rounded-full bg-black/4 dark:bg-white/8 ring-1 ring-black/5 dark:ring-white/10">{t}</span>
              ))}
            </div>

            <p className="mt-4 text-[12px] opacity-70">
              *UI and proprietary details omitted to respect company confidentiality. Happy to discuss
              system design and lessons learned.
            </p>
          </>
        )}

        {/* ===================== CHATBOTS CASE STUDY ===================== */}
        {open === "chatbots" && (
          <>
            <p className="mt-3 text-sm opacity-90">
              <strong>Case Study</strong>
              <br />
              Modernizing internal AI chatbot tools by containerizing multiple DataRobot-backed
              Streamlit apps, aligning environments, and preparing services for Kubernetes.
            </p>

            <div className="mt-5 rounded-xl p-4 ring-1 ring-black/5 dark:ring-white/10 bg-white/90 dark:bg-zinc-900/60">
              <p className="text-xs mb-2 font-medium opacity-70">High-Level Architecture</p>

              <svg viewBox="0 0 960 420" className="w-full max-w-4xl mx-auto">
                <defs>
                  <linearGradient id="cb1" x1="0" x2="1">
                    <stop offset="0%" stopColor="#f6a6c9" />
                    <stop offset="100%" stopColor="#b5c6ff" />
                  </linearGradient>
                  <linearGradient id="cb2" x1="0" x2="1">
                    <stop offset="0%" stopColor="#ffd9a8" />
                    <stop offset="100%" stopColor="#decfff" />
                  </linearGradient>
                </defs>

                {/* User / Browser */}
                <rect x="40" y="70" width="160" height="90" rx="12" fill="url(#cb1)" opacity=".18" stroke="currentColor" strokeOpacity=".25" />
                <text x="120" y="110" textAnchor="middle" className="fill-current text-[12px]">Analysts / Stakeholders</text>
                <text x="120" y="126" textAnchor="middle" className="fill-current text-[11px] opacity-85">Browser / Intranet</text>

                {/* Docker Host */}
                <rect x="250" y="40" width="360" height="230" rx="16" fill="url(#cb2)" opacity=".14" stroke="currentColor" strokeOpacity=".35" strokeDasharray="6 6" />
                <text x="430" y="64" textAnchor="middle" className="fill-current text-[12px] font-medium">Docker Host / Future K8s Node</text>

                {/* Compose Services */}
                <rect x="280" y="90" width="140" height="60" rx="10" fill="url(#cb1)" opacity=".28" />
                <text x="350" y="118" textAnchor="middle" className="fill-current text-[12px]">chatbot-ui-1</text>
                <rect x="420" y="90" width="140" height="60" rx="10" fill="url(#cb1)" opacity=".28" />
                <text x="490" y="118" textAnchor="middle" className="fill-current text-[12px]">chatbot-ui-2</text>
                <rect x="280" y="160" width="140" height="60" rx="10" fill="url(#cb1)" opacity=".28" />
                <text x="350" y="188" textAnchor="middle" className="fill-current text-[12px]">shared-proxy</text>
                <rect x="420" y="160" width="140" height="60" rx="10" fill="url(#cb1)" opacity=".28" />
                <text x="490" y="188" textAnchor="middle" className="fill-current text-[12px]">logging-sidecar</text>

                {/* DataRobot / Models */}
                <rect x="650" y="70" width="250" height="180" rx="16" fill="url(#cb2)" opacity=".14" stroke="currentColor" strokeOpacity=".35" strokeDasharray="6 6" />
                <text x="775" y="96" textAnchor="middle" className="fill-current text-[12px] font-medium">DataRobot / Model APIs</text>
                <rect x="680" y="120" width="190" height="50" rx="10" fill="url(#cb1)" opacity=".28" />
                <text x="775" y="148" textAnchor="middle" className="fill-current text-[12px]">ML prediction endpoints</text>

                {/* Arrows */}
                <line x1="200" y1="115" x2="280" y2="120" stroke="currentColor" strokeWidth="2" />
                <polygon points="280,120 272,115 272,125" fill="currentColor" />
                <line x1="560" y1="120" x2="680" y2="135" stroke="currentColor" strokeWidth="2" />
                <polygon points="680,135 672,130 672,140" fill="currentColor" />
              </svg>
            </div>

            <div className="mt-5 grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold">My role</p>
                <ul className="list-disc ml-5 mt-1 space-y-1">
                  <li>Containerized multiple Streamlit chatbot apps</li>
                  <li>Designed Docker Compose for local orchestration</li>
                  <li>Standardized environment variables and secrets patterns</li>
                  <li>Aligned image structure for future Kubernetes deployment</li>
                  <li>Collaborated with data science team using DataRobot</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">Impact</p>
                <ul className="list-disc ml-5 mt-1 space-y-1">
                  <li>Reduced "works on my machine" issues across dev machines</li>
                  <li>Improved onboarding with single-command spin-up</li>
                  <li>Created a repeatable pattern for future AI tools</li>
                  <li>Laid groundwork for centralized K8s hosting</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              {["Docker", "Docker Compose", "Streamlit", "Python", "DataRobot", "Containerization", "DevEx"].map((t) => (
                <span key={t} className="px-2 py-1 rounded-full bg-black/4 dark:bg-white/8 ring-1 ring-black/5 dark:ring-white/10">{t}</span>
              ))}
            </div>

            <p className="mt-4 text-[12px] opacity-70">
              *Screenshots and internal endpoints omitted to respect company confidentiality.
            </p>
          </>
        )}

        {/* ===================== HOTLIST CASE STUDY ===================== */}
        {open === "hotlist" && (
          <>
            <p className="mt-3 text-sm opacity-90">
              <strong>Case Study</strong>
              <br />
              SYS-layer .NET 8 service for HotList customer search. Runs as an Azure Function,
              validates flexible multi-field search requests, queries customer data in SQL Server,
              and uses Azure platform services (Application Insights, Key Vault, App Configuration)
              to support observability and secure configuration for the experience layer.
            </p>

            <div className="mt-5 rounded-xl p-4 ring-1 ring-black/5 dark:ring-white/10 bg-white/90 dark:bg-zinc-900/60">
              <p className="text-xs mb-2 font-medium opacity-70">High-Level Architecture</p>

              <p className="text-[12px] opacity-80 mb-3">
                HotList is implemented as an Azure Functions-based SYS service that sits behind the
                EXP layer. It connects to SQL Server for internal customer records while relying on
                Azure Application Insights for telemetry, Key Vault for secrets, and App
                Configuration for environment-specific settings.
              </p>

              <svg viewBox="0 0 1080 500" className="w-full max-w-5xl mx-auto">
                <defs>
                  <linearGradient id="gl-pink" x1="0" x2="1">
                    <stop offset="0%" stopColor="#f7a3be" />
                    <stop offset="100%" stopColor="#c6b4ff" />
                  </linearGradient>
                  <linearGradient id="gl-yellow" x1="0" x2="1">
                    <stop offset="0%" stopColor="#ffd4a6" />
                    <stop offset="100%" stopColor="#dfd1ff" />
                  </linearGradient>
                </defs>

                {/* EXP Layer */}
                <rect x="40" y="80" width="260" height="120" rx="14" fill="url(#gl-pink)" opacity=".18" stroke="currentColor" strokeOpacity=".25" />
                <text x="170" y="110" textAnchor="middle" className="fill-current text-[12px] font-medium">Experience Layer (EXP)</text>
                <text x="170" y="150" textAnchor="middle" className="fill-current text-[12px] opacity-80">API Gateway</text>

                {/* SYS Layer */}
                <rect x="350" y="40" width="380" height="240" rx="18" fill="url(#gl-yellow)" opacity=".15" stroke="currentColor" strokeOpacity=".35" strokeDasharray="6 6" />
                <text x="540" y="68" textAnchor="middle" className="fill-current text-[12px] font-medium">System Layer (SYS) — Azure Functions</text>

                <rect x="380" y="120" width="160" height="50" rx="10" fill="url(#gl-pink)" opacity=".25" />
                <text x="460" y="150" textAnchor="middle" className="fill-current text-[12px]">Request Validation</text>

                <rect x="560" y="120" width="140" height="50" rx="10" fill="url(#gl-pink)" opacity=".25" />
                <text x="630" y="150" textAnchor="middle" className="fill-current text-[12px]">Search Service</text>

                <rect x="480" y="190" width="160" height="50" rx="10" fill="url(#gl-pink)" opacity=".25" />
                <text x="560" y="220" textAnchor="middle" className="fill-current text-[12px]">Repository Layer</text>

                {/* Data Sources */}
                <rect x="770" y="90" width="260" height="160" rx="14" fill="url(#gl-pink)" opacity=".16" stroke="currentColor" strokeOpacity=".25" />
                <text x="900" y="118" textAnchor="middle" className="fill-current text-[12px] font-medium">Customer Data Sources</text>
                <text x="900" y="155" textAnchor="middle" className="fill-current text-[12px] opacity-80">SQL Server</text>

                {/* Azure Platform Services */}
                <rect x="370" y="310" width="340" height="140" rx="16" fill="url(#gl-yellow)" opacity=".14" stroke="currentColor" strokeOpacity=".35" strokeDasharray="6 6" />
                <text x="540" y="335" textAnchor="middle" className="fill-current text-[12px] font-medium">Azure Platform Services</text>

                <rect x="390" y="350" width="140" height="40" rx="10" fill="url(#gl-pink)" opacity=".25" />
                <text x="460" y="375" textAnchor="middle" className="fill-current text-[12px]">App Insights</text>

                <rect x="550" y="350" width="140" height="40" rx="10" fill="url(#gl-pink)" opacity=".25" />
                <text x="620" y="375" textAnchor="middle" className="fill-current text-[12px]">Key Vault</text>

                <rect x="470" y="400" width="140" height="40" rx="10" fill="url(#gl-pink)" opacity=".25" />
                <text x="540" y="425" textAnchor="middle" className="fill-current text-[12px]">App Config</text>

                {/* Arrows */}
                <line x1="300" y1="140" x2="380" y2="145" stroke="currentColor" strokeWidth="2" />
                <polygon points="380,145 372,140 372,150" fill="currentColor" />
                <line x1="540" y1="170" x2="540" y2="190" stroke="currentColor" strokeWidth="2" />
                <polygon points="540,190 534,184 546,184" fill="currentColor" />
                <line x1="720" y1="145" x2="770" y2="150" stroke="currentColor" strokeWidth="2" />
                <polygon points="770,150 762,145 762,155" fill="currentColor" />
                <line x1="540" y1="240" x2="540" y2="350" stroke="currentColor" strokeWidth="2" opacity=".6" />
                <polygon points="540,350 534,344 546,344" fill="currentColor" opacity=".6" />
              </svg>
            </div>

            <div className="mt-5 grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold">My role</p>
                <ul className="list-disc ml-5 mt-1 space-y-1">
                  <li>Owned the SYS-layer implementation for the HotList customer search microservice</li>
                  <li>Implemented conditional, multi-field validation supporting regulated high-risk customer screening</li>
                  <li>Defined clear DTO boundaries to separate EXP → SYS → repository responsibilities</li>
                  <li>Developed customer matching logic across multiple SQL Server tables</li>
                  <li>Authored implementation-pattern documentation for securely connecting Azure Functions to SQL Server</li>
                  <li>Integrated Application Insights, Key Vault, and App Configuration for telemetry, secrets, and environment management</li>
                  <li>Mentored a teammate through building the EXP layer, from project structure and config to API alignment and deployment</li>
                  <li>Wrote NUnit/Moq tests for validation, business logic, mapping, and no-match cases</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">Impact</p>
                <ul className="list-disc ml-5 mt-1 space-y-1">
                  <li>Improved reliability through strict yet flexible request validation</li>
                  <li>Standardized response models for consistent EXP-layer consumption</li>
                  <li>Reduced ambiguity with structured error outputs and cleaner null suppression</li>
                  <li>Established a secure, observable Azure Functions pattern leveraging App Insights, Key Vault, and App Configuration</li>
                  <li>Delivered OpenAPI/Swagger documentation to align partner teams and streamline integration</li>
                  <li>Provided repeatable SQL Server implementation guidance for future microservices</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              {[
                ".NET 8", "Azure Functions", "SQL Server", "Repository Pattern",
                "Application Insights", "Key Vault", "App Configuration", "Clean Architecture",
                "SYS/EXP Layers", "DTOs", "Validation", "NUnit", "Moq", "OpenAPI/Swagger", "Error Handling",
              ].map((t) => (
                <span key={t} className="px-2 py-1 rounded-full bg-black/4 dark:bg-white/8 ring-1 ring-black/5 dark:ring-white/10">{t}</span>
              ))}
            </div>

            <p className="mt-4 text-[12px] opacity-70">
              *Internal schemas, PII-handling rules, and matching heuristics omitted for confidentiality.
            </p>
          </>
        )}

        {/* ===================== MIRE CASE STUDY ===================== */}
        {open === "mire" && (
          <>
            <p className="mt-3 text-sm opacity-90">
              <strong>Case Study</strong>
              <br />
              A browser-based internal file viewer replacing legacy Synergy desktop software,
              built solo across five services. Internal users, primarily Loan Servicing, Levy
              and Subpoena, and related departments, can search for filed reports, preview
              documents in-browser, and navigate results without downloading files or using
              a separate desktop application.
            </p>

            <div className="mt-5 rounded-xl p-4 ring-1 ring-black/5 dark:ring-white/10 bg-white/90 dark:bg-zinc-900/60">
              <p className="text-xs mb-2 font-medium opacity-70">Architecture Overview</p>

              <svg viewBox="0 0 1080 480" className="w-full max-w-5xl mx-auto">
                <defs>
                  <linearGradient id="sy1" x1="0" x2="1">
                    <stop offset="0%" stopColor="#f69fae" />
                    <stop offset="100%" stopColor="#9fa7ff" />
                  </linearGradient>
                  <linearGradient id="sy2" x1="0" x2="1">
                    <stop offset="0%" stopColor="#ffbb99" />
                    <stop offset="100%" stopColor="#d1c2ff" />
                  </linearGradient>
                </defs>

                {/* User */}
                <rect x="20" y="190" width="120" height="60" rx="12"
                  fill="url(#sy1)" opacity=".18"
                  stroke="currentColor" strokeOpacity=".25" />
                <text x="80" y="217" textAnchor="middle" className="fill-current text-[12px] font-medium">Bank User</text>
                <text x="80" y="233" textAnchor="middle" className="fill-current text-[11px] opacity-75">Browser</text>

                {/* AKS cluster boundary */}
                <rect x="160" y="50" width="740" height="340" rx="18"
                  fill="url(#sy2)" opacity=".10"
                  stroke="currentColor" strokeOpacity=".40" strokeDasharray="7 5" />
                <text x="530" y="74" textAnchor="middle" className="fill-current text-[12px] font-medium">AKS Cluster/Helm chart</text>

                {/* vly-mire-ui */}
                <rect x="190" y="185" width="145" height="70" rx="10"
                  fill="url(#sy1)" opacity=".28" />
                <text x="262" y="213" textAnchor="middle" className="fill-current text-[12px] font-medium">vly-mire-ui</text>
                <text x="262" y="229" textAnchor="middle" className="fill-current text-[11px] opacity-75">Vue 3 + nginx</text>
                <text x="262" y="244" textAnchor="middle" className="fill-current text-[10px] opacity-60">SPA · /api proxy</text>

                {/* vly-mire-exp */}
                <rect x="375" y="90" width="155" height="70" rx="10"
                  fill="url(#sy1)" opacity=".28" />
                <text x="452" y="118" textAnchor="middle" className="fill-current text-[12px] font-medium">vly-mire-exp</text>
                <text x="452" y="134" textAnchor="middle" className="fill-current text-[11px] opacity-75">ASP.NET Core (EXP)</text>
                <text x="452" y="149" textAnchor="middle" className="fill-current text-[10px] opacity-60">Reports · Files · SAS</text>

                {/* vly-mire-prc */}
                <rect x="375" y="200" width="155" height="70" rx="10"
                  fill="url(#sy1)" opacity=".28" />
                <text x="452" y="228" textAnchor="middle" className="fill-current text-[12px] font-medium">vly-mire-prc</text>
                <text x="452" y="244" textAnchor="middle" className="fill-current text-[11px] opacity-75">ASP.NET Core (PRC)</text>
                <text x="452" y="259" textAnchor="middle" className="fill-current text-[10px] opacity-60">Promoted from EXP</text>

                {/* vly-mire-sys */}
                <rect x="375" y="310" width="155" height="60" rx="10"
                  fill="url(#sy1)" opacity=".28" />
                <text x="452" y="336" textAnchor="middle" className="fill-current text-[12px] font-medium">vly-mire-sys</text>
                <text x="452" y="352" textAnchor="middle" className="fill-current text-[11px] opacity-75">SQL Server schemas</text>

                {/* vly-blob-file-sys */}
                <rect x="570" y="200" width="155" height="70" rx="10"
                  fill="url(#sy1)" opacity=".28" />
                <text x="647" y="228" textAnchor="middle" className="fill-current text-[12px] font-medium">vly-blob-file-sys</text>
                <text x="647" y="244" textAnchor="middle" className="fill-current text-[11px] opacity-75">Blob File Service</text>
                <text x="647" y="259" textAnchor="middle" className="fill-current text-[10px] opacity-60">SAS URL generation</text>

                {/* Azure Blob Storage */}
                <rect x="775" y="165" width="110" height="60" rx="10"
                  fill="url(#sy1)" opacity=".20"
                  stroke="currentColor" strokeOpacity=".25" />
                <text x="830" y="191" textAnchor="middle" className="fill-current text-[12px]">Azure Blob</text>
                <text x="830" y="207" textAnchor="middle" className="fill-current text-[11px] opacity-75">PDF · TXT files</text>

                {/* SQL Server */}
                <rect x="775" y="270" width="110" height="60" rx="10"
                  fill="url(#sy1)" opacity=".20"
                  stroke="currentColor" strokeOpacity=".25" />
                <text x="830" y="296" textAnchor="middle" className="fill-current text-[12px]">SQL Server</text>
                <text x="830" y="312" textAnchor="middle" className="fill-current text-[11px] opacity-75">Indexer · Mappings</text>

                {/* Entra ID */}
                <rect x="190" y="340" width="145" height="50" rx="10"
                  fill="url(#sy1)" opacity=".16"
                  stroke="currentColor" strokeOpacity=".20" />
                <text x="262" y="363" textAnchor="middle" className="fill-current text-[12px]">Entra ID</text>
                <text x="262" y="378" textAnchor="middle" className="fill-current text-[11px] opacity-75">SSO · OIDC</text>

                {/* Arrows */}
                <line x1="140" y1="220" x2="190" y2="220" stroke="currentColor" strokeWidth="2" />
                <polygon points="190,220 182,215 182,225" fill="currentColor" />

                <line x1="335" y1="210" x2="375" y2="155" stroke="currentColor" strokeWidth="2" />
                <polygon points="375,155 369,163 379,162" fill="currentColor" />

                <line x1="452" y1="160" x2="452" y2="200" stroke="currentColor" strokeWidth="2" />
                <polygon points="452,200 446,192 458,192" fill="currentColor" />

                <line x1="452" y1="270" x2="452" y2="310" stroke="currentColor" strokeWidth="2" />
                <polygon points="452,310 446,302 458,302" fill="currentColor" />

                <line x1="530" y1="235" x2="570" y2="235" stroke="currentColor" strokeWidth="2" />
                <polygon points="570,235 562,230 562,240" fill="currentColor" />

                <line x1="725" y1="222" x2="775" y2="205" stroke="currentColor" strokeWidth="2" />
                <polygon points="775,205 767,203 769,212" fill="currentColor" />

                <line x1="530" y1="335" x2="775" y2="305" stroke="currentColor" strokeWidth="2" />
                <polygon points="775,305 767,301 768,311" fill="currentColor" />

                <line x1="262" y1="255" x2="262" y2="340" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" opacity=".55" />
                <polygon points="262,340 256,332 268,332" fill="currentColor" opacity=".55" />
              </svg>
            </div>

            {/* DB schema callout */}
            <div className="mt-4 rounded-xl p-4 ring-1 ring-black/5 dark:ring-white/10 bg-white/90 dark:bg-zinc-900/60 text-sm">
              <p className="text-xs font-medium opacity-70 mb-2">SQL Server: Indexer Schema</p>
              <p className="text-xs opacity-80 mb-2">
                The database acts as a file index only, it stores metadata about where files live in blob
                storage, not the files themselves. Three tables drive the entire application.
              </p>
              <div className="grid md:grid-cols-3 gap-3 text-xs">
                <div>
                  <p className="font-semibold mb-1">Indexer</p>
                  <ul className="space-y-0.5 opacity-80">
                    <li>ApplicationName</li>
                    <li>ReportType</li>
                    <li>FiledAt</li>
                    <li>BlobPath → SAS URL</li>
                    <li>FileExtension</li>
                    <li>FileSizeBytes</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-1">AppReportTypeMapping</p>
                  <ul className="space-y-0.5 opacity-80">
                    <li>Drives report type dropdown</li>
                    <li>Validates app + type combos</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-1">UserPermissions</p>
                  <ul className="space-y-0.5 opacity-80">
                    <li>AD-based access control</li>
                    <li>Per-app permission scoping</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-5 grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold">UI features</p>
                <ul className="list-disc ml-5 mt-1 space-y-1">
                  <li>Search by application, report type, and date range with cascading dropdowns driven by <code>AppReportTypeMapping</code></li>
                  <li>Results list showing filename, type, date filed, and file size</li>
                  <li>In-browser PDF preview via pdf.js. no download required</li>
                  <li>In-browser TXT viewer with line numbers and in-file text search</li>
                  <li>Large-file warning for files 20-80 MB before preview is attempted</li>
                  <li>Light and dark mode toggle with Valley brand tokens</li>
                  <li>nginx serves the static Vue build and proxies <code>/api</code> to the EXP service</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">AKS &amp; deployment</p>
                <ul className="list-disc ml-5 mt-1 space-y-1">
                  <li>All five services containerized with Docker; multi-stage builds for the UI (Node → nginx)</li>
                  <li>Deployed via Helm chart: 2 deployments, 2 services, 1 ingress per environment</li>
                  <li>EXP and PRC environments share the same SYS-tier SQL Server and blob storage, no duplicate data stores</li>
                  <li>TLS via Azure Key Vault certificate URI in Helm values; ingress secret managed per service</li>
                  <li>Azure DevOps two-pipeline pattern: build (Docker image → ACR) and release (Helm upgrade → AKS) per service</li>
                  <li>Config injected per environment via <code>cfg/&lt;env&gt;-configuration.yaml</code>; secrets from Key Vault</li>
                  <li>MySQL platform config store for app settings; <code>DefaultAzureCredential</code> for blob client auth</li>
                  <li>SAS URL generation for blob file access using <code>StorageSharedKeyCredential</code></li>
                </ul>
              </div>
            </div>

            <div className="mt-5 grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold">My role</p>
                <ul className="list-disc ml-5 mt-1 space-y-1">
                  <li>Sole engineer across all five repos from design through production AKS deployment</li>
                  <li>Authored architecture documentation covering component overview, environment tiers, DB schema, and traffic flow</li>
                  <li>Built <code>ReportsController</code> and <code>FilesController</code> in the EXP layer with SQL queries</li>
                  <li>Implemented SAS URL generation and chunked blob streaming for large file support</li>
                  <li>Designed SQL Server schema and seed data for the SYS service</li>
                  <li>Built and wired all five Helm charts and Azure DevOps pipelines</li>
                  <li>Configured Entra ID OIDC SSO for auth-gated access</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">Impact</p>
                <ul className="list-disc ml-5 mt-1 space-y-1">
                  <li>Replaced legacy Synergy desktop software for Loan Servicing and Levy &amp; Subpoena teams</li>
                  <li>Eliminated manual, email-based file distribution workflows</li>
                  <li>Users can now search, filter, and preview files entirely in the browser</li>
                  <li>SSO-enforced access aligned with bank identity standards</li>
                  <li>Production-ready five-service system delivered as a solo engineer</li>
                  <li>Established a reusable AKS microservice + Helm pattern for future internal tools</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "Vue 3", "Vite", "nginx", "ASP.NET Core", ".NET 10", "C#",
                "Azure Blob Storage", "SAS URLs", "SQL Server", "Docker", "Helm",
                "AKS", "Entra ID", "OIDC", "Azure DevOps", "CI/CD", "EXP/PRC/SYS", "REST API", "pdf.js",
              ].map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 rounded-full bg-black/4 dark:bg-white/8 ring-1 ring-black/5 dark:ring-white/10"
                >
                  {t}
                </span>
              ))}
            </div>

            <p className="mt-4 text-[12px] opacity-70">
              *Internal blob structure, permission rules, and schema details omitted for confidentiality.
            </p>
          </>
        )}
      </div>
    </div>,
    document.body
  );
}