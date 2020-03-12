import React from "react";

const AboutWebsite = () => {
  return (
    <main className="container" style={{ background: "white" }}>
      <div className="row">
        <div className="col-md-8">
          <h1>About Website</h1>
          <h3>Intended User's</h3>
          <p>
            Employers. Also, family and friends so that they have some idea of
            what I do professionally. Its easier to browse a website than to
            look at millions of lines of back-end server code that I have
            developed in my career.
          </p>
          <h3>Register</h3>
          <p>
            You can't do much if you don't Register. There are no worries about
            privacy since you can enter a bogus email. But, remember your
            password if you Logout, because you will need it to Login again.
          </p>
          <h3>Using Website</h3>
          <p>
            Navigate and click on what ever you want, this website is intuitive.
            Things you can do:
            <ul>
              <li>Display Movies of a particular Genre</li>
              <li>Add a Movie</li>
              <li>Seach for a Movie</li>
              <li>Paginate through the Movies</li>
              <li>
                Order the Movie List by Title, Genre, Number in Stock, and
                Rating
              </li>
              <li>Click on your User Icon/Name to see your Profile</li>
              <li>
                <b>As Admin</b>, Delete a Movie{" "}
                <i>(Contact me to get Admin priviledge)</i>
              </li>
            </ul>
          </p>
          <h3>Website Technologies</h3>
          <p>
            This website may seem fundamental, but it packs sought after
            technology. This website is a SPA (Single Page Application) written
            in ReactJS. It uses Bootstrap components, Font Awesome, JSON Web
            Tokens (JWT), Axios, as well as other software in package.json
            depencies from the source code for this website that is stored in
            GitHub at URL: https://github.com/jerry-carney/jerry-movie <br />
            <br />
            The middle-ware CRUD API was coded in Node and Express. The back-end
            database is MongoDB.
          </p>
        </div>

        <div className="col-md-4">
          <div className="card">
            <img
              className="card-img-top"
              src="https://i.imgur.com/BPoUjpV.jpg"
              alt=""
            ></img>
            <div className="card-body">
              <h5 className="card-title">Author</h5>
              <p className="card-text">
                Jerry Carney
                <br />
                Senior Software Engineer
              </p>
              <a
                className="nav-link"
                href="https://www.linkedin.com/in/jerry-carney-72266958/"
              >
                Jerry's LinkedIn profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutWebsite;
