import { useState, useEffect } from "react";
import { encryptId } from "./Algorythms/algo1";
import Navbar from './Navbar';
type AlertProps = {

    visible: boolean
}

function MainPage() {
     const [AlertText, setAlertText] = useState<boolean>(false);
     const [inputValue, SetInputValue] = useState<string>("");
     const [roundsChoose, setroundsChoose] = useState<number>();
     
     const ShowChoice = ()=> {
      if(roundsChoose == null)
      {
        return <h2 className="text-2xl text-white italic text-center"> Select rounds  </h2>
      } else return <h2 className="text-2xl text-white font-bold text-center">Rounds: {roundsChoose}</h2>;
     }
     
     const ShowAlert = (props: AlertProps)=> {
        
        if(props.visible)
        { return (<h2 className="text-1xl italic text-center text-white  mt-4  w-full">Input your nick or select how many rounds!</h2>)}
        else return <h2 className="text-1xl italic text-center text-white  mt-4  w-full">&nbsp; &nbsp;</h2>;
      
     }

   
     const handleChange = (event: {target: HTMLInputElement})=> {
        const input_val = event.target;
        SetInputValue(input_val.value);
     }

     const CheckuserName = ()=>{
        if(inputValue.length >= 3 && roundsChoose != null)
        {
          window.location.href = `/game/${encryptId(roundsChoose.toString())}/${encryptId(inputValue)}`;
         /*Zastosowałem tutaj system szyfrowania danych, aby nie można było sobie sterować tą grą z linku */
         }
        else {
           setAlertText(true);
         }
    }

    return (
      <div className="grid grid-cols-1 place-items-center w-full" >
        <Navbar/>
        <div className="grid grid-cols-1 py-4 w-11/12 bg-indigo-900 fixed top-32  py-8 rounded-2xl drop-shadow-xl border-4 border-violet-900 shadow-2xl desktop:mt-12 desktop:w-7/12 "> 
          <h2 className="text-3xl text-white text-center font-bold ">Input your name:</h2><br/>
          <div className="grid grid-cols-1 place-items-center w-full">
              <input className="text-3xl border-b-4 border-white text-indigo-900 font-bold bg-indigo-200 text-white  w-11/12 desktop:w-6/12 desktop:text-4xl" value={inputValue} onChange={handleChange}/>
          </div>
          <p className="text-white font-bold text-2xl text-center">Min. 3 letters </p>
          <div className="grid grid-cols-1 place-items-center w-full"> 
           <div className="grid grid-cols-1 w-full desktop:w-6/12 "> 
              <h2 className="text-3xl text-white mt-8 text-center font-bold desktop:text-4xl">How many rounds?</h2><br/>
              <div className="grid grid-cols-3  place-items-center" >
                 <button className="px-4 py-2 text-5xl text-indigo-700 font-bold rounded-full border-4 border-gray-300 bg-white desktop:text-7xl hover:bg-indigo-800 hover:text-white  desktop:px-8 desktop:py-4" onClick={()=> setroundsChoose(3)}>3</button> 
                 <button className="px-4 py-2 text-5xl text-indigo-700 font-bold rounded-full border-4 border-gray-300 bg-white desktop:text-7xl hover:bg-indigo-800 hover:text-white  desktop:px-8 desktop:py-4" onClick={()=> setroundsChoose(5)}>5</button>  
                 <button className="px-4 py-2 text-5xl text-indigo-700 font-bold rounded-full border-4 border-gray-300 bg-white desktop:text-7xl hover:bg-indigo-800 hover:text-white  desktop:px-8 desktop:py-4" onClick={()=> setroundsChoose(9)}>9</button> 
               </div>
            </div>
          </div>
        <ShowChoice/><br/>
        <div className="grid grid-cols-1 place-items-center w-full "> 
          <button className="text-2xl bg-white py-4 px-8 text-indigo-900 font-bold rounded-full border-4 border-gray-300 hover:bg-indigo-800 hover:text-white desktop:text-5xl" onClick={CheckuserName}>▶ Play with AI</button>
          <ShowAlert visible={AlertText}/>
       </div>
      </div>
     </div>
    );
  }
  
  export default MainPage;

