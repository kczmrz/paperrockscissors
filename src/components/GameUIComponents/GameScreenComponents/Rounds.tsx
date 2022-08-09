import '../css/GameUIAnimations.css';

type RoundsProps = {
    roundsnumber: number,
}
export default function GameRounds(props: RoundsProps)
{
    return(
   <div className="grid grid-cols-1 place-items-center w-full ">
   <div className="w-full px-4 bg-indigo-900">
   <h2 className="text-3xl text-yello-800 text-white text-center font-Lato Rounds">of {props.roundsnumber}</h2>
   &nbsp;
   </div>
   </div>)
}