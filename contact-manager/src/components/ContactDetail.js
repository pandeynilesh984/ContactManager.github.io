import React from "react";
import user from "../images/user.jpg";
import { Link, useLocation } from "react-router-dom"

const ContactDetail = (props) => {
    
    let location = useLocation();
    const {name, email} = location.state.contact;

    
     return (
          <div className="main">
              <div className="ui card centered">
                  <div className="image">
                      <img src={user} alt="user" />
                  </div>
                  <div className="content">
                      <div className="header">{name}</div>
                      <div className="description">{email}</div>
                  </div>
                  <div className="center-div">
                  <Link to="/">
                  <button className="ui button blue center">Contact List</button>
                  </Link>
              </div>
              </div>
              
          </div>
     

     );
}

export default ContactDetail;