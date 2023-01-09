import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <img
        src="https://i.giphy.com/media/3o7aCTPPm4OHfRLSH6/giphy.webp"
        alt="page not found"
      ></img>
      <p>
        Don't worry! Bob is really good with navigation:{" "}
        <Link to="/">Follow Bob</Link>
      </p>
    </div>
  );
};

export default NotFound;
