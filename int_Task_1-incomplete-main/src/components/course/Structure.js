import React from 'react'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';



export default function Structure() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }

  return (
    <React.Fragment>

      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Module 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List >
            <ListItemLink href="#">
              <ListItemText primary="Topic-1" />
            </ListItemLink>
            <ListItemLink href="#">
              <ListItemText primary="Topic-2" />
            </ListItemLink>
            <ListItemLink href="#">
              <ListItemText primary="Topic-2" />
            </ListItemLink>
          </List>
        </AccordionDetails>
      </Accordion>
    
      <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Module 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <List >
              <ListItemLink href="#">
                <ListItemText primary="Topic-1" />
              </ListItemLink>
              <ListItemLink href="#">
                <ListItemText primary="Topic-2" />
              </ListItemLink>
              <ListItemLink href="#">
                <ListItemText primary="Topic-2" />
              </ListItemLink>
          </List>
        </AccordionDetails>
      </Accordion>
      
      <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Module 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List >
            <ListItemLink href="#">
              <ListItemText primary="Topic-1" />
            </ListItemLink>
            <ListItemLink href="#">
              <ListItemText primary="Topic-2" />
            </ListItemLink>
            <ListItemLink href="#">
              <ListItemText primary="Chapter -5 : Getting deep into the design frames and the colors theory." />
            </ListItemLink>
          </List>
        </AccordionDetails>
      </Accordion>

      <Accordion square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>Module-4</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List >
            <ListItemLink href="#">
              <ListItemText primary="Topic-1" />
            </ListItemLink>
            <ListItemLink href="#">
              <ListItemText primary="Topic-2" />
            </ListItemLink>
            <ListItemLink href="#">
              <ListItemText primary="Topic-2" />
            </ListItemLink>
          </List>
        </AccordionDetails>
      </Accordion>

    </React.Fragment>
  );      
}
