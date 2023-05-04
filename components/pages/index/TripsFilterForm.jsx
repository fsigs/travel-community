import React, { useState } from 'react';

export default function TripsFilterForm ({ onFilter }) {

  const [filters, setFilters] = useState({});

  const handleSubmit = (event) => {
    const form = document.getElementById('trips-filter-form');
    event.preventDefault();
    onFilter(form.elements);
  };

  return(
    <>
      <div className="col-lg-2 mb-4">
        <div className="card">
          <div className="card-header d-flex justify-content-between align-items-center">
            <span>Filter Panel</span>
            <button className="btn btn-link d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#filterCollapse" aria-expanded="false" aria-controls="filterCollapse">
              <i className="bi bi-list" ></i> 
            </button>
          </div>
          <div className="collapse show" id="filterCollapse">
            <div className="card-body">
              <form id="trips-filter-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Trip Name:</label>
                  <input type="text" className="form-control" id="name" name="name" />
                </div>
                <div className="form-group">
                  <label htmlFor="startDate">Start Date:</label>
                  <input type="date" className="form-control" id="startDate" name="startDate" placeholder="MM/DD/YYYY" />
                </div>
                <div className="form-group">
                  <label htmlFor="endDate">End Date:</label>
                  <input type="date" className="form-control" id="endDate" name="endDate" placeholder="MM/DD/YYYY" />
                </div>
                <div className="form-group">
                  <label htmlFor="duration">Duration:</label>
                  <input type="number" className="form-control" id="duration" name="duration" placeholder="Number of days" />
                </div>
                <div className="form-group">
                  <label htmlFor="registrations">Group Size:</label>
                  <input type="number" className="form-control" id="registrations" name="registrations" placeholder="Number of people" />
                </div>
                <div className="form-group">
                  <label htmlFor="estimatedCostMin" className="form-label">Estimated Cost:</label>
                  <div className="input-group">
                    <span className="input-group-text">$</span>
                    <input type="number" className="form-control" id="costMin" name="costMin" min="1" max="10000" placeholder="Min" />
                    <span className="input-group-text">-</span>
                    <input type="number" className="form-control" id="costMax" name="costMax" min="1" max="10000" placeholder="Max" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="locationFrom">Start Point:</label>
                  <input type="text" className="form-control" id="locationFrom" name="locationFrom" placeholder="Starting location" />
                </div>
                <div className="form-group">
                  <label htmlFor="locationTo">Destination:</label>
                  <input type="text" className="form-control" id="locationTo" name="locationTo" placeholder="Destination location" />
                </div>
                <button type="submit" className="btn btn-primary my-2">Search Trips</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}