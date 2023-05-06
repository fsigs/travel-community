import { formatDate, getDuration } from '../../../utils/dates';
import Link from "next/link";

export default function TripCardList ({trips}) {
  
  const limit = trips.limit
  const thisPage = trips.page
  const totalCount = trips.totalCount
  const pageCount = parseInt(Math.ceil(totalCount / limit))
  const pages = Array.from({ length: pageCount }, (_, index) => index + 1);

  return(
    <>
    <div className="col-9">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {trips.data.length === 0 ? (
            <div className="col">
            <p>No trips found for these filters.</p>
            </div>
          ) : (
            trips.data.map((trip) => (   
            <div className="col" key={trip._id}>
              <div className="card">
                <a href={"/trip/" + trip._id}>
                  <img src="../images/cardsample.jpg" className="card-img-top" alt="..."/>
                </a>
                <div className="card-body">
                  <h5 className="card-title">{trip.name}</h5>
                  <p className="card-text">
                    Start Date: {formatDate(trip.startDate, 2, 2, 2)}<br/>
                    End Date: {formatDate(trip.endDate, 2, 2, 2)}<br/>
                    Duration: {getDuration(trip.startDate, trip.endDate)} days<br/>
                    Group Size: {trip.registrations}<br/>
                    Estimated Cost: ${trip.cost}<br/>
                    Start Point: {trip.locationFrom}<br/>
                    Destination: {trip.locationTo}
                  </p>
                  <a href={"/trip/" + trip._id} className="btn btn-primary btn-space">Detail</a>
                  <Link href={{pathname: "/subscribe/" + trip._id, query: {userId: '64545fa6da9e469a5f8733de'}}}>
                  <a className="btn btn-primary btn-space">Join</a>
                  </Link>  
                </div>
              </div>
            </div>
          ))
          )
        }
      </div>
      
      <nav className="mt-4" aria-label="Page navigation example">
        <ul className="pagination justify-content-end">
        {pages.map(page => {
          if (page == thisPage) {
            return <li className="page-item active" key={page}><a className="page-link" href="#">{page}</a></li>
          } else {
            return <li className="page-item" key={page}><a className="page-link" href="#">{page}</a></li>
          }
        })}
        </ul>
      </nav>

    </div>
    </>
  )
}