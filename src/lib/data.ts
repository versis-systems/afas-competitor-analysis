// Static research data for AFAS Competitor Analysis
// This replaces SQLite for serverless compatibility

export interface Competitor {
  id: number;
  name: string;
  description: string;
  founded: string;
  headquarters: string;
  employees_count: string;
  target_market: string;
  pricing_model: string;
  pricing_range: string;
  strengths: string;
  weaknesses: string;
  website: string;
  market_share: number;
  rating: number;
}

export interface PainPoint {
  id: number;
  competitor_id: number;
  competitor_name: string;
  title: string;
  description: string;
  severity: string;
  source: string;
  opportunity_score: number;
}

export interface Insight {
  id: number;
  category: string;
  title: string;
  content: string;
  source: string;
  relevance: string;
}

export interface FeatureMatrixItem {
  feature_id: number;
  feature_name: string;
  category: string;
  importance: string;
  competitor_id: number;
  competitor_name: string;
  has_feature: number;
  quality: string;
  notes: string | null;
}

export const competitors: Competitor[] = [
  {
    id: 1,
    name: 'AFAS Software',
    description: 'Leading Dutch ERP/HR platform with integrated payroll, finance, and HR management. Used by 3.8M+ Dutch employees.',
    founded: '1996',
    headquarters: 'Leusden, Netherlands',
    employees_count: '700+',
    target_market: 'SME to Mid-Market (50-2000 employees)',
    pricing_model: 'Per user + modules',
    pricing_range: '€59/month (2 users) - €16/user/month enterprise',
    strengths: 'Dutch market expertise, integrated payroll with 200+ CAO agreements, strong compliance, all-in-one platform, mobile app rated #1 in NL',
    weaknesses: 'Closed system with limited customization, complex implementation, expensive for small teams, outdated UI, poor financial visibility, steep learning curve',
    website: 'https://www.afas.com',
    market_share: 35.0,
    rating: 3.5
  },
  {
    id: 2,
    name: 'Visma | Nmbrs',
    description: 'Cloud-based HR and payroll platform focused on automation and ease of use. Part of Visma Group.',
    founded: '2006',
    headquarters: 'Amsterdam, Netherlands',
    employees_count: '200+',
    target_market: 'SME (10-500 employees)',
    pricing_model: 'Per user tiered',
    pricing_range: '€4-10/user/month',
    strengths: 'User-friendly interface, affordable pricing, strong payroll automation, good API, quick implementation',
    weaknesses: 'Limited advanced HR features, less comprehensive than AFAS, performance management basic',
    website: 'https://www.nmbrs.com',
    market_share: 18.0,
    rating: 4.2
  },
  {
    id: 3,
    name: 'Exact Software',
    description: 'Dutch ERP provider with cloud and on-premise solutions for accounting, HR, and business management.',
    founded: '1984',
    headquarters: 'Delft, Netherlands',
    employees_count: '1800+',
    target_market: 'SME to Enterprise',
    pricing_model: 'Modular subscription',
    pricing_range: '€39-199/month base',
    strengths: 'Strong accounting integration, established brand, good for manufacturing and wholesale',
    weaknesses: 'HR module less developed, complex setup, legacy feel in some areas',
    website: 'https://www.exact.com',
    market_share: 15.0,
    rating: 3.8
  },
  {
    id: 4,
    name: 'Personio',
    description: 'German HR platform expanding in Netherlands, focused on modern HR experience and automation.',
    founded: '2015',
    headquarters: 'Munich, Germany',
    employees_count: '1800+',
    target_market: 'SME (10-2000 employees)',
    pricing_model: 'Per employee tiered',
    pricing_range: '€2.88-10.88/employee/month',
    strengths: 'Modern UX, strong recruitment module, good onboarding, active development, EU-focused',
    weaknesses: 'Dutch payroll integration limited, newer to NL market, less local CAO support',
    website: 'https://www.personio.nl',
    market_share: 8.0,
    rating: 4.4
  },
  {
    id: 5,
    name: 'Visma | Raet',
    description: 'Enterprise HR and payroll solution for larger Dutch organizations. Acquired by Visma in 2018.',
    founded: '1964',
    headquarters: 'Amersfoort, Netherlands',
    employees_count: '500+',
    target_market: 'Mid-Market to Enterprise (500+ employees)',
    pricing_model: 'Enterprise contracts',
    pricing_range: 'Custom (€10K+/year)',
    strengths: 'Enterprise-grade, extensive Dutch payroll expertise, good for large organizations',
    weaknesses: 'Expensive, complex implementation, long sales cycles, not suited for SME',
    website: 'https://www.vismaraet.nl',
    market_share: 12.0,
    rating: 3.6
  },
  {
    id: 6,
    name: 'SD Worx',
    description: 'Belgian HR and payroll provider with strong Benelux presence and international capabilities.',
    founded: '1945',
    headquarters: 'Antwerp, Belgium',
    employees_count: '5000+',
    target_market: 'SME to Enterprise',
    pricing_model: 'Module-based',
    pricing_range: '€5-15/employee/month',
    strengths: 'International payroll expertise, strong compliance, good for multi-country operations',
    weaknesses: 'Less focused on NL market, complex product portfolio, enterprise-oriented pricing',
    website: 'https://www.sdworx.nl',
    market_share: 7.0,
    rating: 3.7
  },
  {
    id: 7,
    name: 'Odoo',
    description: 'Open-source ERP with modular approach covering HR, accounting, CRM, and operations.',
    founded: '2005',
    headquarters: 'Belgium',
    employees_count: '3500+',
    target_market: 'SME globally',
    pricing_model: 'Per user all-apps',
    pricing_range: '€37.40/user/month',
    strengths: 'Open source flexibility, highly customizable, modern UI, extensive app ecosystem',
    weaknesses: 'Dutch payroll requires partners, less local HR compliance built-in, needs technical expertise',
    website: 'https://www.odoo.com',
    market_share: 5.0,
    rating: 4.0
  }
];

export const painPoints: PainPoint[] = [
  { id: 1, competitor_id: 1, competitor_name: 'AFAS Software', title: 'Poor Financial Visibility', description: 'Users cannot easily see remaining project budgets. Researchers report getting different answers from different people about budget status.', severity: 'high', source: 'University of Groningen case study', opportunity_score: 9 },
  { id: 2, competitor_id: 1, competitor_name: 'AFAS Software', title: 'No Purchase Accountability', description: 'Anyone can purchase using any project number without budget owner visibility. No way to identify who made anonymous purchases.', severity: 'critical', source: 'UKrant investigation', opportunity_score: 10 },
  { id: 3, competitor_id: 1, competitor_name: 'AFAS Software', title: 'Complex Time Calculations', description: 'Users must calculate exact minutes/seconds for FTE changes instead of simple percentage inputs. "Ridiculous" according to HR coordinators.', severity: 'medium', source: 'University staff interviews', opportunity_score: 7 },
  { id: 4, competitor_id: 1, competitor_name: 'AFAS Software', title: 'Slow Implementation', description: 'Implementation described as "poorly supervised" with "too many time constraints". Two years post-launch, major flaws remain.', severity: 'high', source: 'University audit report', opportunity_score: 8 },
  { id: 5, competitor_id: 1, competitor_name: 'AFAS Software', title: 'Limited API/Integration', description: 'Closed system with limited customization. Student administration disconnected, requiring manual data entry.', severity: 'high', source: 'Technical reviews', opportunity_score: 8 },
  { id: 6, competitor_id: 1, competitor_name: 'AFAS Software', title: 'Outdated UX/UI', description: 'Interface described as "clunky, buggy, primitive". Traditional design compared to modern competitors like Personio.', severity: 'medium', source: 'Trustpilot reviews', opportunity_score: 7 },
  { id: 7, competitor_id: 1, competitor_name: 'AFAS Software', title: 'Missing Delegation Features', description: 'Promised "delegate" button never appeared. Staff cannot arrange things for colleagues, limiting workflow efficiency.', severity: 'medium', source: 'User feedback', opportunity_score: 6 },
  { id: 8, competitor_id: 1, competitor_name: 'AFAS Software', title: 'Expensive for Small Teams', description: 'At €59/month minimum for 2 users, significantly more expensive than competitors like Nmbrs for small businesses.', severity: 'medium', source: 'Pricing comparison', opportunity_score: 7 },
  { id: 9, competitor_id: 1, competitor_name: 'AFAS Software', title: 'Steep Learning Curve', description: 'Getting colleagues to adopt changes is difficult. Information meetings raised more questions than answers.', severity: 'medium', source: 'Implementation feedback', opportunity_score: 6 }
];

export const insights: Insight[] = [
  { id: 1, category: 'Market Size', title: 'Dutch HR Software Market', content: 'Netherlands software market expected to reach US$10.39bn by 2025. HR software segment growing at 10-13% CAGR. SME segment is fastest-growing at 13.1% CAGR.', source: 'Statista, Grand View Research', relevance: 'high' },
  { id: 2, category: 'Market Size', title: 'AFAS Market Penetration', content: 'AFAS serves 13,000+ customers with 3.8 million Dutch employees using their platform. Dominant position in Dutch SME market.', source: 'AFAS Official', relevance: 'high' },
  { id: 3, category: 'Trends', title: 'Cloud Adoption Accelerating', content: 'Cloud-based deployments expected to hold 61% market share by 2025, growing at 11.5% CAGR. SMEs driving adoption of affordable, integrated solutions.', source: 'Fortune Business Insights', relevance: 'high' },
  { id: 4, category: 'Trends', title: 'AI Integration Demand', content: 'AI-driven HR platforms transforming employee experience and workforce management. Predictive analytics becoming key differentiator.', source: 'Globe Newswire', relevance: 'medium' },
  { id: 5, category: 'Regulatory', title: 'Dutch Compliance Requirements', content: 'Critical requirements: Belastingdienst/UWV integration, 200+ CAO agreements, Arbeidstijdenwet compliance, GDPR/AVG data protection, Dutch data residency preferences.', source: 'Industry analysis', relevance: 'critical' },
  { id: 6, category: 'Opportunity', title: 'SME Underserved Segment', content: 'Small businesses (10-50 employees) lack affordable options with full Dutch compliance. AFAS too expensive, Nmbrs lacks advanced features, Personio lacks Dutch payroll.', source: 'Market gap analysis', relevance: 'high' },
  { id: 7, category: 'Opportunity', title: 'Modern UX Gap', content: 'Legacy players (AFAS, Exact, Raet) have dated interfaces. Growing demand for consumer-grade UX in business software. Personio succeeding on UX alone.', source: 'User reviews analysis', relevance: 'high' },
  { id: 8, category: 'Opportunity', title: 'Financial Transparency Gap', content: 'Major pain point across AFAS users: inability to see real-time budget status. Opportunity for real-time financial dashboards integrated with HR.', source: 'UKrant case study', relevance: 'high' },
  { id: 9, category: 'Competition', title: 'International Players Entering', content: 'Personio (Germany), Workday, SAP SuccessFactors expanding in Netherlands. Opportunity to position as Dutch-first alternative with modern tech.', source: 'Market observation', relevance: 'medium' }
];

interface Feature {
  name: string;
  category: string;
  importance: string;
}

const features: Feature[] = [
  { name: 'Employee Database', category: 'Core HR', importance: 'critical' },
  { name: 'Employee Self-Service', category: 'Core HR', importance: 'high' },
  { name: 'Manager Self-Service', category: 'Core HR', importance: 'high' },
  { name: 'Document Management', category: 'Core HR', importance: 'high' },
  { name: 'Org Chart', category: 'Core HR', importance: 'medium' },
  { name: 'Dutch Payroll Processing', category: 'Payroll', importance: 'critical' },
  { name: 'CAO Integration', category: 'Payroll', importance: 'critical' },
  { name: 'Pension Administration', category: 'Payroll', importance: 'high' },
  { name: 'Tax Authority Integration', category: 'Payroll', importance: 'critical' },
  { name: 'Payslip Generation', category: 'Payroll', importance: 'high' },
  { name: 'Time Tracking', category: 'Time Management', importance: 'high' },
  { name: 'Leave Management', category: 'Time Management', importance: 'high' },
  { name: 'Absence Tracking', category: 'Time Management', importance: 'high' },
  { name: 'Shift Planning', category: 'Time Management', importance: 'medium' },
  { name: 'Arbeidstijdenwet Compliance', category: 'Time Management', importance: 'high' },
  { name: 'Job Posting', category: 'Recruitment', importance: 'medium' },
  { name: 'ATS (Applicant Tracking)', category: 'Recruitment', importance: 'medium' },
  { name: 'Career Portal', category: 'Recruitment', importance: 'medium' },
  { name: 'Onboarding Workflows', category: 'Recruitment', importance: 'high' },
  { name: 'Performance Reviews', category: 'Performance', importance: 'medium' },
  { name: 'Goal Management', category: 'Performance', importance: 'medium' },
  { name: 'Feedback Tools', category: 'Performance', importance: 'medium' },
  { name: 'Talent Development', category: 'Performance', importance: 'medium' },
  { name: 'HR Analytics', category: 'Analytics', importance: 'high' },
  { name: 'Custom Reports', category: 'Analytics', importance: 'medium' },
  { name: 'BI Dashboards', category: 'Analytics', importance: 'medium' },
  { name: 'Predictive Analytics', category: 'Analytics', importance: 'low' },
  { name: 'Mobile App', category: 'Platform', importance: 'high' },
  { name: 'API Access', category: 'Platform', importance: 'high' },
  { name: 'SSO/SAML', category: 'Platform', importance: 'medium' },
  { name: 'Multi-language', category: 'Platform', importance: 'medium' },
  { name: 'GDPR/AVG Compliance', category: 'Platform', importance: 'critical' },
  { name: 'Dutch Data Residency', category: 'Platform', importance: 'high' }
];

interface CompetitorFeatureData {
  [featureName: string]: { has: boolean; quality: string; notes?: string };
}

const featureData: Record<string, CompetitorFeatureData> = {
  'AFAS Software': {
    'Employee Database': { has: true, quality: 'excellent' },
    'Employee Self-Service': { has: true, quality: 'good' },
    'Manager Self-Service': { has: true, quality: 'good' },
    'Document Management': { has: true, quality: 'good' },
    'Org Chart': { has: true, quality: 'basic' },
    'Dutch Payroll Processing': { has: true, quality: 'excellent' },
    'CAO Integration': { has: true, quality: 'excellent', notes: '200+ agreements included' },
    'Pension Administration': { has: true, quality: 'excellent' },
    'Tax Authority Integration': { has: true, quality: 'excellent' },
    'Payslip Generation': { has: true, quality: 'excellent' },
    'Time Tracking': { has: true, quality: 'good' },
    'Leave Management': { has: true, quality: 'good' },
    'Absence Tracking': { has: true, quality: 'good' },
    'Shift Planning': { has: true, quality: 'basic' },
    'Arbeidstijdenwet Compliance': { has: true, quality: 'excellent' },
    'Job Posting': { has: true, quality: 'good' },
    'ATS (Applicant Tracking)': { has: true, quality: 'good' },
    'Career Portal': { has: true, quality: 'good' },
    'Onboarding Workflows': { has: true, quality: 'good' },
    'Performance Reviews': { has: true, quality: 'basic' },
    'Goal Management': { has: true, quality: 'basic' },
    'Feedback Tools': { has: false, quality: 'none' },
    'Talent Development': { has: true, quality: 'basic' },
    'HR Analytics': { has: true, quality: 'good' },
    'Custom Reports': { has: true, quality: 'basic', notes: 'Limited customization' },
    'BI Dashboards': { has: true, quality: 'good' },
    'Predictive Analytics': { has: false, quality: 'none' },
    'Mobile App': { has: true, quality: 'excellent', notes: '#1 business app in NL' },
    'API Access': { has: true, quality: 'basic', notes: 'Limited API' },
    'SSO/SAML': { has: true, quality: 'good' },
    'Multi-language': { has: true, quality: 'good' },
    'GDPR/AVG Compliance': { has: true, quality: 'excellent' },
    'Dutch Data Residency': { has: true, quality: 'excellent' }
  },
  'Visma | Nmbrs': {
    'Employee Database': { has: true, quality: 'good' },
    'Employee Self-Service': { has: true, quality: 'excellent' },
    'Manager Self-Service': { has: true, quality: 'good' },
    'Document Management': { has: true, quality: 'good' },
    'Org Chart': { has: false, quality: 'none' },
    'Dutch Payroll Processing': { has: true, quality: 'excellent' },
    'CAO Integration': { has: true, quality: 'good' },
    'Pension Administration': { has: true, quality: 'good' },
    'Tax Authority Integration': { has: true, quality: 'excellent' },
    'Payslip Generation': { has: true, quality: 'excellent' },
    'Time Tracking': { has: true, quality: 'good' },
    'Leave Management': { has: true, quality: 'excellent' },
    'Absence Tracking': { has: true, quality: 'good' },
    'Shift Planning': { has: false, quality: 'none' },
    'Arbeidstijdenwet Compliance': { has: true, quality: 'good' },
    'Job Posting': { has: false, quality: 'none' },
    'ATS (Applicant Tracking)': { has: false, quality: 'none' },
    'Career Portal': { has: false, quality: 'none' },
    'Onboarding Workflows': { has: true, quality: 'basic' },
    'Performance Reviews': { has: true, quality: 'basic' },
    'Goal Management': { has: false, quality: 'none' },
    'Feedback Tools': { has: false, quality: 'none' },
    'Talent Development': { has: false, quality: 'none' },
    'HR Analytics': { has: true, quality: 'good' },
    'Custom Reports': { has: true, quality: 'good' },
    'BI Dashboards': { has: true, quality: 'basic' },
    'Predictive Analytics': { has: false, quality: 'none' },
    'Mobile App': { has: true, quality: 'good' },
    'API Access': { has: true, quality: 'excellent' },
    'SSO/SAML': { has: true, quality: 'good' },
    'Multi-language': { has: true, quality: 'good' },
    'GDPR/AVG Compliance': { has: true, quality: 'excellent' },
    'Dutch Data Residency': { has: true, quality: 'excellent' }
  },
  'Personio': {
    'Employee Database': { has: true, quality: 'excellent' },
    'Employee Self-Service': { has: true, quality: 'excellent' },
    'Manager Self-Service': { has: true, quality: 'excellent' },
    'Document Management': { has: true, quality: 'excellent' },
    'Org Chart': { has: true, quality: 'good' },
    'Dutch Payroll Processing': { has: true, quality: 'basic', notes: 'Via partners' },
    'CAO Integration': { has: false, quality: 'none' },
    'Pension Administration': { has: false, quality: 'none' },
    'Tax Authority Integration': { has: true, quality: 'basic' },
    'Payslip Generation': { has: true, quality: 'good' },
    'Time Tracking': { has: true, quality: 'excellent' },
    'Leave Management': { has: true, quality: 'excellent' },
    'Absence Tracking': { has: true, quality: 'excellent' },
    'Shift Planning': { has: true, quality: 'good' },
    'Arbeidstijdenwet Compliance': { has: true, quality: 'basic' },
    'Job Posting': { has: true, quality: 'excellent' },
    'ATS (Applicant Tracking)': { has: true, quality: 'excellent' },
    'Career Portal': { has: true, quality: 'excellent' },
    'Onboarding Workflows': { has: true, quality: 'excellent' },
    'Performance Reviews': { has: true, quality: 'excellent' },
    'Goal Management': { has: true, quality: 'excellent' },
    'Feedback Tools': { has: true, quality: 'good' },
    'Talent Development': { has: true, quality: 'good' },
    'HR Analytics': { has: true, quality: 'excellent' },
    'Custom Reports': { has: true, quality: 'excellent' },
    'BI Dashboards': { has: true, quality: 'good' },
    'Predictive Analytics': { has: true, quality: 'basic' },
    'Mobile App': { has: true, quality: 'excellent' },
    'API Access': { has: true, quality: 'excellent' },
    'SSO/SAML': { has: true, quality: 'excellent' },
    'Multi-language': { has: true, quality: 'excellent' },
    'GDPR/AVG Compliance': { has: true, quality: 'excellent' },
    'Dutch Data Residency': { has: true, quality: 'good' }
  },
  'Exact Software': {
    'Employee Database': { has: true, quality: 'good' },
    'Employee Self-Service': { has: true, quality: 'basic' },
    'Manager Self-Service': { has: true, quality: 'basic' },
    'Document Management': { has: true, quality: 'good' },
    'Org Chart': { has: true, quality: 'basic' },
    'Dutch Payroll Processing': { has: true, quality: 'good' },
    'CAO Integration': { has: true, quality: 'good' },
    'Pension Administration': { has: true, quality: 'good' },
    'Tax Authority Integration': { has: true, quality: 'good' },
    'Payslip Generation': { has: true, quality: 'good' },
    'Time Tracking': { has: true, quality: 'good' },
    'Leave Management': { has: true, quality: 'good' },
    'Absence Tracking': { has: true, quality: 'good' },
    'Shift Planning': { has: true, quality: 'basic' },
    'Arbeidstijdenwet Compliance': { has: true, quality: 'good' },
    'Job Posting': { has: false, quality: 'none' },
    'ATS (Applicant Tracking)': { has: false, quality: 'none' },
    'Career Portal': { has: false, quality: 'none' },
    'Onboarding Workflows': { has: true, quality: 'basic' },
    'Performance Reviews': { has: true, quality: 'basic' },
    'Goal Management': { has: false, quality: 'none' },
    'Feedback Tools': { has: false, quality: 'none' },
    'Talent Development': { has: false, quality: 'none' },
    'HR Analytics': { has: true, quality: 'good' },
    'Custom Reports': { has: true, quality: 'excellent' },
    'BI Dashboards': { has: true, quality: 'good' },
    'Predictive Analytics': { has: false, quality: 'none' },
    'Mobile App': { has: true, quality: 'good' },
    'API Access': { has: true, quality: 'good' },
    'SSO/SAML': { has: true, quality: 'good' },
    'Multi-language': { has: true, quality: 'good' },
    'GDPR/AVG Compliance': { has: true, quality: 'excellent' },
    'Dutch Data Residency': { has: true, quality: 'excellent' }
  }
};

// Generate feature matrix from data
export function getFeatureMatrix(): FeatureMatrixItem[] {
  const matrix: FeatureMatrixItem[] = [];
  let featureId = 1;
  
  features.forEach(feature => {
    competitors.forEach(comp => {
      const data = featureData[comp.name]?.[feature.name];
      matrix.push({
        feature_id: featureId,
        feature_name: feature.name,
        category: feature.category,
        importance: feature.importance,
        competitor_id: comp.id,
        competitor_name: comp.name,
        has_feature: data?.has ? 1 : 0,
        quality: data?.quality || 'none',
        notes: data?.notes || null
      });
    });
    featureId++;
  });
  
  return matrix;
}
