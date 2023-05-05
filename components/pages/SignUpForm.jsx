export default function signUpForm(props) {
    return(
      <>
        <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-6">
            <div className="card mt-5 mb-5">
                <div className="card-header bg-primary text-white">
                <h3>Sign Up</h3>
                </div>
                <div className="card-body">
                <form>
                    <div className="form-group">
                    <label htmlFor="name">Tour Company/Person Name:</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter name" required />
                    </div>
                    <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" required />
                    </div>
                    <div className="form-group">
                    <label htmlFor="mobile">Mobile:</label>
                    <input type="tel" className="form-control" id="mobile" placeholder="Enter mobile number" required />
                    </div>
                    <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" className="form-control" id="username" placeholder="Enter username" required />
                    </div>
                    <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" className="form-control" id="password" placeholder="Enter password" required />
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