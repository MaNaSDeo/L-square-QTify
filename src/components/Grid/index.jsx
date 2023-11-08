import axios from "axios"
import { useEffect, useState } from "react"
import Card from '../Card'
import './Grid.css'

function index() {
    const [gridData, setGridData] = useState([]);
    console.log(gridData);

    useEffect(() => {
        const playList = async() => {
            try {
                const response = await axios.get("https://qtify-backend-labs.crio.do/albums/top");
                // console.log(response);
                if(response.status === 200){
                    setGridData(response.data);
                }
            } catch (error) {
                console.log(error)
            }
        }
        playList();
    }, [])
    if(gridData.length <1){
        return(
            <h1>No Data Found</h1>
        )
    }
  return (
    <div className="grid">
      {gridData.map((element) => {
        return(<Card key={element.id} albumImg={element.image} followers={element.follows} title={element.title}/>)
      })}
    </div>
  )
}

export default index
