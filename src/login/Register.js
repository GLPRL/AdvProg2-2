import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import profilePic from '../images/profilePic3.jpg';
import Login from './Login'
function Register(){
    const [password, setPassword] = useState('');
    const [passwordError1, setPasswordError1] = useState('');
    const [passwordError2, setPasswordError2] = useState('');
    const [verifyPassword, setVerifyPassword]=useState('');
    const [verifyError1, setVerifyError1]=useState('');
    const [username, setUsername]= useState('');
    const [usernameError, setUsernameError]= useState('');
    const [displayName, setDisplay]=useState('');
    const [displayError1, setDisplayError1]=useState('');
    const [displayError2, setDisplayError2]=useState('');



    const handleSubmit = (event) => {
        event.preventDefault();
        let validSubmission=1;
        if(password)
        if (password.length < 8) {
            setPasswordError1('Password must be at least 8 characters long.');
            validSubmission=0;
        }
        if (!/\d/.test(password) || !/[a-zA-Z]/.test(password)){
            setPasswordError2('Password must contain both letters and numbers');
            validSubmission=0;
        }
        if(verifyPassword != password){
            setVerifyError1('Does not match password');
            validSubmission=0;
        }
        if(username.length<2||username.length>16){
            setUsernameError('2-16 characters');
            validSubmission=0;
        }
        if(displayName.length<2||displayName.length>16){
            setDisplayError1('2-16 in len');
            validSubmission=0;
        }
        if(!/^[a-zA-Z]+$/.test(displayName)){
           setDisplayError2('must be only letters') ;
            validSubmission =0;
        }
            if (validSubmission) {
            // Handle form submission here
        }
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        setPasswordError1('');
        setPasswordError2('');
    };
    const handleVerify = (event) => {
        setVerifyPassword(event.target.value);
        setVerifyError1('');
    };

    const handleUsername =(event) =>{
        setUsername(event.target.value);
        setUsernameError('');
    }

    const handleDisplay=(event)=>{
        setDisplay(event.target.value);
        setDisplayError1('');
        setDisplayError2('');
    }

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
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <div className="placeregister">
                        <input  className="form-control"  id="username" placeholder="Enter Username" value={username} onChange={handleUsername} />
                        <small>Must be 2-16 characters</small>
                        {usernameError && <small className="form-text text-danger">{usernameError}</small> }
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <div className="placeregister">
                        <input type="password" className="form-control" id="password" placeholder="Enter Password" value={password} onChange={handlePasswordChange} />
                        <small>Your password must be at least 8 characters long and contain at least one number and letter </small>
                        {passwordError1 && <small className="form-text text-danger">{passwordError1}</small>}
                        {passwordError2 && <small className="form-text text-danger">{passwordError2}</small>}
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Verify Password</label>
                    <div className="placeregister">
                        <input type="password" className="form-control" id="password-verify" placeholder="Verify Password" value={verifyPassword} onChange={handleVerify} />
                        {verifyError1 && <small className="form-text text-danger">{verifyError1}</small> }
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="DisplayName">Display Name</label>
                    <div className="placeregister">
                        <input  className="form-control"  id="DisplayName" placeholder="Enter Display Name" value={displayName} onChange={handleDisplay} />
                        <small>Only letters 2-16 in length</small>
                        {displayError1 && <small className="form-text text-danger">{displayError1}</small> }
                        {displayError2 && <small className="form-text text-danger">{displayError2}</small> }
                    </div>
                </div>
                <div className="form-group">
                    <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                </div>
                <div className="form-group">
                    Selected Image:
                    <img src={profilePic} alt="Profile Picture" className="text-center" width="50px" height="50px" />
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-info marginRight ">Register</button>
                    <span className="txtsize"> Already registered? click <Link to="/" className="orangelink">here</Link></span>
                </div>
            </form>
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