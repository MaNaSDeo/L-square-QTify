import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import Carousel from '../Carousel'
import './FilteredSection.css'

import { useState } from 'react';
// import { Typography } from '@mui/material';


function index({genres, playListData, currentTabFilter}) {
  const [value, setValue] = useState('all');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }} className="filterdSection-container">
      <p className='title'>Songs</p>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }} >
          <TabList onChange={handleChange} aria-label="lab API tabs example" >
            <Tab 
              key="all" 
              label="all" 
              value="all" 
              className='filterHeading'
              onClick={() => currentTabFilter("all")}
            />
            {/* <Tab key="rock" label="rock" value="rock" className={'filterHeading'} />
            <Tab key="pop" label="pop" value="pop" className={'filterHeading'} />
            <Tab key="jazz" label="jazz" value="jazz" className={'filterHeading'} />
            <Tab key="blues" label="blues" value="blues" className="filterHeading" /> */}
              {genres.map(element => {
                return(
                  <Tab 
                    key={element.key}
                    label={element.label}
                    value={element.label}
                    className={'filterHeading'}
                    onClick={() => currentTabFilter(element.key)}
                  />
                )
              })}
          </TabList>
        </Box>
        <TabPanel key="all" value="all">
          <Carousel playListData={playListData} />
        </TabPanel>
        {genres.map(element => {
          return(
            <TabPanel key={element.key} value={element.label}>
              <Carousel playListData={playListData} />
            </TabPanel>
          )
        })}
      </TabContext>
    </Box>
  );
}

export default index
