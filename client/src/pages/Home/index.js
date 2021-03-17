import { makeStyles } from '@material-ui/core'
import React from 'react'
import EmployeesList from '../../components/EmployeesList'
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
}))

function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.navbar}>
            <Navbar />
            </div>
            <main className={classes.main}>
                <div>
                <Sidebar />
                </div>
                <div>
                    <EmployeesList />
                </div>
            </main>
        </div>



    )
}

export default Home
