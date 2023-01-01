import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  background-size: cover;
  background: white;
`;

const Nav = styled.nav`
  box-shadow: 5px 5px 15px #bef4ff36;
  display: flex;
  height: 80px;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
  background-color: #2a3e3e39;
  transition: ease-in-out 120ms;
  border-radius: 2rem;
  @media (prefers-color-scheme: dark) {
    box-shadow: 0px 0px 2px #afafaf6b;
    background-color: #3c585839;
  }
  &:hover {
    background-color: #88bbd6;
    border-radius: 3rem;
    @media (prefers-color-scheme: dark) {
      box-shadow: 0px 0px 1px #4848486b;
      background-color: #3c585839;
    }
  }
  .logo {
    transition: ease-in-out 0.15s;
    height: 40px;
    img {
      height: 100%;
    }
    &:hover {
      transform: scale(1.05);
      box-shadow: 0px 0px 5px #00999973;
    }
  }

  .button-container {
    transition: ease-in-out 0.15s;
    display: flex;
    column-gap: 1rem;
    .button {
      border-radius: 100vmax;
      border: none;
      min-width: 6.5rem;
      font-weight: 600;
      font-size: 16px;
      text-decoration: none;
      color: #009999;
      padding: 10px 12px;
      margin-right: 12px;
      cursor: pointer;
      transition: cubic-bezier(0.175, 0.885, 0.32, 1.275);
      &:hover {
        transform: scale(1.015);
        box-shadow: 2px 2px 2px #2a3e3e39;
        @media (prefers-color-scheme: dark) {
          box-shadow: 2px 2px 2px #b5b5b539;
        }
      }
    }
  }
`;
const Join = styled.button``;  // this inherits from .button
const LoginBtn = styled.button``;  // this inherits from .button

const Hero = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  
  h1 {
    padding-left: 15px;
    padding-right: 15px;
    z-index: 1;
    color: #88bbd6;
    font-size: 60px;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 8px;
    line-height: 60px;
    span {
      font-size: 40px;
      font-weight: 300;
      letter-spacing: 10px;
    }
  }
`;
const HeroImg = styled.img`
  padding-left: 45px;
  padding-right: 25px;
  width: 90%;
  height: 90%;
  top: 0;
  left: 0;
  object-fit: contain;
`;

const Section = styled.section`
  height: 90%;
  width: 100%;
`;

const Form = styled.div`
  width: 50rem;
  max-width: 100%;
  background-color: #ffffff;
  box-shadow: 0px 0px 2px #1e1e1e66;
  border-radius: 2rem;
  margin: 1rem 3rem 3rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 3rem;
  @media (prefers-color-scheme: dark) {
    background-color: #aaaaaa33;
    box-shadow: 0px 0px 5px #d5d5d554;
  }
`;

const Google = styled.button`
  background-color: #f1f1f1;
  border-radius: 100vmax;
  border: none;
  width: 15rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  column-gap: 2rem;
  .icon {
    width: 2rem;
    height: 2rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const Close = styled.button`
  display: flex;
  width: 20px;
  justify-content: center;
  margin-left: 80%;
  margin-top: 1rem;
`;
export {
  Container,
  Nav,
  Join,
  LoginBtn,
  Section,
  Hero,
  HeroImg,
  Form,
  Google,
  Close
};
