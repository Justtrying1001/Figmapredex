import { Search } from 'lucide-react';
import { Input } from './ui/input';
import { Badge } from './ui/badge';

interface SearchAndFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  availableTags: string[];
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
  availablePlatforms?: string[];
  selectedPlatforms?: string[];
  onPlatformToggle?: (platform: string) => void;
}

export function SearchAndFilters({
  searchQuery,
  onSearchChange,
  availableTags,
  selectedTags,
  onTagToggle,
  availablePlatforms = [],
  selectedPlatforms = [],
  onPlatformToggle,
}: SearchAndFiltersProps) {
  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 bg-white border-gray-300"
        />
      </div>

      {availableTags.length > 0 && (
        <div>
          <div className="text-sm font-medium text-gray-700 mb-2">Tags</div>
          <div className="flex flex-wrap gap-2">
            {availableTags.map((tag) => (
              <Badge
                key={tag}
                variant={selectedTags.includes(tag) ? 'default' : 'secondary'}
                className={`cursor-pointer ${
                  selectedTags.includes(tag)
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => onTagToggle(tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {availablePlatforms.length > 0 && onPlatformToggle && (
        <div>
          <div className="text-sm font-medium text-gray-700 mb-2">Platforms</div>
          <div className="flex flex-wrap gap-2">
            {availablePlatforms.map((platform) => (
              <Badge
                key={platform}
                variant={selectedPlatforms.includes(platform) ? 'default' : 'secondary'}
                className={`cursor-pointer ${
                  selectedPlatforms.includes(platform)
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => onPlatformToggle(platform)}
              >
                {platform}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
