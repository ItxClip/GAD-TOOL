import './EventsComp.css'
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

const EventsChart = () => {
    ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

    const data = {
        labels: months,
        datasets: [
            {
                label: 'Events',
                backgroundColor: 'rgba(248, 198, 70, 0.7)',
                borderWidth: 2,
                borderColor: 'rgba(255, 206, 86, 1)',
                borderRadius: 15,
                data: [65, 59, 80, 81, 56, 55, 40, 19, 86, 27, 90, 100],
            },
        ],
    }

    const options = {
        title: {
            display: true,
            text: 'Events Chart',
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
                    text: 'Events',
                },
            },
        },
    }

    return (
        <div className="EventsChart outline col-8 d-flex flex-column align-items-center justify-content-center">
            <DateSelector />
            <Bar className="card shadow" data={data} options={options} />
        </div>
    )
}

export default EventsChart
