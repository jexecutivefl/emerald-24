import React from 'react';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #4CAF50;
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,.2);
`;

const Nav = styled.nav`
  ul {
    list-style-type: none;
    display: flex;
    li {
      margin: 0 15px;
      a {
        text-decoration: none;
        color: white;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const Section = styled.section`
  margin: 20px 0;
  width: 80%;
  text-align: center;
`;

const Footer = styled.footer`
  margin-top: auto;
  padding: 20px;
  width: 100%;
  background-color: #333;
  color: white;
  text-align: center;
`;

// Component
const HomePage = () => {
    return (
        <Container>
            <Header>
                <h1>Emerald Medical Group</h1>
                <Nav>
                    <ul>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#telehealth">Telehealth</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </Nav>
            </Header>
            <MainContent>
                <Section id="about">
                    <h2>About Us</h2>
                    <p>Providing patient-focused and personalized medical cannabis care in Sarasota, Florida.</p>
                </Section>
                <Section id="services">
                    <h2>Our Services</h2>
                    <p>Explore our comprehensive care plans tailored to your medical needs and wellness goals.</p>
                </Section>
                <Section id="telehealth">
                    <h2>Telehealth Services</h2>
                    <p>Access our medical marijuana consultation services from the comfort of your home.</p>
                </Section>
                <Section id="contact">
                    <h2>Contact Us</h2>
                    <p>Ready to start your journey? Call us now or schedule your appointment online.</p>
                </Section>
            </MainContent>
            <Footer>
                Emerald Medical Group &copy; {new Date().getFullYear()}
            </Footer>
        </Container>
    );
};

export default HomePage;
