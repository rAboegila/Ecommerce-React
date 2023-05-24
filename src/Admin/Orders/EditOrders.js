
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import Form from 'react-bootstrap/Form';
import { useEffect } from "react";
import axios from "axios";


function EditOrders() {
    

    let navigate = useNavigate();

    let {orderId} = useParams();

    const [status, setStatus] = useState('');


    const formSubmit = (e)=>{
        e.preventDefault();
        
        const token = localStorage.getItem("token_admin");


            fetch(`https://ecommerce-django-ct3k.onrender.com/order/updateStatus/${orderId}/`, {
             method: "PUT",
             headers: {'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`},
            body: JSON.stringify({
                status: status,
            })
         })
         .then((res) => {res.json()
            navigate('/orders');
            setStatus(res)
        })
        
     }

    


    return (
        <>
        
            <h1>Change Order Status</h1>
            <div className="container" style={{textAlign: "center"}}>
                <div className="row">
                <form onSubmit={formSubmit} className="mt-5 mb-5">
                    <div className="mb-3 width-100">
                   <select style={{width: 500, textAlign: 'center', height:50}} className="btn-info" onChange={(e)=> setStatus(e.target.value)}>
                        <option>Set Status</option>
                        <option value={'pending'}>Pending</option>
                        <option value={'shipped'}>Shipped</option>
                        <option value={'delivered'}>Delivered</option>
                    </select>
                    </div>
                    <br/>
                    <button type="submit" style={{width:200, height:50}} className="btn btn-primary">Update Status</button>
                </form>

                </div>
            </div>
        </>
    )
}

export default EditOrders;