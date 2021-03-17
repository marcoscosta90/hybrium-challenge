import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Box, Button, TextField, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        backgroundImage: 'url(./images/background.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'none',
        display: 'flex',
        
    },
    background: {
        backgroundColor: '#fff',

    },
    form: {
        marginTop: theme.spacing(5)
    },
    item: {
        marginBottom: '30px',
        marginLeft: '130px'
    },

}))

function SignIn() {
    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Grid
                container
                direction="column"
                justify="center"
                md={6}
            >
                <Typography className={classes.item}
                    style={{
                        color: '#fff',
                        fontSize: 75,
                        lineHeight: '70px',
                    }}>
                    <strong>Seja bem-vindo</strong>

                </Typography>
                <Typography className={classes.item}
                    style={{
                        color: '#fff',
                        fontSize: 45,
                        lineHeight: '50px'
                    }}>
                    Para continuar <br /> por favor faça login
                </Typography>
            </Grid>
            <Grid
                container
                justify="center"
                alignItems="center"
                md={6}
            >
                <Box className={classes.background}
                    display="flex"
                    flexDirection="column"
                    width="530px"
                    height="450px"
                    borderRadius="2px"                   
                >
                    <Box
                        flexDirection="column"
                        padding='34px 20px'                        
                    >
                        <Typography style={{ marginTop: '10px', fontSize: 25, marginBottom: '20px' }}
                            variant="h5"
                        >Utilize o painel agora mesmo</Typography>
                        <form className={classes.form}>
                            <TextField
                                placeholder="Digite o seu e-mail"
                                fullWidth
                                required
                                id="email"
                                
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField style={{marginTop: '50px'}}
                                placeholder="Digite a sua senha"                                
                                fullWidth
                                required
                                type="password"
                                id="password"                                
                                name="password"
                                autoComplete="current-password"
                                autoFocus
                                
                            />
                            <Typography style={{marginTop: '10px', color: '#026af4'}}
                                align="right"
                            >Esqueci minha senha</Typography>
                            <Button style={{marginTop: '70px'}}
                                fullWidth
                                variant="contained"
                                color="primary"
                                size="large"
                                >
                                    Entrar
                            </Button>
                        </form>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}

export default SignIn;