import { AnimationImages } from "../../Images";
import '../css/MainAnimation.css';
import { AIChoiceConverter } from "../../Algorythms/algo1";
import { useEffect, useState } from "react";
import { PropsForDivAnimation } from "../../DataTypes/Props";
export default function AnimationDiv(props: PropsForDivAnimation)
{
  
    const renderItemOnScreen=(item:String, forWho:string)=> {
         switch(item){
            case 'paper':
                return     <div className={forWho}><img src={AnimationImages.paper}/> </div>
                break;
            case 'rock':
                return     <div className={forWho}><img src={AnimationImages.rock}/> </div>
                break;
            case 'scissors':
                return     <div className={forWho}><img src={AnimationImages.scissors}/> </div>
                break;
         }

    }

    const [PlayerItemRender, setPlayerItemRender] = useState<any>(renderItemOnScreen(props.playerChoice, 'playerAnimation'))
    const [AiItemRender, setAiItemRender] = useState<any>(renderItemOnScreen(AIChoiceConverter(props.AiChoice), 'AIAnimation'))
    
    useEffect(()=> {
     setPlayerItemRender(renderItemOnScreen(props.playerChoice, 'playerAnimation'));
     setAiItemRender(renderItemOnScreen(AIChoiceConverter(props.AiChoice), 'AIAnimation'));
    }, [props.playerChoice]);

    return(<div className=" w-full desktop:max-h-96 desktop:h-96 desktop:bg-black desktop:bg-opacity-50">
        <div className="grid grid-cols-2 place-items-center mt-6 desktop:mt-0"> 
   {PlayerItemRender} {AiItemRender}
        </div>
    </div>)
}