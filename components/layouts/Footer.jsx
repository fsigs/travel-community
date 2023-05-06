export default function Footer(props){
  return <>
    <section className="">
      <footer className="text-center text-white" style={{backgroundColor: "#0a4275"}}>
      <div className="container p-4 pb-0">
          <section className="">
          <p className="d-flex justify-content-center align-items-center">
              <span className="me-3">Join for free</span>
              <a href="signup.html" className="btn btn-outline-light btn-rounded">Sign up now!</a>
          </p>
          </section>
      </div>
      <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
          ©{new Date().getFullYear()} Copyright: <a className="text-white" href="/">travelcommunity</a>
      </div>
      </footer>
    </section>
  </>
}