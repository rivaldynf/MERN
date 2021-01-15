import React from "react";

import Button from "elements/Button";
import BrandIcon from "parts/IconText";

export default function Header(props) {
  const getNavLinkClass = path => {
    return props.location.pathname === path ? " active" : "";
  };

  return (
    <header className="spacing-sm">
      <div class="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <BrandIcon />
          <div className="collapse navbar-collapse">
            {/* ordered list */}
            <ul className="navbar-nav ml-auto">
              {/* Penanda */}
              {/* Home */}
              <li className={`nav-item${getNavLinkClass("/")}`}>
                <Button className="nav-link" type="link" href="">
                  Home
                </Button>
              </li>

              {/* Browse By */}
              <li className={`nav-item${getNavLinkClass("/browse-by")}`}>
                <Button className="nav-link" type="link" href="/browse-by">
                  Browse By
                </Button>
              </li>

              {/* Stories */}
              <li className={`nav-item${getNavLinkClass("/stories")}`}>
                <Button className="nav-link" type="link" href="/stories">
                  Stories
                </Button>
              </li>

              {/* Agents */}
              <li className={`nav-item${getNavLinkClass("/agents")}`}>
                <Button className="nav-link" type="link" href="/agents">
                  Agents
                </Button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
