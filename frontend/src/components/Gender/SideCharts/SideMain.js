import React from 'react'
import '../Gender.css'
import SideGraph from './SideGraph'

const SideMain = () => {
  return (
    <div className="SideMain col-2 row gap-3 align-items-center align-content-center">
      <section className="SideTotal outline card w-100 text-center">
        <div className="card-body">
          <h5 className="card-title m-0">GENDER</h5>
        </div>
      </section>

      <section className="SideDate outline card w-100 text-center">
        <div className="card-body">
          <h6 class="card-subtitle mb-2 text-body-secondary">DATE</h6>
          <h5 className="card-title">2023</h5>
          <p className="card-text">-</p>
        </div>
      </section>

      <section className="SideTotal outline card w-100 text-center">
        <div className="card-body">
          <h6 class="card-subtitle mb-2 text-body-secondary">TOTAL</h6>
          <h5 className="card-title">1234</h5>
        </div>
      </section>
      <SideGraph />
    </div>
  )
}

export default SideMain
