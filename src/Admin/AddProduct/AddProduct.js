import { useState } from "react";
import { useNavigate } from "react-router";
import Form from 'react-bootstrap/Form';
import { useEffect } from "react";
import axios from "axios";


function AddProduct() {
    

    let navigate = useNavigate();

    const formSubmit = (e)=>{
        e.preventDefault();
        
        const token = localStorage.getItem("token_admin");

        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('parent_category', categoryId);
        formData.append('subcategory', subcategoryId);
        formData.append('imageUrl', imageUrl);

        console.log(formData);
        console.log(categoryId);

        axios.post('https://ecommerce-django-ct3k.onrender.com/product/create/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            }
        })
        .then((response) => {
            console.log(response);
            navigate('/adminproducts');
        })
        .catch((error) => {
            console.error(error);
        });

    }
    
    const [name, setName] = useState('');
    const [description, setDesc] = useState('');
    const [price, setPrice] = useState(0);
    const [imageUrl, setImage] = useState(null);
    const [category, setCategory] = useState([]);
    const [subcategory, setSubcategory] = useState([]);
    const [categoryId, setCategoryId] = useState('');
    const [subcategoryId, setSubcategoryId] = useState('');

    const getCategories = ()=>{
        axios.get('https://ecommerce-django-ct3k.onrender.com/category/list/')
            .then((response) => {
                console.log(response.data);
                setCategory(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    const getSubCategories = (catId)=>{
        axios.get(`https://ecommerce-django-ct3k.onrender.com/category/${catId}/`)
            .then((response) => {
                console.log(response.data);
                setCategoryId(response.data.name);
                setSubcategory(response.data.subcategories);
                console.log(response.data.subcategories);
                console.log(subcategory);
            })
            .catch((error) => {
                console.error(error);
            });
    }
    
    useEffect(() => {
        getCategories();
        console.log(category);

        // getSubCategories();
    },[])

    return (
        <>
            <h1>Add product</h1>
            <div className="container">
                <form onSubmit={formSubmit} className="mt-5 mb-5">
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                        <input onChange={(e)=> setName(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="Product Title" placeholder="Product Title" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleDescription" className="form-label">Description</label>
                        <input onChange={(e)=> setDesc(e.target.value)} type="textarea" className="form-control" id="exampleDescription" aria-describedby="Product Decd" placeholder="Product Desc" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="examplePrice" className="form-label">Price</label>
                        <input onChange={(e)=> setPrice(e.target.value)} type="number" className="form-control" id="examplePrice" aria-describedby="Product Price" placeholder="Product Price" />
                    </div>
                    <div className="mb-3">
                    <select className="btn-primary" onChange={(e)=> {getSubCategories(e.target.value)}}>
                        <option value="">Select Category</option>
                        {category.map((cat)=>{
                            return <option className="btn btn-info m-4" key={cat.id} value={cat.id}>{cat.name}</option>
                        })}
                    </select>
                    </div>
                    <div className="mb-3">
                    <select className="btn-primary" onChange={(e)=> setSubcategoryId(e.target.value)}>
                        <option>Select Subcategory</option>
                        {Array.isArray(subcategory) &&  subcategory.map((subcat)=>{
                            return <option className="btn btn-info m-4" key={subcat.id} value={subcat.name}>{subcat.name}</option>
                        })}
                    </select>
                    </div>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Upload Product Image</Form.Label>
                        <Form.Control type="file" onChange={(e)=>setImage(e.target.files[0])} />
                    </Form.Group>
               
                    <button type="submit" className="btn btn-primary">Add Product</button>
                </form>
            </div>
        </>
    )
}

export default AddProduct;