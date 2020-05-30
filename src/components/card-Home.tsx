import React from "react";
import {Link} from "react-router-dom"

interface ICardProps{
    img: string,
    title: string,
    description: string,
    price: number,
    category: string,
    btn_label?: string
    ProductId?: string
}

const CardHome:React.FC<ICardProps> = ({img,title,description,price,category, btn_label, ProductId}) => {

    return(
        <div className="col-lg-3 col-md-6 mb-4">
            <div className="card h-100">
                <div className="card-header">
                    {category}
                </div>      
                <div className="card-body">
                    <img src={img} alt="..." className="img-thumbnail"></img>
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text">{description}</p>
                    <h5 className="cad-title">$ {price}</h5>
                </div>
                <div className="card-footer">
                    { btn_label ? (
                        <Link to={`/products/${ProductId}`}>View</Link>
                    ) : (
                        <Link to={`/products/${ProductId}`}>View</Link>
                    ) 
                    
                    }

                    
                </div>
            </div>
        </div>
    )

}

export default CardHome;