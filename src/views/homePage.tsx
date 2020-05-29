import React,{useState, useEffect} from "react";

import Header from "../components/header";
import Footer from "../components/footer";
import Subheader from "../components/subheader";
//import Card from "../components/card";
import CardHome from "../components/card-Home"

import {IProduct} from "../interfaces/product";

import {getProducts} from "../services/products";

const Home: React.FC = () => { 

    const [products,setProducts] = useState([]);
    const [update,setUpdate] = useState(true);

    useEffect(()=>{
        if(update){
            getProducts().then( r=>{                
                setUpdate(false);
                setProducts(r.data);
            });
        }      
    },[update]);

    useEffect(() => {
        return () => {
          console.log("cleaned up");
        };
      }, []);

    return(
        <div>
            <Header></Header>
            <div className="container">
                <Subheader title="Welcome to Ebay.hn" ></Subheader>
                <div className="row text-center">
                    {products.map((prod: IProduct,index) => (
                        <CardHome
                            img={prod.img} 
                            title={prod.name} 
                            description={prod.description} 
                            price={prod.price}
                            key={prod._id} 
                            category={prod.category[0].name}
                            ProductId={prod._id}
                            btn_label="View"
                        />
                    ))}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );

}

export default Home;