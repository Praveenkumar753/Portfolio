import React from 'react';
import home from './images/myphoto1.png';

const Home = () => {
  return (
    <section className="home bd-grid" id="home">
      <div className="home__data">
        <h1 className="home__title">
          Hi,<br />I am <span className="home__title-color">Praveen Kumar</span>
          <br />Developer
        </h1>

        <a href="#" className="button">
          Contact
        </a>
      </div>

      <div className="home__social">
        <a href="#" className="home__social-icon">
          <i className="bx bxl-linkedin"></i>
        </a>
        <a href="#" className="home__social-icon">
          <i className="bx bxl-behance"></i>
        </a>
        <a href="#" className="home__social-icon">
          <i className="bx bxl-github"></i>
        </a>
      </div>

      <div className="home__img">
        <svg
          className="home__blob"
          viewBox="0 0 500 490"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
          <image className="home__blob-img" x="95" y="15" xlinkHref={home} alt="" />
        </svg>
      </div>
    </section>
  );
};

export default Home;
