import {Link, Navigate} from 'react-router-dom';
import {useRef, useState} from "react";
import {registerData} from './Register'
export const isLoggedIn =  {value: false};
function Login(){
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const passwordError = useRef (null);
    const usernameError = useRef(null);
    const [shouldNavigate, setShouldNavigate] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault(); // prevent the default form submission behavior
        let validLogin = true;
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;
        if(!registerData.validRegister){
            passwordError.current.textContent='Wrong password';
            usernameError.current.textContent='Wrong username';
        }
        else{
            if(username != registerData.username){
                usernameError.current.textContent='Wrong username';
                validLogin = false;
            }
            if(password != registerData.password){
                passwordError.current.textContent='Wrong password';
                validLogin = false;
            }
            if(validLogin){
                isLoggedIn.value = true;
                setShouldNavigate(true);
            }
        }

        // perform login action with username and password
    };
    const handlePasswordChange =(event) =>{
        passwordError.current.textContent='';
    }
    const handleUsernameChange = (event) => {
        usernameError.current.textContent='';
    }
    if(shouldNavigate) {
        return(<Navigate to="/chat" />)
    }
    isLoggedIn.value = false;
    return(
        <>

            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
                        <link rel="stylesheet"
                              href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
                              integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                              crossOrigin="anonymous"></link>
                            <title>Hello, world!</title>
            </head>
            <body>



        <div className="center logreg">
            <div className="login">
                <h1 className="margin5 text">Sign-in</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group text">
                        <label htmlFor="username">Username</label>
                        <div className="place">
                            <input  className="form-control" id="username" placeholder="Enter username"  onChange={handleUsernameChange}  ref={usernameRef}></input>
                            <small className="text-danger" ref={usernameError}></small>
                        </div>
                    </div>
                    <div className="form-group text">
                        <label htmlFor="password">Password</label>
                        <div className="place">
                            <input type="password" className="form-control" id="password" placeholder="Enter password" onChange={handlePasswordChange} ref={passwordRef}></input>
                            <small className="text-danger" ref={passwordError}></small>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-info  text margin5">Log in</button>     <Link to="/register" className="btn btn-dark text" role="button">Sign Up</Link>


                </form>
            </div>
            <br></br>
        </div>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
                integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
                crossOrigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js"
                integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
                crossOrigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js"
                integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
                crossOrigin="anonymous"></script>
            </body>
        </>
    )
}
export default Login;