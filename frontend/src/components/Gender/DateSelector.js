import './Gender.css'
import { useState } from 'react'

export const years = Array.from({ length: 7 }, (_, i) => i + 2017)
export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

/**
 * Calculates the number of male, female and prefer not to say students by quarter for a given year.
 * @param {number} selectedYear - The year for which to calculate the gender distribution.
 * @param {Array} data - An array of student objects containing their gender and timestamp.
 * @returns {Object} An object containing the number of male, female and prefer not to say students by quarter.
 */
function calculateGenderByQuarter(selectedYear, data) {
  let genderByQuarter = {
    Q1: { male: 0, female: 0, preferNotToSay: 0 },
    Q2: { male: 0, female: 0, preferNotToSay: 0 },
    Q3: { male: 0, female: 0, preferNotToSay: 0 },
    Q4: { male: 0, female: 0, preferNotToSay: 0 },
  }

  data.forEach((student) => {
    let date = new Date(student.timestamp)
    if (date.getFullYear() === selectedYear) {
      let quarter = Math.floor(date.getMonth() / 3) + 1
      switch (student.sex) {
        case 'Male':
          genderByQuarter[`Q${quarter}`].male++
          break
        case 'Female':
          genderByQuarter[`Q${quarter}`].female++
          break
        default:
          genderByQuarter[`Q${quarter}`].preferNotToSay++
          break
      }
    }
  })

  return genderByQuarter
}

export function filterByYear(selectedYear, data) {
  let counts = Array(12).fill(0)
  let gender = { male: 0, female: 0, preferNotToSay: 0 }

  let genderByQuarter = calculateGenderByQuarter(selectedYear, data)

  data.forEach((student) => {
    let date = new Date(student.timestamp)
    if (date.getFullYear() === selectedYear) {
      counts[date.getMonth()]++

      switch (student.sex) {
        case 'Male':
          gender.male++
          break
        case 'Female':
          gender.female++
          break
        default:
          gender.preferNotToSay++
          break
      }
    }
  })

  return { counts, gender, genderByQuarter }
}

export function filterByMonth(selectedYear, selectedMonth, data) {
  let counts = []
  let eventNames = []
  let gender = { male: 0, female: 0, preferNotToSay: 0 }

  data.forEach((student) => {
    let date = new Date(student.timestamp)
    if (
      date.getFullYear() === selectedYear &&
      date.getMonth() === selectedMonth
    ) {
      let index = eventNames.indexOf(student.eventName)
      if (index !== -1) {
        counts[index]++
      } else {
        eventNames.push(student.eventName)
        counts.push(1)
      }

      // Get gender distribution data
      switch (student.sex) {
        case 'Male':
          gender.male++
          break
        case 'Female':
          gender.female++
          break
        default:
          gender.preferNotToSay++
          break
      }
    }
  })

  return { counts, eventNames, gender }
}

const DateSelector = ({
  updateChartData,
  updateChartLabel,
  excelFiles,
  updateXAxisLabel,
  GenderDistribution_updateData,
  GenderQuarterly_updateData,
}) => {
  const [year, setYear] = useState(new Date().getFullYear())
  const [month, setMonth] = useState(new Date().getMonth() + 1)
  const [isOnlyMonths, setIsOnlyMonths] = useState(false)

  const handleClick = () => {
    // On button click, call the function to count the students by month
    // and pass the result to the callback function onClick (which is updateChartData in Home.js)
    try {
      if (!excelFiles || excelFiles.length === 0) {
        alert('Data is not loaded yet. Please wait.')
      } else {
        if (isOnlyMonths) {
          const result = filterByMonth(year, month - 1, excelFiles)
          const counts = result.counts
          const eventNames = result.eventNames
          const gender = Object.values(result.gender)

          updateChartLabel(eventNames)
          updateChartData(counts)
          updateXAxisLabel('Events')

          // Gender Distribution
          console.log('gender: ')
          console.log(gender)
          GenderDistribution_updateData(gender)
        } else {
          // Total Gender by Year
          const result = filterByYear(year, excelFiles)
          const counts = result.counts
          const eventNames = months

          updateChartData(counts)
          updateChartLabel(eventNames)
          updateXAxisLabel('Months')

          //
          // Gender Distribution
          const gender = Object.values(result.gender)
          GenderDistribution_updateData(gender)

          //
          // Gender Quarterly
          const genderQuarterly = Object.values(result.genderByQuarter)
          GenderQuarterly_updateData(genderQuarterly)
          console.log('genderQuarterly: ')
          console.log(genderQuarterly)
        }
      }
    } catch (error) {
      console.error('An error occurred: ', error)
    }
  }

  return (
    <>
      <div className="dateSelector d-flex flex-row align-items-center justify-content-evenly m-2 p-2 rounded-3">
        <div className="d-flex justify-content-center align-items-center">
          <label>Year:</label>
          <select
            className="form-select"
            value={year}
            onChange={(e) => setYear(parseInt(e.target.value))}
          >
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>

        <div className="d-flex justify-content-center align-items-center">
          <label>Month:</label>
          <select
            className="form-select"
            value={month}
            onChange={(e) => setMonth(parseInt(e.target.value))}
          >
            {months.map((m, i) => (
              <option key={i} value={i + 1}>
                {m}
              </option>
            ))}
          </select>
        </div>

        <div className="checkBox-container d-flex flex-row flex-nowrap align-items-center">
          <input
            className="me-2"
            type="checkbox"
            id="isOnlyMonths"
            name="isOnlyMonths"
            onChange={(e) => setIsOnlyMonths(e.target.checked)}
          />

          <label className="text-nowrap" htmlFor="isOnlyMonths">
            Gender/Month
          </label>
        </div>

        <button
          id="btnSubmit"
          type="button"
          className="btn btn-outline-dark"
          onClick={handleClick}
        >
          Display
        </button>
      </div>
    </>
  )
}

export default DateSelector
