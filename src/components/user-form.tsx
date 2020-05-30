import React,{useState,useEffect} from "react";

import Modal from "./modal";

import {postUser,getUser} from "../services/user";

import {useParams} from "react-router-dom";

import useFormHelper from "../helpers/useFormHelper";

const UserForm:React.FC = () => {

    const [cleanUp,setCleanUp] = useState(true);
    
    /* MODAL */
    const [showmodal,setShowmodal] = useState(false);
    const [submitting,setSubmitting] = useState(false);
    const [message,setMessage] = useState("Do you want to save?");
    const [completed,setCompleted] = useState(false);
     

    function hideModal(){
      setShowmodal(false);
    }

    function showModal(){
      setShowmodal(true);
    }      

    function saveUser(){

      if(!completed){
        setSubmitting(true);
        setMessage("Sending...");

        if(id){
          postUser(values).then(value=>{
            setCompleted(true);
            setSubmitting(false);
            if(value.data.successed){
              setMessage("Account created with success");          
            }else{
              setMessage("User account already exist");
            }
          })
        }
      }else{
        setCompleted(false);
        setMessage("Do you want to save?");
        hideModal();
      }
      
    }

    /*********************** */

    const {id} = useParams();
     
    const states = useState({
      name: "",
      email: "",
      address: "",
      phoneNumber: "",
      password: ""
    });      

    const {
      values,      
      handleChange,
      updateValues      
    } = useFormHelper(states);

    useEffect(() => {
      return () => {
        console.log("cleaned up");
      };
    }, []);
  

    return(
    <div>

        <Modal
          title="Confirmation"
          description={message}
          lbl_main_btn="Ok"
          lbl_snd_btn="No"
          show={showmodal}
          closeModal={hideModal}
          accept={saveUser}
          submitting={submitting}
          completed={completed}
        />

        <form className="align-items-center" >

        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Name</label>
          <input 
            type="text" 
            className="form-control" 
            id="formGroupExampleInput"
            onChange={handleChange}
            name="name"
            defaultValue={values.name}
          />
        </div>

        <div className="form-group">
          <label htmlFor="formGroupExampleInput">email</label>
          <input 
            type="text" 
            className="form-control" 
            id="formGroupExampleInput"
            onChange={handleChange}
            name="email"
            defaultValue={values.email}
          />
        </div>

        <div className="form-group">
          <label htmlFor="formGroupExampleInput">address</label>
          <input 
            type="text" 
            className="form-control" 
            id="formGroupExampleInput"
            onChange={handleChange}
            name="address"
            defaultValue={values.address}
          />
        </div>

        <div className="form-group">
          <label htmlFor="formGroupExampleInput">phoneNumber</label>
          <input 
            type="text" 
            className="form-control" 
            id="formGroupExampleInput"
            onChange={handleChange}
            name="phoneNumber"
            defaultValue={values.phoneNumber}
          />
        </div>

        <div className="form-group">
          <label htmlFor="formGroupExampleInput">password</label>
          <input 
            type="password" 
            className="form-control" 
            id="formGroupExampleInput"
            onChange={handleChange}
            name="password"
            defaultValue={values.password}
          />
        </div>
        
        
       
       
    </form> 
    <button className="btn btn-primary" onClick={showModal} >Submit</button>
    </div>
    

    );
}

export default UserForm;