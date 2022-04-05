import React from "react";

const members = [
  {
    id: 1,
    name: "Averi Passmore",
    gitHub: "https://github.com/averipassmore",
    linkedIn: "https://github.com/averipassmore",
    img: "https://ca.slack-edge.com/T024FPYBQ-U02TW4T0K6U-eb13764eee63-512",
  },
  {
    id: 2,
    name: "Ferhan Syed",
    gitHub: "https://github.com/hanfer10",
    linkedIn: "https://github.com/hanfer10",
    img: "https://ca.slack-edge.com/T024FPYBQ-U02SRPVTKF1-7af5afb4e082-512",
  },
  {
    id: 3,
    name: "Kathia Villavicencio",
    gitHub: "https://github.com/kathia83",
    linkedIn: "https://www.linkedin.com/in/kathia-v-3863a047/",
    img: "https://ca.slack-edge.com/T024FPYBQ-U02T6CRC9B4-707c82cd8900-512",
  },
  {
    id: 4,
    name: "Oscar Rolf",
    gitHub: "https://github.com/oscareng",
    linkedIn: "https://github.com/oscareng",
    img: "HappyFaceSmiling.png",
  },
];

function About() {
  return (
    <div className="about_container">
      {/* First container */}
      <div>
        <h4 className="about-title">Free Swan</h4>
        <img className="color_image " src={"image1.jpg"} alt="" />
        <h4 className="about-subtitle">About Us</h4>
        <p className="about-detail">
          <strong></strong>
          The inspiration behind the app came from our need to feel happy or
          chill during the day while working, working out, cooking, or any daily
          activity.
        </p>
        <p className="about-detail">
          We love music and we hope people could enjoy the app. Found a bug?
          Please contact us through Linkedin!
        </p>
        <p className="about-detail">We look forward to hearing from you!</p>
      </div>

      {/* Second container */}
      <div>
        <h4 className="about-subtitle"> Team Members</h4>
        <div className="about-photo-gallery">
          {members.map((member) => (
            <div className="sub_container" key={member.id}>
              <img
                className="about_team_member_picture"
                src={member.img}
                alt=""
              />
              <p>{member.name}</p>
              <div className="links">
                <a
                  href={member.gitHub}
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
                  href={member.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="linkedin"
                    src={
                      "https://cdn-icons-png.flaticon.com/512/174/174857.png"
                    }
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
