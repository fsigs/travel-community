export default function login(props) {
    return(
      <>
        <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5 mb-5">
            <div className="card-header bg-primary text-white">
              <h3>Login</h3>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group mb-3">
                  <label htmlFor="username">Username:</label>
                  <input type="text" className="form-control" id="username" placeholder="Enter username" />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="password">Password:</label>
                  <input type="password" className="form-control" id="password" placeholder="Enter password" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>     
      </>
    )
  }