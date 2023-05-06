import { useState } from 'react';

export default function TripCreateForm({onCreate}) {

  const [formData, setFormData] = useState({});
  
  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(formData)
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
                      <input type="text" className="form-control" id="name" name="name" onChange={(event) => setFormData({ ...formData, name: event.target.value })} placeholder="A descriptive and engaging name for your group trip" required/>
                      <div className="invalid-feedback">Please, enter a valid name</div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="summary" className="form-label">Summary:</label>
                      <input type="text" className="form-control" id="summary" name="summary" onChange={(event) => setFormData({ ...formData, summary: event.target.value })} placeholder="Summarize in a phrase your the esence of your trip" required/>
                      <div className="invalid-feedback">Please, enter a valid summary</div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">Email:</label>
                      <input type="email" className="form-control" id="email" name="email" onChange={(event) => setFormData({ ...formData, email: event.target.value })} placeholder="Write the email where travellers will contact you" required/>
                      <div className="invalid-feedback">Please, enter a valid email</div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="startDate" className="form-label">Start Date:</label>
                      <input type="date" className="form-control" id="startDate" name="startDate" onChange={(event) => setFormData({ ...formData, startDate: new Date(event.target.value) })} placeholder="MM/DD/YYYY" required/>
                      <div className="invalid-feedback">Please, enter a valid start date!</div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="endDate" className="form-label">End Date:</label>
                      <input type="date" className="form-control" id="endDate" name="endDate" onChange={(event) => setFormData({ ...formData, endDate: new Date(event.target.value) })} placeholder="MM/DD/YYYY" required/>
                      <div className="invalid-feedback">Please, enter a valid end date!</div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="registrations" className="form-label">Group Size (max number of people allowed):</label>
                      <input type="number" className="form-control" id="registrations"  name="registrations" onChange={(event) => setFormData({ ...formData, registrations: Number(event.target.value) })} placeholder="Number of people" required/>
                      <div className="invalid-feedback">Please, enter a valid number!</div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="cost" className="form-label">Estimated Cost:</label>
                      <input type="number" className="form-control" id="cost" name="cost" onChange={(event) => setFormData({ ...formData, cost: event.target.value })} placeholder="Cost in USD" required/>
                      <div className="invalid-feedback">Please, enter a amount!</div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="locationFrom" className="form-label">Start Point:</label>
                      <input type="text" className="form-control" id="locationFrom" name="locationFrom" onChange={(event) => setFormData({ ...formData, locationFrom: event.target.value })} placeholder="Location your trip will start from" required/>
                      <div className="invalid-feedback">Please, enter a valid start point name!</div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="locationTo"  className="form-label">Destination:</label>
                      <input type="text" className="form-control" id="locationTo" name="locationTo" onChange={(event) => setFormData({ ...formData, locationTo: event.target.value })} placeholder="Location your trip will be" required/>
                      <div className="invalid-feedback">Please, enter a valid locationTo name!</div>
                    </div>
                    <div className="form-group" >
                      <label htmlFor="details" className="form-label">Description:</label>
                      <textarea className="form-control form-control-lg" id="details" name="details" onChange={(event) => setFormData({ ...formData, details: event.target.value })} placeholder="Specify a description for your Tour Itinerary. Include all your travellers need to know with plenty of details." rows="5" required></textarea>
                      <div className="invalid-feedback">Please, enter detail information!</div>
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