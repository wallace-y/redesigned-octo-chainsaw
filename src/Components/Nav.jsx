import HowTo from "./HowTo";
import Title from "./Title";

function Nav() {
  return (
    <nav class="navbar bg-body-tertiary mx-3">
      <div class="container"></div>
      <Title />
      <HowTo />
    </nav>
  );
}

export default Nav;
