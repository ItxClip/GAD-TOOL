import '../Gender.css'
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

const SideGraph = () => {
  ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

  const data = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Gender',
        backgroundColor: 'rgba(75,192,192,1)',
        borderRadius: 5,
        data: [131, 87, 214, 158],
      },
    ],
  }

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      y: {
        display: false,
      },
    },
  }

  return (
    <div className="outline SideGraph p-0 m-0">
      <Bar className="outline card" data={data} options={options} />
    </div>
  )
}

export default SideGraph
