import NavbarRoute from './templates/NavbarRoute';
import bg from "../img/bg-portfolio.jpg"
import '../css/page_portfolio.css'
import { Grid } from 'react-bootstrap-icons';
import { Col, Container, Row } from 'react-bootstrap';
import StyledCol from './templates/StyledCol';

const Portfolio = () => <NavbarRoute BackgroundImage={bg} Element={
  <>
    <Container className='portfolio'>
      <Row>
        <StyledCol lg={6}>
          <h1>Server-oriented Software &  Modifications</h1>
          Discord server management software, & 
          game mod plugin development for enhancing 
          private server community engagement & administration.
          <br />
          <h2>Discord Bot Admin Panels & Moderation</h2>
          User data management, moderation, administration setup/deployment, 
          and administrator panels from the comfort of text channels in 
          Discord to manage server communities and configure other deployed 
          custom software.
          <br />
          <h2>TerrariaChatRelay</h2>
          Cross-compatible player message redirector for TShock & TModLoader.
          Built from the same base, providing compatibility for both with 
          careful choice of patterns and modeling.
          <br />
          <h2>Server Portals</h2>
          Client-side game server redirector to allow seamless transfers from 
          one private server to another.
        </StyledCol>
        <StyledCol lg={6}>
          <h1>Collaborative, Open-source Enthusiast</h1>
          <ul>
            <li>
              11 public repos openly available with MIT & GPL-3 licenses.
            </li>
            <li>
              Not afraid to develop openly, with purpose of teaching others and 
              receiving constructive criticism for myself.
            </li>
            <li>
              Developed developer engagement process called code bounties.
            </li>
            <li>
              Development opportunity system where community member can contribute code
              and earn credit to rise in leaderboards for various in-house rewards.
            </li>
          </ul>
        </StyledCol>
        <StyledCol lg={6}>
          <h1>Community Owner & Administrator</h1>
          <ul>
            <li>
              Administrator & owner of large online web communities.
            </li>
            <li>
              Created & nurtured web community with 2000+ members for the video game Pokémon.
            </li>
            <li>
              Event + competition organization, custom programmable systems 
              for user engagement, reward + benefit system to attract, keep, 
              and reward members for active + outstanding participation.
            </li>
            <li>
              Administrator leading group of selected individuals to help with moderation, and more.
            </li>
          </ul>
        </StyledCol>
        <StyledCol lg={6}>
          <h1>Robotics Team Leader & Engineer</h1>
          <ul>
            <li>
              FIRST™ Robotics Competition President. 
            </li>
            <li>
              FIRST™ Robotics President helping build robots for FRC competitions.
            </li>
            <li>
              Leading & motivating students to learn.
            </li>
            <li>
              Spending lots of time crunching to build large robots to 
              accomplish very complicated goals.
            </li>
          </ul>
        </StyledCol>
      </Row>
    </Container>
  </>
} />

export default Portfolio