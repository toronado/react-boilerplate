import React, { useState } from 'react'
import {
    Box,
    Button,
    FormControl,
    makeStyles,
    TextField,
    Typography,
} from '@material-ui/core'
import SportsVolleyballIcon from '@material-ui/icons/SportsVolleyball'

const useStyles = makeStyles({
    textField: {
        '& input': {
            textAlign: 'center',
        },
        '& label': {
            textAlign: 'center',
            left: 0,
            right: 0,
            transformOrigin: 'center center',
            '&.Mui-focused': {
                transformOrigin: 'center center',
            },
        },
    },
})

function GatzB() {
    const [name, setName] = useState('')
    const [step, setStep] = useState(0)
    const classes = useStyles()

    function nextStep() {
        setStep(prevStep => prevStep + 1)
    }

    return (
        <Box textAlign="center" m={1}>
            <Box my={2}>
                <SportsVolleyballIcon className="logo" />
                <Typography variant="h5" component="h1">
                    <strong>GATZ-B</strong>
                </Typography>
                <Typography component="p">
                    <small>Gatewayz to Another World</small>
                </Typography>
            </Box>
            <Box p={4}>
                <Typography component="div">
                    <code>
                        {step === 0 && (
                            <div>
                                <p>
                                    Greetings, I'm GATZ-B, a Gatewayz Bot. I've
                                    been connecting characters with readers for
                                    over 1000 years. I recently encountered a
                                    character in a world similiar to yours who
                                    needs help.
                                </p>
                                <p>
                                    <strong>Can you assist?</strong>
                                </p>
                            </div>
                        )}
                        {step === 1 && (
                            <div>
                                <p>
                                    Great! Thank you. To make the connection, I
                                    will need access to your location, camera
                                    and files.
                                </p>
                                <p>
                                    <strong>Will that be okay?</strong>
                                </p>
                            </div>
                        )}
                    </code>
                </Typography>
            </Box>
            <FormControl>
                {step ? (
                    <TextField
                        name="name"
                        value={name}
                        label="What's your name?"
                        onChange={e => setName(e.target.value)}
                        className={classes.textField}
                    />
                ) : (
                    <Button
                        variant="outlined"
                        color="secondary"
                        size="large"
                        onClick={nextStep}
                    >
                        Yes!
                    </Button>
                )}
            </FormControl>
        </Box>
    )
}

export default GatzB
