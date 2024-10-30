import Select from 'react-select'
import {useState, useEffect} from 'react'
import axios from 'axios';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs'
import 'react-tabs/style/react-tabs.css';
import CreateTierListContainer from "./CreateTierListContainer";
import {shottyCriminal, squidCriminal, shottyFuck, squidFuck} from "../data/initialData";



function Digimon() {

const [shottyCrimState, setShottyCrimState] = useState(shottyCriminal);
const [shottyFuckState, setShottyFuckState] = useState(shottyFuck);
const [squidCrimState, setSquidCrimState] = useState(squidCriminal);
const [squidFuckState, setSquidFuckState] = useState(shottyFuck);
  const [genres, setGenres] = useState({});
  const [itemCount, setItemCount] = useState(0);


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
    addItem(currentDigimon)
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

const addItem = (currentDigimon) => {
    const itemName = currentDigimon.name;
    const newItem = {
      [itemName]: {
        id: itemName,
        altText: itemName,
        desc: currentDigimon.descriptions[0],
        imageUrl: currentDigimon.images[0].href
      },
    };

    var rowId = "row-tray";
    switch (currentDigimon.category) {
        case 'criminal':
            rowId="row-1"
            break;
        case 'no':
                    rowId="row-2"
                    break;
        case 'furry':
                    rowId="row-3"
                    break;
        case 'maybe':
                    rowId="row-4"
                    break;
        case 'would':
                    rowId="row-5"
                    break;
    }


    const oldItemTrayRow = shottyCrimState.newDraft.rows[rowId].itemIds;
    const newItems = { ...shottyCrimState.newDraft.items, ...newItem };

    console.log(rowId)

    setShottyCrimState((prevState) => ({
      ...prevState,
      newDraft: {
        ...prevState.newDraft,
        items: newItems,
        rows: {
          ...prevState.newDraft.rows,
          [rowId]: {
            ...prevState.newDraft.rows[rowId],
            itemIds: [...oldItemTrayRow, itemName],
          },
        },
      },
    }));
    setItemCount(itemCount + 1);

    var shottyRow = "row-tray";
    console.log(shottyRow)
            switch (currentDigimon.shottyScore) {
                case 10:
                    shottyRow="row-1"
                    break;
                case 9:
                            shottyRow="row-2"
                            break;
                case 8:
                            shottyRow="row-3"
                            break;
                case 7:
                            shottyRow="row-4"
                            break;
                case 6:
                            shottyRow="row-5"
                            break;
                case 5:
                                        shottyRow="row-6"
                                        break;
                case 4:
                                        shottyRow="row-7"
                                        break;
                case 3:
                                        shottyRow="row-8"
                                        break;
                case 2:
                                        shottyRow="row-9"
                                        break;
                case 1:
                                        shottyRow="row-10"
                                        break;
                case 0:
                                        shottyRow="row-11"
                                        break;
            }
            console.log(shottyRow)
  const oldItemTrayRowShotty = shottyFuckState.newDraft.rows[shottyRow].itemIds;
  const newItemsShotty = { ...shottyFuckState.newDraft.items, ...newItem };
    console.log(shottyRow)
  setShottyFuckState((prevState) => ({
        ...prevState,
        newDraft: {
          ...prevState.newDraft,
          items: newItemsShotty,
          rows: {
            ...prevState.newDraft.rows,
            [shottyRow]: {
              ...prevState.newDraft.rows[shottyRow],
              itemIds: [...oldItemTrayRowShotty, itemName],
            },
          },
        },
      }));
    console.log(shottyRow)
    var squidRow = "row-tray";
                    switch (currentDigimon.squidScore) {
                        case 10:
                            squidRow="row-1"
                            break;
                        case 9:
                                    squidRow="row-2"
                                    break;
                        case 8:
                                    squidRow="row-3"
                                    break;
                        case 7:
                                    squidRow="row-4"
                                    break;
                        case 6:
                                    squidRow="row-5"
                                    break;
                        case 5:
                                                squidRow="row-6"
                                                break;
                        case 4:
                                                squidRow="row-7"
                                                break;
                        case 3:
                                                squidRow="row-8"
                                                break;
                        case 2:
                                                squidRow="row-9"
                                                break;
                        case 1:
                                                squidRow="row-10"
                                                break;
                        case 0:
                                                squidRow="row-11"
                                                break;
                    }
    const oldItemTrayRowSquid = squidFuckState.newDraft.rows[squidRow].itemIds;
    const newItemsSquid = { ...squidFuckState.newDraft.items, ...newItem };

      setSquidFuckState((prevState) => ({
            ...prevState,
            newDraft: {
              ...prevState.newDraft,
              items: newItemsSquid,
              rows: {
                ...prevState.newDraft.rows,
                [squidRow]: {
                  ...prevState.newDraft.rows[squidRow],
                  itemIds: [...oldItemTrayRowSquid, itemName],
                },
              },
            },
          }));
          console.log(shottyRow)
          console.log(squidRow)
        };


    return(
    <div>
    <Tabs>
        <TabList>
          <Tab>Rating</Tab>
          <Tab>Criminality</Tab>
          <Tab>Fuckability</Tab>
        </TabList>

        <TabPanel>
          <div>Digimon Fuckability</div>

                  <br/>

                  <div> Name: {currentDigimon.name} </div>
                  <div> ID: {currentDigimon.id} </div>
                  <div> Category:
                      <select value={currentDigimon.category} onChange={setCategory}>
                                           <option></option>
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
                               <option></option>
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
                                           <option></option>
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
        </TabPanel>
        <TabPanel>
          <h2>Criminality</h2>

          <div className="container">
                <CreateTierListContainer
                  appState={shottyCrimState}
                  setAppState={setShottyCrimState}
                ></CreateTierListContainer>
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Fuckability</h2>
          <div style={{display:"flex", flexDirection:"row"}}>
            <div style={{width:"50%"}}>
                <h1>Shotty Fuckability</h1>
                <div className="container">
                                <CreateTierListContainer
                                  appState={shottyFuckState}
                                  setAppState={setShottyFuckState}
                                ></CreateTierListContainer>
                          </div>
            </div>
            <div style={{width:"50%"}}>
                <h1>Squid Fuckability</h1>
                <div className="container">
                                                <CreateTierListContainer
                                                  appState={squidFuckState}
                                                  setAppState={setSquidFuckState}
                                                ></CreateTierListContainer>
                                          </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>



    </div>
    )
}


export default Digimon