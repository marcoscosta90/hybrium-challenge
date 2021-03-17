import { Avatar, Box, Card, CardContent, Container, Divider, FormControl, IconButton, Input, InputLabel, MenuItem, NativeSelect, Paper, Select, TextField, Typography } from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import React, { useState } from 'react'


const useStyles = makeStyles((theme) => ({
    
    body: {
        display: 'flex',
        flexDirection: 'column',
        width: '90%',        
        marginLeft: '300px',
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
        width: '80%',
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

    const handleChange = (event) => {
        setInput(event.target.value);
    };

    const employees = [
        {
            'avatar': 'https://avatars.githubusercontent.com/u/50223741?s=460&u=b33c0084a1d22d2782eff4cc2cab6a36ad5f2877&v=4',
            'nome': 'Marcos Costa'
        },
        {
            'avatar': 'https://avatars.githubusercontent.com/u/50223741?s=460&u=b33c0084a1d22d2782eff4cc2cab6a36ad5f2877&v=4',
            'nome': 'Geranio Costa'
        },
        {
            'avatar': 'https://avatars.githubusercontent.com/u/50223741?s=460&u=b33c0084a1d22d2782eff4cc2cab6a36ad5f2877&v=4',
            'nome': 'Alfredo Costa'
        },
        {
            'avatar': 'https://avatars.githubusercontent.com/u/50223741?s=460&u=b33c0084a1d22d2782eff4cc2cab6a36ad5f2877&v=4',
            'nome': 'Marcos Costa'
        },
        {
            'avatar': 'https://avatars.githubusercontent.com/u/50223741?s=460&u=b33c0084a1d22d2782eff4cc2cab6a36ad5f2877&v=4',
            'nome': 'Geranio Costa'
        },
        {
            'avatar': 'https://avatars.githubusercontent.com/u/50223741?s=460&u=b33c0084a1d22d2782eff4cc2cab6a36ad5f2877&v=4',
            'nome': 'Alfredo Costa'
        },

    ]



    return (
       
        <Box className={classes.body}>
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
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
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
            {employees.map(employee => 
             <Card className={classes.cardMain}>
                <CardContent className={classes.card}>
                    <Avatar className={classes.avatar} color="textSecondary" gutterBottom>
                        {employee.avatar}
                    </Avatar>
                    <Typography variant="h5" component="h2">
                        {employee.nome}
                    </Typography>                   
                </CardContent>
            </Card>)}
            </Box>
        </Box>
       
    )
}

export default EmployeesList
