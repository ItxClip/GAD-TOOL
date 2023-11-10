import React, { useEffect } from 'react'
import './Attendance.css'
import AttendanceChart from './AttendanceChart'
import SideMain from './SideCharts/SideMain'

const Attendance = (aw) => {
  useEffect(() => {
    // Code to run after component mounts or updates goes here
  }, [])

  return (
    // JSX code for component goes here
    <div className="Attendance row mt-5 mb-2 me-0">
      <div className="col-2 outline">navbar</div>
      <AttendanceChart />
      {/* <div className="col-2 outline">sidechart</div> */}

      <SideMain />
    </div>
  )
}

export default Attendance
