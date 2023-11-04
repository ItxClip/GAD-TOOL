import "./Attendance.css";
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { months } from "../DateSelector";
import DateSelector from "./DateSelector";

const TestChart = () => {
    ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

    const randomColors = Array.from(
        { length: 12 },
        () =>
            `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
                Math.random() * 256
            )}, ${Math.floor(Math.random() * 256)}, 0.6)`
    );

    const data = {
        labels: months,
        datasets: [
            {
                label: "Attendance",
                backgroundColor: randomColors,
                borderWidth: 2,
                borderColor: "black",
                borderRadius: 15,
                data: [65, 59, 80, 81, 56, 55, 40, 19, 86, 27, 90, 100],
            },
        ],
    };

    const options = {
        title: {
            display: true,
            text: "Attendance Chart",
            fontSize: 20,
        },
        legend: {
            display: true,
            position: "right",
        },
    };

    return (
        <div className="TestChart outline col-8 d-flex flex-column align-items-center justify-content-center">
            <DateSelector />
            <Bar className="card" data={data} options={options} />
        </div>
    );
};

export default TestChart;
