import Greetings from "./Greetings";

const MyButton=()=>
{
    const personName="Prerana"
    return(
        <div>
        <button>submit</button>

        <Greetings name ="abhay"/>
        <Greetings firstname={personName}/>
        <Greetings name={personName}/>
        </div>
    )
}


export default MyButton;