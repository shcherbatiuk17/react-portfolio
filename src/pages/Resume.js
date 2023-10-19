import React from 'react';
import { Divider } from 'semantic-ui-react'

const uglyStyles = {
    grid: {
        marginTop: '10px',
        padding: '20px',
        backgroundColor: 'darkviolet',
        minHeight: '400px',
    },
    divider: {
        height: '50px',
        border: '5px dashed green',
        backgroundColor: 'transparent',
    },
    button: {
        backgroundColor: 'yellow',
        marginTop: '15px',
        padding: '15px',
        color: 'red',
    },
    centeredHeader: {
        textAlign: 'center',
        color: 'blue',
    },
    uglyList: {
        listStyleType: 'square',
        color: 'orange',
    },
}

const Resume = () => {
    return (
        <div className="ugly-vertical-segment">
            <div style={uglyStyles.grid} className="ugly-stackable-grid-container">
                <div className="ugly-row">
                    <div className="ugly-column">
                        <h3 style={uglyStyles.centeredHeader}>Marian (maybe)Shcherbatiuk </h3>
                        <ul style={uglyStyles.uglyList}>
                            <li>I don't want to work</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                        </ul>
                        <h3 style={uglyStyles.centeredHeader}>Databases</h3>
                        <ul style={uglyStyles.uglyList}>
                            <li>Im bad in it</li>
                            <li>Lorem Ipsum</li>
                        </ul>
                        <h3 style={uglyStyles.centeredHeader}> Server Side Development</h3>
                        <ul style={uglyStyles.uglyList}>
                            <li>Not really</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                        </ul>
                    </div>
                    <div className="ugly-right-floated-column">
                        <h3 style={uglyStyles.centeredHeader}> API Design</h3>
                        <ul style={uglyStyles.uglyList}>
                            <li>I have no idea what is that</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                        </ul>
                    </div>
                </div>
                <Divider style={uglyStyles.divider} vertical></Divider>
            </div>
        </div>
    )
}

export default Resume;
