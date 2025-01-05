export default function TaskTabs() {
  const tabs = ["New", "OnChain", "Socials", "Academy"];
  
  return (
    <div className="flex gap-4 overflow-x-auto py-2">
      {tabs.map((tab, index) => (
        <button
          key={tab}
          className={`px-4 py-2 whitespace-nowrap ${
            index === 2 ? "text-white" : "text-gray-500"
          }`}
        >
          {tab}•
        </button>
      ))}
    </div>
  );
}