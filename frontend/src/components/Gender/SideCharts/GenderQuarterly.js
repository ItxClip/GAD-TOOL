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

const GenderQuarterly = () => {
  ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

  const data = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        type: 'bar',
        label: 'Male',
        data: [49, 12, 34, 56],
        borderWidth: 2,
        borderRadius: 15,
        backgroundColor: 'rgba(54, 162, 235, 0.6',
        borderColor: 'rgba(0, 0, 0, 0.8)',
      },

      {
        type: 'bar',
        label: 'Female',
        data: [40, 31, 22, 13],
        borderWidth: 2,
        borderRadius: 15,
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(0, 0, 0, 0.8)',
      },

      {
        type: 'bar',
        label: 'Prefer Not to Say',
        data: [81, 72, 63, 54],
        borderWidth: 2,
        borderRadius: 5,
        backgroundColor: 'rgba(255, 206, 86, 0.6)',
        borderColor: 'rgba(0, 0, 0, 0.8)',
      },
    ],
  }

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  }

  return (
    <div className="outline GenderQuarterly p-0 m-0">
      <Bar className="outline" data={data} options={options} />
    </div>
  )
}

export default GenderQuarterly
