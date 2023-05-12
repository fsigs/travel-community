export default function Subscription({subscription}) {
    return (
        <>
          <div className="container mt-5 mb-5">
            <div className="row">
              <div className="col-md-6 offset-md-3 ">
              { (subscription.error) ? (
                <div className="alert alert-danger" role="alert">
                  <h4 className="alert-heading">Failed!</h4>
                  <p>{subscription.error}</p>
                </div>
              ) : (
                <div className="alert alert-success" role="alert">
                  <h4 className="alert-heading">Your registration</h4>
                  <p>Now, you are registered for the trip <b>{subscription.trip.name}</b>!</p>
                </div>
              )
              }  
              </div>
            </div>
          </div>
        </>
    )
}
