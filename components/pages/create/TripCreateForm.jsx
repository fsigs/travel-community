export default function TripCreateForm({onCreate}) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = document.getElementById('trips-create-form');
    const data = new FormData(form);
    onCreate(data);
  };

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
                    <form className="was-validated" id="trips-create-form" onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="name" className="form-label">Trip name:</label>
                        <input type="text" className="form-control" id="name" name="name" placeholder="A descriptive and engaging name for your group trip" required/>
                        <div className="invalid-feedback">Please, enter a valid name</div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="summary" className="form-label">Summary:</label>
                        <input type="text" className="form-control" id="summary" name="summary" placeholder="Summarize in a phrase your the esence of your trip" required/>
                        <div className="invalid-feedback">Please, enter a valid summary</div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input type="email" className="form-control" id="email" name="email" placeholder="Write the email where travellers will contact you" required/>
                        <div className="invalid-feedback">Please, enter a valid email</div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="startDate" className="form-label">Start Date:</label>
                        <input type="date" className="form-control" id="startDate" name="startDate" placeholder="MM/DD/YYYY" required/>
                        <div className="invalid-feedback">Please, enter a valid start date!</div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="endDate" className="form-label">End Date:</label>
                        <input type="date" className="form-control" id="endDate" name="endDate" placeholder="MM/DD/YYYY" required/>
                        <div className="invalid-feedback">Please, enter a valid end date!</div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="registrations" className="form-label">Group Size (max number of people allowed):</label>
                        <input type="number" className="form-control" id="registrations"  name="registrations" placeholder="Number of people" required/>
                        <div className="invalid-feedback">Please, enter a valid number!</div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="cost" className="form-label">Estimated Cost:</label>
                        <input type="number" className="form-control" id="cost" name="cost" placeholder="Cost in USD" required/>
                        <div className="invalid-feedback">Please, enter a amount!</div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="locationFrom" className="form-label">Start Point:</label>
                        <input type="text" className="form-control" id="locationFrom" placeholder="Location your trip will start from" name="locationFrom" required/>
                        <div className="invalid-feedback">Please, enter a valid start point name!</div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="locationTo"  className="form-label">Destination:</label>
                        <input type="text" className="form-control" id="locationTo" placeholder="Location your trip will be" name="locationTo" required/>
                        <div className="invalid-feedback">Please, enter a valid locationTo name!</div>
                      </div>
                      <div className="form-group" >
                        <label htmlFor="details" className="form-label">Description:</label>
                        <textarea className="form-control form-control-lg" id="details" name="details" placeholder="Specify a description for your Tour Itinerary. Include all your travellers need to know with plenty of details." rows="5" required></textarea>
                        <div className="invalid-feedback">Please, enter detail information!</div>
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