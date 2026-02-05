import { Entity } from '../data/mockData';
import { Badge } from './ui/badge';

interface RelatedEntitiesProps {
  title: string;
  entities: Entity[];
  onEntityClick: (slug: string) => void;
}

export function RelatedEntities({ title, entities, onEntityClick }: RelatedEntitiesProps) {
  if (entities.length === 0) return null;

  return (
    <div>
      <h3 className="font-medium text-gray-900 mb-3">{title}</h3>
      <div className="grid gap-3">
        {entities.map((entity) => (
          <div
            key={entity.id}
            onClick={() => onEntityClick(entity.slug)}
            className="bg-white border border-gray-200 rounded p-3 hover:border-gray-400 transition-colors cursor-pointer"
          >
            <div className="flex items-start gap-2">
              {entity.logo ? (
                <img src={entity.logo} alt={entity.name} className="w-8 h-8 rounded" />
              ) : (
                <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center text-gray-400 text-xs font-medium flex-shrink-0">
                  {entity.name.charAt(0)}
                </div>
              )}
              <div className="flex-1 min-w-0">
                <div className="font-medium text-sm text-gray-900 mb-1">{entity.name}</div>
                <p className="text-xs text-gray-600 line-clamp-1">{entity.description}</p>
              </div>
              <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700 hover:bg-gray-100 flex-shrink-0">
                {entity.category}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
