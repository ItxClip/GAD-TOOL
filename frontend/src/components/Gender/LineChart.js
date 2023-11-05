import './Gender.css'
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  PointElement,
} from 'chart.js'
import { Bar, Line } from 'react-chartjs-2'
import { months } from '../DateSelector'
import DateSelector from './DateSelector'

const LineChart = () => {
  ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    PointElement
  )

  const randomColors = Array.from(
    { length: 12 },
    () =>
      `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)}, 0.6)`
  )

  const data = {
    type: 'line',
    labels: months,
    datasets: [
      {
        label: 'Male',
        data: [49, 12, 34, 56, 78, 90, 12, 34, 56, 78, 90, 12],
        fill: false,
        tension: 0.4,
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
      },

      {
        label: 'Female',
        data: [40, 31, 22, 13, 4, 5, 16, 27, 38, 49, 50, 61],
        fill: false,
        tension: 0.4,
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
      },

      {
        label: 'Prefer Not to Say',
        data: [81, 72, 63, 54, 45, 36, 27, 18, 9, 0, 11, 22],
        fill: false,
        tension: 0.4,
        backgroundColor: 'rgba(255, 206, 86, 0.6)',
        borderColor: 'rgba(255, 206, 86, 1)',
      },
    ],
  }

  const options = {
    title: {
      display: true,
      text: 'Gender Chart',
      fontSize: 20,
    },
    legend: {
      display: true,
      position: 'right',
    },
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Months',
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Count',
        },
      },
    },
  }

  return (
    <div className="TestChart outline col-8 d-flex flex-column align-items-center justify-content-center">
      <DateSelector />
      <Line className="card" data={data} options={options} />
    </div>
  )
}

export default LineChart
