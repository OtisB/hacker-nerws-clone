import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="orange-line"></div>
        <p className="application">Applications are open for YC Winter 2023</p>
        <div className="footer-container">
          <div>
            <a href="https://news.ycombinator.com/newsguidelines.html">
              Guidelines |
            </a>
          </div>
          <div>
            <a href="https://news.ycombinator.com/newsfaq.html">FAQ |</a>
          </div>
          <div>
            <a href="https://news.ycombinator.com/lists">Lists |</a>
          </div>
          <div>
            <a href="https://github.com/HackerNews/API">API |</a>
          </div>
          <div>
            <a href="https://news.ycombinator.com/security.html">Security |</a>
          </div>
          <div>
            <a href="https://www.ycombinator.com/legal/">Legal |</a>
          </div>
          <div>
            <a href="https://www.ycombinator.com/apply/">Apply to YC |</a>
          </div>
          <div>
            <a href="https://www.ycombinator.com/apply/">Contact</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
