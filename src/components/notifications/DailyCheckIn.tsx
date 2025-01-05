import { useState, useEffect } from 'react';

export default function DailyCheckIn() {
  const [timeLeft, setTimeLeft] = useState("18h 51m");

  useEffect(() => {
    // Add timer logic here if needed
  }, []);

  return (
    <div className="bg-gray-800/30 rounded-lg p-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-yellow-400">⚡️</span>
          <span>1-day check-in</span>
        </div>
        <button className="text-gray-400 hover:text-white">
          <span>?</span>
        </button>
      </div>
      <p className="text-sm text-gray-400">Next claim in {timeLeft}</p>
    </div>
  );
}