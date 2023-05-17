import { Link } from 'react-router-dom';
import './Admin.css'

function Admin(){

    return(
        <>
        <Link to={'/Admin'}>
   <article className="version">
  <section className="page-header">
    <h1 className="page-title">Edit Products</h1>
    <div className="button-group">
      <button type="button" className="btn btn-primary">Action</button>
    </div>
  </section>
</article>
</Link>


<article className="version">
  <section className="page-header">
    <h1 className="page-title">Edit Orders</h1>
    <div className="button-group">
      <button type="button" className="btn btn-primary">Action</button>
    </div>
  </section>
</article>

<Link>
<article className="version">
  <section className="page-header">
    <h1 className="page-title">Title of Page</h1>
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