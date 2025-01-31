import react from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <nav>
      <h1>Mark's Music App</h1>
      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        <FontAwesomeIcon icon={faMusic} />
        <span>Library</span>
      </button>
    </nav>
  );
};

export default Nav;