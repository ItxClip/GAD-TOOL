import './Attendance.css'
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { months } from './DateSelector'
import DateSelector from './DateSelector'

const AttendanceChart = () => {
    ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

    const randomColors = Array.from(
        { length: 12 },
        () =>
            `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
                Math.random() * 256
            )}, ${Math.floor(Math.random() * 256)}, 0.6)`
    )

    const data = {
        labels: months,
        datasets: [
            {
                label: 'Attendance',
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderWidth: 2,
                borderColor: 'rgba(54, 162, 235, 1)',
                borderRadius: 15,
                data: [65, 59, 80, 81, 56, 55, 40, 19, 86, 27, 90, 100],
            },
        ],
    }

    const options = {
        title: {
            display: true,
            text: 'Attendance Chart',
            fontSize: 20,
        },
        legend: {
            display: true,
            position: 'right',
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
                    text: 'Attendance',
                },
            },
        },
    }

    return (
        <div className="AttendanceChart outline col-8 d-flex flex-column align-items-center justify-content-center">
            <DateSelector />
            <Bar className="card shadow" data={data} options={options} />
        </div>
    )
}

export default AttendanceChart
