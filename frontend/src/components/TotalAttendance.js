import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import "../chart.css";

const TotalAttendance = ({ TotalAttendanceState }) => {
    ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

    // Generate an array of random colors for each data point
    const randomColors = Array.from(
        { length: TotalAttendanceState.data.length },
        () =>
            `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
                Math.random() * 256
            )}, ${Math.floor(Math.random() * 256)}, 0.6)`
    );

    const data = {
        labels: TotalAttendanceState.label,
        datasets: [
            {
                label: "# of Attendance",
                data: TotalAttendanceState.data,
                backgroundColor: randomColors, // Assign random colors to each data point
                borderColor: "black", // Bar border color
                borderWidth: 2, // Bar border width
                borderRadius: 15, // Bar border radius to make it rounded
            },
        ],
    };

    const options = {
        scales: {
            x: {
                title: {
                    display: true,
                    text: TotalAttendanceState.xAxisLabel,
                    color: "black", // X-axis title color
                    font: {
                        size: 16, // X-axis title font size
                    },
                },
            },
            y: {
                title: {
                    display: true,
                    text: "Attendance",
                    color: "black", // Y-axis title color
                    font: {
                        size: 16, // Y-axis title font size
                    },
                },
                ticks: {
                    beginAtZero: true, // Start Y-axis ticks from zero
                    color: "black", // Y-axis tick color
                },
            },
        },
        plugins: {
            legend: {
                display: true,
                position: "top", // Legend position (top, bottom, left, right)
                labels: {
                    color: "black", // Legend label color
                },
            },
            title: {
                display: true,
                text: "Year",
            },
        },
    };

    return (
        <div className="total-attendance">
            <Bar data={data} options={options} />
        </div>
    );
};

export default TotalAttendance;
