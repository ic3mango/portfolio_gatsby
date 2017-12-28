import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import ButtonDefault from '../components/ButtonDefault';
import ButtonAlternate from '../components/ButtonAlternate';
import PageViewTransparent from '../components/PageViewTransparent';

import fatevoke from '../images/projects/fatevoke.png';
import barcation from '../images/projects/barcation.png';
import pinflight from '../images/projects/pinflight.png';

const PageView = PageViewTransparent.extend`
  background-color: rgba(183, 78, 145, 0.2);
`

const ProjectHighlight = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 22.5em;
`

const ProjectHighlightSecond = ProjectHighlight.extend`
  background-color: rgba(0, 0, 0, 0.05);
`

const ProjectHighlightThird = ProjectHighlight.extend`
  background-color: rgba(0, 0, 0, 0.1);
`


const ProjectImage = styled.a`
  display: inline-block;
  position: relative;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0;
  text-decoration: none;
  min-width: 28em;
  cursor: pointer;
`

const ProjectDescription = styled.div`
  padding: 4em 4em 2em 4em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1 1 auto;
`
const ProjectDescriptionInner = styled.div`
`

const ProjectDescriptionActions = styled.div`
  display: flex;
  justify-content: space-around;
`

const ProjectsPage = ({ transition }) => {
  return <div style={transition && transition.style}>
    <PageView>
      {/* Project 1 */}
      <ProjectHighlight>
        <ProjectImage style={{ backgroundImage: `url(${fatevoke})`}}/>
        <ProjectDescription>
          <ProjectDescriptionInner>
            <h2>FateVoke</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam quisquam quae ratione est debitis. Harum quibusdam velit laboriosam obcaecati perspiciatis magnam dolores, reprehenderit ea soluta totam, eum a odit qui.</p>
            <ProjectDescriptionActions>
              <ButtonDefault to="/">Website</ButtonDefault>
              <ButtonAlternate to="/">Github</ButtonAlternate>
            </ProjectDescriptionActions>
          </ProjectDescriptionInner>
        </ProjectDescription>
      </ProjectHighlight>
      {/* Project 2 */}
      <ProjectHighlightSecond>
        <ProjectImage style={{ backgroundImage: `url(${barcation})`}}/>
        <ProjectDescription>
          <ProjectDescriptionInner>
            <h2>Barcation</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam quisquam quae ratione est debitis. Harum quibusdam velit laboriosam obcaecati perspiciatis magnam dolores, reprehenderit ea soluta totam, eum a odit qui.</p>
            <ProjectDescriptionActions>
              <ButtonDefault to="/">Website</ButtonDefault>
              <ButtonAlternate to="/">Github</ButtonAlternate>
            </ProjectDescriptionActions>
          </ProjectDescriptionInner>
        </ProjectDescription>
      </ProjectHighlightSecond>
      {/* Project 3 */}
      <ProjectHighlightThird>
        <ProjectImage style={{ backgroundImage: `url(${pinflight})`}}/>
        <ProjectDescription>
          <ProjectDescriptionInner>
            <h2>PinFlight</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam quisquam quae ratione est debitis. Harum quibusdam velit laboriosam obcaecati perspiciatis magnam dolores, reprehenderit ea soluta totam, eum a odit qui.</p>
            <ProjectDescriptionActions>
              <ButtonDefault to="/">Website</ButtonDefault>
              <ButtonAlternate to="/">Github</ButtonAlternate>
            </ProjectDescriptionActions>
          </ProjectDescriptionInner>
        </ProjectDescription>
      </ProjectHighlightThird>
    </PageView>
  </div>
}

export default ProjectsPage;