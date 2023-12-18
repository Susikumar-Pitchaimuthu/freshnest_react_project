import "../css/topNav.css";
import freshnestWhiteLogo from "../images/Logos/freshnest-logo-white.png";
import freshnestBlackLogo from "../images/Logos/freshnest-logo-black.png";
import userPhoto from "../images/User/Susikumar.jpg";

function TopNav() {
  return (
    <div className="top-nav-div-container">
      <div className="top-nav-inside-div-container">
        {/* Logo div */}
        <div className="logo-div">
          <img
            className="freshnest-logo-image"
            src={freshnestBlackLogo}
            alt="logo-div"
          />
        </div>
        {/* search bar */}
        <div class="search-container">
          <form action="/search" method="GET" id="top-nav-search-bar-form">
            <div class="input-group">
              <input
                type="text"
                class="search-bar"
                name="q"
                aria-label="Search"
                aria-describedby="search-icon"
              />
              <div class="input-group-append">
                <span class="input-group-text" id="search-icon">
                  <i class="bi bi-search"></i>
                  <span>Search</span>
                </span>
              </div>
            </div>
          </form>
        </div>

        {/* User profile container */}

        <div className="user-profile-container">
          <div className="user-profile-inside-div-container">
            <div className="user-name-div">
              <p>Susikumar Pitchaimuthu</p>
            </div>
            <div className="user-profile-image-div">
              <img
                className="user-profile-photo"
                src={userPhoto}
                alt="profile-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
