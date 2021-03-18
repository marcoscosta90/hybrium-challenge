import { Avatar, Box, Card, CardContent, Container, Divider, FormControl, IconButton, MenuItem, Paper, Select, TextField, Typography } from '@material-ui/core'
import { makeStyles} from '@material-ui/core/styles'
import axios from 'axios'
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({

    body: {
        display: 'flex',
        flexDirection: 'column',
        width: '90%',        
        position: 'fixed'
    },
    cardMain: {
        maxWidth: '500px',
        display: 'flex',
        margin: theme.spacing(2)
    },
    card: {
        display: 'flex',
        alignItems: 'center',

    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        display: 'flex',
        flexDirection: 'row'
    },
    divider: {
        borderBottom: '2px solid #888888',
        width: '77%',
        marginBottom: '20px',
        marginTop: '20px'
    },
    fontFormat: {
        fontSize: '26px'
    },
    avatar: {
        marginRight: '10px'
    },
    input: {
        display: 'flex',
        width: '180px',
        height: '25px',
        borderRadius: '10px',
        marginRight: '10px',
        padding: '0 10px'
    },
    wrapperBox: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 40%)',

    },

    label: {
        fontSize: '14px',
    }
}));


function EmployeesList() {
    const classes = useStyles();
    const [input, setInput] = useState('Marcos');
    const [users, setUsers] = useState([]);

    const handleChange = (event) => {
        setInput(event.target.value);
    };

    useEffect(() => {
        axios.get('http://localhost:3333/users')
            .then((response) => {
                setUsers(response.data.users)                
            })
            .catch((error) => {
                console.log('Error')
            })
    },[]);


    return (
        <Box p={4} className={classes.body}>
            <Typography variant="h5" >Listagem de colaboradores</Typography>
            <Divider className={classes.divider} />
            <Box className={classes.inputBox}>
                <FormControl variant="outlined" className={classes.formControl}>
                    <Select className={classes.input}
                        labelId="demo"
                        id="demo"
                        value={input}
                        onChange={handleChange}
                        defaultValue="Nome do colaborador"
                    >
                        <MenuItem value={10}>Nome do colaborador</MenuItem>
                        <MenuItem value={20}>Idade</MenuItem>
                        <MenuItem value={30}>email</MenuItem>
                    </Select>
                    <Paper className={classes.input}>
                        <InputBase
                            className={classes.input}
                            placeholder="Procurar"
                            inputProps={{ 'aria-label': 'search google maps' }}
                        />
                        <IconButton type="submit" className={classes.iconButton} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Paper>

                </FormControl>
            </Box>
            <Box className={classes.wrapperBox}>
           
            {users.map((user) =>
                <Link to={"/userdetails/"+user.id} style={{textDecoration: 'none'}}>
                    <Card className={classes.cardMain}>                   
                        <CardContent className={classes.card}>
                            <Avatar className={classes.avatar} color="textSecondary" gutterBottom />                            
                            <Typography variant="h5" component="h2">
                                {user.name}
                            </Typography>
                        </CardContent>
                    </Card>
                 </Link>
                )}
                
            </Box>
        </Box>

    )
}

export default EmployeesList
