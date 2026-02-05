import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  name: string;
  description: string;
  count: number;
  onClick?: () => void;
}

export function CategoryCard({ name, description, count, onClick }: CategoryCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-400 transition-colors cursor-pointer group"
    >
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-medium text-gray-900">{name}</h3>
        <span className="text-sm text-gray-500 bg-gray-50 px-2 py-1 rounded">{count}</span>
      </div>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <div className="flex items-center text-sm text-blue-600 group-hover:text-blue-700">
        <span>View all</span>
        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
      </div>
    </div>
  );
}
