import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ProjectImage = () => {
    const data = useStaticQuery(
        graphql`
            query {
              file(relativePath: {eq: "beefit.JPG"}) {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  } 
                }
              }
            }
        `
    );

    console.log(data)

    return <Img fluid={data.file.childImageSharp.fluid} alt="" />
}

export default ProjectImage;