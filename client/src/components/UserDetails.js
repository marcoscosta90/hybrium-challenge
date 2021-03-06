
import { Avatar, Box, Button, Card, CardActions, CardContent, Container, Divider, makeStyles, TextField, Typography, withStyles } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { Form } from "@unform/web";
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import axios from 'axios';
import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from 'react-router-dom'

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


const UserDetails =() => {
    const history = useHistory();
    const { id } = useParams();
    const classes = useStyles();

    const [users, setUsers] = useState([]);

    function handleInactive() {
        axios.delete(`http://localhost:3333/users/${id}`).then(res => {
            history.push('/home')
        }).catch(() => {
            console.error('erro')
        })
    }

    useEffect(() => {
        axios.get(`http://localhost:3333/users/${id}`).then(res => {
            setUsers(res.data.user)
            
        })
            /*fetch(`http://localhost:3333/users/${id}`)
                .then(response => {
                    response.json().then(user => {
                        setUsers(user)
                        console.log(user)   
                    })
                          
                })*/
            .catch((error) => {
                console.log('Error')
            })
    }, [id]);

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
                            onClick={handleInactive}>Inativar colaborador</ColorButton>
                        <Link to={`/edit/${users.id}`}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                className={classes.button}
                            >
                                Editar colaborador
                        </Button>
                        </Link>
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
                                        <Typography variant="h6">{users.name}</Typography>
                                        <Typography variant="subtitle2">Cadastrado em {users.createdAt}</Typography>
                                    </Box>
                                </Box>
                                <Box mb={4} >
                                    <Typography variant="h6" component="h2">
                                        Informa????o pessoal
                                    </Typography>
                                </Box>

                                <Box display="flex" mb={3}>
                                    <Box mr={5}>
                                        <Typography variant="h6" component="h2">
                                            CPF
                                    </Typography>
                                        <Typography variant="subtitle1">
                                            {users.cpf}
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="h6" >
                                            Telefone
                                    </Typography>
                                        <Typography variant="subtitle1"  >
                                            {users.phone}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box mb={6}>
                                    <Box>
                                        <Typography variant="h6" >
                                            E-mail
                                    </Typography>
                                        <Typography variant="subtitle1" >
                                            {users.email}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box display="flex" mb={3} >
                                    <Box mr={5}>
                                        <Typography style={{ color: '#1976d2' }} variant="h6" >
                                            Ocupa????o
                                    </Typography>
                                        <Typography variant="subtitle1" >
                                            {users.occupation}
                                        </Typography>
                                    </Box>

                                    <Box>
                                        <Typography style={{ color: '#1976d2' }} variant="h6" >
                                            Hor??rio de expediente
                                    </Typography>
                                        <Typography variant="subtitle1" >
                                            {users.workstarts} ??s {users.workends}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box display="flex" mr={5} mb={3}>
                                    <Box >
                                        <Typography style={{ color: '#1976d2' }} variant="h6" >
                                            Hor??rio de almo??o
                                    </Typography>
                                        <Box display="flex" >
                                            <Box mr={5}>
                                                <Typography variant="subtitle1" >
                                                    {users.lunchstarts} ??s {users.lunchends}
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
                                            Hist??rico de entrada e sa??da
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
                                                    <Box display="flex" flexDirection="column" justifyContent="center">
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
                                                                Almo??o
                                                </Typography>
                                                        </Box>
                                                        <Box display="flex" flexDirection="column">
                                                            <Typography variant="subtitle2" >
                                                                Entrou
                                                </Typography>
                                                            <Typography style={{ color: "#4F4F4F" }} variant="subtitle2" >
                                                                {card.workStarts}
                                                            </Typography>
                                                        </Box>
                                                        <Box display="flex" flexDirection="column">
                                                            <Typography variant="subtitle2" >
                                                                Entrou
                                                </Typography>
                                                            <Typography style={{ color: "#4F4F4F" }} variant="subtitle2" >
                                                                {card.lunchStarts}
                                                            </Typography>
                                                        </Box>
                                                        <Box mt={1} display="flex" flexDirection="column">
                                                            <Typography variant="subtitle2" >
                                                                Saiu
                                                </Typography>
                                                            <Typography style={{ color: "#4F4F4F" }} variant="subtitle2" >
                                                                {card.workEnds}
                                                            </Typography>
                                                        </Box>
                                                        <Box mt={1} display="flex" flexDirection="column">
                                                            <Typography variant="subtitle2" >
                                                                Saiu
                                                </Typography>
                                                            <Typography style={{ color: "#4F4F4F" }} variant="subtitle2" >
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

        </Container>

    )
}
;

export default UserDetails;