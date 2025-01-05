import { useState } from 'react';

export default function UserHeader() {
  const [balance] = useState("1.55");
  const [address] = useState("UQA...auF");

  return (
    <div className="flex items-center gap-3 p-4 bg-gray-900/50 rounded-lg">
      <div className="w-10 h-10 rounded-full bg-gray-700" /> {/* Profile picture placeholder */}
      <div>
        <div className="flex items-center gap-2">
          <span className="text-blue-400">{address}</span>
          <span className="text-3xl font-bold">${balance}</span>
        </div>
        <div className="flex items-center gap-1 text-sm text-gray-400">
          <span>💎</span>
          <span>TON</span>
        </div>
      </div>
    </div>
  );
}