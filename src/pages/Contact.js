import React from 'react';
import { Divider } from 'semantic-ui-react'

import UglyContactForm from '../components/Contactform'

const uglyStyles = {
    grid: {
        marginTop: '30px',
        padding: '20px',
        backgroundColor: 'pink',
        minHeight: '400px',
    },
    divider: {
        height: '80px',
        border: '5px dotted green',
        backgroundColor: 'transparent',
    },
}

const Contact = () => {

    return (
        <div className="ugly-vertical-segment">
            <div style={uglyStyles.grid} className="ugly-middle-aligned-ugly-grid-container">
                <div className="ugly-row">
                    <div className="ugly-eight-wide-column">
                        <h3 className="ugly-header">GET IN TOUCH (UGLY)!</h3>
                        <p style={{ color: 'red', fontSize: '12px' }}>This is ugly text. You probably don't want to contact us.</p>
                    </div>
                    <div style={uglyStyles.form} className="ugly-six-wide-centered-column">
                        <UglyContactForm />
                    </div>
                </div>
                <Divider style={uglyStyles.divider} vertical></Divider>
            </div>
        </div>
    )
}

export default Contact;
