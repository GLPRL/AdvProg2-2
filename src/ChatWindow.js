import profilepic4 from "./profilePic4.jpg";
import profilepic3 from "./profilePic3.jpg";
import monkeyprofilepic from "./monkeyprofilepic.jpg";

function ChatWindow() {
    return(
        <>
        <body>
            <button className="btn-sm btn-danger logoutbutton text"> Logout</button>
            <div className="container content row no-gutters text">
                <div className="contactBox  col-sm-4">
                    <div className="userTab">
                        <img src={ profilepic4 } alt="" className="user-tab-left-image rounded-circle"></img>
                        <span className="userName userTopLeft">User Name</span>
                        <span><svg xmlns="http://www.w3.org/2000/svg" fill="white" className="addContact" viewBox="0 0 16 16"
                                   data-toggle="modal" data-target="#exampleModal">
                <path
                    d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                <path fillRule="evenodd"
                      d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
            </svg></span>

                    </div>
                    <div className="contactScroll">
                        <table className="table table-hover test ">
                            <tbody>
                            <tr className="table-info">
                                <td><img src={ profilepic3 } alt="" className="chat-profile-image rounded-circle"></img></td>
                                <td>name</td>
                                <td><small>10/10/1999 11:55 PM</small></td>
                            </tr>
                            <tr className="table-info">
                                <td><img src={ monkeyprofilepic } alt="" className="chat-profile-image rounded-circle"></img></td>
                                <td>name</td>
                                <td><small>10/10/1999 11:55 PM</small></td>
                            </tr>
                            <tr className="table-info">
                                <td><img src={ monkeyprofilepic } alt="" className="chat-profile-image rounded-circle"></img></td>
                                <td>name</td>
                                <td><small>10/10/1999 11:55 PM</small></td>
                            </tr>
                            <tr className="table-info">
                                <td><img src={ monkeyprofilepic } alt="" className="chat-profile-image rounded-circle"></img></td>
                                <td>name</td>
                                <td><small>10/10/1999 11:55 PM</small></td>
                            </tr>
                            <tr className="table-info">
                                <td><img src={ monkeyprofilepic } alt="" className="chat-profile-image rounded-circle"></img></td>
                                <td>name</td>
                                <td><small>10/10/1999 11:55 PM</small></td>
                            </tr>
                            <tr className="table-info">
                                <td><img src={ monkeyprofilepic } alt="" className="chat-profile-image rounded-circle"></img></td>
                                <td>name</td>
                                <td><small>10/10/1999 11:55 PM</small></td>
                            </tr>
                            <tr className="table-info">
                                <td><img src={ monkeyprofilepic } alt="" className="chat-profile-image rounded-circle"></img></td>
                                <td>name</td>
                                <td><small>10/10/1999 11:55 PM</small></td>
                            </tr>
                            <tr className="table-info">
                                <td><img src={ monkeyprofilepic } alt="" className="chat-profile-image rounded-circle"></img></td>
                                <td>name</td>
                                <td><small>10/10/1999 11:55 PM</small></td>
                            </tr>
                            <tr className="table-info">
                                <td><img src={ monkeyprofilepic } alt="" className="chat-profile-image rounded-circle"></img></td>
                                <td>name</td>
                                <td><small>10/10/1999 11:55 PM</small></td>
                            </tr>
                            <tr className="table-info">
                                <td><img src={ monkeyprofilepic } alt="" className="chat-profile-image rounded-circle"></img></td>
                                <td>name</td>
                                <td><small>10/10/1999 11:55 PM</small></td>
                            </tr>

                            </tbody>
                        </table>
                    </div>

                </div>
                <div className="contactBox border-right col-8">
                    <div className="userTab">
                        <img src= { profilepic3 } alt="" className="user-tab-right-image rounded-circle"></img>
                        <span className="userName userTopLeft">User Name</span>
                    </div>

                    <div className="msgScroll">
                        <table className="table table-borderless ">
                            <tbody>
                            <tr>
                                <td>
                                    <p className="bg-info  p-2 border  rounded-pill  shadow-lg mb-3  float-left ">msg </p>
                                </td>
                            </tr>
                            </tbody>
                            <tbody>
                            <tr>
                                <td>
                                    <p className="bg-warning  p-2 border  rounded-pill  shadow-lg mb-3  float-right ">msg </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p className="bg-warning  p-2 border  rounded-pill  shadow-lg mb-3  float-right ">msg </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p className="bg-warning  p-2 border  rounded-pill  shadow-lg mb-3  float-right ">msg </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p className="bg-warning  p-2 border  rounded-pill  shadow-lg mb-3  float-right ">msg </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p className="bg-warning  p-2 border  rounded-pill  shadow-lg mb-3  float-right ">msg </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p className="bg-warning  p-2 border  rounded-pill  shadow-lg mb-3  float-right ">msg </p>
                                </td>
                            </tr>
                            </tbody>
                        </table>

                    </div>
                    <div className="sendLine ">
                        <input type="text" className="textOut"></input>
                        <button className="btn btn-success outbtn">Send</button>
                    </div>
                </div>
            </div>
            <div className="modal fade text" id="exampleModal" tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add new contact</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <input id="modalInput" placeholder="Contact's identifier"></input>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </body>
        </>
    )
}
export default ChatWindow;