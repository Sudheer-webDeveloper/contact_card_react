
import ContactCard from './ContactCard'
const ContactList = (props) =>{


    const renderContactList = props.contacts.map((contact) =>{
        return(
           <ContactCard contactContainer = {contact} />
        )
    })
    return (
        <div className="ui-celled-list">
            {renderContactList}
            <hr />
        </div>
    )

}

export default ContactList;