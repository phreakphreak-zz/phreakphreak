import { PATHS } from "../config/index.js";

const sizeIcons = {
  width: "20px",
  height: "20px",
};

const profiles = [
  {
    name: "instagram",
    link: "http://instagram.com",
    user: "phreakphreak_",
    icon: `${PATHS.SOCIALS}/instagram.svg`,
  },
  {
    name: "twitter",
    link: "http://twitter.com",
    user: "phreakphreak",
    icon: `${PATHS.SOCIALS}/twitter.svg`,
  },
  {
    name: "facebook",
    link: "http://facebook.com",
    user: "phreakphreak",
    icon: `${PATHS.SOCIALS}/facebook.svg`,
  },
  {
    name: "spotify",
    link: "https://open.spotify.com/user",
    user: "je4mx7bqm5wotu5wx6ecqo6ym?si=0286edfe9c9b42f3",
    icon: `${PATHS.SOCIALS}/spotify.svg`,
  },
  {
    name: "twitch",
    link: "https://twitch.tv",
    user: "phreakphreak",
    icon: `${PATHS.SOCIALS}/twitch.svg`,
  },
];

const links = profiles
  .map((profile) => {
    return `<a href="${profile.link}/${profile.user}" target="_blank">
      <img src="${profile.icon}" alt="phreakphreak" height="${sizeIcons.height}" width="${sizeIcons.width}">
    </a>`;
  })
  .join("\n\t");

const socials = `<p align="center">\n\t${links}\n</p>`;

export default socials;
