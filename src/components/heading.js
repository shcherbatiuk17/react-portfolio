import React from 'react';
import { Header } from 'semantic-ui-react'

const uglyStyles = {
    header: {
        color: 'lime',
        fontSize: '60px',
        padding: '20px',
        backgroundColor: 'purple',
    }
}

export default function Heading() {
    return (
        <header>
            <Header as='h1' style={uglyStyles.header} className="weird-name-heading">Bimbo</Header>
        </header>
    )
}
