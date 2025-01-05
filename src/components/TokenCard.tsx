import { Rocket, Flame, Heart } from 'lucide-react';

interface TokenCardProps {
  symbol: string;
  price: string;
  marketCap: string;
  holders: number;
  transactions: number;
  volume: string;
  stats: {
    rocket: number;
    flame: number;
    heart: number;
  };
}

export default function TokenCard({
  symbol,
  price,
  marketCap,
  holders,
  transactions,
  volume,
  stats,
}: TokenCardProps) {
  return (
    <div className="bg-black text-white p-4 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-bold">{symbol}</h2>
          <p className="text-gray-400 text-sm">Market cap: {marketCap}</p>
        </div>
        <div className="text-2xl font-bold">${price}</div>
      </div>

      <div className="grid grid-cols-3 gap-4 text-sm text-gray-400 mb-4">
        <div>
          <p>Holders</p>
          <p className="text-white">{holders.toLocaleString()}</p>
        </div>
        <div>
          <p>Txns</p>
          <p className="text-white">{transactions.toLocaleString()}</p>
        </div>
        <div>
          <p>Volume</p>
          <p className="text-white">{volume}</p>
        </div>
      </div>

      <div className="flex gap-4 mb-6">
        {[
          { icon: Rocket, count: stats.rocket },
          { icon: Flame, count: stats.flame },
          { icon: Heart, count: stats.heart },
        ].map(({ icon: Icon, count }, index) => (
          <div
            key={index}
            className="flex items-center gap-1 bg-gray-800/50 rounded-full px-3 py-1"
          >
            <Icon size={16} />
            <span>{(count / 1000).toFixed(1)}K</span>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <button className="flex-1 bg-[#98ff98] text-black font-semibold py-3 rounded-lg">
          Buy
        </button>
        <button className="flex-1 bg-[#ff69b4] text-white font-semibold py-3 rounded-lg">
          Sell
        </button>
      </div>
    </div>
  );
}