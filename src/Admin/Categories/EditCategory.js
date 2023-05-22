
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import Form from 'react-bootstrap/Form';
import { useEffect } from "react";
import axios from "axios";


function EditCategory() {
    

    let navigate = useNavigate();
    let {categoryId} = useParams();

    const formSubmit = (e)=>{
        e.preventDefault();
        
        const token = localStorage.getItem("token_admin");


                 fetch(`https://ecommerce-django-ct3k.onrender.com/category/update/${categoryId}/`, {
             method: "PUT",
             headers: {'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`},
             body: JSON.stringify({
                 name,
                 description,
             })
         })
         .then((res) => {res.json()
            navigate('/categories');
        
        })

     }

    
    
    const [name, setName] = useState('');
    const [description, setDesc] = useState('');
    

    return (
        <>
            <h1>Edit Category</h1>
            <div className="container">
                <form onSubmit={formSubmit} className="mt-5 mb-5">
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Category Title</label>
                        <input onChange={(e)=> setName(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="Category Title" placeholder="Category Title" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Category Description</label>
                        <input onChange={(e)=> setDesc(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="Category Title" placeholder="Add desc" />
                    </div>
                    
               
                    <button type="submit" className="btn btn-primary">Update Category</button>
                </form>
            </div>
        </>
    )
}

export default EditCategory;