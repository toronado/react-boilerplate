import React, { useState } from 'react'
import logo from './logo.svg'
import Button from '@material-ui/core/Button'

function Main() {
    const [count, setCount] = useState(0)

    function increment() {
        setCount(prevState => {
            return prevState + 1
        })
    }

    return (
        <section>
            <img src={logo} className="logo" alt="logo" />
            <Button variant="contained" color="primary" onClick={increment}>
                {count ? count : 'Hello World!!'}
            </Button>
        </section>
    )
}

export default Main
