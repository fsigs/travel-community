import { formatDate, getDuration } from '../../../utils/dates';

export default function TripCard (props) {
  const trip = props.trip
  return(
    <>
      <div class="col" key={trip._id}>
        <div class="card">
          <img src="../images/cardsample.jpg" class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">{trip.name}</h5>
            <p class="card-text">
              Start Date: {formatDate(trip.startDate, 2, 2, 2)}<br/>
              End Date: {formatDate(trip.endDate, 2, 2, 2)}<br/>
              Duration: {getDuration(trip.startDate, trip.endDate)} days<br/>
              Group Size: {trip.registrations}<br/>
              Estimated Cost: ${trip.cost}<br/>
              Start Point: {trip.locationFrom}<br/>
              Destination: {trip.locationTo}
            </p>
            <a href={"/trip-" + trip._id} class="btn btn-primary">Detail</a>
            <a href={"/suscribe-" + trip._id} class="btn btn-primary">Join</a>  
          </div>
        </div>
      </div>
    </>
  )
}