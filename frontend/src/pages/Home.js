import { useEffect, useState } from 'react'
import TotalAttendance from '../components/TotalAttendance'
import GenderDistribution from '../components/GenderDistribution'
import GenderQuarterly from '../components/GenderQuarterly'
import DateSelector from '../components/DateSelector'
import { months, filterByYear } from '../components/DateSelector'
import Attendance from '../components/Attendance/Attendance'
import Gender from '../components/Gender/Gender'
/**
 * Home component that renders the dashboard page
 * @returns {JSX.Element} The Home component
 */
const Home = () => {
  const [excelFiles, setExcelFiles] = useState(null)

  // The state and setState for TotalAttendance chart
  const [TotalAttendanceState, setTotalAttendanceState] = useState({
    data: {},
    label: months,
    xAxisLabel: 'Months',
  })

  const [GenderDistributionState, setGenderDistributionState] = useState({
    data: {},
  })

  const [GenderQuarterlyState, setGenderQuarterlyState] = useState({
    data: {},
  })

  /**
   * Updates the chart data for TotalAttendance chart
   * @param {Object} newData - The new data to update the chart with
   */
  const TotalAttendance_updateData = (newData) => {
    setTotalAttendanceState((prevState) => ({
      ...prevState,
      data: newData,
    }))
  }

  /**
   * Updates the chart label for TotalAttendance chart
   * @param {string[]} newLabel - The new label to update the chart with
   */
  const TotalAttendance_updateLabel = (newLabel) => {
    setTotalAttendanceState((prevState) => ({
      ...prevState,
      label: newLabel,
    }))
  }

  /**
   * Updates the X-axis label for TotalAttendance chart
   * @param {string} newLabel - The new X-axis label to update the chart with
   */
  const TotalAttendance_updateXAxisLabel = (newLabel) => {
    setTotalAttendanceState((prevState) => ({
      ...prevState,
      xAxisLabel: newLabel,
    }))
  }

  /**
   * Updates the chart data for GenderDistribution chart
   * @param {Object} newData - The new data to update the chart with
   */
  const GenderDistribution_updateData = (newData) => {
    setGenderDistributionState((prevState) => ({
      ...prevState,
      data: newData,
    }))
  }

  /**
   * Updates the chart data for GenderQuarterly chart
   * @param {Object} newData - The new data to update the chart with
   */
  const GenderQuarterly_updateData = (newData) => {
    setGenderQuarterlyState((prevState) => ({
      ...prevState,
      data: newData,
    }))
  }

  useEffect(() => {
    const fetchFiles = async () => {
      const response = await fetch('/api/file')
      const json = await response.json()

      if (response.ok) {
        setExcelFiles(json)
        console.log(json)
        // Calls the update function to set the initial chart data
        const initialData = filterByYear(new Date().getFullYear(), json)
        const TotalAttendance = initialData.counts
        const GenderDist = Object.values(initialData.gender)
        //const GenderQuarterly = initialData.quarterly;

        TotalAttendance_updateData(TotalAttendance)
        GenderDistribution_updateData(GenderDist)
        GenderQuarterly_updateData(initialData.genderByQuarter)
      }
    }
    fetchFiles()
  }, [])

  return (
    <div className="home outline d-flex flex-column align-items-center align-content-center justify-content-center">
      <Attendance />
      <Gender />
      {/* <DateSelector
        excelFiles={excelFiles}
        updateChartData={TotalAttendance_updateData}
        updateChartLabel={TotalAttendance_updateLabel}
        updateXAxisLabel={TotalAttendance_updateXAxisLabel}
        GenderDistribution_updateData={GenderDistribution_updateData}
        GenderQuarterly_updateData={GenderQuarterly_updateData}
      />

      <TotalAttendance TotalAttendanceState={TotalAttendanceState} />
      <GenderDistribution GenderDistributionState={GenderDistributionState} />
      <GenderQuarterly GenderQuarterlyState={GenderQuarterlyState} /> */}

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
                new Set(excelFiles.map((excelFile) => excelFile.eventName))
              ).map((eventName) => {
                const matchingFiles = excelFiles.filter(
                  (file) => file.eventName === eventName
                )
                const latestFile = matchingFiles.reduce((prev, current) =>
                  prev.createdAt > current.createdAt ? prev : current
                )
                const formattedDate = `${new Date(
                  latestFile.createdAt
                ).toLocaleDateString('en-US', {
                  month: 'long',
                  year: 'numeric',
                  day: 'numeric',
                })} ${new Date(latestFile.createdAt).toLocaleTimeString()}`

                // Count the number of males, females, and prefer not to say
                const maleCount = matchingFiles.filter(
                  (file) => file.sex === 'Male'
                ).length
                const femaleCount = matchingFiles.filter(
                  (file) => file.sex === 'Female'
                ).length
                const preferNotToSayCount = matchingFiles.filter(
                  (file) => file.sex === 'Prefer not to say'
                ).length

                return (
                  <tr key={eventName} className="event-container">
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
