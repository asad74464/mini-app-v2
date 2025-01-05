import { FileText, Youtube, Twitter } from 'lucide-react';
import TaskList from '../components/earn/TaskList';
import TaskTabs from '../components/earn/TaskTabs';

export default function EarnPage() {
  const tasks = [
    {
      icon: FileText,
      title: "MR App CEO @ Binance Blockchain",
      points: 250,
      status: "verify"
    },
    {
      icon: FileText,
      title: "Future of Telegram. Part 1",
      points: 250,
      status: "verify"
    },
    {
      icon: FileText,
      title: "MR App COO @ Blockchain Life",
      points: 250,
      status: "start"
    },
    {
      icon: FileText,
      title: "History of Bitcoin",
      points: 250,
      status: "start"
    },
    {
      icon: Youtube,
      title: "Crypto Slang. Part 5",
      points: 250,
      status: "start"
    },
    {
      icon: Twitter,
      title: "Follow African X account",
      points: 200,
      status: "start"
    }
  ];

  return (
    <div className="p-4 space-y-6">
      <div className="bg-gray-800/50 rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-2">Earn for checking socials</h2>
        <div className="flex justify-between items-center">
          <span className="text-gray-400">+0/540 BP</span>
          <span className="text-gray-400">0/6</span>
        </div>
      </div>
      
      <TaskTabs />
      <TaskList tasks={tasks} />
    </div>
  );
}