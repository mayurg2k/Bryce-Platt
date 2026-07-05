// Mock data for Bryce Platt Executive Brand website

export const brand = {
  name: "Bryce Platt",
  credentials: "PharmD",
  titles: ["Healthcare Economist", "Drug Channel Expert", "Director, Drug Channels Institute"],
  tagline: "Helping healthcare leaders understand the incentives shaping U.S. healthcare.",
  followers: "37,000+",
  yearsPublishing: "4+",
};

export const authorityStats = [
  { label: "Healthcare Professionals Following", value: "37K+", sub: "On LinkedIn, growing daily" },
  { label: "Consecutive Days Publishing", value: "1,400+", sub: "Daily educational insights" },
  { label: "Director", value: "DCI", sub: "Drug Channels Institute" },
  { label: "Annual Content Impressions", value: "12M+", sub: "Across healthcare leadership" },
];

export const featuredInsights = [
  {
    id: "medicare-part-d-redesign-2025",
    category: "Medicare",
    readTime: "9 min read",
    date: "July 12, 2025",
    title: "Medicare Part D Redesign: What Actually Changed for Beneficiaries and Plans",
    summary: "The $2,000 out-of-pocket cap reshapes plan liability, manufacturer discounts, and formulary strategy. Here is the incentive map behind the headlines.",
    image: "https://images.unsplash.com/photo-1708685627299-81bfac32402d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHwzfHxoZWFsdGhjYXJlJTIwZWNvbm9taWNzfGVufDB8fHx8MTc4MzIwMzkwOXww&ixlib=rb-4.1.0&q=85",
  },
  {
    id: "pbm-transparency-reform",
    category: "PBMs",
    readTime: "11 min read",
    date: "July 8, 2025",
    title: "Why PBM Transparency Reform Rarely Lowers Drug Prices",
    summary: "Spread pricing, rebates, and vertical integration create a system where transparency alone cannot shift incentives. Follow the money instead.",
    image: "https://images.unsplash.com/photo-1690783782198-e3815ed6aac0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwZWNvbm9taWNzfGVufDB8fHx8MTc4MzIwMzkwOXww&ixlib=rb-4.1.0&q=85",
  },
  {
    id: "glp1-employer-strategy",
    category: "Employer Benefits",
    readTime: "7 min read",
    date: "July 3, 2025",
    title: "The GLP-1 Employer Dilemma: Coverage, Cost, and Long-Term Value",
    summary: "Employers face a compounding cost curve on obesity therapies. The strategic question is not whether to cover, but how to structure access.",
    image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwxfHxwaGFybWFjeSUyMG1lZGljaW5lfGVufDB8fHx8MTc4MzIwMzkwOXww&ixlib=rb-4.1.0&q=85",
  },
  {
    id: "specialty-pharmacy-nine-types",
    category: "Specialty Pharmacy",
    readTime: "13 min read",
    date: "June 27, 2025",
    title: "The Nine Types of Specialty Pharmacies, Explained",
    summary: "Not every specialty pharmacy is the same. This framework separates business models, ownership structures, and channel strategies.",
    image: "https://images.unsplash.com/photo-1702306946700-4cae9f2dfe82?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHw0fHxoZWFsdGhjYXJlJTIwZWNvbm9taWNzfGVufDB8fHx8MTc4MzIwMzkwOXww&ixlib=rb-4.1.0&q=85",
  },
  {
    id: "340b-drift",
    category: "340B",
    readTime: "8 min read",
    date: "June 21, 2025",
    title: "340B Program Drift: Why the Debate Keeps Getting Louder",
    summary: "Contract pharmacies, manufacturer restrictions, and hospital economics collide. The program has outgrown its original safety-net mandate.",
    image: "https://images.unsplash.com/photo-1628771065518-0d82f1938462?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwyfHxwaGFybWFjeSUyMG1lZGljaW5lfGVufDB8fHx8MTc4MzIwMzkwOXww&ixlib=rb-4.1.0&q=85",
  },
  {
    id: "drug-pricing-ecosystem",
    category: "Drug Pricing",
    readTime: "10 min read",
    date: "June 15, 2025",
    title: "The Real Anatomy of a U.S. Drug Price",
    summary: "List price. Net price. WAC. AWP. NADAC. A practical map of how a single prescription generates a dozen different prices along the way.",
    image: "https://images.pexels.com/photos/51929/medications-cure-tablets-pharmacy-51929.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];

// Article body sections (shared across featured articles for demo)
export const articleBody = [
  {
    id: "context",
    heading: "The Context",
    content: [
      "The United States pharmacy benefit landscape is shaped by three vertically-integrated organizations. Together, they touch nearly every prescription filled in America. To understand why reform efforts consistently under-deliver on price, we have to first understand the incentive architecture beneath the policy debate.",
      "Rebates, spread pricing, formulary placement, and network design are not accidents. They are the deliberate financial mechanisms through which the modern PBM captures margin. Any transparency effort that leaves these mechanisms intact will inevitably rearrange — rather than reduce — total drug spend.",
    ],
  },
  {
    id: "framework",
    heading: "The Framework",
    content: [
      "Consider a simple two-lens view. Lens one: the flow of product, from manufacturer to patient. Lens two: the flow of dollars, which frequently moves in the opposite direction. Where these two lenses diverge is exactly where value leaks and where reform proposals typically miss their target.",
      "In practice, this means most 'transparency' bills disclose the mechanics of dollar flow without changing the underlying incentive to steer product toward higher-rebate SKUs. The result is more paperwork, similar outcomes.",
    ],
  },
  {
    id: "implications",
    heading: "The Implications",
    content: [
      "Health plans, employer purchasers, and policymakers evaluating PBM reform should pressure-test proposals against a single question: does this change the direction of the money, or merely its visibility? If the answer is 'visibility only,' the reform is unlikely to lower net cost.",
      "The most effective reforms redirect the manufacturer discount into the point-of-sale transaction, delink PBM revenue from list price, or unbundle the fiduciary role from the negotiating role. Each of these carries operational trade-offs that deserve serious debate.",
    ],
  },
  {
    id: "what-next",
    heading: "What to Watch Next",
    content: [
      "Three signals to track over the next four quarters: (1) point-of-sale rebate legislation activity at the state level, (2) health-plan carve-out momentum among self-insured employers, and (3) the FTC follow-through on its 6(b) study. Each represents a distinct pathway through which incentives could meaningfully shift.",
    ],
  },
];

export const topics = [
  { name: "Drug Channels", count: 42, description: "How money, product, and incentives move through the supply chain." },
  { name: "PBMs", count: 38, description: "Pharmacy benefit manager economics, contracting, and reform." },
  { name: "Specialty Pharmacy", count: 31, description: "Business models, limited distribution, and site of care." },
  { name: "Medicare", count: 27, description: "Part D redesign, IRA, CMS policy, and beneficiary impact." },
  { name: "Drug Pricing", count: 24, description: "List, net, WAC, and the mechanics behind every dollar." },
  { name: "340B", count: 18, description: "Contract pharmacies, manufacturer restrictions, and drift." },
  { name: "Market Access", count: 16, description: "Coverage decisions, utilization management, and access." },
  { name: "Employer Benefits", count: 14, description: "Plan design, GLP-1 strategy, and cost containment." },
  { name: "Healthcare Policy", count: 22, description: "Legislation, regulation, and operational implications." },
];

export const frameworks = [
  {
    id: "nine-specialty-pharmacies",
    number: "01",
    title: "The Nine Types of Specialty Pharmacies",
    summary: "Separate the business models, ownership structures, and distribution strategies that define modern specialty pharmacy.",
    tags: ["Specialty", "Business Models", "Distribution"],
  },
  {
    id: "pbm-incentive-model",
    number: "02",
    title: "The PBM Incentive Model",
    summary: "Rebates, spread, DIR fees, and vertical integration mapped as one incentive architecture.",
    tags: ["PBMs", "Incentives", "Rebates"],
  },
  {
    id: "drug-channel-ecosystem",
    number: "03",
    title: "The Drug Channel Ecosystem",
    summary: "Manufacturers, wholesalers, pharmacies, PBMs, payers, and patients — the full circulatory system of pharmacy.",
    tags: ["Drug Channels", "Supply Chain"],
  },
  {
    id: "medicare-part-d-simplified",
    number: "04",
    title: "Medicare Part D, Simplified",
    summary: "Deductible, initial coverage, catastrophic, and manufacturer discount phases redrawn for 2025 and beyond.",
    tags: ["Medicare", "Part D", "IRA"],
  },
  {
    id: "drug-pricing-ecosystem-framework",
    number: "05",
    title: "The Drug Pricing Ecosystem",
    summary: "How WAC, AWP, NADAC, net price, and out-of-pocket cost relate — and where the gaps really are.",
    tags: ["Pricing", "Reimbursement"],
  },
  {
    id: "healthcare-value-chain",
    number: "06",
    title: "The Healthcare Value Chain",
    summary: "From payer to provider to patient — who assumes risk, who captures margin, and where value leaks.",
    tags: ["Strategy", "Value"],
  },
];

export const publications = [
  {
    id: "dci-annual-2025",
    outlet: "Drug Channels Institute",
    date: "2025",
    title: "The 2025 Economic Report on U.S. Pharmacies and Pharmacy Benefit Managers",
    summary: "An in-depth analysis of the largest pharmacies, PBMs, and their evolving market positions across specialty and mail channels.",
    tags: ["Annual Report", "PBMs", "Pharmacy"],
  },
  {
    id: "specialty-pharmacy-report",
    outlet: "Drug Channels Institute",
    date: "2024",
    title: "The 2024 Economic Report on U.S. Specialty Pharmacies",
    summary: "Business models, ownership concentration, and the emerging channel dynamics reshaping specialty distribution.",
    tags: ["Specialty", "Distribution"],
  },
  {
    id: "milliman-benefit-design",
    outlet: "Milliman White Paper",
    date: "2022",
    title: "Employer Pharmacy Benefit Design Under Rising Specialty Cost",
    summary: "A structured approach to specialty benefit management for self-insured employers navigating trend pressure.",
    tags: ["Employer", "Benefit Design"],
  },
];

export const speakingTopics = [
  "The Economics of U.S. Drug Channels",
  "Inside the PBM: Incentives, Rebates, and Reform",
  "Medicare Part D in the IRA Era",
  "Specialty Pharmacy Business Models",
  "Employer Strategy for GLP-1 Therapies",
  "The Real Anatomy of a U.S. Drug Price",
];

export const speakingFormats = ["Keynotes", "Panels", "Podcasts", "Webinars", "Executive Workshops", "Conference Sessions"];

export const speakingEngagements = [
  { event: "Asembia Specialty Pharmacy Summit", role: "Panelist", year: "2025", location: "Las Vegas, NV" },
  { event: "AMCP Nexus", role: "Speaker", year: "2024", location: "Orlando, FL" },
  { event: "The Drug Channels Podcast", role: "Guest", year: "2024", location: "Remote" },
  { event: "NASP Annual Meeting", role: "Featured Speaker", year: "2024", location: "Washington, DC" },
  { event: "HLTH Conference", role: "Panelist", year: "2023", location: "Las Vegas, NV" },
];

export const timeline = [
  { year: "2010", label: "University of Kansas", detail: "Doctor of Pharmacy (PharmD)" },
  { year: "2014", label: "Independent Pharmacy", detail: "Community pharmacy operations & patient care" },
  { year: "2016", label: "Population Health", detail: "Managed care and outcomes analytics" },
  { year: "2019", label: "Milliman", detail: "Healthcare consulting, PBM strategy, health economics" },
  { year: "2023", label: "Drug Channels Institute", detail: "Director — Research and executive education" },
  { year: "2025", label: "Thought Leadership", detail: "37,000+ followers, daily educational insights, 4+ year streak" },
];

export const values = [
  { title: "Clarity", body: "Complex subjects should become understandable without sacrificing accuracy." },
  { title: "Evidence", body: "Opinions should be supported by data, legislation, and observable market dynamics." },
  { title: "Curiosity", body: "Examine healthcare through thoughtful questions rather than assumptions." },
  { title: "Objectivity", body: "Present multiple perspectives before drawing conclusions." },
  { title: "Education", body: "Every interaction should teach something new." },
  { title: "Long-Term Thinking", body: "Evaluate policy by sustainable outcomes, not short-term reactions." },
];
