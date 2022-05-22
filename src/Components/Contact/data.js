import React from "react";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const data = [
  {
    icon: <MarkunreadIcon style={{ fontSize: "3rem" }} />,
    name: "EMAIL",
    address: "geniuswealthb@gmail.com",
    link: "mailto:geniuswealthb@gmail.com",
  },
  {
    icon: <WhatsAppIcon style={{ color: "green", fontSize: "3rem" }} />,
    name: "WhatsApp",
    address: "+2348147576669",
    link: "https://web.whatsapp.com/send?phone?+2347016966965",
  },
  {
    icon: <LinkedInIcon style={{ color: "blue", fontSize: "3rem" }} />,
    name: "LinkedIn",
    address: "https://linkedin.com",
    link: "https://www.linkedin.com/in/ezekiel-udiomuno-b14539150/",
  },
];

export default data;
