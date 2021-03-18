import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { Link } from 'react-router-dom';
import Home from '../pages/Home';
import { Box } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    root: {  
        zIndex: 1,
        flexDirection: 'column',
        position: 'fixed',      
        display: 'flex',      
        maxWidth: '250px',  
        width: '100%',       
        borderRight: '2px solid #888888',
        boxShadow: 'rgba(0, 0, 0, 0.15) 4.4px 2.4px 3.2px',      
        height: '100%',
       
    },
    item: {      
       flexDirection: 'column',
       alignItems: 'center',          
      },    
      image: {
          width: '50px',
          height: '50px'
      },
      divider: {
          borderBottom: '2px solid #888888',
          width: '90%',
          marginBottom: '20px'
      },
      spacingItem: {
          marginBottom: theme.spacing(3),
          cursor: 'pointer'
      }

}));

export default function Sidebar() {
  const classes = useStyles();
  

  return (             
            <div className={classes.root}>
              <ListItemIcon  className={classes.item}>
                <Link to="/home">
                <Box>
                   <MenuIcon  cursor='pointer' className={classes.image} color="primary" fontSize="large"
                   ></MenuIcon>
                </Box>
                </Link>
                   <Link to='/home' style={{textDecoration: 'none', color: '#4F4F4F'}}><ListItemText  className={classes.spacingItem}> Listagem dos colaboradores </ListItemText> </Link>                  
                    <div className={classes.divider} />
                 <Link to="/createuser">
                  <Box>
                   <PersonAddIcon cursor='pointer' className={classes.image} color="primary" fontSize="large"/>
                   </Box>
                   </Link>
                   <Link to="/createuser" style={{textDecoration: 'none', color: '#4F4F4F'}}><ListItemText cursor='pointer' className={classes.spacingItem}> Adicionar um colaborador </ListItemText>    </Link>           
              </ListItemIcon> 
         
            </div>   
  );
}