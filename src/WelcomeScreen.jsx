import React from "react";
import "./WelcomeScreen.css";
import { Container } from 'react-bootstrap';

function WelcomeScreen(props) {

  return props.showWelcomeScreen ? (
    <div className="WelcomeScreen">
<<<<<<< Updated upstream
      <h1>Welcome to the Meet app</h1>
      <h4>
        Log in to see upcoming events around the world for full-stack developers
      </h4>
      <div className="button-container" align="center">
        <div className="google-btn">
          <div className="google-icon-wrapper">
            <img
              className="google-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Google Sign-In"
            />
          </div>
          <button
            onClick={() => {
              props.getAccessToken();
            }}
            rel="nofollow noopener"
            className="btn-text"
          >Sign In with Google
          </button>
        </div>
      </div>
      <a
        href="https://kittekat14.github.io/meet-app/Meet-Privacy-Policy.html"
        rel="nofollow noopener"
      >
        Privacy policy
      </a>
=======
      <Container fluid>
        <h1>Welcome to the Meet app</h1>
        <h4>
          Log in to see upcoming events around the world for full-stack
          developers
        </h4>
        <div className="button_cont" align="center">
          <div class="google-btn">
            <div class="google-icon-wrapper">
              <img
                class="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="Google sign-in"
              />
            </div>
            <button
              onClick={() => {
                props.getAccessToken();
              }}
              rel="nofollow noopener"
              class="btn-text"
            >
              Sign in with google
            </button>
          </div>
        </div>
        <a
          href="https://kittekat14.github.io/meet-app/Meet-Privacy-Policy.html"
          rel="nofollow noopener"
        >
          Privacy policy
        </a>
      </Container>
>>>>>>> Stashed changes
    </div>
  ) : null;
}

export default WelcomeScreen;
