import React,{useState,useEffect} from 'react'
import {Products} from './components'
import Navbar from './components/Navbar/Navbar'
import {commerce} from './lib/commerce'

function App() {
  const [products, setProducts] = useState([])

    const fetchProducts = async() =>{
        const {data} = await commerce.products.list();
        setProducts(data);

    }

    useEffect(() => {
      fetchProducts();
  }, [])

  return (
    <>
    <Navbar/>
      <Products products={products}/>
    </>
  );
}

export default App;
