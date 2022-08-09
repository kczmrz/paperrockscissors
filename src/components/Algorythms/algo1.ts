 import { AES } from "crypto-js";
 import { enc } from 'crypto-js';

 function getRandomInt(min:number, max:number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

function AI_Random_Item(lastChoice: number)
{
 
   let a: number = 1; /*Main counter to return */
   let b:number; let c:number; let d:number; let nmbrs:number[]; /*Other variables to algorithm */
    switch(true)
    {
      case (lastChoice<=100):
        a= getRandomInt(50, 300);
        break; 

        case (lastChoice > 100 && lastChoice < 200):
            b= getRandomInt(0, 100);
            c = getRandomInt(150, 200);
            d= getRandomInt(200, 300);
            nmbrs= [b, b, c, d, d];
          a= nmbrs[getRandomInt(0, nmbrs.length)];
          break; 
        
          case (lastChoice > 200 && lastChoice < 300):
            b= getRandomInt(0, 200);
            
            c= getRandomInt(100, 300);
            nmbrs= [b, b, c];
          a= nmbrs[getRandomInt(0, nmbrs.length)];
          break; 
          
    }
  
    return a;
    
}

function decryptId (str:any)  {
  const decodedStr = decodeURIComponent(str);
  return AES.decrypt(decodedStr, 'secretPassphrase').toString(enc.Utf8);
}

function encryptId (str: any) {
  const ciphertext = AES.encrypt(str, 'secretPassphrase');
  return encodeURIComponent(ciphertext.toString());
}


function AIChoiceConverter(choice:number){
  let AiChoiceString: String = '';
  if(choice <= 100)  /*Paper*/
        {
            
          AiChoiceString = "paper";
        }
        if(choice > 100 && choice < 200)  /*Rock*/
        {            

          AiChoiceString = "rock";
        }

        if(choice > 200 && choice < 300)  /*Scissors */
        {        

          AiChoiceString = "scissors";

        }

        return AiChoiceString;

}

function sleep(ms:any) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


function ReturnWinner(points1:number, points2:number)  //Points1=AI
{
  let champion:string = '';
  if(points1 > points2)
  {
      champion = 'AI';
  }
  else if(points1 === points2)
  {
    champion = 'Remis';
  }
  else if(points1 < points2)
  {
    champion = 'Player'
  }

  return champion;
}


const GetAlert = (txt:string) => {
  let alertText:string = '';
switch(txt){
 
  case 'Player':
      alertText = 'You win!';
      break;
      
  case 'AI':
      alertText = 'You lose...';
      break;
  case 'Remis':
      alertText = 'Remis!';
      break;
    
} 
return alertText;
}

export { AI_Random_Item, AIChoiceConverter, sleep, decryptId, encryptId, ReturnWinner, GetAlert };
