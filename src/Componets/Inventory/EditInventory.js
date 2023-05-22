
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";
import axios from "axios";


function EditInventory() {
    
    let {inventoryId, productId} = useParams();

    let navigate = useNavigate();

    const [producstId, setProductId] = useState();
    const [inventory, setInventory] = useState();

    const formSubmit = (e) => {
        e.preventDefault();

        const token = localStorage.getItem("token_admin");

        fetch(`https://ecommerce-django-ct3k.onrender.com/product/${productId}/update_inventory/${inventoryId}/`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                color,
                size,
                quantity,
                
            })
        })
            .then((res) => {
                res.json()
                navigate('/inventories');
            })
    }


    const [color, setColor] = useState();
    const [size, setSize] = useState();
    const [quantity, setQuantity] = useState();
    const [product, setProduct] = useState([]);
    const [productName, setProductName] = useState();

    const getAllProducts = () => {
        axios.get('https://ecommerce-django-ct3k.onrender.com/product/list/')
            .then((response) => {
                console.log(response.data);
                setProduct(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    const getAllInventories = async () => {
      await  fetch(`https://ecommerce-django-ct3k.onrender.com/product/${productId}/inventory/${inventoryId}/`)
    .then((res)=> res.json())
    .then((res)=>{
        console.log(res);
        setInventory(res)
        setColor(res.color);
        setSize(res.size);
        setQuantity(res.quantity);
        setProductName(res.product_id);
    })
      };



    useEffect(() => {
        getAllProducts();
        getAllInventories();
        // getSubCategories();
    }, [])

    return (
        <>
            <h1>Edit Inventory</h1>
            <div className="container">
                
                <form onSubmit={formSubmit} className="mt-5 mb-5">
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Update Inventory Color</label>
                        <input onChange={(e) => setColor(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="Inventory Color" value={color} />
                    </div>
                    <div className="mb-3">
                        <select onChange={(e) => setSize(e.target.value)} className="btn-primary" style={{width: 100}} value={size}>
                            <option value={'S'}>Small</option>
                            <option value={'M'}> Medium</option>
                            <option value={'L'}>Large</option>
                            <option value={'XL'}>Extra Large</option>
                            <option value={'XXL'}>Double Extra Large</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Inventory Quantity</label>
                        <input onChange={(e) => setQuantity(e.target.value)} type="number" className="form-control" id="exampleInputEmail1" aria-describedby="Category Title" value={quantity} />
                    </div>
                    <div className="mb-3">
                        
                        <select value={productName} className="btn-primary" style={{ backgroundColor: 'orange' }} onChange={(e) => { setProductId(e.target.value) }}>
                            {product.map((prod) => {
                                return <option className="btn btn-info m-4" key={prod.id} value={prod.id}>{prod.name}</option>
                            })}
                        </select>
                    </div>

                    <button type="submit" className="btn btn-primary">Update Inventory</button>
                </form>
            </div>
        </>
    )
}

export default EditInventory;