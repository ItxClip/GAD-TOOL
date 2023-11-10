import './Gender.css'
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

const TestChart = () => {
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
                type: 'bar',
                label: 'Male',
                data: [49, 12, 34, 56, 78, 90, 12, 34, 56, 78, 90, 12],
                borderWidth: 2,
                borderRadius: 15,
                backgroundColor: 'hsl(284, 54%, 46%)',
                borderColor: 'hsla(284, 54%, 46%, 30%)',
            },

            {
                type: 'bar',
                label: 'Female',
                data: [40, 31, 22, 13, 4, 5, 16, 27, 38, 49, 50, 61],
                borderWidth: 2,
                borderRadius: 15,
                backgroundColor: 'hsl(307, 100%, 87%)',
                borderColor: 'hsla(307, 100%, 87%, 30%)',
            },

            {
                type: 'bar',
                label: 'Prefer Not to Say',
                data: [81, 72, 63, 54, 45, 36, 27, 18, 9, 0, 11, 22],
                borderWidth: 2,
                borderRadius: 15,
                backgroundColor: 'hsl(303, 66%, 61%)',
                borderColor: 'hsla(303, 66%, 61%, 30%)',
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
    }

    return (
        <div className="TestChart outline col-8 d-flex flex-column align-items-center justify-content-center">
            <DateSelector />
            <Bar className="card" data={data} options={options} />
        </div>
    )
}

export default TestChart
