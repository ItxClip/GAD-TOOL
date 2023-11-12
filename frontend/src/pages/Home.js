import { useEffect, useState } from 'react'
import Attendance from '../components/Attendance/Attendance'
import Gender from '../components/Gender/Gender'
import EventsComp from '../components/EventsComp/EventsComp'
import local_data from '../excelFiles_LOCAL.json'
/**
 * Home component that renders the dashboard page
 * @returns {JSX.Element} The Home component
 */
const Home = () => {
    const [excelFiles, setExcelFiles] = useState(null)

    useEffect(() => {
        const fetchFiles = async () => {
            const response = await fetch('/api/file')
            const json = await response.json()

            if (response.ok) {
                setExcelFiles(json)
                console.log(json)
                // Calls the update function to set the initial chart data
            }
        }
        fetchFiles()

        // setExcelFiles(local_data)
        // console.log(local_data)
    }, [])

    return (
        <div className="home outline d-flex flex-column align-items-center align-content-center justify-content-center">
            <Attendance excelFiles={excelFiles} />
            <Gender excelFiles={excelFiles} />
            <EventsComp excelFiles={excelFiles} />

            <div className="eventlist">
                <h1>Logs</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Event Name</th>
                            <th>Created Date</th>
                            <th>Male</th>
                            <th>Female</th>
                            <th>Prefer not to say</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {excelFiles &&
                            Array.from(
                                new Set(
                                    excelFiles.map(
                                        (excelFile) => excelFile.eventName
                                    )
                                )
                            ).map((eventName) => {
                                const matchingFiles = excelFiles.filter(
                                    (file) => file.eventName === eventName
                                )
                                const latestFile = matchingFiles.reduce(
                                    (prev, current) =>
                                        prev.createdAt > current.createdAt
                                            ? prev
                                            : current
                                )
                                const formattedDate = `${new Date(
                                    latestFile.createdAt
                                ).toLocaleDateString('en-US', {
                                    month: 'long',
                                    year: 'numeric',
                                    day: 'numeric',
                                })} ${new Date(
                                    latestFile.createdAt
                                ).toLocaleTimeString()}`

                                // Count the number of males, females, and prefer not to say
                                const maleCount = matchingFiles.filter(
                                    (file) => file.sex === 'Male'
                                ).length
                                const femaleCount = matchingFiles.filter(
                                    (file) => file.sex === 'Female'
                                ).length
                                const preferNotToSayCount =
                                    matchingFiles.filter(
                                        (file) =>
                                            file.sex === 'Prefer not to say'
                                    ).length

                                return (
                                    <tr
                                        key={eventName}
                                        className="event-container"
                                    >
                                        <td>{eventName}</td>
                                        <td>{formattedDate}</td>
                                        <td>{maleCount}</td>
                                        <td>{femaleCount}</td>
                                        <td>{preferNotToSayCount}</td>
                                        <td>
                                            <button>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home
