import React, { useEffect } from 'react'
import './Gender.css'
import TestChart from './TestChart'
import SideMain from './SideCharts/SideMain'
import LineChart from './LineChart'

const Gender = (aw) => {
  useEffect(() => {
    // Code to run after component mounts or updates goes here
  }, [])

  return (
    // JSX code for component goes here
    <div className="Gender row mt-5 mb-2 me-0">
      <div className="col-2 outline">navbar</div>
      {/* <TestChart /> */}
      <LineChart />
      <SideMain />
    </div>
  )
}

export default Gender
