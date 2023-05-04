export default function ContactUs(props) {
  return(
    <>
      <div className="container mt-4">
        <h1 className="display-8">Contact Us</h1>
        <div className="row">
          <div className="col-md-6">
            <h3>Address</h3>
            <p>
              123 Main Street<br/>
              New York, NY 10001<br/>
              United States
            </p>
          </div>
          <div className="col-md-6">
            <h3>Phone</h3>
            <p>+1 (555) 555-5555</p>
          </div>
          <div className="col-md-6">
            <h3>Email</h3>
            <p>info@travelcommunity.com</p>
          </div>
          <div className="col-md-6">
            <h3>Social Media</h3>
            <p>Follow us on Twitter, Facebook, and Instagram</p>
            <ul className="list-inline">
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fab fa-twitter fa-2x"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fab fa-facebook fa-2x"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                    <a href="#">
                        <i className="fab fa-instagram fa-2x"></i>
                    </a>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}