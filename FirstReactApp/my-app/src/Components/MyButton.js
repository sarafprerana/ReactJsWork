import Greetings from "./Greetings";
import './Avtar.jsx'
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