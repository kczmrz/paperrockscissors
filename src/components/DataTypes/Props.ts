export type AiChoicePanelProps = {
    AiItemNmbr: Number
}


export type PlaycerChoice = {
    UserChoice: String,
    paper: VoidFunction, 
    rock: VoidFunction,
    scissors: VoidFunction,
    nxtRound: VoidFunction
  }


export type PointsInfo = {
    AI: number,
    Player:number,
    pointsAnim1?: string,
    pointsAnim2?: string,
    playername?: string
}


export type DisplayScoreBoardAnimation = {
    AiAnim: string,
    PlayerAnim: string
}

export type PropsForDivAnimation = {
    playerChoice: string,
    AiChoice: number
}


export type EndGameProps = {
    winner:string,
}


