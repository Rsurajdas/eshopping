import { Link } from "react-router-dom";
import "./ErrorPage.css";
import MainNav from "./nav/MainNav";

const ErrorPage = () => {
  return (
    <>
      <MainNav />
      <div className="error-wrap">
        <div className="gif">
          <img src="https://i.postimg.cc/2yrFyxKv/giphy.gif" alt="gif_ing" />
        </div>
        <div className="content">
          <h1 className="main-heading">This page is gone.</h1>
          <p>
            ...maybe the page you're looking for is not found or never existed.
          </p>
          <Link to="/">
            <button>
              Back to home <i className="far fa-hand-point-right"></i>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
