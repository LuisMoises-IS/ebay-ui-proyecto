import React,{useState, useEffect} from "react";

import Header from "../components/header";
import Footer from "../components/footer";
import Subheader from "../components/subheader";
import Card from "../components/card";

import {IProduct} from "../interfaces/product";

import {getProducts} from "../services/products";

const Product: React.FC = () => { 

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
                <Subheader title="Product Management" ></Subheader>
                <div className="row text-center">
                    <Card 
                        title="<New Product here>" 
                        description="Click the button to create a new product"
                        key="0" 
                        category=""
                        btn_label="New One"
                    />
                    {products.map((prod: IProduct,index) => (
                        <Card
                            img={prod.img} 
                            title={prod.name} 
                            description={prod.description} 
                            price={prod.price}
                            key={prod._id} 
                            category={prod.category[0].name}
                            ProductId={prod._id}
                        />
                    ))}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );

}

export default Product;