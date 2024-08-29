import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React, { useState }  from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function App() {
  const[mode,setmode]=useState("light");
  const[alert,setalert]=useState(null)
  const showalert = (type , message)=>{
          setalert({
            type : type,
            msg : message
          })
          setTimeout(()=>{
            setalert("")
          },2000)
        }
  const changemode =()=>{
        if(mode==="dark"){
          setmode("light")
          document.body.style.background="white"
          showalert("success","Light mode is enabled")
        }
        else{
          setmode("dark")
          document.body.style.background="#112437"
          showalert("success","Dark mode is enabled")
        }
      }
  const router = createBrowserRouter([
        {
          path: "/",
          element: <>
          <Navbar title = "Text-Utils" mode={mode} changemode={changemode} />
            <Alert alert={alert}/>
          <div className="container my-3">
          <Textform showalert={showalert} heading="Enter your text below" mode={mode}/>
            </div>,
          </>
        },
        {
          path: "/about",
          element:<> 
          <Navbar title = "Text-Utils" mode={mode} changemode={changemode} /> 
          <Alert alert={alert}/> <About mode={mode}/>
            </>,
        },
        {
          path: "/contact",
          element:<>
          <Navbar title = "Text-Utils" mode={mode} changemode={changemode} />
          <Alert alert={alert}/> <Contact mode={mode}/> 
          </>,
        },
      ]);

  return (
   <>
<RouterProvider router={router} />
   </>
  );
}

export default App;
