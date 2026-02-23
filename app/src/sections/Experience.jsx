"use client";

import { useEffect, useMemo, useState } from "react";
import BrandLogo from "@/components/BrandLogo";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";

/** ----------------------------
 *  Data
 *  ---------------------------- */
const ROLES = [
  {
    role: "Software Engineer",
    org: "Valley Bank",
    when: "Jan 2025 - now",
    logo: "vb",
    chips: [
      ".NET 8",
      "C#",
      "Azure Functions",
      "SQL Server",
      "Cosmos DB",
      "Microservices",
      "REST APIs",
      "OpenAPI/Swagger",
      "Clean Architecture",
      "Azure DevOps",
      "Terraform",
      "CI/CD",
      "Docker",
      "Kubernetes",
      "Application Insights",
      "Key Vault",
      "Service Bus",
      "NUnit",
      "Moq"
    ],
    impact: [
      "Developed the HotList customer search service using SQL Server, repository patterns, conditional validation, and regulated search rules",
      "Delivered 8+ .NET 8 Azure Function microservices supporting regulated product workflows, real-time health checks, and notification pipelines",
      "Integrated SQL Server and Cosmos DB to support data verification and product-health ingestion",
      "Integrated a TipTap rich text editor into the HIT dashboard to improve how internal teams format and send product-health notifications",
      "Built Terraform & Azure DevOps pipelines enabling repeatable, multi-environment deployments and automated infrastructure provisioning",
      "Improved reliability and observability through structured logging and 80%+ unit test coverage across key services",
      "Automated Python data-transformation workflows for ingesting and synchronizing product-health data into Cosmos DB",
    ]
  },
  {
    role: "Software Engineering Intern",
    org: "Valley Bank",
    when: "June 2024 - Dec 2024",
    logo: "vb",
    chips: ["Technical documentation"]
  },
  {
    role: "Software Engineer",
    org: "Thorlabs",
    when: "July 2023 - May 2024",
    logo: "thorlabs",
    chips: [
      "Mobile App Redesign",
      "Cross-Platform Development",
      "UI/UX Modernization",
      "Release Management",
      "Cross-Team Collaboration",
      "Swift (iOS)",
      "Java (Android)",
      "App Store & Play Store"
    ],
    impact: [
      "Led redesign and modernization of cross-platform optical calculator apps (iOS & Android) used by global customers",
      "Translated complex optical formulas into accurate, intuitive mobile interactions for non-technical users",
      "Owned release management across App Store and Google Play, including build pipelines, QA workflows, and versioning",
      "Collaborated with optics engineers, product teams, and QA to refine requirements and validate scientific accuracy"
    ]
  },
  {
    role: "Digital Platform Manager",
    org: "Automotive Specialty Wraps",
    when: "Mar 2023 - Nov 2023",
    logo: "asw",
    chips: [
      "Website Optimization",
      "UX Strategy",
      "Technical SEO",
      "Analytics & Insights",
      "Content Optimization",
      "Content Creation",
      "Blog Writing",
      "Conversion-Focused Design",
      "Social Media Management"
    ],
    impact: [
      "Improved website UX and navigation across desktop and mobile to reduce friction and strengthen lead generation",
      "Implemented technical SEO fixes, page speed optimizations, and keyword-driven improvements to increase organic visibility",
      "Produced photo/video content and wrote blog posts to support brand credibility, education, and search performance",
      "Used analytics, heatmaps, and customer behavior insights to refine landing pages, CTAs, and conversion flows",
      "Standardized content structure and on-site messaging to improve clarity, consistency, and user trust"
    ]
  },
  {
    role: "Senior Web Developer",
    org: "HIPB2B",
    when: "May 2013 - Mar 2023",
    logo: "hipb2b",
    chips: [
      "Frontend System Ownership",
      "High-Conversion Landing Pages",
      "SEO & Performance Optimization",
      "CMS Architecture",
      "Long-Term Client Support",
      "Responsive Design",
      "HTML5",
      "CSS3",
      "JavaScript",
      "PHP",
      "WordPress"
    ],
    impact: [
      "Owned frontend architecture for high-traffic marketing sites and landing pages powering hundreds of B2B demand-gen campaigns",
      "Built reusable HTML/CSS templates and modular PHP components to accelerate campaign delivery",
      "Optimized sites for SEO, page speed, and mobile experiences, improving conversion rates across multiple client verticals",
      "Led long-term client support, troubleshooting, and iterative enhancements across multi-year engagements",
      "Collaborated with design and operations teams to translate campaign goals into reliable, on-brand web experiences"
    ]
  },
  {
    role: "Owner, Wedding Photographer",
    org: "Caitee Smith Photography",
    when: "June 2018 - now",
    logo: "csp",
    chips: [
      "Creative Direction",
      "Operations Management",
      "Client Experience",
      "Workflow Automation",
      "Project Management",
      "Process Optimization",
      "Team Coordination",
      "High-Volume Editing",
      "Bookkeeping",
      "Content Strategy"
    ],
    impact: [
      "Run a full-service photography business delivering 15-30 weddings/year with consistently high client satisfaction",
      "Manage end-to-end operations including booking, timelines, day-of execution, editing workflows, and final delivery",
      "Handle all bookkeeping, invoicing, budgeting, and financial planning to maintain profitable operations",
      "Build automated client communication flows, service templates, and repeatable delivery processes",
      "Coordinate second shooters, vendors, and logistics to ensure smooth and on-time execution",
      "Deliver ~1,000 curated images per wedding with reliable, on-schedule turnaround"
    ]
  }
];

/** ----------------------------
 *  Date utils
 *  ---------------------------- */
const MONTHS = {
  jan: 0,
  feb: 1,
  mar: 2,
  apr: 3,
  may: 4,
  jun: 5,
  jul: 6,
  aug: 7,
  sep: 8,
  oct: 9,
  nov: 10,
  dec: 11,
};

function parseMonthYear(input) {
  const parts = input.trim().split(/\s+/);
  if (parts.length < 2) return null;

  const key = parts[0].slice(0, 3).toLowerCase(); // handles June/July/etc
  const month = MONTHS[key];
  const year = Number(parts[1]);

  if (month === undefined || Number.isNaN(year)) return null;
  return new Date(year, month, 1);
}

function parseWhenRange(when) {
  const [startRaw, endRaw] = when.split("-").map((s) => s.trim());
  const start = parseMonthYear(startRaw);

  const endText = (endRaw || "").toLowerCase();
  const isCurrent = !endRaw || endText === "now" || endText === "present";
  const end = isCurrent ? new Date() : parseMonthYear(endRaw);

  return { start, end, isCurrent };
}

function monthsInclusive(start, end) {
  const startIdx = start.getFullYear() * 12 + start.getMonth();
  const endIdx = end.getFullYear() * 12 + end.getMonth();
  return Math.max(1, endIdx - startIdx + 1);
}

function formatLinkedInTenure(totalMonths) {
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (years > 0 && months > 0) {
    return `${years} yr${years === 1 ? "" : "s"} ${months} mo${
      months === 1 ? "" : "s"
    }`;
  }
  if (years > 0) return `${years} yr${years === 1 ? "" : "s"}`;
  return `${Math.max(1, months)} mo${months === 1 ? "" : "s"}`;
}

function isCurrentRange(when) {
  const w = when.toLowerCase();
  return w.includes("now") || w.includes("present");
}

/** ----------------------------
 *  UI bits
 *  ---------------------------- */
function TenureChip({ when, tenureText }) {
  if (!tenureText) return null;
  const current = isCurrentRange(when);

  const base =
    "inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] shadow-sm";
  const currentCls = [
    "bg-gradient-to-r from-emerald-100/70 to-teal-100/70",
    "dark:from-emerald-900/30 dark:to-teal-900/30",
    "border border-emerald-200/70 dark:border-emerald-800/50",
    "text-emerald-900 dark:text-emerald-100",
  ].join(" ");
  const pastCls = [
    "bg-gradient-to-r from-pink-100/60 via-violet-100/60 to-amber-100/60",
    "dark:from-pink-900/25 dark:via-violet-900/25 dark:to-amber-900/25",
    "border border-white/60 dark:border-white/10",
    "text-gray-800 dark:text-gray-200",
  ].join(" ");

  return (
    <div
      className={`${base} ${current ? currentCls : pastCls}`}
      aria-label="Tenure"
    >
      {current && (
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
      )}
      <span className="font-medium">{current ? "Current" : "Tenure"}</span>
      <span className="font-mono tabular-nums">{tenureText}</span>
    </div>
  );
}

function HighlightsChips({ chips }) {
  const list = chips?.length
    ? chips
    : ["Ownership", "Cross-team collaboration", "Mentorship"];

  return (
    <div className="mt-2 flex flex-wrap gap-2" aria-label="Highlights">
      {list.map((s) => (
        <span
          key={s}
          className="px-2 py-1 text-[11px] rounded-full bg-gray-100 dark:bg-gray-800/60"
        >
          {s}
        </span>
      ))}
    </div>
  );
}

function ImpactRows({ items }) {
  if (!items?.length) return null;

  return (
    <div className="mt-3 space-y-1">
      {items.map((t, i) => (
        <div
          key={`${t}-${i}`}
          className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
        >
          <span className="mt-0.5 text-emerald-500">✓</span>
          <span>{t}</span>
        </div>
      ))}
    </div>
  );
}

function RoleStack({ items }) {
  if (!items?.length) return null;

  return (
    <div className="mt-3 rounded-xl border border-gray-200/60 dark:border-gray-800/60 bg-white/50 dark:bg-black/20">
      {items.map((it, i) => (
        <div
          key={`${it.role}-${it.when}-${i}`}
          className={[
            "flex items-center justify-between gap-3 px-3 py-2",
            i === 0
              ? ""
              : "border-t border-gray-200/60 dark:border-gray-800/60",
          ].join(" ")}
        >
          <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
            {it.role}
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400 whitespace-nowrap">
            {it.when}
          </div>
        </div>
      ))}
    </div>
  );
}

function RoleCard({ item, tenureText, childrenBottom }) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="mb-2">
        <CardTitle className="text-lg">{item.title}</CardTitle>
        <CardDescription>{item.subtitle}</CardDescription>
      </CardHeader>

      <CardContent className="flex items-start gap-3 pb-4">
        <BrandLogo name={item.logo} alt={item.subtitle} />

        <div className="space-y-2 flex-1">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {item.when}
          </p>

          <TenureChip when={item.when} tenureText={tenureText} />

          {childrenBottom ? (
            childrenBottom
          ) : (
            <>
              <HighlightsChips chips={item.chips} />
              <ImpactRows items={item.impact} />
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

/** ----------------------------
 *  Card builders
 *  ---------------------------- */
function buildValleyGroupCard(valleyRoles, nowTick) {
  const ranges = valleyRoles
    .map((r) => ({ r, parsed: parseWhenRange(r.when) }))
    .filter((x) => x.parsed.start && x.parsed.end);

  if (!ranges.length) return null;

  const starts = ranges.map((x) => x.parsed.start);
  const ends = ranges.map((x) =>
    x.parsed.isCurrent ? new Date(nowTick) : x.parsed.end
  );

  const overallStart = starts.reduce(
    (min, d) => (d < min ? d : min),
    starts[0]
  );
  const overallEnd = ends.reduce((max, d) => (d > max ? d : max), ends[0]);

  const overallTenure = formatLinkedInTenure(
    monthsInclusive(overallStart, overallEnd)
  );

  const mergedChips = Array.from(
    new Set(valleyRoles.flatMap((r) => r.chips || []))
  );

  const mergedImpact = Array.from(
    new Set(
      valleyRoles
        .flatMap((r) => r.impact || [])
        .map((x) => (typeof x === "string" ? x.trim() : ""))
        .filter(Boolean)
    )
  );

  const timeline = [...valleyRoles].sort((a, b) => {
    const pa = parseWhenRange(a.when);
    const pb = parseWhenRange(b.when);
    if (!pa.start || !pb.start) return 0;
    return pb.start - pa.start;
  });

  return {
    type: "group",
    key: "valley-bank-group",
    subtitle: "Valley Bank",
    title: "Software Engineer",
    when: "June 2024 - now",
    logo: "vb",
    chips: mergedChips,
    impact: mergedImpact,
    tenureOverride: overallTenure,
    timeline: timeline.map((t) => ({ role: t.role, when: t.when })),
  };
}

/** ----------------------------
 *  Page
 *  ---------------------------- */
export default function Experience() {
  const [nowTick, setNowTick] = useState(Date.now());

  useEffect(() => {
    const id = setInterval(() => setNowTick(Date.now()), 60 * 60 * 1000);
    return () => clearInterval(id);
  }, []);

  const cards = useMemo(() => {
    const valley = ROLES.filter((r) => r.org === "Valley Bank");
    const others = ROLES.filter((r) => r.org !== "Valley Bank");

    const valleyCard = valley.length
      ? buildValleyGroupCard(valley, nowTick)
      : null;

    const otherCards = others.map((r, idx) => ({
      type: "single",
      key: `${r.org}-${r.role}-${idx}`,
      title: r.role,
      subtitle: r.org,
      when: r.when,
      logo: r.logo,
      chips: r.chips,
      impact: r.impact,
    }));

    return valleyCard ? [valleyCard, ...otherCards] : otherCards;
  }, [nowTick]);

  const tenureByKey = useMemo(() => {
    const map = new Map();

    cards.forEach((c) => {
      if (c.tenureOverride) {
        map.set(c.key, c.tenureOverride);
        return;
      }

      const { start, end, isCurrent } = parseWhenRange(c.when);
      if (!start || !end) return;

      const effectiveEnd = isCurrent ? new Date(nowTick) : end;
      map.set(
        c.key,
        formatLinkedInTenure(monthsInclusive(start, effectiveEnd))
      );
    });

    return map;
  }, [cards, nowTick]);

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-3 gap-4">
        {cards.map((c) => {
          const tenureText = tenureByKey.get(c.key);

          if (c.type === "group") {
            return (
              <div key={c.key} className="md:col-span-2">
                <RoleCard
                  item={c}
                  tenureText={tenureText}
                  childrenBottom={
                    <>
                      <HighlightsChips chips={c.chips} />
                      <RoleStack items={c.timeline} />
                      <ImpactRows items={c.impact} />
                    </>
                  }
                />
              </div>
            );
          }

          return <RoleCard key={c.key} item={c} tenureText={tenureText} />;
        })}
      </div>
    </div>
  );
}
