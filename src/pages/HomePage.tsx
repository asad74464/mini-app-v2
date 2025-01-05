import UserHeader from "../components/user/UserHeader";
import DailyCheckIn from "../components/notifications/DailyCheckIn";
import QuickActions from "../components/QuickActions";

export default function HomePage() {
  return (
    <div className="space-y-6 p-4">
      <UserHeader />
      <DailyCheckIn />
      <QuickActions />

      <div className="bg-gray-800/30 rounded-lg p-4">
        <h2 className="text-xl font-bold mb-2">Season 2 is here</h2>
        <p className="text-gray-400 mb-4">
          Trade or launch your own token to get Meme points.
        </p>
        <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg text-sm transition-colors">
          How it works
        </button>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">Points</h2>
          <span className="text-gray-400">›</span>
        </div>
        <div className="flex items-center justify-between bg-gray-800/30 p-4 rounded-lg">
          <div className="flex items-center gap-3">
            <span className="text-2xl">M</span>
            <div>
              <p className="font-medium">Meme points</p>
              <p className="text-sm text-gray-400">0 MP</p>
            </div>
          </div>
          <button className="bg-gray-700 hover:bg-gray-600 px-4 py-1 rounded-full text-sm transition-colors">
            Trade to earn
          </button>
        </div>
      </div>
    </div>
  );
}
