// Mock data for the Predex ecosystem registry

export interface Entity {
  id: string;
  name: string;
  slug: string;
  category: 'platform' | 'project' | 'trader' | 'builder' | 'creator' | 'job' | 'community';
  description: string;
  logo?: string;
  tags: string[];
  platforms?: string[];
  website?: string;
  twitter?: string;
  github?: string;
  discord?: string;
  activityLevel?: 'high' | 'medium' | 'low';
  status?: 'active' | 'inactive' | 'beta';
  relatedEntities?: string[];
  founded?: string;
  details?: {
    overview?: string;
    products?: string[];
    keyFacts?: { label: string; value: string }[];
  };
}

export const platforms: Entity[] = [
  {
    id: '1',
    name: 'Polymarket',
    slug: 'polymarket',
    category: 'platform',
    description: 'Decentralized information markets platform built on Polygon',
    tags: ['Trading', 'Polygon', 'On-chain'],
    website: 'https://polymarket.com',
    twitter: '@polymarket',
    activityLevel: 'high',
    status: 'active',
    founded: '2020',
    details: {
      overview: 'Polymarket is a decentralized information markets platform where users can trade on the outcome of future events.',
      keyFacts: [
        { label: 'Blockchain', value: 'Polygon' },
        { label: 'Total Volume', value: '$2.1B+' },
        { label: 'Markets', value: '1000+' },
      ],
    },
  },
  {
    id: '2',
    name: 'Kalshi',
    slug: 'kalshi',
    category: 'platform',
    description: 'CFTC-regulated prediction market exchange in the United States',
    tags: ['Trading', 'Regulated', 'US'],
    website: 'https://kalshi.com',
    twitter: '@kalshi',
    activityLevel: 'high',
    status: 'active',
    founded: '2018',
    details: {
      overview: 'Kalshi is the first CFTC-regulated exchange for trading on event outcomes.',
      keyFacts: [
        { label: 'Regulation', value: 'CFTC-regulated' },
        { label: 'Jurisdiction', value: 'United States' },
      ],
    },
  },
  {
    id: '3',
    name: 'Manifold Markets',
    slug: 'manifold',
    category: 'platform',
    description: 'Open-source prediction market platform with play money',
    tags: ['Trading', 'Open Source', 'Play Money'],
    website: 'https://manifold.markets',
    twitter: '@manifoldmarkets',
    github: 'manifoldmarkets',
    activityLevel: 'high',
    status: 'active',
    founded: '2021',
    details: {
      overview: 'Manifold Markets is an open-source prediction market platform where users can create and trade on any question.',
    },
  },
  {
    id: '4',
    name: 'Metaculus',
    slug: 'metaculus',
    category: 'platform',
    description: 'Community forecasting platform for scientific and real-world questions',
    tags: ['Forecasting', 'Community', 'Research'],
    website: 'https://metaculus.com',
    twitter: '@metaculus',
    activityLevel: 'high',
    status: 'active',
    founded: '2015',
  },
  {
    id: '5',
    name: 'Futuur',
    slug: 'futuur',
    category: 'platform',
    description: 'Event-driven prediction markets with simplified UX',
    tags: ['Trading', 'Events', 'Simple'],
    website: 'https://futuur.com',
    twitter: '@futuur',
    activityLevel: 'medium',
    status: 'beta',
    founded: '2023',
  },
  {
    id: '6',
    name: 'Gnosis',
    slug: 'gnosis',
    category: 'platform',
    description: 'Decentralized prediction market protocol and platform',
    tags: ['DeFi', 'Protocol', 'Ethereum'],
    website: 'https://gnosis.io',
    twitter: '@gnosischain',
    github: 'gnosis',
    activityLevel: 'medium',
    status: 'active',
    founded: '2017',
  },
];

export const projects: Entity[] = [
  {
    id: '11',
    name: 'Polymarket API',
    slug: 'polymarket-api',
    category: 'project',
    description: 'Official REST API and WebSocket feeds for Polymarket data',
    tags: ['API', 'Data', 'Infrastructure'],
    platforms: ['Polymarket'],
    website: 'https://docs.polymarket.com',
    github: 'polymarket',
    activityLevel: 'high',
    status: 'active',
    relatedEntities: ['1'],
  },
  {
    id: '12',
    name: 'PredictBot',
    slug: 'predictbot',
    category: 'project',
    description: 'Automated trading bot for prediction markets with ML-powered signals',
    tags: ['Bot', 'Trading', 'ML'],
    platforms: ['Polymarket', 'Kalshi'],
    github: 'predictbot',
    activityLevel: 'medium',
    status: 'beta',
  },
  {
    id: '13',
    name: 'Market Analytics Dashboard',
    slug: 'market-analytics',
    category: 'project',
    description: 'Real-time analytics and visualization tools for prediction markets',
    tags: ['Analytics', 'Visualization', 'Data'],
    platforms: ['Polymarket', 'Manifold Markets'],
    website: 'https://marketanalytics.xyz',
    activityLevel: 'medium',
    status: 'active',
  },
  {
    id: '14',
    name: 'Market Maker SDK',
    slug: 'market-maker-sdk',
    category: 'project',
    description: 'Developer SDK for building market-making strategies',
    tags: ['SDK', 'Market Making', 'Developer Tools'],
    platforms: ['Polymarket'],
    github: 'marketmaker-sdk',
    activityLevel: 'medium',
    status: 'active',
  },
  {
    id: '15',
    name: 'PM Aggregator',
    slug: 'pm-aggregator',
    category: 'project',
    description: 'Aggregates markets and liquidity across multiple prediction market platforms',
    tags: ['Aggregator', 'Cross-platform', 'Liquidity'],
    platforms: ['Polymarket', 'Kalshi', 'Manifold Markets'],
    website: 'https://pmagg.io',
    activityLevel: 'low',
    status: 'beta',
  },
];

export const traders: Entity[] = [
  {
    id: '21',
    name: 'TheWhale',
    slug: 'thewhale',
    category: 'trader',
    description: 'Top volume trader specializing in political and economic events',
    tags: ['Whale', 'Politics', 'Economics'],
    platforms: ['Polymarket'],
    twitter: '@thewhale_pm',
    activityLevel: 'high',
  },
  {
    id: '22',
    name: 'DataTrader',
    slug: 'datatrader',
    category: 'trader',
    description: 'Quantitative trader using statistical models and data analysis',
    tags: ['Quant', 'Data Science', 'Statistics'],
    platforms: ['Kalshi', 'Polymarket'],
    twitter: '@datatrader',
    activityLevel: 'high',
  },
];

export const builders: Entity[] = [
  {
    id: '31',
    name: 'Alex Chen',
    slug: 'alex-chen',
    category: 'builder',
    description: 'Full-stack developer building prediction market infrastructure',
    tags: ['Developer', 'Infrastructure', 'Web3'],
    github: 'alexchen',
    twitter: '@alexbuilds',
    activityLevel: 'high',
  },
  {
    id: '32',
    name: 'Sarah Kim',
    slug: 'sarah-kim',
    category: 'builder',
    description: 'Smart contract engineer focusing on prediction market protocols',
    tags: ['Solidity', 'Smart Contracts', 'DeFi'],
    github: 'sarahkim',
    twitter: '@sarahkimdev',
    activityLevel: 'medium',
  },
];

export const creators: Entity[] = [
  {
    id: '41',
    name: 'PM Research',
    slug: 'pm-research',
    category: 'creator',
    description: 'Research publication analyzing prediction market trends and mechanics',
    tags: ['Research', 'Analysis', 'Education'],
    website: 'https://pmresearch.substack.com',
    twitter: '@pm_research',
    activityLevel: 'high',
  },
  {
    id: '42',
    name: 'Markets Explained',
    slug: 'markets-explained',
    category: 'creator',
    description: 'Educational content creator teaching prediction market strategies',
    tags: ['Education', 'Tutorial', 'Strategy'],
    twitter: '@markets_explained',
    activityLevel: 'medium',
  },
];

export const jobs: Entity[] = [
  {
    id: '51',
    name: 'Senior Blockchain Engineer at Polymarket',
    slug: 'polymarket-senior-engineer',
    category: 'job',
    description: 'Full-time position building scalable prediction market infrastructure',
    tags: ['Engineering', 'Full-time', 'Remote'],
    platforms: ['Polymarket'],
    website: 'https://polymarket.com/careers',
    status: 'active',
  },
  {
    id: '52',
    name: 'Data Scientist at Kalshi',
    slug: 'kalshi-data-scientist',
    category: 'job',
    description: 'Analyze market data and build predictive models',
    tags: ['Data Science', 'Full-time', 'NYC'],
    platforms: ['Kalshi'],
    website: 'https://kalshi.com/careers',
    status: 'active',
  },
];

export const communities: Entity[] = [
  {
    id: '61',
    name: 'Prediction Market Traders',
    slug: 'pm-traders',
    category: 'community',
    description: 'Discord community for prediction market traders and enthusiasts',
    tags: ['Discord', 'Trading', 'Community'],
    discord: 'pmtraders',
    activityLevel: 'high',
    details: {
      keyFacts: [
        { label: 'Members', value: '5,000+' },
        { label: 'Founded', value: '2022' },
      ],
    },
  },
  {
    id: '62',
    name: 'Forecasting Nerds',
    slug: 'forecasting-nerds',
    category: 'community',
    description: 'Community of forecasters discussing methodology and calibration',
    tags: ['Forecasting', 'Research', 'Community'],
    discord: 'forecastingnerdss',
    twitter: '@forecasting_nerds',
    activityLevel: 'medium',
  },
];

export const allEntities = [
  ...platforms,
  ...projects,
  ...traders,
  ...builders,
  ...creators,
  ...jobs,
  ...communities,
];

export const categories = [
  {
    id: 'platforms',
    name: 'Platforms',
    slug: 'platforms',
    description: 'Trading platforms and prediction market exchanges',
    count: platforms.length,
  },
  {
    id: 'projects',
    name: 'Projects & Tools',
    slug: 'projects',
    description: 'Infrastructure, APIs, bots, and developer tools',
    count: projects.length,
  },
  {
    id: 'traders',
    name: 'Traders',
    slug: 'traders',
    description: 'Notable traders and market participants',
    count: traders.length,
  },
  {
    id: 'builders',
    name: 'Builders',
    slug: 'builders',
    description: 'Developers and engineers building in the ecosystem',
    count: builders.length,
  },
  {
    id: 'creators',
    name: 'Creators',
    slug: 'creators',
    description: 'Content creators, researchers, and analysts',
    count: creators.length,
  },
  {
    id: 'jobs',
    name: 'Jobs',
    slug: 'jobs',
    description: 'Open positions in prediction market companies',
    count: jobs.length,
  },
  {
    id: 'communities',
    name: 'Communities',
    slug: 'communities',
    description: 'Discord servers, forums, and groups',
    count: communities.length,
  },
];

export function getEntitiesByCategory(category: string): Entity[] {
  switch (category) {
    case 'platforms':
      return platforms;
    case 'projects':
      return projects;
    case 'traders':
      return traders;
    case 'builders':
      return builders;
    case 'creators':
      return creators;
    case 'jobs':
      return jobs;
    case 'communities':
      return communities;
    default:
      return [];
  }
}

export function getEntityBySlug(slug: string): Entity | undefined {
  return allEntities.find((e) => e.slug === slug);
}

export function getRelatedEntities(entityIds: string[]): Entity[] {
  return allEntities.filter((e) => entityIds.includes(e.id));
}