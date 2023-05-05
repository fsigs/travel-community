import { formatDate, getDuration } from '../../../utils/dates';

export default function TripDetail ({trip}) {
  return(
    <>
      <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card mt-5 mb-5">
                  <div className="card-header bg-primary text-white">
                      <h3>{trip.name}</h3>
                      <h6><i>{trip.summary}</i></h6>
                  </div>
                  <div className="card-body">
                    <img src="../images/cardsample.jpg" alt={"Trip " + trip.name} align="right" width="400px"/>
                    <h5>Starting and Ending</h5>
                    <p><strong>{getDuration(trip.startDate, trip.endDate)} days. </strong>{formatDate(trip.startDate, 2, 2, 2)} to {formatDate(trip.endDate, 2, 2, 2)}</p>
                    <h5>Group Size:</h5>
                    <p>{trip.registrations}</p>
                    <h5>Estimated Cost:</h5>
                    <p>${trip.cost}</p>
                    <h5>Start Point:</h5>
                    <p>{trip.locationFrom}</p>
                    <h5>Destination:</h5>
                    <p>{trip.locationTo}</p>
                    <h5>Details:</h5>
                    <p>{trip.details}</p>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}