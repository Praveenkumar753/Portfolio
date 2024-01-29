// Header.js

import React from 'react';

const Header = () => {
  return (
    <>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="stylesheet" href="assets/css/styles.css" />

        {/* =====BOX ICONS===== */}
        <link
          href="https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css"
          rel="stylesheet"
        />

        <title>Portfolio website complete</title>
      </head>

      <body>
        {/* ===== HEADER =====*/}
        <header className="l-header">
          <nav className="nav bd-grid">
            <div>
              <a href="#" className="nav__logo">
                Praveen
              </a>
            </div>

            <div className="nav__menu" id="nav-menu">
              <ul className="nav__list">
                <li className="nav__item">
                  <a href="#home" className="nav__link active-link">
                    Home
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#about" className="nav__link">
                    About
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#skills" className="nav__link">
                    Skills
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#Projects" className="nav__link">
                    Projects
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#contact" className="nav__link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="nav__toggle" id="nav-toggle">
              <i className="bx bx-menu"></i>
            </div>
          </nav>
        </header>

        <main className="l-main">
          {/* Your main content goes here */}
        </main>
      </body>
    </>
  );
};

export default Header;
