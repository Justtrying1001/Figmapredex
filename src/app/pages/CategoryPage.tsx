import { useState, useMemo } from 'react';
import { EntityCard } from '../components/EntityCard';
import { SearchAndFilters } from '../components/SearchAndFilters';
import { SubmitBanner } from '../components/SubmitBanner';
import { Entity } from '../data/mockData';
import { ArrowLeft } from 'lucide-react';

interface CategoryPageProps {
  title: string;
  description: string;
  entities: Entity[];
  onNavigate: (path: string) => void;
  onEntityClick: (slug: string) => void;
}

export function CategoryPage({
  title,
  description,
  entities,
  onNavigate,
  onEntityClick,
}: CategoryPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);

  // Get unique tags and platforms
  const availableTags = useMemo(() => {
    const tags = new Set<string>();
    entities.forEach((entity) => {
      entity.tags.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [entities]);

  const availablePlatforms = useMemo(() => {
    const platforms = new Set<string>();
    entities.forEach((entity) => {
      entity.platforms?.forEach((platform) => platforms.add(platform));
    });
    return Array.from(platforms).sort();
  }, [entities]);

  // Filter entities
  const filteredEntities = useMemo(() => {
    return entities.filter((entity) => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesSearch =
          entity.name.toLowerCase().includes(query) ||
          entity.description.toLowerCase().includes(query) ||
          entity.tags.some((tag) => tag.toLowerCase().includes(query));
        if (!matchesSearch) return false;
      }

      // Tag filter
      if (selectedTags.length > 0) {
        const hasTag = selectedTags.some((tag) => entity.tags.includes(tag));
        if (!hasTag) return false;
      }

      // Platform filter
      if (selectedPlatforms.length > 0 && entity.platforms) {
        const hasPlatform = selectedPlatforms.some((platform) =>
          entity.platforms?.includes(platform)
        );
        if (!hasPlatform) return false;
      }

      return true;
    });
  }, [entities, searchQuery, selectedTags, selectedPlatforms]);

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handlePlatformToggle = (platform: string) => {
    setSelectedPlatforms((prev) =>
      prev.includes(platform) ? prev.filter((p) => p !== platform) : [...prev, platform]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back button */}
        <button
          onClick={() => onNavigate('/')}
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to home</span>
        </button>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-gray-900 mb-2">{title}</h1>
          <p className="text-gray-600">{description}</p>
          <div className="mt-2 text-sm text-gray-500">
            {filteredEntities.length} {filteredEntities.length === 1 ? 'entry' : 'entries'}
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-lg p-5 sticky top-24">
              <SearchAndFilters
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                availableTags={availableTags}
                selectedTags={selectedTags}
                onTagToggle={handleTagToggle}
                availablePlatforms={availablePlatforms}
                selectedPlatforms={selectedPlatforms}
                onPlatformToggle={handlePlatformToggle}
              />
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-3 space-y-6">
            <SubmitBanner />

            {filteredEntities.length === 0 ? (
              <div className="bg-white border border-gray-200 rounded-lg p-12 text-center">
                <div className="text-gray-400 mb-2">No entries found</div>
                <p className="text-sm text-gray-600">
                  Try adjusting your search or filters.
                </p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 gap-4">
                {filteredEntities.map((entity) => (
                  <EntityCard
                    key={entity.id}
                    entity={entity}
                    onClick={() => onEntityClick(entity.slug)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}