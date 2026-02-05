import { Plus, Edit3 } from 'lucide-react';

export function SubmitBanner() {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex items-start gap-4">
      <div className="flex-1">
        <h3 className="font-medium text-gray-900 mb-1">Contribute to Predex</h3>
        <p className="text-sm text-gray-600">
          Help keep this directory complete and accurate. Submit new entries or suggest edits to existing information.
        </p>
      </div>
      <div className="flex gap-2">
        <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-blue-600 hover:text-blue-700 border border-blue-200 rounded hover:bg-blue-50 transition-colors">
          <Plus className="w-4 h-4" />
          <span>Submit entry</span>
        </button>
        <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-600 hover:text-gray-700 border border-gray-200 rounded hover:bg-gray-50 transition-colors">
          <Edit3 className="w-4 h-4" />
          <span>Suggest edit</span>
        </button>
      </div>
    </div>
  );
}
