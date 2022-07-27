import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import ProgressBar from "./ProgressBar";
import "./skills.css";

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: "100vw",
    marginTop: "3em",
    marginBottom: "auto",
    justifyContent: "center",
    display: "flex",
  },
}));

const Skills = () => {
  const classes = useStyles();
  const [skills, setSkills] = useState([
    {
      id: 1,
      name: "Python",
      value: 50,
      icon: "fab fa-python" + " skillIcon",
      name2: "C",
      value2: 40,
      icon2: "fa-s fa-c" + " skillIcon",
    },
    {
      id: 2,
      name: "React JS",
      value: 70,
      icon: "fab fa-react" + " skillIcon",
      name2: "Javascript",
      value2: 50,
      icon2: "fab fa-js" + " skillIcon",
    },
    {
      id: 3,
      name: "MySQL",
      value: 60,
      icon: "fas fa-database" + " skillIcon",
      name2: "Flask",
      value2: 40,
      icon2: "fas fa-flask" + " skillIcon",
    },
  ]);

  return (
    <section id="skills">
      <Container component="main" className={classes.main} maxWidth="md">
        <div className="skills">
          <h2>
            <TextDecrypt text={"Skills"} />
          </h2>
          {skills.map((item) => {
            return (
              <div className="skill_content_wrapper" key={item.id}>
                <div className="skillContainer">
                  <i className={item.icon}></i>
                  <h3 className="skill-title">
                    <TextDecrypt text={item.name} />
                  </h3>
                  <ProgressBar progress={item.value} color={item.color} />
                </div>
                <div className="skillContainer">
                  <i className={item.icon2}></i>
                  <h3 className="skill-title">
                    <TextDecrypt text={item.name2} />
                  </h3>
                  <ProgressBar progress={item.value2} color={item.color2} />
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Skills;
