import React, { useEffect } from 'react'
import './EventsComp.css'
import EventsChart from './EventsChart'
import SideMain from './SideCharts/SideMain'

const EventsComp = (aw) => {
    useEffect(() => {
        // Code to run after component mounts or updates goes here
    }, [])

    return (
        // JSX code for component goes here
        <div className="EventsComp row mt-5 mb-2 me-0">
            <div className="col-2 outline">navbar</div>
            <EventsChart />
            {/* <div className="col-2 outline">sidechart</div> */}

            <SideMain />
        </div>
    )
}

export default EventsComp
