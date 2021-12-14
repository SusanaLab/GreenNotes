import React from 'react';
import logo from "../assets/logo.png";
import Inicio from "../assets/inicio.png";
import Google from "../assets/google.png";
import firebase from 'firebase';
import { useState} from "react";
import { useNavigate } from "react-router";
//import { useState} from "react";
 const Loging = () => {
   const [correo, setCorreo] = useState('');
   const [contraseña, setContraseña] = useState('');
  const navigate = useNavigate();
   const handleInputCorreo= e =>  {
    e.preventDefault();
    const {value} = e.target;
    //console.log( value);
    setCorreo(value);
  }
  const handleInputContraseña= e =>  {
    e.preventDefault();
    const {value} = e.target;
    //console.log( value);
    setContraseña(value);
  }
  const handleSendCorreo = e =>  {
    //console.log('handleSend');
    e.preventDefault();
    
    if(!correo&&contraseña){
      alert("Please write something")
      
    }else{
      firebase.auth()
            .createUserWithEmailAndPassword(correo, contraseña)
            .then((userCredential) => {
              const user = userCredential.user;
              const notes = [];              
              console.log(user);
        //console.log("se guarda")
        navigate("/Home"); 
      }
         ); 
         }
  }; 
  
  function handleSend() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
      .signInWithPopup(provider)
      .then(() => {
     navigate("/Home"); 
      }).catch(() => {
        alert('Inicio de sesion exitoso');
      });
 
    }
  return (
    <div id="div-login">
    <img id="img-inicio" src={Inicio} alt="img" className="inicio-img" />
    <img id="img-logo" src={logo} alt="img" className="logo-img" />
     <h1 id="sing-up">Sing up</h1>
     <form id='#formRegistro'>
     <h2 className ="text-login">Email</h2>
     <input  className ="input-login"  id="correo"  value= {correo}  onChange={handleInputCorreo} type="text" placeholder="example@gmail.com"/>
     <h2 className ="text-login" >Password</h2>
     <input className ="input-login" id="contraseña" type="password" name="password" value= {contraseña}  onChange={handleInputContraseña} placeholder="**********"/>
     <button id="btn-singup" onClick = {handleSendCorreo} >SING UP</button>
     </form> 
     <h3 id="or">- Or -</h3>
     <img id="img-google" src={Google} alt="img" className="google-img" onClick = {handleSend}/>
    </div>
  );

  }
export default Loging;
