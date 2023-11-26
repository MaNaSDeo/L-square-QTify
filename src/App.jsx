import axios from 'axios';
import { useEffect, useState } from 'react';

import Navbar from './components/Navbar';
import HeroImage from './components/HeroImage';
import Section from './components/Section';
import FilteredSection from './components/FilteredSection'
import AccordionFAQ from './components/AccordionFAQ'

const ENDPOINT = "https://qtify-backend-labs.crio.do/"

function App() {
  
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [genres, setGenres] = useState([]);
  const [songsPlaylist, setSongsPlaylist] = useState([]);
  const [filteredPlaylist, setFilteredPlaylist] = useState([]);
  const [tabsFilter, setTabsFilter] = useState('all');
  // console.log(genres);

  useEffect(() => {
    const playListData = async() =>{
      //To fetch Top Album data.
      try {
        const responseTop = await axios.get(`${ENDPOINT}albums/top`);
        
        if(responseTop.status===200){
          setTopAlbums(responseTop.data)
          setFilteredPlaylist(responseTop.data) //Temprory
        }
      } catch (error) {
        console.log(error)
      }
      //To fetch New Album data.
      try {
        const responseNew = await axios.get(`${ENDPOINT}albums/new`);

        if(responseNew.status===200){
          setNewAlbums(responseNew.data)
        }
      } catch (error) {
        console.log(error)
      }
      //To fetch Genres list.
      try {
        const responseGenre = await axios.get(`${ENDPOINT}genres`)
        console.log(responseGenre.data.data);
        setGenres([{
          'key': 'all',
          'label': 'All'
      }, ...responseGenre.data.data]);
      } catch (error) {
        console.log(error);
      }
      //To fetch songs list.
      try {
        const resoponseSongs = await axios.get(`${ENDPOINT}songs`)

        if(resoponseSongs.status === 200)
          setSongsPlaylist(resoponseSongs.data)
      } catch (error) {
        console.log(error)
      }
    }
    playListData();
  }, [])

  return (
    <div style={{width: "100%"}}>
      {/* <h1>Helllo</h1> */}
      <Navbar />
      <HeroImage />
      <Section title={'Top Albums'} playListData={topAlbums} navId='ta'/>
      <Section title={'New Albums'} playListData={newAlbums} navId='na'/>
      <FilteredSection 
        title={'Songs'} //FilterdSection Name.
        genres={genres} //Different Generes name.
        excuteFilter={(genre) => {
          if(genre === 'all'){
            setFilteredPlaylist(songsPlaylist)
          } else{
            setFilteredPlaylist(songsPlaylist.filter(song => song.genre.key === genre))
          }
        }}
        playListData={filteredPlaylist}
      />
      <AccordionFAQ />
    </div>
  )
}

export default App