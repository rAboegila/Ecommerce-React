
import { useState } from "react";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import axios from "axios";


function AddSubCategory() {

    let navigate = useNavigate();

    const formSubmit = (e) => {
        e.preventDefault();

        const token = localStorage.getItem("token_admin");
        console.log(parentcategory);

        fetch("https://ecommerce-django-ct3k.onrender.com/subcategory/create/", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                name,
                category: parentcategory,
            })
        })
            .then((res) => {
                res.json()
                navigate('/subcategories');
            })
    }


    const [name, setName] = useState('');
    const [category, setCategory] = useState([]);
    const [parentcategory, setParentCategory] = useState('');

    const getCategories = () => {
        axios.get('https://ecommerce-django-ct3k.onrender.com/category/list/')
            .then((response) => {
                console.log(response.data);
                setCategory(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }


    useEffect(() => {
        getCategories();
        console.log(category);

        // getSubCategories();
    }, [])

    return (
        <>
            <h1>Add SubCategory</h1>
            <div className="container">
                <form onSubmit={formSubmit} className="mt-5 mb-5">
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">SubCategory Title</label>
                        <input onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="Category Title" placeholder="Category Title" />
                    </div>
                    <div className="mb-3">
                        <select className="btn-primary" style={{ backgroundColor: 'orange' }} onChange={(e) => { setParentCategory(category[e.target.value-1].name) }}>
                            <option value="">Select Parent Category</option>
                            {category.map((cat) => {
                                return <option className="btn btn-info m-4" key={cat.id} value={cat.id}>{cat.name}</option>
                            })}
                        </select>
                    </div>

                    <button type="submit" className="btn btn-primary">Add New SubCategory</button>
                </form>
            </div>
        </>
    )
}

export default AddSubCategory;