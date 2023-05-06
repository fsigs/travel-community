import { useState } from 'react';

export default function signUpForm(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    

    
    const handleSubmit = (event) => {
      event.preventDefault();
      // send form data to server or API
    };
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
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                    <label htmlFor="name">Tour Company/Person Name:</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter name" value={name} onChange={(event) => setName(event.target.value)} required />
                    </div>
                    <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" value={email} onChange={(event) => setEmail(event.target.value)} required />
                    </div>
                    <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={(event) => setPassword(event.target.value)} required />
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