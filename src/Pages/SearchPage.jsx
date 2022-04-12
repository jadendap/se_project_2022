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
          method: "GET",
        });

        
        const responseJson = await response.json();
        //console.log( JSON.stringify(responseJson));
        setProducts( responseJson );
        console.log( products );
    }


    useEffect(() => {
        getProducts( searchKey.id );
        
    },0) 

    const yeah = () => {
      {

      }
    }


    



    return (
        <div className="searchPage-container" >
            {
              products.length ? (
                products.map( (item) =>
                //Swtich out the statment with the item.link or whatever it is called.
                <Link className='product-link' to={`/`}>
                <div className="product-wrapper"> 
                  <div className="product-info"><p className='testing2'>{item.name}</p><p>{item.price}</p></div>
                  <img className="product-img" src={item.image_url} alt='Product Image' />
                </div>
                </Link>
              )
              ) : (<p>We do NOT have something</p>)
            }
        </div>
    )
}

export default SearchPage