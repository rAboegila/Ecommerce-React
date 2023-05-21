
import { useState } from "react";
import { useNavigate } from "react-router";
import Form from 'react-bootstrap/Form';
import { useEffect } from "react";
import axios from "axios";


function AddCategory() {
    

    let navigate = useNavigate();

    const formSubmit = (e)=>{
        e.preventDefault();
        
        const token = localStorage.getItem("token_admin");



            fetch("https://ecommerce-django-ct3k.onrender.com/category/create/", {
             method: "POST",
             headers: {'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`},
             body: JSON.stringify({
                 name,
             })
         })
         .then((res) => {res.json()
            navigate('/categories');
        
        })

     }

    
    
    const [name, setName] = useState('');

    return (
        <>
            <h1>Add Category</h1>
            <div className="container">
                <form onSubmit={formSubmit} className="mt-5 mb-5">
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Category Title</label>
                        <input onChange={(e)=> setName(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="Category Title" placeholder="Category Title" />
                    </div>
                    
               
                    <button type="submit" className="btn btn-primary">Add Category</button>
                </form>
            </div>
        </>
    )
}

export default AddCategory;