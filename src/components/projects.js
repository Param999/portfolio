import React from 'react';
import projectStyles from './projects.module.css';

const Projects = () => (
    <div className={projectStyles.projectContainer}>
        <span className={projectStyles.projectTitle}>LATEST WORK</span>
        <div>
            <div>
                <span>Beefit</span>
                <div>
                    Tech stack
                </div>
                <div>
                    description
                </div>
            </div>
            <div>
                Images
            </div>
        </div>
    </div>
)

export default Projects;

//https://youtu.be/TJ5CaIThKWk?t=813