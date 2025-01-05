interface TokenBalanceProps {
  name: string;
  symbol: string;
  amount: string;
  value: string;
  icon: string;
}

export default function TokenBalance({ name, symbol, amount, value, icon }: TokenBalanceProps) {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center gap-3">
        <span className="text-2xl">{icon}</span>
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-sm text-gray-400">{amount} {symbol}</p>
        </div>
      </div>
      <p className="font-medium">${value}</p>
    </div>
  );
}