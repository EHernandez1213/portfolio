import React, { Children } from 'react'
import { Container } from 'react-bootstrap'

const Main = ({ children }) => {
    return (
        <Container>{children}</Container>
    )
}

export default Main