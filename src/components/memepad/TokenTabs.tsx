export default function TokenTabs() {
  const tabs = ["Live", "Upcoming", "Ended"];
  
  return (
    <div className="flex gap-4 border-b border-gray-800">
      {tabs.map((tab, index) => (
        <button
          key={tab}
          className={`px-4 py-2 ${
            index === 0
              ? "text-white border-b-2 border-white"
              : "text-gray-500"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}