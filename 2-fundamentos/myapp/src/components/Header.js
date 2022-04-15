import Welcome from "./Welcome";
import Joker from "./Joker";

const Header = () => {

  return (
    <header>
      <h1 className="title">myApp</h1>
      <Welcome />
      <Joker />
    </header>
  );
};

export default Header;