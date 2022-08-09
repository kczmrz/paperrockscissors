import '../css/GameUIAnimations.css';
import { useState, useEffect } from 'react';
type GameNavProps = {
    round: number,
   
}



export default function GameNavbar(props:GameNavProps)
{
   

   
    return(<div className="w-full h-16 bg-indigo-900">
    <h1 className="text-5xl text-white text-center py-4 RoundText font-Lato">Round {props.round}</h1>
    </div>)
}