import React,{useState,useEffect} from "react";
import {Redirect} from "react-router-dom"

import {getCategoriesWProducts, deleteCategory} from "../services/categories";
import Modal from "./modal";

const CategoryTable: React.FC = () => {

    const [categories,setCategories] = useState([]);
    const [updatedCategories,setUpdatedCategories] = useState(false);
    const [categoryId,setCategoryId] = useState("");
    const [redirectNow,setRedirectNow] = useState(false);

    /* MODAL */
    const [showmodal,setShowmodal] = useState(false);
    const [submitting,setSubmitting] = useState(false);
    const [message,setMessage] = useState("Do you want to delete?");
    const [completed,setCompleted] = useState(false);
     
    function redirectTo(event:any){
        setCategoryId(event.target.id);
        setRedirectNow(true)
    }

    function hideModal(){
        setShowmodal(false);
    }

    function showModal(event:any){
        console.log(event.target);
        setCategoryId(event.target.id);
        setShowmodal(true);
    }      

    function drop(){

      if(!completed){

        setSubmitting(true);
        setMessage("Sending...");

        deleteCategory(categoryId).then(value=>{
            
            setCompleted(true);
            setSubmitting(false);
            if(value.successed){
                setMessage("Category deleted successfuly!");
            }else{
                setMessage("This category has products linked, drop these ones before drop this!");
            }
        });

      }else{
        setUpdatedCategories(false);
        setCompleted(false);
        setMessage("Do you want to delete?");
        hideModal();
      }
      
    }

    /*********************** */



    useEffect(()=>{        
        if(!updatedCategories){
            getCategoriesWProducts().then(r=>{                
                setCategories(r);
                setUpdatedCategories(true);               
            });            
        } 
    },[updatedCategories]);

    return(

        <div>
            <Modal
                title="Confirmation"
                description={message}
                lbl_main_btn="Ok"
                lbl_snd_btn="No"
                show={showmodal}
                closeModal={hideModal}
                accept={drop}
                submitting={submitting}
                completed={completed}
            />

            <table className="table table-striped">
                <thead className="table-primary">
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Products Setted</th>
            
                        <th scope="col"></th>                
                    </tr>
                </thead>
                <tbody>
                    { categories.map((data:any)=>(
                        <tr key={data._id} >
                            <th scope="row">{data._id}</th>
                            <td>{data.name}</td>
                            <td className="text-center">{data.l.length}</td>
                        
                            <td>
                                <button 
                                type="button" 
                                className="btn btn-outline-success"
                                onClick={redirectTo} 
                                id={data._id}
                                >View All</button>
                            </td>
                        </tr>
                    ))}
                                    
                </tbody>
            </table>
            { (redirectNow) && (
                <Redirect to={`categories/${categoryId}`} ></Redirect>
            ) }
        </div>

       
        
    );
}

export default CategoryTable;
