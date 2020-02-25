import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Companies from './companies/Companies';
import Educations from './educations/Educations';
import Projects from './projects/Projects';
import Skills from './skills/Skills';

const App = () => (
  <Container>
    <Typography variant="h2">CV</Typography>
    <br/>
    <Companies />
    <br/>
    <br/>
    <Educations />
    <br/>
    <br/>
    <Projects />
    <br/>
    <br/>
    <Skills />
  </Container>
);

export default App;
