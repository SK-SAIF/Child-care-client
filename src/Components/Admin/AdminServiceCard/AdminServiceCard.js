import React from 'react';

const AdminServiceCard = ({serviceInfo}) => {
    console.log(serviceInfo);
    const handleDeleteButton=(_id)=>{
            fetch(`http://localhost:5000/deleteService/${_id}`,{
                method:"DELETE"
            })
            .then(res=>res.json())
            .then(result=>{
                if(result===true){
                    alert("Item Deleted");
                }
            })
    }
    return (
        <div>
            
            <img src={serviceInfo.image} alt=""/>
           <h2>{serviceInfo.name}</h2>
           <p>{serviceInfo.description}</p>
           <h5>{serviceInfo.price}</h5>
           <button onClick={()=>handleDeleteButton(serviceInfo._id)} className="btn btn-danger">Delete</button>
        </div>
    );
};

export default AdminServiceCard;