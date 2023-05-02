import profilepic3 from "../../../profilePic3.jpg";

function ContactTab() {
    return(
        <div className="userTab">
            <img src= { profilepic3 } alt="" className="user-tab-right-image rounded-circle"></img>
            <span className="userName userTopLeft">User Name</span>
        </div>
    );
}
export default ContactTab;