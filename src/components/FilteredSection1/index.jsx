import { useState } from 'react'
import './FilteredSection1.css'


function index({genres}) {
    const [isSelected, setIsSelected] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState("all");

    const handleSelectedFilter = (selectedKey) =>{
        console.log("Selected Key: ", selectedKey);
    }
  return (
    <div className='container'>
        <p className="title">Songs</p>
        <div className="filter-names">
            {/* {isSelected? <p 
                key="all"
                onClick={() => setIsSelected(!isSelected)}
            >All</p>: <div>
                <p 
                key="all"
                onClick={() => setIsSelected(!isSelected)}
                >All</p>
                <div className="selected-filter"></div>
            </div>}
            {genres.map(element => {
                return(
                    <>{isSelected? <p 
                        key={element.key}
                        onClick={() => setIsSelected(!isSelected)}
                    >{element.label}</p> : <>
                    <p 
                        key={element.key}
                        onClick={() => setIsSelected(!isSelected)}
                    >{element.label}</p>
                    <div className="selected-filter"></div>
                    </>}</>
                )
            })} */}
            <p 
                key="all"
                onClick={() => {
                    setIsSelected(!isSelected)
                    handleSelectedFilter("all")
                }}
            >All</p>
            {genres.map(element => {
                return(
                    <p 
                        key={element.key}
                        onClick={() => {
                            setIsSelected(!isSelected)
                            handleSelectedFilter(element.key)
                        }}
                    >{element.label}</p>)})}
        </div>
        <div className="filtered-carousel" style={{}}>HEllo</div>
            
    </div>
  )
}

export default index
