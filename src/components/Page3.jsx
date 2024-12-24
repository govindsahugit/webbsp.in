import React from "react";

const Page3 = () => {
  const handleOpenWebsite = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div id="page3">
      <div>
        <div className="sample-container">
          <div className="sample-projects">
            <div className="samples">
              <div className="sample-h1">
                <h1>WORK </h1>
                <h1>SAMPLES</h1>
              </div>
              <h2 className="note-txt">
                NOTE: Websites can take time to fully load, and some elements
                may not load on a few devices because we are using 3D stuff that
                takes time to load on a free website host. It won't happen when
                you host your site on a fast server.{" "}
              </h2>
              <div className="sample">
                <div
                  className="sample-img"
                  onClick={() => {
                    handleOpenWebsite("https://govindsahu.netlify.app");
                  }}>
                  <img src="./images/portfolio-web.png" alt="" />
                </div>
                <div className="sample-content">
                  <h1>Personal Portfolio</h1>
                  <p>
                    A personal digital animated portfolio featuring a 3D PC
                    model that is rotatable in 360 degrees, creating a stunning
                    and impressive visual experience. Additionally, I have
                    incorporated various 3D elements and animations that are
                    exceptional. This portfolio is designed for developers, but
                    I am capable of creating similar portfolios for any domain.{" "}
                    <br /> <br />
                    <span
                      onClick={() => {
                        handleOpenWebsite("https://govindsahu.netlify.app");
                      }}>
                      visit
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor">
                        <path d="M18.3638 15.5355L16.9496 14.1213L18.3638 12.7071C20.3164 10.7545 20.3164 7.58866 18.3638 5.63604C16.4112 3.68341 13.2453 3.68341 11.2927 5.63604L9.87849 7.05025L8.46428 5.63604L9.87849 4.22182C12.6122 1.48815 17.0443 1.48815 19.778 4.22182C22.5117 6.95549 22.5117 11.3876 19.778 14.1213L18.3638 15.5355ZM15.5353 18.364L14.1211 19.7782C11.3875 22.5118 6.95531 22.5118 4.22164 19.7782C1.48797 17.0445 1.48797 12.6123 4.22164 9.87868L5.63585 8.46446L7.05007 9.87868L5.63585 11.2929C3.68323 13.2455 3.68323 16.4113 5.63585 18.364C7.58847 20.3166 10.7543 20.3166 12.7069 18.364L14.1211 16.9497L15.5353 18.364ZM14.8282 7.75736L16.2425 9.17157L9.17139 16.2426L7.75717 14.8284L14.8282 7.75736Z"></path>
                      </svg>
                    </span>
                  </p>
                </div>
              </div>
              <div className="sample">
                <div
                  className="sample-img"
                  onClick={() => {
                    handleOpenWebsite("https://iphonewebgi.netlify.app");
                  }}>
                  <img src="./images/iphone-web.png" alt="" />
                </div>
                <div className="sample-content">
                  <h1>iPhone 14 Pro</h1>
                  <p>
                    A website dedicated to the iPhone 14 Pro showcases a
                    stunning 3D model of the device, complemented by
                    breathtaking scrolling animations. This website does not
                    include additional features; it serves solely as a
                    demonstration of how scrolling animations can be implemented
                    and customized for various websites.
                    <br /> <br />
                    <span
                      onClick={() => {
                        handleOpenWebsite("https://iphonewebgi.netlify.app");
                      }}>
                      visit
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor">
                        <path d="M18.3638 15.5355L16.9496 14.1213L18.3638 12.7071C20.3164 10.7545 20.3164 7.58866 18.3638 5.63604C16.4112 3.68341 13.2453 3.68341 11.2927 5.63604L9.87849 7.05025L8.46428 5.63604L9.87849 4.22182C12.6122 1.48815 17.0443 1.48815 19.778 4.22182C22.5117 6.95549 22.5117 11.3876 19.778 14.1213L18.3638 15.5355ZM15.5353 18.364L14.1211 19.7782C11.3875 22.5118 6.95531 22.5118 4.22164 19.7782C1.48797 17.0445 1.48797 12.6123 4.22164 9.87868L5.63585 8.46446L7.05007 9.87868L5.63585 11.2929C3.68323 13.2455 3.68323 16.4113 5.63585 18.364C7.58847 20.3166 10.7543 20.3166 12.7069 18.364L14.1211 16.9497L15.5353 18.364ZM14.8282 7.75736L16.2425 9.17157L9.17139 16.2426L7.75717 14.8284L14.8282 7.75736Z"></path>
                      </svg>
                    </span>
                  </p>
                </div>
              </div>
              <div className="sample">
                <div
                  className="sample-img"
                  onClick={() => {
                    handleOpenWebsite("https://countriesapiearth.netlify.app");
                  }}>
                  <img src="./images/earth-web.png" alt="" />
                </div>
                <div className="sample-content">
                  <h1>Countries API</h1>
                  <p>
                    This is a standard website that retrieves country data from
                    an API and presents it in card format. Initially, the
                    website appears conventional in light mode, but upon
                    switching to dark mode, a stunning 3D model of Earth rotates
                    in the background, accompanied by stars. I can implement
                    this concept for your website tailored to your specific
                    preferences.
                    <br /> <br />
                    <span>
                      visit
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor">
                        <path d="M18.3638 15.5355L16.9496 14.1213L18.3638 12.7071C20.3164 10.7545 20.3164 7.58866 18.3638 5.63604C16.4112 3.68341 13.2453 3.68341 11.2927 5.63604L9.87849 7.05025L8.46428 5.63604L9.87849 4.22182C12.6122 1.48815 17.0443 1.48815 19.778 4.22182C22.5117 6.95549 22.5117 11.3876 19.778 14.1213L18.3638 15.5355ZM15.5353 18.364L14.1211 19.7782C11.3875 22.5118 6.95531 22.5118 4.22164 19.7782C1.48797 17.0445 1.48797 12.6123 4.22164 9.87868L5.63585 8.46446L7.05007 9.87868L5.63585 11.2929C3.68323 13.2455 3.68323 16.4113 5.63585 18.364C7.58847 20.3166 10.7543 20.3166 12.7069 18.364L14.1211 16.9497L15.5353 18.364ZM14.8282 7.75736L16.2425 9.17157L9.17139 16.2426L7.75717 14.8284L14.8282 7.75736Z"></path>
                      </svg>
                    </span>
                  </p>
                </div>
              </div>
              <div className="sample">
                <div
                  onClick={() => {
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                  className="sample-img">
                  <img src="./images/webgi-web.png" alt="" />
                </div>
                <div className="sample-content">
                  <h1>WEBBSP.IN</h1>
                  <p>
                    This website features a stunning 3D model of a modern
                    office, showcasing impressive scrolling animations, floating
                    headings, scrolling text, and more. It serves as a source of
                    inspiration for creating your own website.
                    <br /> <br />
                    <span
                      onClick={() => {
                        window.scrollTo({
                          top: 0,
                          behavior: "smooth",
                        });
                      }}>
                      visit
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor">
                        <path d="M18.3638 15.5355L16.9496 14.1213L18.3638 12.7071C20.3164 10.7545 20.3164 7.58866 18.3638 5.63604C16.4112 3.68341 13.2453 3.68341 11.2927 5.63604L9.87849 7.05025L8.46428 5.63604L9.87849 4.22182C12.6122 1.48815 17.0443 1.48815 19.778 4.22182C22.5117 6.95549 22.5117 11.3876 19.778 14.1213L18.3638 15.5355ZM15.5353 18.364L14.1211 19.7782C11.3875 22.5118 6.95531 22.5118 4.22164 19.7782C1.48797 17.0445 1.48797 12.6123 4.22164 9.87868L5.63585 8.46446L7.05007 9.87868L5.63585 11.2929C3.68323 13.2455 3.68323 16.4113 5.63585 18.364C7.58847 20.3166 10.7543 20.3166 12.7069 18.364L14.1211 16.9497L15.5353 18.364ZM14.8282 7.75736L16.2425 9.17157L9.17139 16.2426L7.75717 14.8284L14.8282 7.75736Z"></path>
                      </svg>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;
