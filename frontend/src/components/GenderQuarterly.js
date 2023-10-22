import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
} from "chart.js";
import "../chart.css";

/**
 * Calculates the gender counts per quarter based on the provided gender and genderByQuarter object.
 * @param {Object} genderByQuarter - An object containing gender counts for each quarter.
 * @param {string} gender - The gender to calculate the counts for. Must be "male", "female", or "preferNotToSay".
 * @returns {Array} An array of gender counts per quarter.
 * @throws {Error} If an invalid gender parameter is provided.
 */
function calculateGenderCountsPerQuarter(genderByQuarter, gender) {
    if (
        gender !== "male" &&
        gender !== "female" &&
        gender !== "preferNotToSay"
    ) {
        throw new Error(
            'Invalid gender parameter. It must be "male", "female", or "preferNotToSay".'
        );
    }

    const genderCountsPerQuarter = [];

    for (const quarter in genderByQuarter.data) {
        if (genderByQuarter.data.hasOwnProperty(quarter)) {
            genderCountsPerQuarter.push(genderByQuarter.data[quarter][gender]);
        }
    }
    return genderCountsPerQuarter;
}

//
// GenderQuarterly chart
const GenderQuarterly = ({ GenderQuarterlyState }) => {
    ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

    const data = {
        labels: ["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"],
        datasets: [
            {
                label: "Male",
                data: calculateGenderCountsPerQuarter(
                    GenderQuarterlyState,
                    "male"
                ),
                backgroundColor: "rgba(54, 162, 235, 0.6)", // Blue
                borderColor: "black", // Black border color
                borderWidth: 2,
                borderRadius: 15, // Rounded bars
            },
            {
                label: "Female",
                data: calculateGenderCountsPerQuarter(
                    GenderQuarterlyState,
                    "female"
                ),
                backgroundColor: "rgba(255, 99, 132, 0.6)", // Red
                borderColor: "black", // Black border color
                borderWidth: 2,
                borderRadius: 15, // Rounded bars
            },
            {
                label: "Prefer not to say",
                data: calculateGenderCountsPerQuarter(
                    GenderQuarterlyState,
                    "preferNotToSay"
                ),
                backgroundColor: "rgba(255, 206, 86, 0.6)", // Yellow
                borderColor: "black", // Black border color
                borderWidth: 2,
                borderRadius: 15, // Rounded bars
            },
        ],
    };

    const options = {
        scales: {
            x: {
                title: {
                    display: true,
                    text: "Quarters",
                    color: "black",
                    font: {
                        size: 16,
                    },
                },
            },
            y: {
                title: {
                    display: true,
                    text: "Count",
                    color: "black",
                    font: {
                        size: 16,
                    },
                },
                ticks: {
                    beginAtZero: true,
                    color: "black",
                },
            },
        },
        plugins: {
            legend: {
                display: true,
                position: "top",
                labels: {
                    color: "black",
                },
            },
        },
    };

    return (
        <div className="quarterly">
            <Bar data={data} options={options} />
        </div>
    );
};

export default GenderQuarterly;
