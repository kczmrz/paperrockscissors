import FontAwesome from "react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRepeat } from "@fortawesome/free-solid-svg-icons";

export default function PlayAgainPanel()
{

    const PlayAgain = ()=> {
        window.location.href = '/paperrockscissors';
    }
    return(<>
        <div className="w-full h-52 bg-violet-900 shadow-xl border-t-4 z-10 border-yellow-400 fixed bottom-0 desktop:static ">
          
          <h2 className="text-4xl mt-2 text-white font-Lato text-center">  Play Again </h2>
    
          <div className="grid grid-cols-1 w-full place-items-center mt-6">
          <button className=" bg-yellow-300 text-4xl rounded-full px-8 py-8 hover:bg-blue-300" onClick={PlayAgain}><FontAwesomeIcon icon={faRepeat}/></button>
          
    
          </div>
          <span>&nbsp;</span>
        </div>
        
        </>)
}