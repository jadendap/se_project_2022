import React, {useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom'

import './SearchPage.css'

const SearchPage = () => {
    const searchKey  =  useParams();
    
    const[ products, setProducts ] = useState([]);

    //Make a sample data set and make it so that renders, figure out how to pull data later.
    const getProducts = async( keyword ) => {
        console.log( keyword );
        const url = "http://localhost:9000/products/" + keyword;     
        console.log( url );

        const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(keyword),
        });

        console.log( response);

    }


    useEffect(() => {
        getProducts( searchKey.id );
        
    },0) 

    const yeah = () => {
      {
        products.map( (item) =>
          //Swtich out the statment with the item.link or whatever it is called.
          <Link className='product-link' to={`/`}>
          <div className="product-wrapper"> 
            <div className="product-info"><p className='testing2'>{item.name}</p><p>{item.price}</p></div>
            <img className="product-img" src={item.image_url} alt='Product Image' />
          </div>
          </Link>
        )
      }
    }


    



    return (
        <div className="searchPage-container" >
            Here
            {
              products.length ? (<p>We have something </p>) : (<p>We do NOT have something</p>)
            }
        </div>
    )
}

export default SearchPage