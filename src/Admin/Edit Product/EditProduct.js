// import { useState, useEffect } from "react";
import { useParams } from "react-router";
// import { params } from "react-router";
// // import { useState } from "react";
// import { useNavigate } from "react-router";

// function EditProduct(props) {
//     // const productId = props.match.params.id;
//     let {productId} = useParams();
//     const [product, setProduct] = useState(null);
//     let navigate = useNavigate();

//     const [title, setTitle] = useState('');
//     const [description, setDesc] = useState('');
//     const [price, setPrice] = useState(0);
//     const [image, setImage] = useState('')
  
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

//         navigate('/adminproducts');
//     }
  
//     if (!product) {
//       return <div>Loading...</div>;
      
//     }


  
//     return (
//       <div>
//         <h1>Edit Product</h1>
//         <form onSubmit={formSubmit}>
//           <div className="form-group">
//             <label htmlFor="title">Title</label>
//             <input type="text" className="form-control" id="title" onChange={(e)=> setTitle(e.target.value)} />
//           </div>
//           <div className="form-group">
//             <label htmlFor="description">Description</label>
//             <textarea className="form-control" id="description" rows="3" value={product.description} onChange={(e)=> setDesc(e.target.value)}></textarea>
//           </div>
//           <div className="form-group">
//             <label htmlFor="price">Price</label>
//             <input type="number" className="form-control" id="price" value={product.price} onChange={(e)=> setPrice(e.target.value)}/>
//           </div>
//           <div className="form-group">
//             <label htmlFor="image">Image URL</label>
//             <input type="text" className="form-control" id="image" value={product.image} onChange={(e)=> setImage(e.target.value)}/>
//           </div>
//           <button type="submit" className="btn btn-primary">Save</button>
//         </form>
//       </div>
//     );
//   }

//   export default EditProduct;

import { useState } from "react";
import { useNavigate } from "react-router";
import Form from 'react-bootstrap/Form';


function EditProduct() {
    let {productId} = useParams();
    let navigate = useNavigate();

    const formSubmit = (e)=>{
        e.preventDefault();

        fetch(`https://fakestoreapi.com/products/${productId}`, {
            method: "PUT",
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify({
                title,
                description,
                price,
                image,
            })
        })
        .then((res) => res.json())
        .then((data) => {console.log(data);})

        navigate('/admin');
    }

    const [title, setTitle] = useState('');
    const [description, setDesc] = useState('');
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState('');
    const [product, setProduct] = useState(null);

    return (
        <>
            <h1>Edit product</h1>

            <form onSubmit={formSubmit} className="mt-5 mb-5">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                    <input onChange={(e)=> setTitle(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="Product Title" placeholder="Product Title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleDescription" className="form-label">Description</label>
                    <input onChange={(e)=> setDesc(e.target.value)}  type="textarea" className="form-control" id="exampleDescription" aria-describedby="Product Decd" placeholder="Product Desc" />
                </div>
                <div className="mb-3">
                    <label htmlFor="examplePrice" className="form-label">Price</label>
                    <input onChange={(e)=> setPrice(e.target.value)} type="number" className="form-control" id="examplePrice" aria-describedby="Product Price" placeholder="Product Price" />
                </div>
                <Form.Group controlId="formFile" className="mb-3">
                 <Form.Label>Default file input example</Form.Label>
                 <Form.Control type="file" onChange={(e)=>setImage(e.target.value)} />
                 </Form.Group>
               
                <button type="submit" className="btn btn-primary">Add Product</button>
            </form>
        </>

    )
}

export default EditProduct;