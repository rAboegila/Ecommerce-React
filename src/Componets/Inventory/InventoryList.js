
// import { useState } from "react";
// import { useEffect } from "react";
// import { useParams } from "react-router";
// import {Link} from "react-router-dom";
// // import "./ProductDetails.css";

// function InventoryList(){

// const [inventory, setInventory] = useState();
// const [color, setColor] = useState();

// let {inventoryId, productId} = useParams();

// useEffect(()=>{
//     fetch(`https://ecommerce-django-ct3k.onrender.com/product/${productId}/inventory/${inventoryId}/`)
//     .then((res)=> res.json())
//     .then((res)=>{
//         console.log(res);
//         setInventory(res)
//     })
// },[])

// // useEffect(()=>{
// //     fetch(`https://ecommerce-django-ct3k.onrender.com/product/${inventoryId}/colors/`)
// //     .then((res)=> res.json())
// //     .then((res)=>{
// //         console.log(res);
// //         setColor(res)
// //     })
// // },[])

//     return (
//         <>

// <div className="container">
//       {inventory && (
//         <div className="row">
          
//           <div className="col-md-6">
//             <h1>Product Name: {inventory.product}</h1>
//             {/* <h2>{inventory.name}</h2> */}
//             <h2>Color: {inventory.color}</h2>
//             <h2>Size:{inventory.size}</h2>
//             <h2>quantity: {inventory.quantity}</h2>
//             <Link to="/inventory/add" className="btn btn-info">Back To Inventories Page</Link> 
//           </div>
//         </div>
//       )}
//     </div>

//         </>

//     )
// }

// export default InventoryList;
