import React, { useEffect } from 'react'
import './Gender.css'
import TestChart from './TestChart'
import SideMain from './SideCharts/SideMain'

const Gender = (aw) => {
  useEffect(() => {
    // Code to run after component mounts or updates goes here
  }, [])

  return (
    // JSX code for component goes here
    <div className="Gender row mt-5 mb-2 me-0">
      <div className="col-2 outline">navbar</div>
      <TestChart />
      {/* <div className="col-2 outline">sidechart</div> */}

      <SideMain />
    </div>
  )
}

export default Gender
