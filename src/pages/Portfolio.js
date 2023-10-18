import React from 'react';
import Project from '../components/Project'; // Consider creating an "UglyProject" component with unconventional styling.
import Projects from '../Projects'; // Replace with unconventional project data.

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
            <div style={uglyStyles.grid} className="ugly-middle-aligned-ugly-grid-container">
                <div className="ugly-row">
                    <div className="ugly-column">
                        <UglyProject projects={uglyProjects} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;
