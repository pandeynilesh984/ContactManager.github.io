import React, { useRef } from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";


function ContactList(props) {
    console.log(props);
    const inputEl = useRef("");

    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };
    // const contacts = [
    //     {
    //         id: "1",
    //         name: "Nilesh",
    //         email: "nilu@gmail.com",
    //     },
    //     {
    //         id: "2",
    //         name: "Abhishek",
    //         email: "abhishek@gmail.com",
    //     },
    //     {
    //         id: "3",
    //         name: "sunil",
    //         email: "sunil@gmail.com",
    //     },
    //     {
    //         id: "4",
    //         name: "deepak",
    //         email: "deepak@gmail.com",
    //     },

    // ];
    const renderContactList = props.contacts.map((contact) => {
    return ( 
    <ContactCard contact={contact} clickHander={deleteContactHandler} key={contact.id} />
    );
    });
        
   
    const getSearchTerm = () => {
        props.searchKeyword(inputEl.current.value);
    };
     return (
         <div className="main">
             <h2>Contact List
             <Link to="/add">
                <button className="ui button blue right">Add Contact</button>
                </Link>
                </h2>
                <div className="ui search">
                    <div className="ui icon input">
                        <input ref={inputEl} type="text" placeholder="search Contacts" className="prompt" value={props.term} onChange={getSearchTerm}/>
                        <i className="search icon"></i>
                    </div>
                </div>
     <div className="ui celled list">{renderContactList.length >0 ? renderContactList: "No Contacts available"}</div> 
     </div>
     );
};



export default ContactList;