import { useState } from "react";
import { X } from "lucide-react";

export default function ConnectWallet() {
  const [showModal, setShowModal] = useState(false);

  const wallets = [
    { name: "MyTonWallet", icon: "💎" },
    { name: "Tonkeeper", icon: "💎" },
    { name: "Tonhub", icon: "💎" },
    { name: "Bitget Wallet", icon: "💎" },
  ];

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="bg-white text-black font-medium py-3 px-6 rounded-xl w-auto"
      >
        Connect wallet
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-black/80 flex items-end z-50">
          <div className="bg-white w-full p-6 rounded-t-3xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-black">
                Connect your wallet
              </h2>
              <button onClick={() => setShowModal(false)}>
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            <p className="text-gray-500 mb-6 text-center">
              Open Wallet in Telegram or select your wallet to connect
            </p>

            <button className="w-full bg-blue-500 text-white font-medium py-3 px-6 rounded-xl mb-6 flex items-center justify-center gap-2">
              <span>Open Wallet in Telegram</span>
              <span>↗️</span>
            </button>

            <div className="grid grid-cols-4 gap-4">
              {wallets.map((wallet) => (
                <button
                  key={wallet.name}
                  className="flex flex-col items-center gap-2"
                >
                  <span className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center text-2xl">
                    {wallet.icon}
                  </span>
                  <span className="text-xs text-gray-900 text-center">
                    {wallet.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
