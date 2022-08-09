import '../css/GameUIAnimations.css';
import { PointsInfo, DisplayScoreBoardAnimation } from '../../DataTypes/Props';
import { useEffect, useState } from 'react';


export default function ScoreBoard(props: PointsInfo)
{
    
    
    

  
 

 

   return(<div className="grid grid-cols-1 mt-0 place-items-center w-full">
   <div className="w-full px-4 py-2 bg-indigo-900  border-b-4 border-yellow-400">
   <div className="grid grid-cols-1 text-4xl ">
       <div>
        <h1 className="font-Electrolize text-center text-yellow-400 ">AI: <span className={props.pointsAnim1}>{props.AI}</span>  - <span className={props.pointsAnim2}>{props.Player}</span> You </h1>
        </div>
    


   </div>
   </div>
   </div>)
}


/*  */