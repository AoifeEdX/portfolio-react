import Typewriter from "typewriter-effect";
import "../pages/style.css";

{/* Typewriter style animation for the homepage */}
function Text() {
  return (
    <Typewriter
      options={{
        strings: [
          "React.Js Developer",
          "UI/UX Developer",
          "JavaScript Developer",
          "Front End Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
      }}
    />
  )
}

export default Text