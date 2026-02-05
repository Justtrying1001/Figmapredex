interface KeyFactsProps {
  facts: { label: string; value: string }[];
}

export function KeyFacts({ facts }: KeyFactsProps) {
  if (facts.length === 0) return null;

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
      <h3 className="font-medium text-gray-900 mb-4">Key Facts</h3>
      <div className="space-y-3">
        {facts.map((fact, index) => (
          <div key={index} className="flex items-start justify-between">
            <span className="text-sm text-gray-600">{fact.label}</span>
            <span className="text-sm text-gray-900 font-medium text-right">{fact.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
