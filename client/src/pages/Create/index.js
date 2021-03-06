import { makeStyles } from '@material-ui/core'
import React from 'react'
import { useParams } from 'react-router'
import CreateUser from '../../components/CreateUser'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    navbar: {
        height: 100
    },
    main: {
        display: 'flex',
        marginTop: 10,
    },
    createuser: {
        marginLeft: 320
    }
}))

function Create() {
    const classes = useStyles();
    const { id } = useParams();

    return (
        <div className={classes.root}>
            <div className={classes.navbar}>
                <Navbar />
            </div>
            <main className={classes.main}>
                <div>
                    <Sidebar />
                </div>
                <div className={classes.createuser}>
                    <CreateUser id={id ? Number.parseInt(id, 10) : null} />
                </div>
            </main>
        </div>



    )
}

export default Create
