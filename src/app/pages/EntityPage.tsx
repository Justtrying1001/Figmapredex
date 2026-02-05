import { Entity, getRelatedEntities } from '../data/mockData';
import { Badge } from '../components/ui/badge';
import { ExternalLinks } from '../components/ExternalLinks';
import { KeyFacts } from '../components/KeyFacts';
import { RelatedEntities } from '../components/RelatedEntities';
import { SubmitBanner } from '../components/SubmitBanner';
import { Breadcrumb } from '../components/Breadcrumb';
import { ArrowLeft } from 'lucide-react';

interface EntityPageProps {
  entity: Entity;
  onNavigate: (path: string) => void;
}

export function EntityPage({ entity, onNavigate }: EntityPageProps) {
  const relatedEntities = entity.relatedEntities
    ? getRelatedEntities(entity.relatedEntities)
    : [];

  const categoryPath = entity.category === 'project' ? 'projects' : entity.category + 's';
  const categoryName = entity.category === 'project' ? 'Projects' : entity.category.charAt(0).toUpperCase() + entity.category.slice(1) + 's';

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: 'Home', onClick: () => onNavigate('/') },
            { label: categoryName, onClick: () => onNavigate(`/${categoryPath}`) },
            { label: entity.name },
          ]}
        />
        
        {/* Header */}
        <div className="bg-white border border-gray-200 rounded-lg p-8 mb-6">
          <div className="flex items-start gap-4 mb-6">
            {entity.logo ? (
              <img src={entity.logo} alt={entity.name} className="w-16 h-16 rounded" />
            ) : (
              <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center text-gray-400 text-2xl font-medium">
                {entity.name.charAt(0)}
              </div>
            )}
            <div className="flex-1">
              <div className="flex items-start justify-between mb-2">
                <h1 className="text-3xl font-semibold text-gray-900">{entity.name}</h1>
                <div className="flex gap-2">
                  <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-100">
                    {entity.category}
                  </Badge>
                  {entity.status && (
                    <Badge
                      variant={entity.status === 'active' ? 'default' : 'secondary'}
                      className={
                        entity.status === 'active'
                          ? 'bg-green-100 text-green-700 hover:bg-green-100'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-100'
                      }
                    >
                      {entity.status}
                    </Badge>
                  )}
                </div>
              </div>
              <p className="text-gray-600 mb-4">{entity.description}</p>
              <ExternalLinks
                website={entity.website}
                twitter={entity.twitter}
                github={entity.github}
                discord={entity.discord}
              />
            </div>
          </div>

          {/* Tags */}
          {entity.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200">
              {entity.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-100">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Overview */}
            {entity.details?.overview && (
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h2 className="font-medium text-gray-900 mb-3">Overview</h2>
                <p className="text-gray-600 leading-relaxed">{entity.details.overview}</p>
              </div>
            )}

            {/* Products/Activity */}
            {entity.details?.products && entity.details.products.length > 0 && (
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h2 className="font-medium text-gray-900 mb-3">Products</h2>
                <ul className="space-y-2">
                  {entity.details.products.map((product, index) => (
                    <li key={index} className="text-gray-600 flex items-start">
                      <span className="text-gray-400 mr-2">•</span>
                      <span>{product}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Related Entities */}
            {relatedEntities.length > 0 && (
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <RelatedEntities
                  title="Related Entities"
                  entities={relatedEntities}
                  onEntityClick={(slug) => onNavigate(`/entity/${slug}`)}
                />
              </div>
            )}

            {/* Platforms */}
            {entity.platforms && entity.platforms.length > 0 && (
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h2 className="font-medium text-gray-900 mb-3">Supported Platforms</h2>
                <div className="flex flex-wrap gap-2">
                  {entity.platforms.map((platform) => (
                    <Badge key={platform} variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-50">
                      {platform}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Key Facts */}
            {entity.details?.keyFacts && entity.details.keyFacts.length > 0 && (
              <KeyFacts facts={entity.details.keyFacts} />
            )}

            {/* Activity level */}
            {entity.activityLevel && (
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                <h3 className="font-medium text-gray-900 mb-3">Activity Level</h3>
                <div className="flex items-center gap-2">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      entity.activityLevel === 'high'
                        ? 'bg-green-500'
                        : entity.activityLevel === 'medium'
                        ? 'bg-yellow-500'
                        : 'bg-gray-400'
                    }`}
                  />
                  <span className="text-sm text-gray-700 capitalize">{entity.activityLevel}</span>
                </div>
              </div>
            )}

            {/* Founded */}
            {entity.founded && (
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                <h3 className="font-medium text-gray-900 mb-3">Founded</h3>
                <p className="text-gray-700">{entity.founded}</p>
              </div>
            )}
          </div>
        </div>

        {/* Submit banner */}
        <div className="mt-8">
          <SubmitBanner />
        </div>
      </div>
    </div>
  );
}