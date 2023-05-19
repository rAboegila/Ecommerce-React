import { Link } from 'react-router-dom';
import './Admin.css';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectIsAdmin } from '../../Lib/IsAdmin';
import { useEffect} from "react";


function Admin(){

  // const isAdmin = useSelector(selectIsAdmin);
  // const navigate = useNavigate();

  // console.log("is Admin:", isAdmin);

  // useEffect(() => {
  //   if (!isAdmin) {
  //     navigate("/");
  //   }
  // }, [isAdmin]);

    return(
        <>
        <Link to={'/adminproducts'}>
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