import { Sprout, Flame, Rocket } from 'lucide-react';

export default function QuickActions() {
  const actions = [
    { icon: Sprout, label: 'Launch token' },
    { icon: Flame, label: 'Memepad' },
    { icon: Rocket, label: 'Trading bot' },
  ];

  return (
    <div className="flex justify-around py-6">
      {actions.map(({ icon: Icon, label }) => (
        <button
          key={label}
          className="flex flex-col items-center gap-2"
        >
          <div className="bg-gray-800 p-4 rounded-full">
            <Icon size={24} />
          </div>
          <span className="text-sm">{label}</span>
        </button>
      ))}
    </div>
  );
}