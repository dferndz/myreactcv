import React from "react";
import { Link } from "react-router-dom";
import { Container, Card, Nav, Button } from "react-bootstrap";
import styled from "styled-components";
import ProfileImage from "../assets/profile.png";
import { CV } from "../types";
import { social } from "../theme/SocialIcons";
import GoogleBtn from "../assets/google_btn.png";

const NavWrapper = styled.div`
  padding: 50px;
  a {
    color: white;
    font-size: 25px;
    margin-bottom: 20px;
  }
  a:hover {
    font-weight: bold;
    text-decoration: none;
  }

  a.active {
    font-weight: bold;
  }
`;

const FooterWrapper = styled.div`
  margin-top: 20px;

  a {
    color: white;
    margin-right: 10px;
    margin-bottom: 20px;
  }
  a:hover {
    font-weight: bold;
    text-decoration: none;
  }

  a.social-icon {
    font-size: 30px;
  }
`;

type Props = {
  cv: CV;
  logIn: () => void;
  logOut: () => void;
  auth: boolean;
};

const SideBar = (props: Props) => {
  const { cv } = props;
  return (
    <Container className="bg-success text-white" style={{ minHeight: "100vh" }}>
      <Link to="/">
        <img
          className="img img-fluid rounded-circle"
          style={{ transform: "scale(0.7)" }}
          src={cv.profile.img}
          alt=""
        />
      </Link>

      <div className="d-flex justify-content-center">
        <h3>
          <strong>{`${cv.profile.firstName} ${cv.profile.lastName}`}</strong>
        </h3>
      </div>
      <div className="d-flex justify-content-center">
        <h4>{cv.profile.bio}</h4>
      </div>

      <NavWrapper>
        <Nav className="flex-column text-white">
          <Link to="/about">About </Link>
          {cv.projects || props.auth ? (
            <Link to="/projects">Projects </Link>
          ) : null}
          <Link to="/resume">Resume </Link>
        </Nav>
      </NavWrapper>

      <FooterWrapper>
        <div className="d-flex justify-content-center">
          {props.cv.social &&
            Object.keys(props.cv.social).map((element: any, key: any) => (
              <a
                className="social-icon"
                href={props.cv.social[element]}
                key={key}
              >
                {social[element] ? social[element].img : element}
              </a>
            ))}
        </div>

        <div className="d-flex justify-content-center">
          <p>
            {`© ${cv.profile.firstName} ${
              cv.profile.lastName
            } ${new Date().getFullYear()}`}
          </p>
        </div>
        <div className="d-flex justify-content-center">
          {props.auth ? (
            <Button onClick={props.logOut}>Sign out</Button>
          ) : (
            <img
              onClick={props.logIn}
              className="img img-fluid btn"
              src={GoogleBtn}
            />
          )}
        </div>
      </FooterWrapper>
    </Container>
  );
};

export default SideBar;
