import "../css/topNav.css";
// import freshnestWhiteLogo from "../images/Logos/freshnest-logo-white.png";
import freshnestBlackLogo from "../images/Logos/freshnest-logo-black.png";

function TopNav() {
  return (
    <div className="top-nav-div-container">
      <div className="top-nav-inside-div-container">
        {/* Logo div */}
        <div className="logo-div">
          <img src={freshnestBlackLogo} alt="logo-div" />
        </div>
        {/* search bar */}
        <div class="search-container">
          <input type="text" id="searchInput" placeholder="Search..." />
          <i class="bi bi-search"></i>
        </div>

        {/* User profile container */}

        <div className="user-profile-container">
          <div className="user-profile-inside-div-container">
            <div className="user-name-div">
              <p>Susikumar Pitchaimuthu</p>
            </div>
            <div className="user-profile-image-div">
              <img src="" alt="profile-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
