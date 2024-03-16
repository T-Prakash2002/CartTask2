import React from 'react';
import Btn from './BtnCard';

function Card({text,handleButtonClick,data,cart}){



    return(
        <div className="col mb-5" key={data.id}>
                     <div className="card p-3 h-100 shadow border-0" >
                        
                            <img src={data.image} className="card-img-top" alt="..."/>
                        
                      
                      <div className="card-body p-3">
                        <h5 className="card-title">{data.title}</h5>

                        <p className="card-text text-center pt-3"><strong>Rating:</strong>
                        {data.rating.rate}
                        {`(${data.rating.count} peoples)`}</p>
                        <p className="card-text text-center pt-3"><strong>Price:</strong>{data.price}</p>

                        
                    </div>

                    <div className="card-footer">
                        
                        <Btn text={text} data={data} cartItem={cart} handleButtonClick={handleButtonClick} key={data.id}/>

                    </div>

                </div>
            </div>
    )

}


export default Card;