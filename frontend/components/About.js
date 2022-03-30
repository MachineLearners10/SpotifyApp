import React from "react";

function About() {
  return (
    <div className="about_container">
      {/* First container */}
      <div>
        <h4 className="about-title">Catch A Vibe</h4>
        <img className="color_image " src={"image1.jpg"} alt="" />
        <h4 className="about-subtitle">About Us</h4>
        <p className="about-detail">
          <strong>Catch A Vibe</strong> is an App that makes you feel better.
          The inspiration behind the app came from our need to feel happy or
          chill during the day while working, working out, cooking or any daily
          activity.
        </p>
        <p className="about-detail">
          We love music and we hope people could enjoy the app. For any
          questions please contact us through our Linkedin account.
        </p>
        <p className="about-detail">We look forward to hearing from you!</p>
      </div>

      {/* Second container */}
      <div>
        <h4 className="about-subtitle"> Team Members</h4>
        <div className="about-photo-gallery">
          <div className="sub_container">
            <img
              className="about_team_member_picture"
              src={
                "https://ca.slack-edge.com/T024FPYBQ-U02TW4T0K6U-eb13764eee63-512"
              }
              alt=""
            />
            <p>Averi Passmore</p>
            <div className="links">
              <a
                href="https://github.com/averipassmore"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="github"
                  src={
                    "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                  }
                />
              </a>
              <a
                href="https://github.com/averipassmore"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="linkedin"
                  src={"https://cdn-icons-png.flaticon.com/512/174/174857.png"}
                />
              </a>
            </div>
          </div>
          <div className="sub_container">
            <img
              className="about_team_member_picture"
              src={
                "https://ca.slack-edge.com/T024FPYBQ-U02SRPVTKF1-7af5afb4e082-512"
              }
              alt=""
            />
            <p>Ferhan Syed</p>
            <div className="links">
              <a
                href="https://github.com/hanfer10"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="github"
                  src={
                    "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                  }
                />
              </a>
              <a
                href="https://github.com/hanfer10"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="linkedin"
                  src={"https://cdn-icons-png.flaticon.com/512/174/174857.png"}
                />
              </a>
            </div>
          </div>
          <div className="sub_container">
            <img
              className="about_team_member_picture"
              src={
                "https://ca.slack-edge.com/T024FPYBQ-U02T6CRC9B4-707c82cd8900-512"
              }
              alt=""
            />
            <p>Kathia Villavicencio</p>
            <div className="links">
              <a
                href="https://github.com/kathia83"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="github"
                  src={
                    "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                  }
                />
              </a>
              <a
                href="https://www.linkedin.com/in/kathia-v-3863a047/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="linkedin"
                  src={"https://cdn-icons-png.flaticon.com/512/174/174857.png"}
                />
              </a>
            </div>
          </div>
          <div className="sub_container">
            <img
              className="about_team_member_picture"
              src={"HappyFaceSmiling.png"}
              alt=""
            />
            <p>Oscar Rolf</p>
            <div className="links">
              <a
                href="https://github.com/oscareng"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="github"
                  src={
                    "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                  }
                />
              </a>
              <a
                href="https://github.com/oscareng"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="linkedin"
                  src={"https://cdn-icons-png.flaticon.com/512/174/174857.png"}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
