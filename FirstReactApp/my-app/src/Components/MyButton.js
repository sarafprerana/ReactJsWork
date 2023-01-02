import Greetings from "./Greetings";

const MyButton=()=>
{
    const personName="Prerana"
    return(
        <div>
        <button>submit</button>

        <Greetings name ="abhay"/>
        <Greetings firstname={personName}/>
        <Greetings />
        </div>
    )
}


export default MyButton;