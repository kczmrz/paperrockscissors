import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScissors as scissors, faNoteSticky as paper, faGem as rock } from "@fortawesome/free-solid-svg-icons";
import '../css/GameUIAnimations.css';
import { PlaycerChoice } from "../../DataTypes/Props";


export default function PlayerPanel(props: PlaycerChoice)
{
  
  const UserChoiceIcon = ()=> {
    if(props.UserChoice === 'paper')
    return <p className="bg-white YourChoice_paper  text-indigo-900 border-gray-300 border-4 text-4xl rounded-full px-8 py-8 mt-6"><FontAwesomeIcon icon={paper}/></p>;

    if(props.UserChoice === 'rock')
    return <p className="bg-white YourChoice_rock text-indigo-900 border-gray-300 border-4 text-4xl rounded-full px-8 py-8 mt-6"><FontAwesomeIcon icon={rock}/></p>;


    if(props.UserChoice === 'scissors')
    return <p className="bg-white YourChoice_scissors text-indigo-900 border-gray-300 border-4 text-4xl rounded-full px-8 py-8 mt-6"><FontAwesomeIcon icon={scissors}/></p>;
  }
  

  if(props.UserChoice === "") {
  return(<>
    <div className="w-full h-52 bg-violet-900 shadow-xl border-t-4 z-10 border-yellow-400 fixed bottom-0 desktop:static ">
      <h2 className="text-4xl mt-2 text-white font-Lato text-center">   Choose item: </h2>

      <div className="grid grid-cols-3 w-full place-items-center mt-6">
      <button className=" bg-yellow-300 text-4xl rounded-full px-8 py-8 hover:bg-blue-300" onClick={props.paper}><FontAwesomeIcon icon={paper}/></button>
      <button className=" bg-yellow-300 text-4xl rounded-full px-8 py-8 hover:bg-blue-300" onClick={props.rock}><FontAwesomeIcon icon={rock}/></button>
      <button className=" bg-yellow-300 text-4xl rounded-full px-8 py-8 hover:bg-blue-300" onClick={props.scissors}><FontAwesomeIcon icon={scissors}/></button>

      </div>
      <span>&nbsp;</span>
    </div>
    
    </>)
  }
  else return(<>
  <div className="w-full h-52 bg-violet-900 z-10 shadow-xl border-t-4 border-yellow-400 fixed bottom-0 desktop:static ">
      <div className="w-full"> 
      <button className="bg-indigo-900 w-full text-white p-2 text-2xl nxtRoundBtn" onClick={props.nxtRound}>Next round</button> 
      </div>
    
      <div className="grid grid-cols-2 place-items-center w-full  ">
      <h2 className="text-4xl mt-2 text-white font-Lato text-center ">   Your choice:</h2>

       {UserChoiceIcon()}
       


      </div>
      
      <span>&nbsp;</span>
    </div>
  </>)
  
  }