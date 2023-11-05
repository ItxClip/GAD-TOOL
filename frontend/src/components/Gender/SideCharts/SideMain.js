import React from 'react'
import '../Gender.css'
import GenderQuarterly from './GenderQuarterly'
import SideTotal from './SideTotal'

const SideMain = () => {
  return (
    <div className="SideMain col-2 row gap-1 align-items-center align-content-center">
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

      <section className="card text-center outline w-100 p-0 m-0">
        <div className="genderT-body card-body m-0 p-0">
          <h6 class="card-subtitle my-1 text-body-secondary">TOTAL</h6>
          <SideTotal />
        </div>
      </section>

      <section className="card text-center outline w-100 p-0 m-0">
        <div className="genderQ-body card-body m-0 p-0">
          <h6 class="card-subtitle my-1 text-body-secondary">QUARTERLY</h6>
          <GenderQuarterly />
        </div>
      </section>
    </div>
  )
}

export default SideMain