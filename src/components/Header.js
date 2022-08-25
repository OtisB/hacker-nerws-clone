import "./Header.css";

function Header() {
  return (
    <>
      <div className="nav-bar">
        <div className="items-container">
          <div className="nav-item1">
            <div>Y</div>Hacker News
          </div>
          <div>
            <a href="https://news.ycombinator.com/newest">new |</a>
          </div>
          <div>
            <a href="https://news.ycombinator.com/front">past |</a>
          </div>
          <div>
            <a href="https://news.ycombinator.com/newcomments">comments |</a>
          </div>
          <div>
            <a href="https://news.ycombinator.com/ask">ask |</a>
          </div>
          <div>
            <a href="https://news.ycombinator.com/show">show |</a>
          </div>
          <div>
            <a href="https://news.ycombinator.com/jobs">jobs |</a>
          </div>
          <div>
            <a href="https://news.ycombinator.com/submit">submit</a>
          </div>
        </div>
        <div className="login">
          <div>
            <a href="https://news.ycombinator.com/login?goto=jobs">login</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
