import React from 'react'
import logo from './logo.svg'
import Button from '@material-ui/core/Button'

function Main() {
    return (
        <section>
            <img src={logo} className="logo" alt="logo" />
            <Button variant="contained" color="primary">
                Hello World
            </Button>
        </section>
    )
}

export default Main
