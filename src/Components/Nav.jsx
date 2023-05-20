import HowTo from "./HowTo";
import Title from "./Title";

function Nav() {
  return (
    <nav className="navbar bg-body-tertiary mx-3">
      <div className="container"></div>
      <Title />
      <HowTo />
    </nav>
  );
}

export default Nav;
