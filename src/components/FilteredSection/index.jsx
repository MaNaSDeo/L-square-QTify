import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import Carousel from '../Carousel'
import './FilteredSection.css'

import { useState } from 'react';

function index({title, genres, playListData, excuteFilter}) {
  const [selectedTab, setSelectedTab] = useState('all');

  return (
    <div className="filterdSection-container">
      <p className='title'>{title}</p>
      

      <Tabs
        value={selectedTab}
        onChange={(e, value) => {
          excuteFilter(genres[value].key)
          setSelectedTab(value)
        }}
        TabIndicatorProps={{style:{
          backgroundColor: 'var(--css-primary)'
        }}}
        className='filterHeading-list'
      >
        {genres.map(element => <Tab 
          label={element.label} 
          key={element.key}
          className='filterHeading'
        />)}
      </Tabs>
      <Carousel playListData={playListData} navId='filter-genres' />
    </div>
  );
}

export default index
