import Cursor from "../../components/Cursor/Cursor";
import Main from "../../components/Main/Main";
import Introduction from "../Main/Introduction";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Link to="/">
      <div>
        <Introduction />
        <Cursor />
        <Main />
      </div>
    </Link>
  );
}

export default Home;
