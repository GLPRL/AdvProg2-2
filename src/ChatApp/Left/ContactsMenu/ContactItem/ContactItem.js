
function ContactItem({ profilePic, userName, lastMsgDate}) {
    return(
        <>
        <tr className="table-info">
            <td><img src={ profilePic } alt="" className="chat-profile-image rounded-circle"></img></td>
            <td>{userName}</td>
            <td><small>{lastMsgDate}</small></td>
        </tr>
        </>
    );
}
export default ContactItem;