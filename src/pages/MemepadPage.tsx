import { Rocket } from "lucide-react";
import TokenTabs from "../components/memepad/TokenTabs";
import TokenChart from "../components/token/TokenChart";
import TokenCard from "../components/TokenCard";

export default function MemepadPage() {
  const tokenData = {
    symbol: "APHBT",
    price: "12.6M",
    marketCap: "$12.6M",
    holders: 4327,
    transactions: 12400,
    volume: "$1.8M",
    stats: {
      rocket: 30100,
      flame: 11900,
      heart: 12000,
    },
  };
  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Memepad</h1>
        <button className="bg-gray-800 p-2 rounded-full">
          <Rocket size={20} />
        </button>
      </div>

      <TokenTabs />
      <TokenChart />
      <TokenCard {...tokenData} />
    </div>
  );
}
