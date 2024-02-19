import html from "../assets/images/skills/html.svg";
import photoshop from "../assets/images/skills/photoshop.svg";
import css from "../assets/images/skills/css.svg";
import javascript from "../assets/images/skills/javascript.svg";
import react from "../assets/images/skills/react.svg";
import bootstrap from "../assets/images/skills/bootstrap.svg";
import vitejs from "../assets/images/skills/vitejs.svg";
import git from "../assets/images/skills/git.svg";
import wordpress from "../assets/images/skills/wordpress.svg";
import figma from "../assets/images/skills/figma.svg";
import markdown from "../assets/images/skills/markdown.svg";
import microsoftoffice from "../assets/images/skills/microsoftoffice.svg";
import canva from "../assets/images/skills/canva.svg";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "html":
      return html;
    case "photoshop":
      return photoshop;
    case "css":
      return css;
    case "javascript":
      return javascript;
    case "react":
      return react;
    case "bootstrap":
      return bootstrap;
    case "vitejs":
      return vitejs;
    case "git":
      return git;
    case "wordpress":
      return wordpress;
    case "figma":
      return figma;
    case "markdown":
      return markdown;
    case "microsoft office":
      return microsoftoffice;
    case "canva":
      return canva;
    default:
      break;
  }
};
