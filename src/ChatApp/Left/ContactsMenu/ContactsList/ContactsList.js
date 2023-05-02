import profilePic3 from '../../../../profilePic3.jpg'
import ContactItem from '../ContactItem/ContactItem';
import monkeyPic from '../../../../monkeyprofilepic.jpg'

function ContactsList() {
    return(
        <>
            <ContactItem userName={"user1"} profilePic={profilePic3} lastMsgDate={"10/10/1999 11:55 PM"}/>
            <ContactItem userName={"user1"} profilePic={monkeyPic} lastMsgDate={"10/10/1999 11:55 PM"}/>
            <ContactItem userName={"user1"} profilePic={monkeyPic} lastMsgDate={"10/10/1999 11:55 PM"}/>
            <ContactItem userName={"user1"} profilePic={monkeyPic} lastMsgDate={"10/10/1999 11:55 PM"}/>
            <ContactItem userName={"user1"} profilePic={monkeyPic} lastMsgDate={"10/10/1999 11:55 PM"}/>
            <ContactItem userName={"user1"} profilePic={monkeyPic} lastMsgDate={"10/10/1999 11:55 PM"}/>
        </>
    )
}
export default ContactsList;