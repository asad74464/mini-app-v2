export default function ReferralStats() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-gray-800/30 p-4 rounded-lg">
        <p className="text-2xl font-bold mb-2">20%</p>
        <p className="text-sm text-gray-400">
          of friends' trade commission
        </p>
      </div>
      <div className="bg-gray-800/30 p-4 rounded-lg">
        <p className="text-2xl font-bold mb-2">2.5%</p>
        <p className="text-sm text-gray-400">
          of their refs' trade commissions
        </p>
      </div>
    </div>
  );
}