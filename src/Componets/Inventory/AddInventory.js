
import { useState } from "react";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import axios from "axios";


function AddInventory() {

    let navigate = useNavigate();

    const [productId, setProductId] = useState();

    const formSubmit = (e) => {
        e.preventDefault();

        const token = localStorage.getItem("token_admin");

        fetch(`https://ecommerce-django-ct3k.onrender.com/product/${productId}/add_inventory/`, {
            method: "POST",
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


    const [color, setColor] = useState('');
    const [size, setSize] = useState();
    const [quantity, setQuantity] = useState();
    const [product, setProduct] = useState([]);

    const getAllProducts = () => {
        axios.get('https://ecommerce-django-ct3k.onrender.com/product/list/')
            .then((response) => {
                setProduct(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }


    useEffect(() => {
        getAllProducts();

        // getSubCategories();
    }, [])

    return (
        <>
            <h1>Add Inventory</h1>
            <div className="container">
                <form onSubmit={formSubmit} className="mt-5 mb-5">
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Inventory Color</label>
                        <input onChange={(e) => setColor(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="Inventory Color" placeholder="Inventory Color" />
                    </div>
                    <div className="mb-3">
                        <select onChange={(e) => setSize(e.target.value)} className="btn-primary" style={{width: 100}}>
                            <option value={'S'}>Small</option>
                            <option value={'M'}> Medium</option>
                            <option value={'L'}>Large</option>
                            <option value={'XL'}>Extra Large</option>
                            <option value={'XXL'}>Double Extra Large</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Inventory Quantity</label>
                        <input onChange={(e) => setQuantity(e.target.value)} type="number" className="form-control" id="exampleInputEmail1" aria-describedby="Category Title" placeholder="Category Title" />
                    </div>
                    <div className="mb-3">
                        <select className="btn-primary" style={{ backgroundColor: 'orange' }} onChange={(e) => { setProductId(e.target.value) }}>
                            <option value="">Select Product</option>
                            {product.map((prod) => {
                                return <option className="btn btn-info m-4" key={prod.id} value={prod.id}>{prod.name}</option>
                            })}
                        </select>
                    </div>

                    <button type="submit" className="btn btn-primary">Add New Inventory</button>
                </form>
            </div>
        </>
    )
}

export default AddInventory;