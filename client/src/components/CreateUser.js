
import { Avatar, Box, Button, Card, CardActions, CardContent, Container, Divider, makeStyles, TextField, Typography, withStyles } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import axios from "axios";
import Axios from 'axios';
import { useEffect, useState } from "react";


const useStyles = makeStyles((theme) => ({   
    root: {
        display: 'flex',
        width: '100%',
        position: 'fixed'
    },
    box: {
        paddingTop: 30,
        width: 1500
    },
    button: {
        borderRadius: 20,
        marginRight: 10,
        width: '190px',
        fontSize: 12
    },
    divider: {
        borderBottom: '2px solid #888888',
        width: '100%',
        marginBottom: '20px',
        marginTop: '20px'
    },   
    title: {
        marginLeft: '10px',
    },
    card: {
        width: 600
    }

}))


function CreateUser() {
   

    const classes = useStyles();

    const ColorButton = withStyles((theme) => ({
        root: {
            color: theme.palette.getContrastText(red[900]),
            backgroundColor: red[900],
            '&:hover': {
                backgroundColor: red[500],
            },
        },
    }))(Button);    

    const [data, setData] = useState({
        name: "",
        cpf: "",
        email: "",
        phone: "",
        occupation: "",
        workstarts: "",
        workends: "",
        lunchstarts: "",
        lunchends: ""
    })

    function submit(e) {
        e.preventDefault();
        Axios.post('http://localhost:3333/users/', {
            name: data.name,
            cpf: data.cpf,
            email: data.email,
            phone: parseInt(data.phone),
            occupation: data.occupation, 
            workstarts: parseInt(data.workstarts),
            workends: parseInt(data.workends),
            lunchstarts: parseInt(data.lunchstarts),
            lunchends: parseInt(data.lunchends)
        })
        .then(res => {
            console.log(res.data)
            
        })
        .catch(error => console.log(error));
    }

    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)       
    }

    return (       
        <Box p={1} className={classes.root}>
            <Box className={classes.box}>
            <form onSubmit={(e) => submit(e)}>
                <Box display="flex" className={classes.header}>
                    <Box flexGrow={0.9}>
                        <Typography variant="h5">
                            Adicionar colaborador
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
                            }}>Cancelar</ColorButton>                            
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={classes.button}
                        >
                            Salvar
                        </Button>
                    </Box>
                </Box>
                            
                    <Divider className={classes.divider} />
                    <Card className={classes.card}>
                        <CardContent>
                            <Box mb={4} display="flex" alignItems="center" >
                                <Avatar >
                                    <CameraAltIcon />
                                </Avatar>
                                <TextField
                                    id="name"
                                    value={data.name}
                                    label="Nome do colaborador"
                                    className={classes.title}
                                    onChange={(e) => handle(e)}
                                />
                            </Box>
                            <Box mb={4} >
                                <Typography variant="h6" component="h2">
                                    Informações
                                    </Typography>
                            </Box>



                            <Box display="flex" mb={3}>
                                <Box mr={5}>
                                    <Typography variant="h6" component="h2">
                                        CPF
                                    </Typography>
                                    <TextField id="cpf" value={data.cpf} label="Digite o cpf" size="small" onChange={(e) => handle(e)} />
                                </Box>
                                <Box>
                                    <Typography variant="h6" >
                                        E-mail
                                    </Typography>
                                    <TextField
                                        style={{ width: 250 }}
                                        id="email"
                                        value={data.email}
                                        label="Digite o email do colaborador"
                                        size="small"
                                        onChange={(e) => handle(e)}
                                    />
                                </Box>
                            </Box>
                            <Box mb={3}>
                                <Box>
                                    <Typography variant="h6" >
                                        Telefone
                                    </Typography>
                                    <TextField
                                        id="phone"
                                        value={data.phone}
                                        label="(xx) xxxx-xxxx"
                                        size="small"
                                        onChange={(e) => handle(e)}
                                    />
                                </Box>
                            </Box>
                            <Box mb={3}>
                                <Box>
                                    <Typography style={{ color: '#1976d2' }} variant="h6" >
                                        Ocupação
                                    </Typography>
                                    <TextField
                                        style={{ width: 250 }}
                                        id="occupation"
                                        value={data.occupation}
                                        label="Ocupação do colaborador?"
                                        size="small"
                                        onChange={(e) => handle(e)}
                                    />
                                </Box>
                            </Box>
                            <Box display="flex" mr={5} mb={3}>
                                <Box >
                                    <Typography style={{ color: '#1976d2' }} variant="h6" >
                                        Horário de expediente
                                    </Typography>
                                    <Box display="flex" >
                                        <Box mr={5}>
                                            <TextField
                                                id="workstarts"
                                                value={data.workstarts}
                                                label="Horário de entrada"
                                                size="small"
                                                onChange={(e) => handle(e)}
                                            />
                                        </Box>
                                        <Box>
                                            <TextField
                                                id="workends"
                                                value={data.workends}
                                                label="Horário de saida"
                                                size="small"
                                                onChange={(e) => handle(e)}
                                            />
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Box display="flex" mr={5} mb={3}>
                                <Box >
                                    <Typography style={{ color: '#1976d2' }} variant="h6" >
                                        Horário de almoço
                                    </Typography>
                                    <Box display="flex" >
                                        <Box mr={5}>
                                            <TextField
                                                id="lunchstarts"
                                                value={data.lunchstarts}
                                                label="Horário de entrada"
                                                size="small"
                                                onChange={(e) => handle(e)}
                                            />
                                        </Box>
                                        <Box>
                                            <TextField
                                                id="lunchends"
                                                value={data.lunchends}
                                                label="Horário de saida"
                                                size="small"
                                                onChange={(e) => handle(e)}
                                            />
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className={classes.wrapperBox}>
                            </Box>
                        </CardContent>
                    </Card>
                </form>
            </Box>
        </Box>
    )
}
;

export default CreateUser