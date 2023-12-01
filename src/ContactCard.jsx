const ContactCard =(props) =>{
    const {id, name, email} = props.contactContainer

    return(
        <div className="contact-list" key={id}>
        <hr />
        <p>{name}</p>
        <p>{email}</p>

        <button>Delete Contact</button>
    </div>

    )
}

export default ContactCard ;