import React from 'react';
import Project from '../components/Project';
// import projects from '../projects'; 

const Styles = {
    grid: {
        marginTop: '30px',
        padding: '20px',
        marginBottom: '60px',
        backgroundColor: 'darkviolet',
        minHeight: '500px',
    },
}

const Portfolio = () => {
    return (
        <div className="ugly-vertical-segment">
            <div style={Styles.grid} className="ugly-middle-aligned-ugly-grid-container">
                <div className="ugly-row">
                    {/* <div className="ugly-column">
                        <Project projects={projects} />
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Portfolio;
