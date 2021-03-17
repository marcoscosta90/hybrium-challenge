
import { Avatar, Box, Button, Card, CardActions, CardContent, Container, Divider, makeStyles, TextField, Typography, withStyles } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { Form } from "@unform/web";
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import { spacing } from '@material-ui/system';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {

    },
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
        maxWidth: 500
    },
    title: {
        marginLeft: '10px',
    },

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

    return (

        <Container className={classes.root}>
            <Box className={classes.box}>
                <Form>
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
                                <TextField id="standard-basic" label="Nome do colaborador" className={classes.title} />
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
                                    <TextField id="standard-basic" label="Digite o cpf" size="small" />
                                </Box>
                                <Box>
                                    <Typography variant="h6" >
                                        E-mail
                                    </Typography>
                                    <TextField
                                        style={{ width: 250 }}
                                        id="standard-basic"
                                        label="Digite o email do colaborador"
                                        size="small" />
                                </Box>
                            </Box>
                            <Box mb={3}>
                                <Box>
                                    <Typography variant="h6" >
                                        Telefone
                                    </Typography>
                                    <TextField
                                        id="standard-basic"
                                        label="(xx) xxxx-xxxx"
                                        size="small" />
                                </Box>
                            </Box>
                            <Box mb={3}>
                                <Box>
                                    <Typography style={{ color: '#1976d2' }} variant="h6" >
                                        Ocupação
                                    </Typography>
                                    <TextField
                                        style={{ width: 250 }}
                                        id="standard-basic"
                                        label="Ocupação do colaborador?"
                                        size="small" />
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
                                                id="standard-basic"
                                                label="Horário de entrada"
                                                size="small" />
                                        </Box>
                                        <Box>
                                            <TextField
                                                id="standard-basic"
                                                label="Horário de saida"
                                                size="small" />
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
                                                id="standard-basic"
                                                label="Horário de entrada"
                                                size="small" />
                                        </Box>
                                        <Box>
                                            <TextField
                                                id="standard-basic"
                                                label="Horário de saida"
                                                size="small" />
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className={classes.wrapperBox}>
           
           
            </Box>
                        </CardContent>
                    </Card>
                </Form>
            </Box>
        </Container>
    )
}
;

export default CreateUser