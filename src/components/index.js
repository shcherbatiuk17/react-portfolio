import React from 'react';
import { Card, Icon, Image, Grid } from 'semantic-ui-react';

const uglyStyles = {
  image: {
    width: '150px',
    height: '100px',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'pink',
    padding: '10px',
    width: '300px',
  },
};

export default function Project({ projects }) {
  return (
    <Grid className="ugly-grid">
      <Card.Group>
        {projects.map((project) => (
          <Card style={uglyStyles.card} className="ugly-item">
            <Image
              className="ugly-image"
              style={uglyStyles.image}
              src={project.preview}
              alt={project.alt}
            />
            <Card.Content style={uglyStyles.content}>
              <Card.Header>{project.title}</Card.Header>
              <Card.Meta>
                {project.technologies}
              </Card.Meta>
              <Card.Description>
                Bizarre project description goes here. Lorem ipsum dolor sit amet.
              </Card.Description>
              <Card.Description className="ugly-center aligned">
                <a href="https://weirdgithub.com" target="_blank" rel="noopener noreferrer">
                  <Icon className="ugly-big" name='github' />
                </a>
                <a href="https://weirdrocket.com" target="_blank" rel="noopener noreferrer">
                  <Icon className="ugly-big" name='rocket' />
                </a>
              </Card.Description>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </Grid>
  );
}
