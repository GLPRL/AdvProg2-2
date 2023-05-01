import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import React from 'react'
import profilePic from '../images/profilePic3.jpg';
import Login from './Login'
function Register(){
 return(

<>

     <head>
         <link href="stylesheets/login.css" rel="stylesheet"></link>
         <title>Hello, world!</title>
             <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
             <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
     </head>
    <body>
    <div className="center register text" >
        <div className="login">
            <h1 className="margin5 text">Register</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <div className="placeregister">
                        <input type="email" className="form-control"  id="username" placeholder="Enter Username" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <div className="placeregister">
                        <input type="password" className="form-control" id="password" placeholder="Enter Password" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Verify Password</label>
                    <div className="placeregister">
                        <input type="password" className="form-control" id="password-verify" placeholder="Verify Password" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="DisplayName">Display Name</label>
                    <div className="placeregister">
                        <input type="email" className="form-control"  id="DisplayName" placeholder="Enter Display Name" />
                    </div>
                </div>
                <div className="form-group">
                    <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                </div>
                <div className="form-group">
                    Selected Image:
                    <img src={profilePic} alt="Profile Picture" className="text-center" width="50px" height="50px" />
                </div>
            </form>
        </div>


        <div className="text-center">
            <button className="btn btn-info marginRight ">Register</button>
            <span className="txtsize"> Already registered? click <Link to="/" className="orangelink">here</Link></span>
        </div>
        <br />
    </div>

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js"
            integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
            crossOrigin="anonymous"></script>
    </body>
    </>
 )
}
    export default Register;