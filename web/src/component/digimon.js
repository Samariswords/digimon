import Select from 'react-select'
import {useState, useEffect} from 'react'
import axios from 'axios';

function Digimon() {
useEffect(() => {

  Roulette()
}, []);
var digimons = {};
var [currentDigimon, setCurrentDigimon] = useState({"name":"test","id":0,"images":[{"href":"https://wikimon.net/images/thumb/8/80/Agumon2.png/320px-Agumon2.png"}]});
var roll;
const options = [
    {value:'0',label:'0'},
    {value:'1',label:'1'},
    {value:'2',label:'2'},
    {value:'3',label:'3'},
    {value:'4',label:'4'},
    {value:'5',label:'5'},
    {value:'6',label:'6'},
    {value:'7',label:'7'},
    {value:'8',label:'8'},
    {value:'9',label:'9'},
    {value:'10',label:'10'},
]

function Roulette() {
    console.log('in roulette')
    axios.get('/get_digimon')
    .then((response)=>{
        console.log(response.data)
          digimons  = response.data
          setCurrentDigimon(digimons)
          })
        .catch((err)=>{

        })


}

function handleSquidChange(event) {
    console.log('in handle squid change')
    console.log(event)
    console.log(event.target.value)
    currentDigimon.squidScore = parseInt(event.target.value)
    setCurrentDigimon(currentDigimon)
}

function handleShottyChange(event) {
    console.log('in handle squid change')
    console.log(event)
    console.log(event.target.value)
    currentDigimon.shottyScore = parseInt(event.target.value)
    console.log(currentDigimon)
    setCurrentDigimon(currentDigimon)
}

function setCategory(event) {
    currentDigimon.category = event.target.value;
    setCurrentDigimon(currentDigimon)
}

function submit() {
    console.log(currentDigimon)
    //TODO overwrite file
    digimons[roll] = currentDigimon
    const data = JSON.stringify(digimons)

    axios.post('/write_digimon', currentDigimon)
          .then(response => {
            Roulette()
          })
          .catch(error => {
            console.error(error);
          });

}


    return(
    <div>
        <div>Digimon Fuckability</div>

        <br/>

        <div> Name: {currentDigimon.name} </div>
        <div> ID: {currentDigimon.id} </div>
        <div> Category:
            <select value={currentDigimon.category} onChange={setCategory}>

                                 <option value="criminal">Actual Criminal Behaviour</option>
                                 <option value="no">You should not do this</option>
                                 <option value="furry">Furry Bait</option>
                                 <option value="maybe">I get it</option>
                                 <option value="would">Would</option>

                        </select>
        </div>
        <div>
            Squid Score:
            <select value={currentDigimon.squidScore} onChange={handleSquidChange}>

                     <option value={0}>0</option>
                     <option value={1}>1</option>
                     <option value={2}>2</option>
                     <option value={3}>3</option>
                     <option value={4}>4</option>
                     <option value={5}>5</option>
                     <option value={6}>6</option>
                     <option value={7}>7</option>
                     <option value={8}>8</option>
                     <option value={9}>9</option>
                     <option value={10}>10</option>

            </select>
        </div>
        <div> Shotty Score:
            <select value={currentDigimon.shottyScore} onChange={handleShottyChange}>

                                 <option value={0}>0</option>
                                 <option value={1}>1</option>
                                 <option value={2}>2</option>
                                 <option value={3}>3</option>
                                 <option value={4}>4</option>
                                 <option value={5}>5</option>
                                 <option value={6}>6</option>
                                 <option value={7}>7</option>
                                 <option value={8}>8</option>
                                 <option value={9}>9</option>
                                 <option value={10}>10</option>

                        </select>
                        </div>
        <br/>

        <img src={currentDigimon.images[0].href}/>

        <br/>

        <button onClick={submit}>Submit</button>


    </div>
    )
}


export default Digimon