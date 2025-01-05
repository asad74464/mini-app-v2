import { Users } from 'lucide-react';
import ReferralStats from '../components/frens/ReferralStats';
import InviteButton from '../components/frens/InviteButton';

export default function FrensPage() {
  return (
    <div className="p-4 space-y-6">
      <div className="flex justify-center mb-8">
        <div className="text-center">
          <span className="text-2xl mb-4">👥 → 💎</span>
          <h1 className="text-xl font-bold mt-4">
            Turn your friends into traders to earn TON!
          </h1>
        </div>
      </div>

      <ReferralStats />

      <div className="mt-8">
        <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg">
          <div className="flex items-center gap-3">
            <span className="text-2xl">👥</span>
            <span>Frens invited</span>
          </div>
          <span>2</span>
        </div>
      </div>

      <InviteButton />
    </div>
  );
}