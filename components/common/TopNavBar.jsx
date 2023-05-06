export default function TopNavBar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:  "#0a4275"}}>
        <div className="container">
          <a className="navbar-brand" href="/" style={{color: "#FFF"}}>
          TRAVEL COMMUNITY
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item" >
                <a className="nav-link" href="/" style={{color: "#FFF"}}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/create" style={{color: "#FFF"}}>Create Tour</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact" style={{color: "#FFF"}}>Contact</a>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/signup" style={{color: "#FFF"}}>Sign up</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/login" style={{color: "#FFF"}}>Login</a>
                </li>
              </ul>
          </div>
        </div>
      </nav>
    </>
  )
}