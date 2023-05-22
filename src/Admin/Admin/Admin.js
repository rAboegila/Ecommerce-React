import { Link } from 'react-router-dom';
import './Admin.css';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectIsAdmin } from '../../Lib/IsAdmin';
import { useEffect} from "react";


function Admin(){

    return(
        <>
        <Link to={'/adminproducts'} style={{textDecoration: 'none', marginLeft: 230}}>
   <article className="version" style={{display: 'inline-block', width:400}}>
  <section className="page-header">
    <h1 className="page-title">Edit Products</h1>
    <div className="button-group">
      <button type="button" className="btn btn-primary">Action</button>
    </div>
  </section>
  <section className="page-content" style={{textAlign: 'center', marginTop: 50, color: 'black'}}>
    From Here you can Add, Edit, Delete and View all the products
  </section>
</article>
</Link>


<Link to={'/categories'} style={{textDecoration: 'none', marginLeft: 100}}>
   <article className="version" style={{display: 'inline-block', width:400}}>
  <section className="page-header">
    <h1 className="page-title">Edit categories</h1>
    <div className="button-group">
      <button type="button" className="btn btn-primary">Action</button>
    </div>
  </section>
  <section className="page-content" style={{textAlign: 'center', marginTop: 50, color: 'black'}}>
  From Here you can Add, Edit, Delete and View all the Categories
  </section>
</article>
</Link>


<Link to={'/subcategories'} style={{textDecoration: 'none', marginLeft: 100}}>
   <article className="version" style={{display: 'inline-block', width:400}}>
  <section className="page-header">
    <h1 className="page-title">Edit subcategories</h1>
    <div className="button-group">
      <button type="button" className="btn btn-primary">Action</button>
    </div>
  </section>
  <section className="page-content" style={{textAlign: 'center', marginTop: 50, color: 'black'}}>
  From Here you can Add, Edit, Delete and View all the SubCategories
  </section>
</article>
</Link>


<Link to={'/users'} style={{textDecoration: 'none', marginLeft: 230}}>
   <article className="version" style={{display: 'inline-block', width:400}}>
  <section className="page-header">
    <h1 className="page-title">Edit users</h1>
    <div className="button-group">
      <button type="button" className="btn btn-primary">Action</button>
    </div>
  </section>
  <section className="page-content" style={{textAlign: 'center', marginTop: 50, color: 'black'}}>
  Here you can change the state of the user
  </section>
</article>
</Link>


<Link to={'/orders'} style={{textDecoration: 'none', marginLeft: 100}}>
   <article className="version" style={{display: 'inline-block', width:400}}>
  <section className="page-header">
    <h1 className="page-title">Edit orders</h1>
    <div className="button-group">
      <button type="button" className="btn btn-primary">Action</button>
    </div>
  </section>
  <section className="page-content" style={{textAlign: 'center', marginTop: 50, color: 'black'}}>
  Here you can change the state of the orders
  </section>
</article>
</Link>


<Link to={'/inventories'} style={{textDecoration: 'none', marginLeft: 100}}>
   <article className="version" style={{display: 'inline-block', width:400}}>
  <section className="page-header">
    <h1 className="page-title">Edit inventories</h1>
    <div className="button-group">
      <button type="button" className="btn btn-primary">Action</button>
    </div>
  </section>
  <section className="page-content" style={{textAlign: 'center', marginTop: 50, color: 'black'}}>
  Add, Edit, Delete and View all the inventories 
  </section>
</article>
</Link>
        </>
    )
}

export default Admin;