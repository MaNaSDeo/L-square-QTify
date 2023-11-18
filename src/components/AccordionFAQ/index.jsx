import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import './AccordionFAQ.css';

import { useState } from 'react';

function index() {

    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
      };

  return (
    <div className='accordion-container'>
      <p className='faq'>FAQs</p>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className='accordion'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='expandMoreIcon'/>}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className='accordion-summary'
        >
          <p>Is QTify free to use?</p>
        </AccordionSummary>
        <AccordionDetails className='accordion-details'>
          <p>Yes! It is 100% free, and has 0% ads!</p>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className='accordion'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='expandMoreIcon'/>}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          className='accordion-summary'
        >
          <p>Can I download and listen to songs offline?</p>
        </AccordionSummary>
        <AccordionDetails className='accordion-details'>
          <p>Sorry, unfortunately we don't provide the service to download any songs.</p>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default index
