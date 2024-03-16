
import { useEffect, useState } from 'react';
import './App.css';
import Card from './assets/AddCard.jsx';
import Nav from './assets/nav.jsx'
import React from 'react';


const App=()=> {

  const [count,setCount]=useState(0);
  const [cart,setcart]=useState([]);

  const [product,setProduct]=useState([]);
  const text="Add Cart"

  useEffect(()=>{
      async function api(){
          const response=await fetch('https://fakestoreapi.com/products');
          if (!response.ok) {
            throw new Error('Failed to fetch product list');
          }

          const data=await response.json();
          
          await setProduct(product.concat(data));
         
         }
          api();
      },
    
  []);

  const handleButtonClick=(Id)=>{

    const item=product.find( data=>data.id==Id);

    const isItem=cart.some(num=>num.id === Id);


    if(isItem){

      const ucard=cart.filter(f => f.id !== Id);

      setcart(ucard);
      setCount(count-1);


    }
    else{

      setcart(cart.concat(item));
      setCount(count+1);

    }
  }


  return (

      <div className="container-fluid p-3 bg-light">
        <div className="row">
          <Nav count={count}/>
        </div>

        <div className="row titlebar bg-danger text-white">
              <h1>
                Welcome our Shopping Page 
              </h1>
                <h5>
                  Ready to Purchase..
                </h5>


        </div>
      <section className='py-5'>
        
          <div className="row justify-content-center"> 
              
              {
                //gx-4 gx-lg-5 row-cols-md-2 row-cols-lg-3 row-cols-xl-4
                  
                product.map((product,index)=>{
                 return <Card key={index} text={text} handleButtonClick={handleButtonClick} data={product} cardItem={cart} />
                })
              }
              </div>
            
         </section> 

         <div className="row">
          
        <footer className="py-5 bg-danger">
            <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Your Website 2023</p></div>
        </footer>

         </div>


      </div>
    
  )
}

export default App;
