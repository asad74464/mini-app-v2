import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export default function TokenChart() {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: { color: '#666' }
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: { color: '#666' }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  };

  const data = {
    labels: ['18:00', '00:00', '06:00'],
    datasets: [{
      data: [12400000, 13000000, 12600000],
      borderColor: '#98ff98',
      backgroundColor: 'rgba(152, 255, 152, 0.1)',
      fill: true,
      tension: 0.4
    }]
  };

  return (
    <div className="h-48 mt-4">
      <Line data={data} options={options} />
    </div>
  );
}