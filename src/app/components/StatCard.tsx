interface StatCardProps {
  value: number | string;
  label: string;
  icon?: React.ReactNode;
}

export function StatCard({ value, label, icon }: StatCardProps) {
  return (
    <div className="flex items-start gap-3">
      {icon && (
        <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center text-gray-500 flex-shrink-0">
          {icon}
        </div>
      )}
      <div>
        <div className="text-2xl font-semibold text-gray-900 mb-1">{value}</div>
        <div className="text-sm text-gray-600">{label}</div>
      </div>
    </div>
  );
}
