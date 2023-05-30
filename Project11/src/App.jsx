/* eslint-disable no-unused-vars */
import './App.css'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  const handleClick = () => {
    toast.success("Hello World!");
  };

  return (

    <div>
      <h1 className="text-3xl bg-green-500 font-bold underline">
        Toy Marketplace
      </h1>
      <div>
        <button className='bg-green-500 mt-5 px-5 py-3 border-slate-950' onClick={handleClick}>Click me</button>
        <ToastContainer className="my-toast-container" />
      </div>

    </div>

  )
}

export default App

