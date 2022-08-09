import { AIChoiceConverter } from "./algo1";
function WhoWin (player:string, AI: number)
{
   
    var winner:string ='';
    var ConvertAI = AIChoiceConverter(AI);
    if(player === 'paper')
    {
        if(ConvertAI === "paper")  /*Paper*/
        {
            
             winner = "remis";
        }
        if(ConvertAI === "rock")  /*Rock*/
        {            

             winner = "player";
        }

        if(ConvertAI === "scissors")  /*Scissors */
        {        

             winner = "AI";

        }
    }

    else if(player === 'rock')
    {
        if(ConvertAI === "paper")  /*Paper*/
        {
             winner = "AI";
        }
        if(ConvertAI === "rock")  /*Rock*/
        {
             winner = "remis";
        }

        if(ConvertAI === "scissors")  /*Scissors */
        {
             winner = "player";

        }
    }


    else if(player == 'scissors')
    {
        if(ConvertAI === "paper")  /*Paper*/
        {
             winner = "player";
        }
        if(ConvertAI === "rock")  /*Rock*/
        {
             winner = "AI";
        }

        if(ConvertAI === "scissors")  /*Scissors */
        {
             winner = "remis";

        }

       
    }

    
  return winner;
  
    
}




export {WhoWin};