import React from "react";
import PanoramaIcon from "@mui/icons-material/Panorama";
import ReactLogo from "../../assests/react__logo.png";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import SchoolIcon from "@mui/icons-material/School";
import LanguageIcon from "@mui/icons-material/Language";
import { FaReact } from "react-icons/fa";
const serviceList = [
  {
    image: <LanguageIcon fontSize='large' style={{ fontSize: "5rem" }} />,
    skill: "Web Development",
    description:
      "A very professional front-end web developer with enthusiasm for Full Stack Web Development",
  },
  {
    image: <PanoramaIcon fontSize='large' style={{ fontSize: "5rem" }} />,
    skill: "Pixel Perfect",
    description:
      "All my works are pixel perfect and they match design with 100% conversion.",
  },
  {
    image: <TrackChangesIcon fontSize='large' style={{ fontSize: "5rem" }} />,
    skill: "Responsiveness",
    description:
      "All my works are responsive on all screensizes from small to extra large screensizes.",
  },
  {
    image: <FaReact />,
    skill: "ReactJS",
    description:
      "I also come with sound knowledge and experience in Reactjs and its important plugins.",
  },
  {
    image: <DesignServicesIcon fontSize='large' style={{ fontSize: "5rem" }} />,
    skill: "More Than Design",
    description:
      "I also don't just do the design part of front end, I develop using Javascript, Jquery, APIs and more.",
  },
  {
    image: <SchoolIcon fontSize='large' style={{ fontSize: "5rem" }} />,
    skill: "Learning Culture",
    description:
      "I never settle for less. I'm always looking to learn new technologies and quickly too.",
  },
];
export default serviceList;
