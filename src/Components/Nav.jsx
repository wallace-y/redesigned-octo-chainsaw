import HowTo from "./HowTo";
import Title from "./Title";

function Nav() {
  return (
    <nav className="navbar bg-body-tertiary mx-3">
      <div className="container">
        <Title />
        <HowTo />
      </div>
    </nav>
  );
}

export default Nav;
