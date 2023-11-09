import axios from 'axios';
import { useEffect, useState } from 'react';

import Navbar from './components/Navbar';
import HeroImage from './components/HeroImage';
import Section from './components/Section';

const ENDPOINT = "https://qtify-backend-labs.crio.do/"

function App() {
  
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);

  useEffect(() => {
    const playListData = async() =>{
      try {
        const responseTop = await axios.get(`${ENDPOINT}albums/top`);
        
        if(responseTop.status===200){
          setTopAlbums(responseTop.data)
        }
      } catch (error) {
        console.log(error)
      }
      try {
        const responseNew = await axios.get(`${ENDPOINT}albums/new`);
        if(responseNew.status===200){
          setNewAlbums(responseNew.data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    playListData();
  }, [])

  return (
    <>
      <Navbar />
      <HeroImage />
      <Section title={'Top Albums'} playListData={topAlbums}/>
      <Section title={'New Albums'} playListData={newAlbums}/>
    </>
  )
}

export default App