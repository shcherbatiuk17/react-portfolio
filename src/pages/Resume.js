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
                        <h3 style={uglyStyles.centeredHeader}>Ugly Browser Based Technologies</h3>
                        <ul style={uglyStyles.uglyList}>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                        </ul>
                        <h3 style={uglyStyles.centeredHeader}>Ugly Databases</h3>
                        <ul style={uglyStyles.uglyList}>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                        </ul>
                        <h3 style={uglyStyles.centeredHeader}>Ugly Server Side Development</h3>
                        <ul style={uglyStyles.uglyList}>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                        </ul>
                    </div>
                    <div className="ugly-right-floated-column">
                        <h3 style={uglyStyles.centeredHeader}>Ugly API Design</h3>
                        <ul style={uglyStyles.uglyList}>
                            <li>Lorem Ipsum</li>
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
