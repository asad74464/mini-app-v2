import { ArrowDown, ArrowUp, Clock, Star } from 'lucide-react';

export default function WalletActions() {
  const actions = [
    { icon: ArrowDown, label: 'Receive' },
    { icon: ArrowUp, label: 'Send' },
    { icon: Clock, label: 'History' },
    { icon: Star, label: 'Points' },
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {actions.map(({ icon: Icon, label }) => (
        <button
          key={label}
          className="flex flex-col items-center gap-2"
        >
          <div className="bg-gray-800 p-3 rounded-full">
            <Icon size={20} />
          </div>
          <span className="text-xs">{label}</span>
        </button>
      ))}
    </div>
  );
}