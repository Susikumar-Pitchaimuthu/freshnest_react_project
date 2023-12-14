import "../css/nav.css";

import "../images/Logos/fresh-nest-logo-white.png";

let navContentObject = [
  { feature: "Home", "feature-image": "bi bi-house-door" },
  { feature: "Chat", "feature-image": "bi bi-chat-text" },
  { feature: "Still", "feature-image": "bi bi-camera" },
  { feature: "Invite", "feature-image": "bi bi-gift" },
  {
    feature: "Notification",
    "feature-image": "bi bi-bell",
  },
];

let afterClickedContentObject = [
  {
    feature: "Home",
    "feature-image": "bi bi-house-door-fill",
  },
  {
    feature: "Chat",
    "feature-image": "bi bi-chat-text-fill",
  },
  {
    feature: "Still",
    "feature-image": "bi bi-camera-fill",
  },
  {
    feature: "Invite",
    "feature-image": "bi bi-gift-fill",
  },
  {
    feature: "Notification",
    "feature-image": "bi bi-bell-fill",
  },
];

function Nav() {
  return (
    <nav className="after-signin-side-nav-bar">
      <div className="after-signin-side-nav-container">
        <div className="after-signin-inside-div-container">
          {/* nav content */}
          {navContentObject.map((item, index) => (
            <div className="nav-content-div" key={index}>
              <div className="nav-content-inside-div">
                <i className={item["feature-image"]}></i>
                <h5 className="nav-content-para">{item.feature}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
