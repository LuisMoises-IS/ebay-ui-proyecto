import React,{useState, useEffect} from "react";
import {useParams} from "react-router-dom";

import Header from "../components/header";
import Footer from "../components/footer";
import Subheader from "../components/subheader";
import Card from "../components/card";

import {IProduct} from "../interfaces/product";

import {getproduct} from "../services/products";
import {getCategory} from "../services/categories";

const ProductById: React.FC = () => { 

    const {id} = useParams();

    const [products,setProducts] = useState();
    const [update,setUpdate] = useState(true);
    //const [name,setName] = useState("");

    useEffect(()=>{
        if( update){
            
            getproduct(id).then( r=>{                
                setUpdate(false);
                setProducts(r.data);
            });
            /*
            getproduct(id).then(r=>{                
                setName(r[0].name);
            });*/
        }      
    },[update, id]);

    useEffect(() => {
        return () => {
          console.log("cleaned up");
        };
      }, []);

    return(
        <div>
            <Header></Header>
            <div className="container">
                <Subheader title="Buy now" ></Subheader>
                <div className="row text-center">                    
                {(prod: IProduct,index) => (
                        <Card
                            img={prod.img} 
                            title={prod.name} 
                            description={prod.description}
                            price={prod.price} 
                            key={prod._id} 
                            category={prod.category[0].name}
                            ProductId={prod._id}
                        />
                    )}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );

}

export default ProductById;