import React from 'react';
import UglyProfilePhoto from '../assets/images/ugly-profile-photo.png';
import { Divider } from 'semantic-ui-react'

const styles = {
    grid: {
        marginTop: '10px',
        padding: '20px',
        backgroundColor: 'hotpink',
        minHeight: '400px'
    },
    divider: {
        height: '50px',
        border: '5px dashed yellow',
        backgroundColor: 'transparent',
    }
}

const UglyAbout = () => {
    return (
        <div className="ui vertical segment">
            <div style={styles.grid} className="ui middle aligned stackable grid container">
                <div className="row">
                    <div className="eight wide column">
                        <h3 className="ui header" style={{ color: 'purple' }}>UGLY GREETINGS!</h3>
                        <p style={{ fontSize: '14px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is intentionally ugly text.</p>
                        <h3 className="ui header" style={{ color: 'orange' }}>I'M UGLY.</h3>
                        <p style={{ fontSize: '14px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is intentionally ugly text.</p>
                    </div>
                    <div className="six wide right floated column">
                        <img className="ui medium fluid image" src={UglyProfilePhoto} alt="Ugly Avatar"></img>
                    </div>
                </div>
                <Divider style={styles.divider} vertical></Divider>
            </div>
        </div>
    )
}

export default UglyAbout;
