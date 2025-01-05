import ConnectWallet from "../components/wallet/ConnectWallet";

export default function WalletPage() {
  return (
    <div className="flex justify-center h-screen p-16 text-center">
      <div className="space-y-4">
        <h3 className="text-3xl font-bold">
          Get real crypto. Earn and buy any tokens.
        </h3>

        <ConnectWallet />
      </div>
    </div>
  );
}
