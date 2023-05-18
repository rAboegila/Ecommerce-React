// // import { useState, useEffect } from "react";
// import { useParams } from "react-router";
// // import { params } from "react-router";
// // // import { useState } from "react";
// // import { useNavigate } from "react-router";

// // function EditProduct(props) {
// //     // const productId = props.match.params.id;
// //     let {productId} = useParams();
// //     const [product, setProduct] = useState(null);
// //     let navigate = useNavigate();

// //     const [title, setTitle] = useState('');
// //     const [description, setDesc] = useState('');
// //     const [price, setPrice] = useState(0);
// //     const [image, setImage] = useState('')
  
//     // useEffect(() => {
//     //   fetch(`https://fakestoreapi.com/products/${productId}`,{
//     //     method: "PUT",
        
//     //   })
//     //     .then((res) => res.json())
//     //     .then((data) => {
//     //       setProduct(data);
//     //     });
//     // }, [productId]);
//     const formSubmit = (e)=>{
//         e.preventDefault();

// //         fetch(`https://fakestoreapi.com/products/${productId}`, {
// //             method: "PUT",
// //             headers: {'Content-Type': 'application/json',},
// //             body: JSON.stringify({
// //                 title,
// //                 description,
// //                 price,
// //                 image,
// //             })
// //         })
// //         .then((res) => res.json())
// //         .then((data) => {console.log(data);})

// //         navigate('/adminproducts');
// //     }
  
// //     if (!product) {
// //       return <div>Loading...</div>;
      
// //     }


  
// //     return (
// //       <div>
// //         <h1>Edit Product</h1>
// //         <form onSubmit={formSubmit}>
// //           <div className="form-group">
// //             <label htmlFor="title">Title</label>
// //             <input type="text" className="form-control" id="title" onChange={(e)=> setTitle(e.target.value)} />
// //           </div>
// //           <div className="form-group">
// //             <label htmlFor="description">Description</label>
// //             <textarea className="form-control" id="description" rows="3" value={product.description} onChange={(e)=> setDesc(e.target.value)}></textarea>
// //           </div>
// //           <div className="form-group">
// //             <label htmlFor="price">Price</label>
// //             <input type="number" className="form-control" id="price" value={product.price} onChange={(e)=> setPrice(e.target.value)}/>
// //           </div>
// //           <div className="form-group">
// //             <label htmlFor="image">Image URL</label>
// //             <input type="text" className="form-control" id="image" value={product.image} onChange={(e)=> setImage(e.target.value)}/>
// //           </div>
// //           <button type="submit" className="btn btn-primary">Save</button>
// //         </form>
// //       </div>
// //     );
// //   }

// //   export default EditProduct;

// import { useState } from "react";
// import { useNavigate } from "react-router";
// import Form from 'react-bootstrap/Form';


// function EditProduct() {
//     let {productId} = useParams();
//     let navigate = useNavigate();

//     const formSubmit = (e)=>{
//         e.preventDefault();

//         fetch(`https://fakestoreapi.com/products/${productId}`, {
//             method: "PUT",
//             headers: {'Content-Type': 'application/json',},
//             body: JSON.stringify({
//                 title,
//                 description,
//                 price,
//                 image,
//             })
//         })
//         .then((res) => res.json())
//         .then((data) => {console.log(data);})

//         navigate('/admin');
//     }

//     const [title, setTitle] = useState('');
//     const [description, setDesc] = useState('');
//     const [price, setPrice] = useState(0);
//     const [image, setImage] = useState('');
//     const [product, setProduct] = useState(null);

//     return (
//         <>
//             <h1>Edit product</h1>

//             <form onSubmit={formSubmit} className="mt-5 mb-5">
//                 <div className="mb-3">
//                     <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
//                     <input onChange={(e)=> setTitle(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="Product Title" placeholder="Product Title" />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="exampleDescription" className="form-label">Description</label>
//                     <input onChange={(e)=> setDesc(e.target.value)}  type="textarea" className="form-control" id="exampleDescription" aria-describedby="Product Decd" placeholder="Product Desc" />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="examplePrice" className="form-label">Price</label>
//                     <input onChange={(e)=> setPrice(e.target.value)} type="number" className="form-control" id="examplePrice" aria-describedby="Product Price" placeholder="Product Price" />
//                 </div>
//                 <Form.Group controlId="formFile" className="mb-3">
//                  <Form.Label>Default file input example</Form.Label>
//                  <Form.Control type="file" onChange={(e)=>setImage(e.target.value)} />
//                  </Form.Group>
               
//                 <button type="submit" className="btn btn-primary">Add Product</button>
//             </form>
//         </>

//     )
// }

// export default EditProduct;



import { useState } from "react";
import { useNavigate } from "react-router";
import Form from 'react-bootstrap/Form';
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";



function EditProduct() {
    
      const [product, setProduct] = useState(null);
        let {productId} = useParams();


    let navigate = useNavigate();

    const formSubmit = (e)=>{
        e.preventDefault();
    
        const token = localStorage.getItem("token");

        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('parent_category', "Men's Cloths");
        formData.append('subcategory', subcategoryId);
        formData.append('image', imageUrl);

        console.log(formData);

        axios.put(`http://127.0.0.1:8000/product/update/${productId}/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            }
        })
        .then((response) => {
            console.log(response.data);
            navigate('/admin');
        })
        .then((data) => {
               setProduct(data);
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
        axios.get('http://127.0.0.1:8000/category/list/')
            .then((response) => {
                console.log(response.data.data);
                setCategory(response.data.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    const getSubCategories = (catId)=>{
        axios.get(`http://127.0.0.1:8000/category/${catId}/`)
            .then((response) => {
                console.log(response.data.data);
                setSubcategory(response.data.data.subcategories);
                console.log(response.data.data.subcategories);
                console.log(subcategory);
                setCategoryId(catId);
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
            <h1>Edit product</h1>
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
                    <select className="btn-primary" onChange={(e)=> {getSubCategories(e.target.value)}}>
                        <option value="">Select Category</option>
                        {category.map((cat)=>{
                            return <option className="btn btn-info m-4" key={cat.id} value={cat.id}>{cat.name}</option>
                        })}
                    </select>

                    <select className="btn-primary" onChange={(e)=> setSubcategoryId(e.target.value)}>
                        <option>Select Subcategory</option>
                        {Array.isArray(subcategory) &&  subcategory.map((subcat)=>{
                            return <option className="btn btn-info m-4" key={subcat.id} value={subcat.name}>{subcat.name}</option>
                        })}
                    </select>
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

export default EditProduct;