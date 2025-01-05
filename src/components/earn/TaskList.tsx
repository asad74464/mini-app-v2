import { LucideIcon } from 'lucide-react';

interface Task {
  icon: LucideIcon;
  title: string;
  points: number;
  status: "verify" | "start";
}

interface TaskListProps {
  tasks: Task[];
}

export default function TaskList({ tasks }: TaskListProps) {
  return (
    <div className="space-y-4">
      {tasks.map((task, index) => (
        <div key={index} className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg">
          <div className="flex items-center gap-3">
            <task.icon size={20} />
            <div>
              <p className="font-medium">{task.title}</p>
              <p className="text-sm text-gray-400">+{task.points} BP</p>
            </div>
          </div>
          <button
            className={`px-4 py-1 rounded-full text-sm ${
              task.status === "verify"
                ? "bg-blue-500 text-white"
                : "bg-gray-700 text-gray-300"
            }`}
          >
            {task.status === "verify" ? "Verify" : "Start"}
          </button>
        </div>
      ))}
    </div>
  );
}