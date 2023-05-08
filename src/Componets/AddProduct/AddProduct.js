import { useState } from "react";
import { useNavigate } from "react-router";

function AddProduct() {

    let navigate = useNavigate();

    const formSubmit = (e)=>{
        e.preventDefault();

        fetch("https://fakestoreapi.com/products", {
            method: "POST",
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify({
                title,
                description,
                price
            })
        })
        .then((res) => res.json())
        .then((data) => {console.log(data);})

        navigate('/adminproducts');
    }

    const [title, setTitle] = useState('');
    const [description, setDesc] = useState('');
    const [price, setPrice] = useState(0);

    return (
        <>
            <h1>Add product</h1>

            <form onSubmit={formSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                    <input onChange={(e)=> setTitle(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="Product Title" placeholder="Product Title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleDescription" className="form-label">Description</label>
                    <input onChange={(e)=> setDesc(e.target.value)} type="textarea" className="form-control" id="exampleDescription" aria-describedby="Product Decd" placeholder="Product Desc" />
                </div>
                <div className="mb-3">
                    <label htmlFor="examplePrice" className="form-label">Price</label>
                    <input onChange={(e)=> setPrice(e.target.value)} type="number" className="form-control" id="examplePrice" aria-describedby="Product Price" placeholder="Product Price" />
                </div>
                
               
                <button type="submit" className="btn btn-primary">Add Product</button>
            </form>
        </>

    )
}

export default AddProduct;