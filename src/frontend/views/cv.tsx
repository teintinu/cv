import * as React from 'react'
import {Layout} from 'components/layout'
import {Name} from './name'
import {Contact} from './contact'
import {Photo} from './photo'
import {AboutMe} from './aboutMe'
import {Skills} from './skills'
import {Education} from './education'
import {Languages} from './languages'
import {ExperiencesByActivity} from './experiencesByActivity'
import {ExperiencesByStack} from './experiencesByStack'
import {Description} from './description'
import styled from 'styled-components';

const Root = styled.div`
  
`;


export function CV() {
  return <>
    <Name>José Fernando Tolentino</Name>
    <Layout>
      <Description />
      <Contact />
      <AboutMe />
      <Photo />
      <Skills />
      <Education />
      <Languages />
      <ExperiencesByActivity />
      <ExperiencesByStack />
    </Layout>
  </>
}