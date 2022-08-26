import "./Header.css";

function Header() {
  return (
    <>
      <div className="nav-bar">
        <div className="items-container">
          <div className="wrapper-nav-item1">
            <div className="white-y">Y</div>
            <div className="nav-item1">Hacker News</div>
          </div>
          <div className="wrapper-nav-items">
            <div>
              <a href="https://news.ycombinator.com/newest">new</a>
            </div>
            <div>|</div>
            <div>
              <a href="https://news.ycombinator.com/front">past</a>
            </div>
            <div>|</div>
            <div>
              <a href="https://news.ycombinator.com/newcomments">comments</a>
            </div>
            <div>|</div>
            <div>
              <a href="https://news.ycombinator.com/ask">ask</a>
            </div>
            <div>|</div>
            <div>
              <a href="https://news.ycombinator.com/show">show</a>
            </div>
            <div>|</div>
            <div>
              <a href="https://news.ycombinator.com/jobs">jobs</a>
            </div>
            <div>|</div>
            <div>
              <a href="https://news.ycombinator.com/submit">submit</a>
            </div>
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
