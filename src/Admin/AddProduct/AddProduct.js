// import { useState } from "react";
// import { useNavigate } from "react-router";
// import Form from 'react-bootstrap/Form';
// import { useEffect } from "react";
// import axios from "axios";


// function AddProduct() {
    

//     let navigate = useNavigate();

//     // const formSubmit = (e)=>{
//     //     e.preventDefault();

//     //     fetch("http://127.0.0.1:8000/product/create/", {
//     //         method: "POST",
//     //         headers: {'Content-Type': 'application/json',},
//     //         body: JSON.stringify({
//     //             title,
//     //             description,
//     //             price,
//     //             image,
//     //             category: categoryId, 
//     //             subcategory: subcategoryId,
//     //         })
//     //     })
//     //     .then((res) => res.json())
//     //     .then((data) => {console.log(data);})

//     //     navigate('/admin');
//     // }

//     const formSubmit = (e)=>{
//         e.preventDefault();
    
//         const token = localStorage.getItem("token");
    
//         fetch("http://127.0.0.1:8000/product/create/", {
//             method: "POST",
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${token}`
//             },
//             body: JSON.stringify({
//                 name,
//                 description,
//                 price,
//                 imageUrl,
//                 parent_category: "Men's Cloths", 
//                 subcategory: subcategoryId,
//             })
//         })
//         .then((res) => res.json())
//         .then((data) => {console.log(data);})
    
//         navigate('/admin');
//     }

//     const [name, setName] = useState('');
//     const [description, setDesc] = useState('');
//     const [price, setPrice] = useState(0);
//     const [imageUrl, setImage] = useState('');
//     const [category, setCategory] = useState([]);
//     const [subcategory, setSubcategory] = useState([]);
//     const [categoryId, setCategoryId] = useState('');
//     const [subcategoryId, setSubcategoryId] = useState('');

//     const getCategories = ()=>{
// axios.get('http://127.0.0.1:8000/category/list/')
//   .then((response) => {
//     console.log(response.data.data);
//     setCategory(response.data.data);
//     // setCategoryId(categoryId)

// })
//   .catch((error) => {
//     console.error(error);
//   });
//     }

//     const getSubCategories = (catId)=>{
//     axios.get(`http://127.0.0.1:8000/category/${catId}/`)
//   .then((response) => {
//     console.log(response.data.data);
//     setSubcategory(response.data.data.subcategories);
//     console.log(response.data.data.subcategories);
//     console.log(subcategory);
//     setCategoryId(catId);

//   })
//   .catch((error) => {
//     console.error(error);
//   });
//     }

    

//     useEffect(() => {
//         getCategories();
//         console.log(category);

//         // getSubCategories();
//     },[])

//     return (
//         <>
//             <h1>Add product</h1>
//     <div className="container">
//             <form onSubmit={formSubmit} className="mt-5 mb-5">
//                 <div className="mb-3">
//                     <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
//                     <input onChange={(e)=> setName(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="Product Title" placeholder="Product Title" />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="exampleDescription" className="form-label">Description</label>
//                     <input onChange={(e)=> setDesc(e.target.value)} type="textarea" className="form-control" id="exampleDescription" aria-describedby="Product Decd" placeholder="Product Desc" />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="examplePrice" className="form-label">Price</label>
//                     <input onChange={(e)=> setPrice(e.target.value)} type="number" className="form-control" id="examplePrice" aria-describedby="Product Price" placeholder="Product Price" />
//                 </div>
//                 {/* <div className="mb-3">
//                     <label>Category</label> <br/>
//                 <select className="btn-primary">
//                     {category.map((cat)=>{
//                     return <option className="btn btn-info m-4" key={cat.id} 
//                     >{cat.name}</option>
//                 })}
//                 </select>
//                 </div>
//                 <div className="mb-3">
//                 <label>SubCategory</label> <br/>
//                 <select className="btn-primary"  >
//                     {subcategory.map((subcat)=>{
//                     return <option className="btn btn-info m-4" key={subcat.id} 
//                     >{subcat.name}</option>
//                 })}
//                 </select>
//                 </div> */}
//                                {/* <div className="mb-3">
//                     <label>Category</label> <br/>
//                     <select className="btn-primary" onChange={(e)=> getSubCategories(e.target.value)}>
//                         <option value="">Select Category</option>
//                         {category.map((cat)=>{
//                             return <option className="btn btn-info m-4" key={cat.id} value={cat.id}>{cat.name}</option>
//                         })}
//                     </select>
//                 </div>
//                 <div className="mb-3">
//                     <label>SubCategory</label> <br/>
//                     <select className="btn-primary"  >
//                         <option >Select Subcategory</option>
//                         {Array.isArray(subcategory) &&  subcategory.map((subcat)=>{
//                             return <option className="btn btn-info m-4" key={subcat.id} value={subcat.id}>{subcat.name}</option>
//                         })}
//                     </select>
//                 </div> */}

//                 <select className="btn-primary" onChange={(e)=> {getSubCategories(e.target.value)}}>
//                 <option value="">Select Category</option>
//                 {category.map((cat)=>{
//                     return <option className="btn btn-info m-4" key={cat.id} value={cat.id}>{cat.name}</option>
//                 })}
//                 </select>

//                 <select className="btn-primary" onChange={(e)=> setSubcategoryId(e.target.value)}>
//                 <option>Select Subcategory</option>
//                 {Array.isArray(subcategory) &&  subcategory.map((subcat)=>{
//                     return <option className="btn btn-info m-4" key={subcat.id} value={subcat.name}>{subcat.name}</option>
//                 })}
//                 </select>
//                 <Form.Group controlId="formFile" className="mb-3">
//                  <Form.Label>Upload Product Image</Form.Label>
//                  <Form.Control type="file" onChange={(e)=>setImage(e.target.files[0])} />
//                  </Form.Group>
               
//                 <button type="submit" className="btn btn-primary">Add Product</button>
//             </form>
//             </div>
//         </>

//     )
// }

// export default AddProduct;














import { useState } from "react";
import { useNavigate } from "react-router";
import Form from 'react-bootstrap/Form';
import { useEffect } from "react";
import axios from "axios";


function AddProduct() {
    

    let navigate = useNavigate();

    const formSubmit = (e)=>{
        e.preventDefault();
        
        const token = localStorage.getItem("token");

        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('parent_category', categoryId);
        formData.append('subcategory', subcategoryId);
        formData.append('imageUrl', imageUrl);

        console.log(formData);
        console.log(categoryId);

        axios.post('http://127.0.0.1:8000/product/create/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            }
        })
        .then((response) => {
            console.log(response.data);
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
                setCategoryId(response.data.data.name);
                setSubcategory(response.data.data.subcategories);
                console.log(response.data.data.subcategories);
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