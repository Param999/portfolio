import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import projectStyles from './projects.module.css';

const Projects = () => {
    const data = useStaticQuery(
        graphql`
            query {
              allMarkdownRemark {
                edges {
                  node {
                    id
                    frontmatter {
                      title
                      techStack
                      url
                    }
                    html
                    rawMarkdownBody
                  }
                }
              }
            }
        `
    );

    return(
        <div className={projectStyles.projectContainer}>
            <div className={projectStyles.projectTitle}>LATEST WORK</div>
            <div className={projectStyles.projects}>
                <div className={projectStyles.projectData}>
                    <div className={projectStyles.projectName}>Beefit</div>
                    <div className={projectStyles.stacks}>
                        {
                            data.allMarkdownRemark.edges[0].node.frontmatter.techStack.split(',').map(stack =>
                                <div className={projectStyles.stack}>{stack}</div>
                            )
                        }
                    </div>
                    <div className={projectStyles.desc}>
                        {
                            data.allMarkdownRemark.edges[0].node.rawMarkdownBody
                        }
                    </div>
                    <a className={projectStyles.link} href={data.allMarkdownRemark.edges[0].node.frontmatter.url} target="_blank" rel="noreferrer">
                        see this project
                    </a>
                </div>
                <div>
                    Images
                </div>
            </div>
        </div>
    )
}

export default Projects;