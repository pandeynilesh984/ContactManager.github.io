import React, {useState} from 'react'
import {Link,useLocation} from'react-router-dom';
import {useNavigate} from 'react-router-dom';

function EditContact(props) {
    
    const navigate = useNavigate();
    let location = useLocation();
    const {id, name, email} = location.state.contact;
    const [user, setUser] = useState({id,name,email});

    
    
    let update = (e) => {
        e.preventDefault();
        if (user.name === "" || user.email === "") {
            alert("All the fields are mandatory!");
            return;
        }
        props.updateContactHandler(user);
        setUser({name:"", email:""});
        navigate('/');
    }
    
        return (
            <div className="ui main">
                <h2>Edit Contact</h2>
                <form className="ui form" onSubmit={update}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" value={user.name} onChange={e => setUser({...user, name: e.target.value})}/>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="Email" value={user.email} onChange={e => setUser({...user, email: e.target.value})}/>
                    </div>
                    <button className="ui button blue">update</button>
                </form>
            </div>
        )
    }



export default EditContact;
