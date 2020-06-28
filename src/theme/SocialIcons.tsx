import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

interface IDictionary {
  [index: string]: any;
}

export const social = {
  facebook: {
    title: "Facebook",
    img: <FaFacebook />,
  },
  twitter: {
    title: "Twitter",
    img: <FaTwitter />,
  },
  linkedin: {
    title: "LinkedIn",
    img: <FaLinkedin />,
  },
  github: {
    title: "Github",
    img: <FaGithub />,
  },
} as IDictionary;
