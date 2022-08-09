import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScissors as scissors, faNoteSticky as paper, faGem as rock } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { AiChoicePanelProps } from "../../DataTypes/Props";
import { useEffect, useState } from "react";
export default function AiChoice(props: AiChoicePanelProps)
{ 
    
    const AI_Icon = ()=> {
    if(props.AiItemNmbr <= 100)
    {
        return <FontAwesomeIcon className="px-4 py-4 text-4xl text-indigo-700 font-bold rounded-full border-4 border-gray-300 bg-white AiChoice2" icon={paper}/>
    }
    if(props.AiItemNmbr < 200)
    {
        return <FontAwesomeIcon className="px-4 py-4 text-4xl text-indigo-700 font-bold rounded-full border-4 border-gray-300 bg-white AiChoice2" icon={rock}/>
    }
    if(props.AiItemNmbr < 300)
    {
        return <FontAwesomeIcon className="px-4 py-4 text-4xl text-indigo-700 font-bold rounded-full border-4 border-gray-300 bg-white AiChoice2" icon={scissors}/>
    }
    if(props.AiItemNmbr == 777)
    {
        return <FontAwesomeIcon className="px-4 py-4 text-5xl text-yellow-400 font-bold rounded-full " icon={faX}/>

    }
  }

  const [AiFontAwesome, setAiFontAwesome] = useState<any>(AI_Icon());

  useEffect(()=> {
    setAiFontAwesome(AI_Icon())
  }, [props.AiItemNmbr])
  
    
      return(
        <div className="w-full border-b-4 border-yellow-400 h-24 bg-violet-900 shadow-xl py-2">
        
        <div className="grid grid-cols-2"> 
        
        <h2 className="text-7xl text-white font-Lato text-center">AI: </h2>
     

        <div className="text-center AiChoice"> {AiFontAwesome}  </div>
        
        </div>
        </div>
    )
}