import React, { useState } from 'react'
import GatzB from './GatzB'
import { Container } from '@material-ui/core'

function Main() {
    const [isApproved, setApporoved] = useState(false)
    return (
        <section>
            <Container maxWidth="sm">{!isApproved && <GatzB />}</Container>
        </section>
    )
}

export default Main
