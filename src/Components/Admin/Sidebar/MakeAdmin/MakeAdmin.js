import React from 'react';
import { useState } from 'react';

const MakeAdmin = () => {
    const [adminMail, setAdminMail] = useState({
        adminMail:''
    });

    const handleAdminMail = event => {
        const newAdmin={...adminMail};
        newAdmin.adminMail=event.target.value;
        setAdminMail(newAdmin);
    }

    const handleAdminSubmitButton = () => {
        fetch('http://localhost:5000/makeAdmin', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(adminMail)
        })
        .then(res=>res.json())
        .then(result=>{
            if(result === true){
                alert("Admin was made successfully");
              }
        })
    }
    return (
        <div>
            <input type="text" placeholder="type your email" onBlur={handleAdminMail} />
            <br/>
            <br/>
            <button onClick={handleAdminSubmitButton} className="btn btn-danger">Make Admin</button>
        </div>
    );
};

export default MakeAdmin;