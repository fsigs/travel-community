export default function CreateForm(props) {
  return(
    <>
      <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="card mt-5 mb-5">
                  <div className="card-header bg-primary text-white">
                    <h3>Plan Your Tour!</h3>
                  </div>
                  <div className="card-body">
                    <form action="#" method="post" className="was-validated">
                      <div className="form-group">
                        <label htmlFor="startDate" className="form-label">Start Date:</label>
                        <input type="date" className="form-control" id="startDate" placeholder="MM/DD/YYYY" name="startDate" required/>
                        <div className="invalid-feedback">Please enter a valid start date!</div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="endDate" className="form-label">End Date:</label>
                        <input type="date" className="form-control" id="endDate" placeholder="MM/DD/YYYY" name="endDate" required/>
                        <div className="invalid-feedback">Please enter a valid end date!</div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="groupSize" className="form-label">Group Size:</label>
                        <input type="number" className="form-control" id="groupSize" placeholder="Number of people" name="groupSize" required/>
                        <div className="invalid-feedback">Please enter a valid number!</div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="estimatedCost" className="form-label">Estimated Cost:</label>
                        <input type="number" className="form-control" id="estimatedCost" placeholder="Cost in USD" name="estimatedCost" required/>
                        <div className="invalid-feedback">Please enter a amount!</div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="startPoint" className="form-label">Start Point:</label>
                        <input type="text" className="form-control" id="startPoint" placeholder="Starting location" name="startPoint" required/>
                        <div className="invalid-feedback">Please enter a valid start point name!</div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="destination"  className="form-label">Destination:</label>
                        <input type="text" className="form-control" id="destination" placeholder="Destination location" name="destination" required/>
                        <div className="invalid-feedback">Please enter a valid destination name!</div>
                      </div>
                      <div className="form-group" >
                        <label htmlFor="details" className="form-label">Description:</label>
                        <textarea className="form-control form-control-lg" id="details" placeholder="Detail description of Tour Itinerary"name="details" rows="5" required></textarea>
                        <div className="invalid-feedback">Please enter detail information!</div>
                      </div>
                      <div className="form-group my-4">
                        <label htmlFor="image" className="form-label">Image:</label>
                        <input type="file" className="form-control-file" id="image" name="image" required/>
                        <div className="invalid-feedback">Please upload an image!</div>  
                      </div>
                      <button type="submit" className="btn btn-primary my-2">Submit</button>
                    </form>
                </div>
            </div>
          </div>
        </div>
      </div>
    
    </>
  )
}