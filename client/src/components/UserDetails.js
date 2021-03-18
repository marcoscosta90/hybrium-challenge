
import { Avatar, Box, Button, Card, CardActions, CardContent, Container, Divider, makeStyles, TextField, Typography, withStyles } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { Form } from "@unform/web";
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import axios from 'axios';
import { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
    box: {
        paddingTop: 30
    },
    button: {
        borderRadius: 20,
        marginRight: 10,
        width: '190px',
        fontSize: 12
    },
    divider: {
        borderBottom: '2px solid #888888',
        width: '95%',
        marginBottom: '20px',
        marginTop: '20px'
    },
    card: {
        marginRight: 100
    },
    title: {
        marginLeft: '10px',
    },
    wrapBox: {
        display: 'grid',
        gridTemplateColumns: '50% 50%',
    },
    gridCard: {
        gridTemplateColumns: 'repeat(2, 50%)',
    }

}))


function UserDetails() {

    const classes = useStyles(); 
    
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3333/users')
            .then((response) => {
                setUsers(response.data.users)      
                console.log(response.data.users)          
            })
            .catch((error) => {
                console.log('Error')
            })
    },[]);

    const ColorButton = withStyles((theme) => ({
        root: {
            color: theme.palette.getContrastText(red[900]),
            backgroundColor: red[900],
            '&:hover': {
                backgroundColor: red[500],
            },
        },
    }))(Button);  


    const cardDetails = [
        {
            'day': '25',
            'month': 'December',
            'workStarts': '08:30',
            'workEnds': '17:30',
            'lunchStarts': '12:00',
            'lunchEnds': '13:00',
        },
        {
            'day': '23',
            'month': 'December',
            'workStarts': '08:30',
            'workEnds': '17:30',
            'lunchStarts': '10:00',
            'lunchEnds': '11:00',
        },
        {
            'day': '21',
            'month': 'December',
            'workStarts': '08:30',
            'workEnds': '17:30',
            'lunchStarts': '12:00',
            'lunchEnds': '13:00',
        },
        {
            'day': '20',
            'month': 'December',
            'workStarts': '08:00',
            'workEnds': '17:30',
            'lunchStarts': '12:00',
            'lunchEnds': '13:00',
        },
        {
            'day': '28',
            'month': 'December',
            'workStarts': '08:00',
            'workEnds': '17:00',
            'lunchStarts': '10:00',
            'lunchEnds': '11:00',
        },
    ]
        


    return (
       
        <Container className={classes.root}>
             {users.map((user) =>
            <Box className={classes.box}>
            
                    <Box display="flex" className={classes.header}>
                        <Box flexGrow={0.9}>
                            <Typography variant="h5">
                                Detalhes do colaborador
                        </Typography>
                        </Box>

                        <Box display="flex">
                            <ColorButton
                                variant="outlined"
                                color="secondary"
                                type="button"
                                className={classes.button}
                                onClick={() => {
                                    window.location = "/";
                                }}>Inativar colaborador</ColorButton>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                className={classes.button}
                            >
                                Editar colaborador
                        </Button>
                        </Box>
                    </Box>
                    <Divider className={classes.divider} />
                    <Form >
                    
                    <Box display="flex">
                        <Card className={classes.card}>
                            <CardContent style={{ marginLeft: '15px' }}>
                                <Box mb={4} display="flex" alignItems="center" >
                                    <Box mr={2}>
                                        <Avatar >
                                            <CameraAltIcon />
                                        </Avatar>
                                    </Box>
                                    <Box>
                                        <Typography variant="h6">Nome do colaborador</Typography>
                                        <Typography variant="subtitle2">Cadastrado em 28/12/2020</Typography>
                                    </Box>
                                </Box>
                                <Box mb={4} >
                                    <Typography variant="h6" component="h2">
                                        Informação pessoal
                                    </Typography>
                                </Box>

                                <Box display="flex" mb={3}>
                                    <Box mr={5}>
                                        <Typography variant="h6" component="h2">
                                            CPF
                                    </Typography>
                                        <Typography variant="subtitle1"  >
                                            {user.emai}
                                    </Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="h6" >
                                            Telefone
                                    </Typography>
                                        <Typography variant="subtitle1"  >
                                            19 99190-0101
                                    </Typography>
                                    </Box>
                                </Box>
                                <Box mb={6}>
                                    <Box>
                                        <Typography variant="h6" >
                                            E-mail
                                    </Typography>
                                        <Typography variant="subtitle1" >
                                            email@colaborador.com.br
                                    </Typography>
                                    </Box>
                                </Box>
                                <Box display="flex" mb={3} >
                                    <Box mr={5}>
                                        <Typography style={{ color: '#1976d2' }} variant="h6" >
                                            Ocupação
                                    </Typography>
                                        <Typography variant="subtitle1" >
                                            Assistente de rh
                                    </Typography>
                                    </Box>

                                    <Box>
                                        <Typography style={{ color: '#1976d2' }} variant="h6" >
                                            Horário de expediente
                                    </Typography>
                                        <Typography variant="subtitle1" >
                                            8:30 às 17:30
                                    </Typography>
                                    </Box>
                                </Box>
                                <Box display="flex" mr={5} mb={3}>
                                    <Box >
                                        <Typography style={{ color: '#1976d2' }} variant="h6" >
                                            Horário de almoço
                                    </Typography>
                                        <Box display="flex" >
                                            <Box mr={5}>
                                                <Typography variant="subtitle1" >
                                                    12:00 às 13:00
                                    </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </CardContent>

                        </Card>


                        <Box>
                            <Box mb={2}>
                                <Card style={{ width: '700px', maxHeight: '70px' }}>
                                    <CardContent>
                                        <Typography variant="h6" >
                                            Histórico de entrada e saída
                                    </Typography>
                                    </CardContent>
                                </Card>
                            </Box>
                          
                            <Box className={classes.wrapBox}>
                            {cardDetails.map(card => 
                                <Box mb={2} mr={2}>
                                
                                    <Card style={{ height: '150px' }}>
                                        <CardContent>
                                            <Box display="flex" >
                                                <Box  display="flex" flexDirection="column" justifyContent="center">
                                                    <Typography variant="h4" >
                                                        {card.day}
                                    </Typography>
                                                    <Typography variant="h5" >
                                                        {card.month}
                                                </Typography>
                                                </Box>
                                                <Box ml={2} display="grid" className={classes.gridCard}>
                                                    <Box mr={8} mb={1}>
                                                        <Typography style={{ color: "#1976d2" }} variant="subtitle2"  >
                                                            Expediente
                                                </Typography>
                                                    </Box>
                                                    <Box>
                                                        <Typography style={{ color: "#1976d2" }} variant="subtitle2" >
                                                            Almoço
                                                </Typography>
                                                    </Box>
                                                    <Box display="flex" flexDirection="column">
                                                        <Typography  variant="subtitle2" >
                                                            Entrou
                                                </Typography>
                                                        <Typography style={{color: "#4F4F4F"}} variant="subtitle2" >
                                                            {card.workStarts}
                                                </Typography>
                                                    </Box>
                                                    <Box display="flex" flexDirection="column">
                                                        <Typography variant="subtitle2" >
                                                            Entrou
                                                </Typography>
                                                        <Typography style={{color: "#4F4F4F"}} variant="subtitle2" >
                                                        {card.lunchStarts}
                                                </Typography>
                                                    </Box>
                                                    <Box mt={1} display="flex" flexDirection="column">
                                                        <Typography variant="subtitle2" >
                                                            Saiu
                                                </Typography>
                                                        <Typography style={{color: "#4F4F4F"}} variant="subtitle2" >
                                                        {card.workEnds}
                                                </Typography>
                                                    </Box>
                                                    <Box  mt={1} display="flex" flexDirection="column">
                                                        <Typography variant="subtitle2" >
                                                            Saiu
                                                </Typography>
                                                        <Typography style={{color: "#4F4F4F"}} variant="subtitle2" >
                                                        {card.lunchEnds}
                                                </Typography>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </CardContent>
                                    </Card> 
                                </Box>
                                )}
                                
                               
                            </Box>
                            
                        </Box>
                    </Box>
                  
                </Form>
            
            </Box>
             )}
        </Container>
       
    )
}
;

export default UserDetails;