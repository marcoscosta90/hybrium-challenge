import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { useNavigate } from 'react-router-dom'


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
  const navigate = useNavigate();

  return (             
            <div className={classes.root}>
              <ListItemIcon  className={classes.item}>
                   <MenuIcon  cursor='pointer' className={classes.image} color="primary" fontSize="large"
                    onClick={() => navigate('/')}></MenuIcon>
                   <ListItemText  className={classes.spacingItem}> Listagem dos colaboradores </ListItemText>                   
                    <div className={classes.divider} />
                   <PersonAddIcon cursor='pointer' className={classes.image} color="primary" fontSize="large"/>
                   <ListItemText cursor='pointer' className={classes.spacingItem}> Adicionar um colaborador </ListItemText>               
              </ListItemIcon> 
         
            </div>   
  );
}