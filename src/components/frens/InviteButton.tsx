import { Users } from 'lucide-react';

export default function InviteButton() {
  return (
    <button className="w-full flex items-center justify-center gap-2 bg-white text-black font-semibold py-3 rounded-lg mt-4">
      <Users size={20} />
      Invite a fren
    </button>
  );
}