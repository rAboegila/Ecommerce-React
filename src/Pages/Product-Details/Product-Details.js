import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Space, Spin, Alert } from 'antd';
import Spinner from 'react-bootstrap/Spinner';
import './Product-Details.css';


export default function ProductDetails() {
const [isLoading,setLoading] = useState(false);
const [products, setProducts] = useState([]);

useEffect(() => {
  setLoading(true);
axios({
method: 'Get',
url:'https://fakestoreapi.com/docs'
}).then(res=>{
console.log(res.data);
setProducts(res.data);
setLoading(false);
})
.catch(err=> console.error(err))

}
  ,[]);

const displayProducts=()=>{
    products.map((product, i) => <p key={product.id}>{i}</p>)
}
  return( 
  <>
    {/* {isLoading?
       ( <Spinner animation="border" variant="success"/>):
       (
        <div>
            {products.map((product, i) => <p key={product.id}>{i}</p>)}
        </div>
       )
      } */}

{isLoading?
       ( <Spin tip="Loading" size="large">
       <div className="content" />
     </Spin>):
       (
        <div>
            {displayProducts}
        </div>
       )
      }

  </>
  )
}