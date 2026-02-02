'use client';

import { useState, useEffect } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle,
  Building2,
  Users,
  Euro,
  Target,
  Lightbulb,
  ChevronDown,
  ChevronUp,
  ExternalLink
} from 'lucide-react';

interface Competitor {
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

interface PainPoint {
  id: number;
  competitor_name: string;
  title: string;
  description: string;
  severity: string;
  source: string;
  opportunity_score: number;
}

interface Insight {
  id: number;
  category: string;
  title: string;
  content: string;
  source: string;
  relevance: string;
}

interface FeatureMatrixItem {
  feature_id: number;
  feature_name: string;
  category: string;
  importance: string;
  competitor_id: number;
  competitor_name: string;
  has_feature: number;
  quality: string;
  notes: string;
}

export default function Dashboard() {
  const [competitors, setCompetitors] = useState<Competitor[]>([]);
  const [painPoints, setPainPoints] = useState<PainPoint[]>([]);
  const [insights, setInsights] = useState<Insight[]>([]);
  const [featureMatrix, setFeatureMatrix] = useState<FeatureMatrixItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedCompetitor, setExpandedCompetitor] = useState<number | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const [compRes, painRes, insightRes, matrixRes] = await Promise.all([
          fetch('/api/competitors'),
          fetch('/api/pain-points'),
          fetch('/api/insights'),
          fetch('/api/feature-matrix')
        ]);
        
        setCompetitors(await compRes.json());
        setPainPoints(await painRes.json());
        setInsights(await insightRes.json());
        setFeatureMatrix(await matrixRes.json());
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const getQualityColor = (quality: string) => {
    switch (quality) {
      case 'excellent': return 'bg-green-500';
      case 'good': return 'bg-green-400';
      case 'basic': return 'bg-yellow-400';
      case 'none': return 'bg-gray-300';
      default: return 'bg-gray-200';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-100 text-red-800 border-red-200';
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getRelevanceColor = (relevance: string) => {
    switch (relevance) {
      case 'critical': return 'bg-purple-100 text-purple-800';
      case 'high': return 'bg-blue-100 text-blue-800';
      case 'medium': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-50 text-gray-600';
    }
  };

  // Process feature matrix into grouped structure
  const processedMatrix = () => {
    const categories = [...new Set(featureMatrix.map(f => f.category))];
    const competitorNames = [...new Set(featureMatrix.map(f => f.competitor_name))];
    
    return { categories, competitorNames };
  };

  const { categories, competitorNames } = processedMatrix();

  const getFeatureStatus = (featureName: string, competitorName: string) => {
    const item = featureMatrix.find(
      f => f.feature_name === featureName && f.competitor_name === competitorName
    );
    return item;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
        <div className="text-white text-xl">Loading research data...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Header */}
      <header className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">AFAS Competitor Analysis</h1>
              <p className="text-slate-400 text-sm">Strategic research for building an AFAS alternative</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500">Research by</span>
              <span className="text-sm font-medium text-blue-400">Versis Systems</span>
            </div>
          </div>
          
          {/* Navigation Tabs */}
          <nav className="flex gap-1 mt-4">
            {[
              { id: 'overview', label: 'Overview', icon: BarChart3 },
              { id: 'competitors', label: 'Competitors', icon: Building2 },
              { id: 'features', label: 'Feature Matrix', icon: CheckCircle2 },
              { id: 'opportunities', label: 'Opportunities', icon: Target },
              { id: 'insights', label: 'Market Insights', icon: Lightbulb }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-t-lg text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-slate-700 text-white'
                    : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="flex items-center gap-3 mb-2">
                  <Building2 className="w-5 h-5 text-blue-400" />
                  <span className="text-slate-400 text-sm">Competitors Analyzed</span>
                </div>
                <div className="text-3xl font-bold text-white">{competitors.length}</div>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="w-5 h-5 text-green-400" />
                  <span className="text-slate-400 text-sm">AFAS Users</span>
                </div>
                <div className="text-3xl font-bold text-white">3.8M</div>
                <div className="text-xs text-slate-500">Dutch employees</div>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="flex items-center gap-3 mb-2">
                  <Euro className="w-5 h-5 text-yellow-400" />
                  <span className="text-slate-400 text-sm">Market Size</span>
                </div>
                <div className="text-3xl font-bold text-white">€10.4B</div>
                <div className="text-xs text-slate-500">NL Software 2025</div>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="w-5 h-5 text-purple-400" />
                  <span className="text-slate-400 text-sm">SME Growth</span>
                </div>
                <div className="text-3xl font-bold text-white">13.1%</div>
                <div className="text-xs text-slate-500">CAGR to 2030</div>
              </div>
            </div>

            {/* Market Share Chart */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h2 className="text-xl font-semibold text-white mb-6">Dutch HR/ERP Market Share</h2>
              <div className="space-y-4">
                {competitors.slice(0, 5).map(comp => (
                  <div key={comp.id} className="flex items-center gap-4">
                    <div className="w-32 text-sm text-slate-300 truncate">{comp.name}</div>
                    <div className="flex-1 h-8 bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-400 flex items-center justify-end pr-2"
                        style={{ width: `${comp.market_share * 2}%` }}
                      >
                        <span className="text-xs font-medium text-white">{comp.market_share}%</span>
                      </div>
                    </div>
                    <div className="w-16 text-right">
                      <span className="text-sm text-yellow-400">★ {comp.rating}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Opportunities */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-green-400" />
                Top Opportunities (AFAS Pain Points)
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {painPoints.slice(0, 4).map(pp => (
                  <div key={pp.id} className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-medium text-white">{pp.title}</h3>
                      <span className="text-lg font-bold text-green-400">{pp.opportunity_score}/10</span>
                    </div>
                    <p className="text-sm text-slate-400 mb-2">{pp.description}</p>
                    <span className={`text-xs px-2 py-1 rounded-full border ${getSeverityColor(pp.severity)}`}>
                      {pp.severity} severity
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Executive Summary */}
            <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-xl p-6 border border-blue-700/50">
              <h2 className="text-xl font-semibold text-white mb-4">🎯 Executive Summary</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-slate-300 leading-relaxed">
                  <strong className="text-white">Market Opportunity:</strong> The Dutch HR/ERP software market is dominated by AFAS 
                  with ~35% market share and 3.8M users. However, user research reveals significant pain points including 
                  poor financial visibility, complex UI, and limited customization. With SME adoption growing at 13.1% CAGR 
                  and cloud solutions taking 61% of the market, there&apos;s a clear opportunity for a modern, user-friendly 
                  AFAS alternative.
                </p>
                <p className="text-slate-300 leading-relaxed mt-4">
                  <strong className="text-white">Key Differentiators to Target:</strong> Real-time budget visibility, 
                  modern UX/UI, flexible API integrations, transparent purchasing controls, and competitive pricing 
                  for small teams (10-50 employees) where current options are either too expensive (AFAS) or lack 
                  features (Nmbrs) or Dutch compliance (Personio).
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Competitors Tab */}
        {activeTab === 'competitors' && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-white mb-6">Competitor Profiles</h2>
            {competitors.map(comp => (
              <div key={comp.id} className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden">
                <button
                  onClick={() => setExpandedCompetitor(expandedCompetitor === comp.id ? null : comp.id)}
                  className="w-full p-6 flex items-center justify-between hover:bg-slate-700/30 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{comp.name.charAt(0)}</span>
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-semibold text-white">{comp.name}</h3>
                      <p className="text-sm text-slate-400">{comp.target_market}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <div className="text-sm text-slate-400">Market Share</div>
                      <div className="text-lg font-bold text-blue-400">{comp.market_share}%</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-slate-400">Rating</div>
                      <div className="text-lg font-bold text-yellow-400">★ {comp.rating}</div>
                    </div>
                    {expandedCompetitor === comp.id ? (
                      <ChevronUp className="w-5 h-5 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400" />
                    )}
                  </div>
                </button>
                
                {expandedCompetitor === comp.id && (
                  <div className="px-6 pb-6 border-t border-slate-700">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                      <div>
                        <h4 className="text-sm font-medium text-slate-400 mb-2">Description</h4>
                        <p className="text-slate-300">{comp.description}</p>
                        
                        <h4 className="text-sm font-medium text-slate-400 mt-4 mb-2">Company Info</h4>
                        <ul className="text-sm text-slate-300 space-y-1">
                          <li><span className="text-slate-500">Founded:</span> {comp.founded}</li>
                          <li><span className="text-slate-500">HQ:</span> {comp.headquarters}</li>
                          <li><span className="text-slate-500">Employees:</span> {comp.employees_count}</li>
                        </ul>
                        
                        <a
                          href={comp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 mt-4 text-blue-400 hover:text-blue-300 text-sm"
                        >
                          Visit Website <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-slate-400 mb-2">Pricing</h4>
                        <p className="text-slate-300">{comp.pricing_range}</p>
                        <p className="text-xs text-slate-500">{comp.pricing_model}</p>
                        
                        <h4 className="text-sm font-medium text-green-400 mt-4 mb-2">✓ Strengths</h4>
                        <p className="text-sm text-slate-300">{comp.strengths}</p>
                        
                        <h4 className="text-sm font-medium text-red-400 mt-4 mb-2">✗ Weaknesses</h4>
                        <p className="text-sm text-slate-300">{comp.weaknesses}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Feature Matrix Tab */}
        {activeTab === 'features' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">Feature Comparison Matrix</h2>
              <div className="flex items-center gap-4 text-xs">
                <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-green-500"></span> Excellent</span>
                <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-green-400"></span> Good</span>
                <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-yellow-400"></span> Basic</span>
                <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-gray-300"></span> None</span>
              </div>
            </div>
            
            <div className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-slate-700/50">
                      <th className="text-left p-4 text-sm font-medium text-slate-300 sticky left-0 bg-slate-700">Feature</th>
                      {competitorNames.slice(0, 4).map(name => (
                        <th key={name} className="p-4 text-sm font-medium text-slate-300 text-center min-w-[120px]">
                          {name.split(' ')[0]}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {categories.map(category => (
                      <>
                        <tr key={category} className="bg-slate-700/30">
                          <td colSpan={5} className="p-3 text-sm font-semibold text-blue-400">
                            {category}
                          </td>
                        </tr>
                        {[...new Set(featureMatrix.filter(f => f.category === category).map(f => f.feature_name))].map(featureName => (
                          <tr key={featureName} className="border-t border-slate-700/50 hover:bg-slate-700/20">
                            <td className="p-3 text-sm text-slate-300 sticky left-0 bg-slate-800/50">{featureName}</td>
                            {competitorNames.slice(0, 4).map(compName => {
                              const status = getFeatureStatus(featureName, compName);
                              return (
                                <td key={compName} className="p-3 text-center">
                                  <div className="flex justify-center">
                                    {status?.has_feature ? (
                                      <div className="group relative">
                                        <div className={`w-6 h-6 rounded-full ${getQualityColor(status.quality)} flex items-center justify-center`}>
                                          <CheckCircle2 className="w-4 h-4 text-white" />
                                        </div>
                                        {status.notes && (
                                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-slate-900 text-xs text-slate-300 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                                            {status.notes}
                                          </div>
                                        )}
                                      </div>
                                    ) : (
                                      <div className="w-6 h-6 rounded-full bg-slate-600 flex items-center justify-center">
                                        <XCircle className="w-4 h-4 text-slate-400" />
                                      </div>
                                    )}
                                  </div>
                                </td>
                              );
                            })}
                          </tr>
                        ))}
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Opportunities Tab */}
        {activeTab === 'opportunities' && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-white mb-6">AFAS Pain Points & Opportunities</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {painPoints.map(pp => (
                <div key={pp.id} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className={`w-5 h-5 ${
                        pp.severity === 'critical' ? 'text-red-400' :
                        pp.severity === 'high' ? 'text-orange-400' : 'text-yellow-400'
                      }`} />
                      <h3 className="font-semibold text-white">{pp.title}</h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-500">Opportunity</span>
                      <span className={`text-lg font-bold ${
                        pp.opportunity_score >= 8 ? 'text-green-400' :
                        pp.opportunity_score >= 6 ? 'text-yellow-400' : 'text-slate-400'
                      }`}>
                        {pp.opportunity_score}/10
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-slate-300 text-sm mb-4">{pp.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className={`text-xs px-2 py-1 rounded-full border ${getSeverityColor(pp.severity)}`}>
                      {pp.severity} severity
                    </span>
                    <span className="text-xs text-slate-500">Source: {pp.source}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Strategic Recommendations */}
            <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-700/50 mt-8">
              <h3 className="text-lg font-semibold text-white mb-4">🚀 Strategic Recommendations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-green-400 mb-2">Must-Have Differentiators</h4>
                  <ul className="text-sm text-slate-300 space-y-2">
                    <li>✓ Real-time budget visibility dashboards</li>
                    <li>✓ Transparent purchase tracking with accountability</li>
                    <li>✓ Modern, intuitive UI (Personio-level UX)</li>
                    <li>✓ Full Dutch payroll with CAO integration</li>
                    <li>✓ Simple FTE/hours management</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-blue-400 mb-2">Target Positioning</h4>
                  <ul className="text-sm text-slate-300 space-y-2">
                    <li>→ SME segment (10-100 employees)</li>
                    <li>→ Price between Nmbrs and AFAS (€6-10/user)</li>
                    <li>→ &quot;Modern AFAS alternative&quot; positioning</li>
                    <li>→ Developer-friendly with strong API</li>
                    <li>→ Quick implementation (&lt;2 weeks)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Insights Tab */}
        {activeTab === 'insights' && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-white mb-6">Market Insights</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {['Market Size', 'Trends', 'Opportunity'].map(category => (
                <div key={category} className="space-y-4">
                  <h3 className="font-medium text-slate-400 flex items-center gap-2">
                    {category === 'Market Size' && <BarChart3 className="w-4 h-4" />}
                    {category === 'Trends' && <TrendingUp className="w-4 h-4" />}
                    {category === 'Opportunity' && <Target className="w-4 h-4" />}
                    {category}
                  </h3>
                  {insights.filter(i => i.category === category).map(insight => (
                    <div key={insight.id} className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium text-white text-sm">{insight.title}</h4>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${getRelevanceColor(insight.relevance)}`}>
                          {insight.relevance}
                        </span>
                      </div>
                      <p className="text-sm text-slate-400">{insight.content}</p>
                      <p className="text-xs text-slate-500 mt-2">Source: {insight.source}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Regulatory insights */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="font-medium text-white mb-4">🏛️ Regulatory Requirements (Netherlands)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { title: 'Belastingdienst Integration', desc: 'Tax authority connection for payroll reporting' },
                  { title: 'UWV Connection', desc: 'Social security and benefits integration' },
                  { title: '200+ CAO Agreements', desc: 'Collective labor agreement compliance' },
                  { title: 'Arbeidstijdenwet', desc: 'Dutch working hours law compliance' },
                  { title: 'GDPR/AVG', desc: 'EU data protection regulation compliance' },
                  { title: 'Dutch Data Residency', desc: 'Data stored on Netherlands servers' }
                ].map((req, i) => (
                  <div key={i} className="bg-slate-700/30 rounded-lg p-3">
                    <h4 className="font-medium text-white text-sm">{req.title}</h4>
                    <p className="text-xs text-slate-400 mt-1">{req.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-700 mt-16 py-8 text-center text-slate-500 text-sm">
        <p>AFAS Competitor Analysis Tool • Built for Versis Systems • {new Date().toLocaleDateString()}</p>
        <p className="mt-1">Data sourced from official websites, user reviews, and market research reports</p>
      </footer>
    </div>
  );
}
