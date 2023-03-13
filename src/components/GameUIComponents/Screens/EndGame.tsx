import { EndGameProps } from "../../DataTypes/Props"
import { useState } from "react";
import { GetAlert } from "../../Algorythms/algo1";
import { EndGameImages } from "../../Images/EndGameImages";
import '../css/EndGame.css';
export default function EndGame(props: EndGameProps)
{
    
    const RenderResultImage = ()=> {
        switch(props.winner){
            case 'Player':
                return EndGameImages.win;
            case 'AI':
                return EndGameImages.lose;
            case 'Remis':
                return EndGameImages.remis;
        }
    }
    const [WinAlert, setWinAlert] = useState<string>(GetAlert(props.winner));
    const [ImageStatus, setImageStatus] = useState<any>(RenderResultImage());
    return(
    <div>
      <div className="bg-indigo-900">
         <h2 className='text-4xl text-white  text-center font-Lato py-6 desktop:text-7xl'>{WinAlert}</h2>
      </div>
      <div className="grid grid-cols-1 desktop:min-h-96 desktop:h-96 desktop:bg-black desktop:bg-opacity-50 place-items-center w-full">
        <img className="EndImage" src={ImageStatus}/>
      </div>
     </div>)
}