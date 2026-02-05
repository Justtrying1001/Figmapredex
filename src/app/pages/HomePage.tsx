import { CategoryCard } from '../components/CategoryCard';
import { StatCard } from '../components/StatCard';
import { categories, allEntities } from '../data/mockData';
import { TrendingUp, Users, Briefcase, MessageSquare, Database, Package } from 'lucide-react';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const totalEntities = allEntities.length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-4">
              The prediction markets ecosystem, mapped.
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              A neutral directory listing and organizing all actors in the prediction markets space—platforms, tools, traders, builders, and communities.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-gray-400" />
                <span>{totalEntities} entities</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-gray-400" />
                <span>{categories.length} categories</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Explore the ecosystem
          </h2>
          <p className="text-gray-600">
            Browse by category to discover platforms, tools, people, and communities.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              name={category.name}
              description={category.description}
              count={category.count}
              onClick={() => onNavigate(`/${category.slug}`)}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white border border-gray-200 rounded-lg p-8">
          <h3 className="font-medium text-gray-900 mb-6">Ecosystem snapshot</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            <StatCard
              value={categories.find((c) => c.id === 'platforms')?.count || 0}
              label="Active platforms"
              icon={<Database className="w-5 h-5" />}
            />
            <StatCard
              value={categories.find((c) => c.id === 'projects')?.count || 0}
              label="Tools & projects"
              icon={<Package className="w-5 h-5" />}
            />
            <StatCard
              value={categories.find((c) => c.id === 'communities')?.count || 0}
              label="Communities"
              icon={<MessageSquare className="w-5 h-5" />}
            />
          </div>
        </div>

        {/* About Section */}
        <div className="mt-12 bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h3 className="font-medium text-gray-900 mb-3">About Predex</h3>
          <div className="text-sm text-gray-600 space-y-2">
            <p>
              Predex is a neutral, community-maintained directory of the prediction markets ecosystem. We provide a structured reference for anyone looking to discover platforms, tools, people, and resources in this space.
            </p>
            <p>
              This is not a trading platform or dashboard—it's a public registry designed to map and organize the ecosystem for traders, builders, researchers, and investors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}