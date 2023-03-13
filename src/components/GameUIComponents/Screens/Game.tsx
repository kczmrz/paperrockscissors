import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { GameNavbar, ScoreBoard, AiChoice, PlayerPanel, AnimationDiv, EndGame, PlayAgainPanel, GameRounds } from "../GameScreenComponents/";
import { PointsInfo, DisplayScoreBoardAnimation }  from "../../DataTypes/Props";
import { AI_Random_Item, decryptId, encryptId, ReturnWinner } from "../../Algorythms/algo1";
import { WhoWin } from "../../Algorythms/MainMechanics";

function Game()
{
    const { id } = useParams();
    const { name } = useParams();
    
    const playerName:string = decryptId(name);
    const Rounds:number = parseInt(decryptId(id));
    useEffect(()=>{
     if(playerName == null)
     {
         window.location.href = '/';
     }
     
    }, [])


    /*Game Algorithm */
    const [Round, ChangeRound] = useState<number>(1);
    const [Points, SetPoints] = useState<PointsInfo>({AI: 0, Player: 0});
    const [PointsAnimation, setPointsAnimation] = useState<DisplayScoreBoardAnimation>({AiAnim: '', PlayerAnim: ''});
    const [PlayerChoice, setPlayerChoice] = useState<string>("");
    const [AISelection, setAISelection] = useState<number>(777);
    const [LastAiChoice, setLastAiChoice] = useState<number>(20);
    const [PlayResultBool, setPlayResultBool] = useState<boolean>(true);
    const SelectItem = (itemName: string)=> {
        

        setPlayerChoice(itemName);
        
        setAISelection(AI_Random_Item(LastAiChoice));
       
          
        
    }


    const NextRound = ()=> {
        let a = WhoWin(PlayerChoice, AISelection);
        UpdatePoints(a);
        
        let ChampionOfThisGame:string = ReturnWinner(Points.AI, Points.Player);

        if(Round < Rounds)
        {
           
            ChangeRound(Round+1);
            setPlayerChoice("");
            setLastAiChoice(AISelection);
            setAISelection(777);
        }
        else {
            setPlayerChoice("");
            setLastAiChoice(AISelection);
            setAISelection(777);
            setPlayResultBool(!PlayResultBool);
          }
        
    }
    
    const UpdatePoints = (winnerRound:string) => {
        switch(winnerRound){
            case 'player':
                SetPoints({AI: Points.AI, Player: Points.Player + 1});
                setPointsAnimation({AiAnim: '', PlayerAnim: 'point'});
                break;
            case 'AI':
                SetPoints({AI: Points.AI + 1, Player: Points.Player});
                setPointsAnimation({AiAnim: 'point', PlayerAnim: ''});
                break;
            case 'remis':
                SetPoints({AI: Points.AI +1, Player: Points.Player +1});
                setPointsAnimation({AiAnim: 'point', PlayerAnim: 'point'});
                break;
        }
        
        
       
        
   
    }
    
    


    
    

   
   if(PlayResultBool){
    return(
    <div className="w-full desktop:w-6/12 desktop:border-4 desktop:border-white desktop:shadow-xl">
       
    <GameNavbar round={Round} key={Round}/>
    <GameRounds roundsnumber={Rounds}/>
    <ScoreBoard key={Round+1} AI={Points.AI} Player={Points.Player} pointsAnim1={PointsAnimation.AiAnim} pointsAnim2={PointsAnimation.PlayerAnim}/>
    <AiChoice key={Round+2} AiItemNmbr={AISelection}/>
    <AnimationDiv playerChoice={PlayerChoice} AiChoice={AISelection}/>
    <PlayerPanel nxtRound={NextRound} UserChoice={PlayerChoice} paper={()=> SelectItem('paper')} rock={()=> SelectItem('rock')} scissors={()=> SelectItem('scissors') }/>
    
    </div>
    )}
    else {
        return (
        <div className="w-full desktop:w-6/12 desktop:border-4 desktop:border-white desktop:shadow-xl">
        
        <EndGame key={Round} winner={ReturnWinner(Points.AI, Points.Player)}/>

        <PlayAgainPanel/>
        
        </div> 
        )
    }
}


export default Game;



/*     <button className="bg-black text-white text-4xl" onClick={()=>  ChangeRound(Round+1)}>Dev Change Round</button>
 */