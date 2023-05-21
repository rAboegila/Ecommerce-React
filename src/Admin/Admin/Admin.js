import { Link } from 'react-router-dom';
import './Admin.css';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectIsAdmin } from '../../Lib/IsAdmin';
import { useEffect} from "react";


function Admin(){

    return(
        <>
        <Link to={'/adminproducts'} style={{textDecoration: 'none', marginLeft: 100}}>
   <article className="version" style={{display: 'inline-block'}}>
  <section className="page-header">
    <h1 className="page-title">Edit Products</h1>
    <div className="button-group">
      <button type="button" className="btn btn-primary">Action</button>
    </div>
  </section>
</article>
</Link>


     <Link to={'/categories'} style={{textDecoration: 'none', marginLeft: 100}}>
   <article className="version" style={{display: 'inline-block'}}>
  <section className="page-header">
    <h1 className="page-title">Edit Categories</h1>
    <div className="button-group">
      <button type="button" className="btn btn-primary">Action</button>
    </div>
  </section>
</article>
</Link>

<Link to={'/subcategories'} style={{textDecoration: 'none', marginLeft: 100}}>
   <article className="version" style={{display: 'inline-block'}}>
  <section className="page-header">
    <h1 className="page-title">Edit SubCategories</h1>
    <div className="button-group">
      <button type="button" className="btn btn-primary">Action</button>
    </div>
  </section>
</article>
</Link>

<Link  to={'/users'}   style={{textDecoration: 'none', marginLeft: 100}}>
   <article className="version" style={{display: 'inline-block'}}>
  <section className="page-header">
    <h1 className="page-title">Edit Users</h1>
    <div className="button-group">
      <button type="button" className="btn btn-primary">Action</button>
    </div>
  </section>
</article>
</Link>

<Link  to={'/orders'}   style={{textDecoration: 'none', marginLeft: 100}}>
   <article className="version" style={{display: 'inline-block'}}>
  <section className="page-header">
    <h1 className="page-title">Edit Orders</h1>
    <div className="button-group">
      <button type="button" className="btn btn-primary">Action</button>
    </div>
  </section>
</article>
</Link>

<Link  to={'/inventories'}  style={{textDecoration: 'none', marginLeft: 100}}>
<article className="version" style={{display: 'inline-block'}}>
  <section className="page-header">
    <h1 className="page-title">Edit inventories</h1>
    <div className="button-group">
      <button type="button" className="btn btn-primary">Action</button>
    </div>
  </section>
</article>
 </Link>       
        </>
    )
}

export default Admin;