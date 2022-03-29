import React from "react";

function About() {
  return (
    <div className="about">
      <div className="title_about">About us</div>
      <div className="about_container">
        <img
          className="avatar"
          src="https://avatars.githubusercontent.com/u/101672012?s=400&u=06c0426ec9792569e1dbdab5259cb69eb955c372&v=4"
          alt=""
        />
        <div className="paragraph">
          <p>
            <strong>Catch A Vibe</strong> is an App that make you feel better.
          </p>
          <p>
            The inspiration behind the app came from our need to feel happy or
            chill during the day while working, working out, cooking or any
            daily activity.
          </p>
        </div>
      </div>

      <p className="title_about"> The Team Members</p>
      <div className="pictures_container">
        <div className="sub_container">
          <img
            className="team_member_picture"
            src="https://www.istockphoto.com/photo/drawing-of-a-happy-smiling-emoticon-on-a-yellow-paper-and-white-background-gm1171346911-324483391?utm_campaign=srp_photos_inline&utm_content=https%3A%2F%2Fwww.pexels.com%2Fes-es%2Fbuscar%2Fhappy%2520face%2520emoticon%2F&utm_medium=affiliate&utm_source=pexels&utm_term=happy%20face%20emoticon"
            alt=""
          />
          <p>Averi Passmore</p>
        </div>
        <div className="sub_container">
          <img
            className="team_member_picture"
            src="https://www.istockphoto.com/photo/drawing-of-a-happy-smiling-emoticon-on-a-yellow-paper-and-white-background-gm1171346911-324483391?utm_campaign=srp_photos_inline&utm_content=https%3A%2F%2Fwww.pexels.com%2Fes-es%2Fbuscar%2Fhappy%2520face%2520emoticon%2F&utm_medium=affiliate&utm_source=pexels&utm_term=happy%20face%20emoticon"
            alt=""
          />
          <p>Ferhan Syed</p>
        </div>
        <div className="sub_container">
          <img
            className="team_member_picture"
            src="https://www.istockphoto.com/photo/drawing-of-a-happy-smiling-emoticon-on-a-yellow-paper-and-white-background-gm1171346911-324483391?utm_campaign=srp_photos_inline&utm_content=https%3A%2F%2Fwww.pexels.com%2Fes-es%2Fbuscar%2Fhappy%2520face%2520emoticon%2F&utm_medium=affiliate&utm_source=pexels&utm_term=happy%20face%20emoticon"
            alt=""
          />
          <p>Kathia Villavicencio</p>
        </div>
        <div className="sub_container">
          <img
            className="team_member_picture"
            src={require("../../public/HappyFaceSmiling.png")}
            alt=""
          />
          <p>Oscar Rolf</p>
        </div>
      </div>
    </div>
  );
}

export default About;
