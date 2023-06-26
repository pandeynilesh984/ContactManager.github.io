import React, {useState} from 'react'
import {useNavigate} from "react-router-dom";

function AddContact(props) {
    
    const navigate=useNavigate();
    const [user, setUser] = useState({name:"", email:""});
   let add = (e) => {
        e.preventDefault();
        if (user.name === "" || user.email === "") {
            alert("All the fields are mandatory!");
            return;
        }
        props.addContactHandler(user);
        setUser({name:"", email:""});
        navigate('/');
    };

        return (
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" value={user.name} onChange={e => setUser({...user, name: e.target.value})}/>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="Email" value={user.email} onChange={e => setUser({...user, email: e.target.value})}/>
                    </div>
                    <button className="ui button blue">add</button>
                </form>
            </div>
        )
    }


export default AddContact;
