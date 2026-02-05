import { ExternalLink, Github, Twitter, Globe, MessageCircle } from 'lucide-react';
import { Badge } from './ui/badge';
import { Entity } from '../data/mockData';

interface EntityCardProps {
  entity: Entity;
  onClick?: () => void;
}

export function EntityCard({ entity, onClick }: EntityCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-white border border-gray-200 rounded-lg p-5 hover:border-gray-400 transition-colors cursor-pointer"
    >
      <div className="flex items-start gap-3 mb-3">
        {entity.logo ? (
          <img src={entity.logo} alt={entity.name} className="w-10 h-10 rounded" />
        ) : (
          <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center text-gray-400 text-sm font-medium">
            {entity.name.charAt(0)}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-gray-900 mb-1">{entity.name}</h3>
          <p className="text-sm text-gray-600 line-clamp-2">{entity.description}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-3">
        {entity.tags.slice(0, 3).map((tag) => (
          <Badge key={tag} variant="secondary" className="text-xs bg-gray-100 text-gray-700 hover:bg-gray-100">
            {tag}
          </Badge>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {entity.website && (
            <Globe className="w-4 h-4 text-gray-400" />
          )}
          {entity.twitter && (
            <Twitter className="w-4 h-4 text-gray-400" />
          )}
          {entity.github && (
            <Github className="w-4 h-4 text-gray-400" />
          )}
          {entity.discord && (
            <MessageCircle className="w-4 h-4 text-gray-400" />
          )}
        </div>
        {entity.activityLevel && (
          <span className="text-xs text-gray-500">
            {entity.activityLevel === 'high' && '● High activity'}
            {entity.activityLevel === 'medium' && '● Medium activity'}
            {entity.activityLevel === 'low' && '● Low activity'}
          </span>
        )}
      </div>
    </div>
  );
}
