import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import '../Gender.css'

const SideTotal = () => {
  ChartJS.register(ArcElement, Tooltip, Legend)

  const data = {
    labels: ['Male', 'Female', 'Prefer Not To Say'],
    datasets: [
      {
        data: [491, 401, 821],
        backgroundColor: [
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(255, 206, 86, 0.6)',
        ],
        hoverBackgroundColor: [
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(255, 206, 86, 0.6)',
        ],
        borderWidth: 2, // Set the border width to 2
        borderColor: [
          'rgba(0, 0, 0, 1)',
          'rgba(0, 0, 0, 1)',
          'rgba(0, 0, 0, 1)',
        ], // Black border color
        hoverBorderWidth: 2,
      },
    ],
  }

  const options = {
    // Add any chart-specific options here if needed
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  }

  return (
    <div className="SideTotal outline p-2 d-flex align-items-center justify-content-center">
      <Doughnut className="outline" data={data} options={options} />
    </div>
  )
}

export default SideTotal
