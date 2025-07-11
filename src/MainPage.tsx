/* eslint-disable @typescript-eslint/no-explicit-any */
import "./App.css";
import profile from "./assets/images/short-profile.png";
import fideitySite from "./assets/images/fidelity.png";
import exadsSite from "./assets/images/exads.png";
import equifaxSite from "./assets/images/equifax.png";
import medicalSite from "./assets/images/bluebridgetech.png";
import liveirishradio from "./assets/images/liveirishradio.jpg";
import AIproject from "./assets/images/project-ia.png";
import stream1 from "./assets/images/stream1.jpg";
import mailboxSite from "./assets/images/project-mailbox.png";
import scuv14 from "./assets/images/project-scuv14.png";
import { Link } from "react-router";
import { useEffect } from "react";
import "animate.css";

import $ from "jquery";

function MainPage() {
  useEffect(() => {
    // Load WOW.js from CDN
    const scriptWow = document.createElement("script");
    scriptWow.src =
      "https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js";
    scriptWow.onload = () => {
      const WOW = (window as any).WOW;
      if (WOW) {
        const wow = new WOW({ live: false });
        wow.init();
      }
    };
    document.head.appendChild(scriptWow);
    $("#alertButton").on("click", () => {
      alert("jQuery alert inside React!");
    });

    $(".determinate").each(function () {
      const width = $(this).text();
      $(this)
        .css("width", width)
        .empty()
        .append('<i class="fa fa-circle"></i>');
    });

    const script = document.createElement("script");
    script.src = "/assets/js/init.js"; // adjust path as needed
    script.async = true;
    script.onload = () => {
      if ((window as any).init) {
        (window as any).init(); // call the global jQuery function
      }
    };
    document.body.appendChild(script);

    return () => {
      const wowScript = document.querySelector('script[src*="wow.min.js"]');
      if (wowScript) document.head.removeChild(wowScript);
      const initScript = document.querySelector('script[src*="init.js"]');
      if (initScript) document.body.removeChild(initScript);
    };
  }, []);

  return (
    <>
      <>
        {/* HEADER TOP */}
        <header id="header-top">
          <div className="container">
            <div className="row">
              <div className="top-contact col m12 s12 right">
                <span>
                  <i className="fa fa-linkedin"></i>
                  <a href="https://ie.linkedin.com/in/franco-gutierrez-4a073483">
                    Franco Gutierrez
                  </a>
                  {/* <button id="test">Click Me</button> */}
                </span>
              </div>
            </div>
          </div>

          <div id="header-bottom" className="z-depth-1">
            <div id="sticky-nav">
              <div className="container">
                <div className="row">
                  <nav className="nav-wrap">
                    <ul className="hide-on-med-and-down group" id="example-one">
                      <li className="current_page_item">
                        <a href="#header-top">Home</a>
                      </li>
                      <li>
                        <a href="#about">About</a>
                      </li>
                      <li>
                        <a href="#skills">Skills</a>
                      </li>
                      <li>
                        <a href="#works">Works</a>
                      </li>
                      <li>
                        <a href="#portfolio">Portolio</a>
                      </li>
                      <li>
                        <a href="#education">Education</a>
                      </li>
                      <li>
                        <a href="#blog">Blog</a>
                      </li>
                      <li>
                        <a href="#contact-form">Contact</a>
                      </li>
                    </ul>
                    <ul className="side-nav" id="slide-out">
                      <li>
                        <a href="#header-bottom" className="active">
                          Home
                        </a>
                      </li>
                      <li>
                        <a href="#about">About</a>
                      </li>
                      <li>
                        <a href="#skills">Skills</a>
                      </li>
                      <li>
                        <a href="#works">Works</a>
                      </li>
                      <li>
                        <a href="#portfolio">Portolio</a>
                      </li>
                      <li>
                        <a href="#education">Education</a>
                      </li>
                      <li>
                        <a href="#blog">Blog</a>
                      </li>
                      <li>
                        <a href="#contact-form">Contact</a>
                      </li>
                    </ul>
                    <a
                      href="#"
                      data-activates="slide-out"
                      className="button-collapse"
                    >
                      <i className="mdi-navigation-menu"></i>
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section id="about">
          <div className="container">
            <div className="row">
              <div className="intro z-depth-1 col m12">
                <div className="col m12 s12">
                  <div
                    className="profile-pic wow fadeIn a1"
                    data-wow-delay="0.1s"
                  >
                    <img src={profile} alt="" />
                  </div>
                </div>
                <div
                  className="col m12 s12 co-centered wow fadeIn a2"
                  data-wow-delay="0.2s"
                >
                  <div className="intro-content">
                    <h2>Hi, I'm Franco Gutierrez</h2>
                    <span>
                      Software Engineer who previously worked at Fidelity
                      Investments
                    </span>
                    <p>
                      Over the past several years, I've built a track record of
                      delivering successful products by effectively guiding them
                      to prodcution environments, as a passionate Software
                      Engineer seeking new challenges in innovation, I welcome
                      the opportunity to discuss how my expertise could benefit
                      your team. Please don't hesitate to reach out if my
                      profile aligns with your needs.
                    </p>
                    <div className="row">
                      <div className="col s12 m6">
                        <h2 style={{ fontSize: "30px" }}></h2>
                        <ul>
                          <li>Full Stack Development</li>
                          <li>Cloud Services</li>
                          <li>Mobile Development</li>
                          <li>Microservices</li>
                          <li>DevOps</li>
                        </ul>
                      </div>
                      <div className="col s12 m6">
                        <h2 style={{ fontSize: "30px" }}>Key Technologies</h2>
                        <ul>
                          <li>React, Angular - Java, Node.js, Python</li>
                          <li>AWS Cloud Services</li>
                          <li>Docker & Kubernetes</li>
                          <li>CI/CD</li>
                        </ul>
                      </div>
                    </div>
                    <a
                      href="#contact-form"
                      className="btn btn-success waves-effect"
                    >
                      Contact Me
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills">
          <div className="container">
            <div className="row">
              <div
                className="section-title wow fadeIn a1"
                data-wow-delay="0.1s"
              >
                <h2>
                  {" "}
                  <i className="fa fa-gears"></i>Skills
                </h2>
              </div>
              <div className="skill-line z-depth-1">
                <div className="row">
                  <div className="col m6 s12">
                    <div className="col m2 skill-icon">
                      <i className="fa fa-calendar-o"></i>
                    </div>
                    <div
                      className="skill-bar col m10 wow fadeIn a1"
                      data-wow-delay="0.1s"
                    >
                      <h3>Professional Skills </h3>

                      <span>Python</span>
                      <div className="progress">
                        <div
                          className="determinate"
                          style={{
                            width: "60%",
                            minWidth: "60%",
                            maxWidth: "60%",
                          }}
                        >
                          <i className="fa fa-circle">60%</i>
                        </div>
                      </div>

                      <span>Javascript/Typescript(Angular and ReactJS)</span>
                      <div className="progress">
                        <div
                          className="determinate"
                          style={{
                            width: "85%",
                            minWidth: "85%",
                            maxWidth: "85%",
                          }}
                        >
                          <i className="fa fa-circle">85%</i>
                        </div>
                      </div>

                      <span>Java(SE and EE), Spring Boot, Hibernate</span>
                      <div className="progress">
                        <div
                          className="determinate"
                          style={{
                            width: "70%",
                            minWidth: "70%",
                            maxWidth: "70%",
                          }}
                        >
                          <i className="fa fa-circle">70%</i>
                        </div>
                      </div>

                      <span>Mysql, MongoDB, NoSQL</span>
                      <div className="progress">
                        <div
                          className="determinate"
                          style={{
                            width: "90%",
                            minWidth: "90%",
                            maxWidth: "90%",
                          }}
                        >
                          <i className="fa fa-circle">85%</i>
                        </div>
                      </div>

                      <span>Docker, Kubernetes, AWS, CI/CD</span>
                      <div className="progress">
                        <div
                          className="determinate"
                          style={{
                            width: "60%",
                            minWidth: "60%",
                            maxWidth: "60%",
                          }}
                        >
                          <i className="fa fa-circle">60%</i>
                        </div>
                      </div>

                      <span>Adobe Photoshop</span>
                      <div className="progress">
                        <div
                          className="determinate"
                          style={{
                            width: "50%",
                            minWidth: "50%",
                            maxWidth: "50%",
                          }}
                        >
                          <i className="fa fa-circle">50%</i>
                        </div>
                      </div>

                      <span>HTML</span>
                      <div className="progress">
                        <div
                          className="determinate"
                          style={{
                            width: "90%",
                            minWidth: "90%",
                            maxWidth: "90%",
                          }}
                        >
                          <i className="fa fa-circle">95%</i>
                        </div>
                      </div>

                      <span>CSS</span>
                      <div className="progress">
                        <div
                          className="determinate"
                          style={{
                            width: "90%",
                            minWidth: "90%",
                            maxWidth: "90%",
                          }}
                        >
                          <i className="fa fa-circle">90%</i>
                        </div>
                      </div>

                      <span>LLM, RAG, and Agents</span>
                      <div className="progress">
                        <div
                          className="determinate"
                          style={{
                            width: "40%",
                            minWidth: "40%",
                            maxWidth: "40%",
                          }}
                        >
                          <i className="fa fa-circle">40%</i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col m6 s12">
                    <div className="col m2 skill-icon">
                      <i className="fa fa-calendar-o"></i>
                    </div>
                    <div
                      className="skill-bar col m10 wow fadeIn a2"
                      data-wow-delay="0.2s"
                    >
                      <h3>Personal Skills </h3>
                      <span>Communication, Planning</span>
                      <div className="progress">
                        <div
                          className="determinate"
                          style={{
                            width: "90%",
                            minWidth: "90%",
                            maxWidth: "90%",
                          }}
                        >
                          <i className="fa fa-circle">90%</i>
                        </div>
                      </div>

                      <span>Team Work</span>
                      <div className="progress">
                        <div
                          className="determinate"
                          style={{
                            width: "95%",
                            minWidth: "95%",
                            maxWidth: "95%",
                          }}
                        >
                          <i className="fa fa-circle">95%</i>
                        </div>
                      </div>

                      <span>Creativity</span>
                      <div className="progress">
                        <div
                          className="determinate"
                          style={{
                            width: "90%",
                            minWidth: "90%",
                            maxWidth: "90%",
                          }}
                        >
                          <i className="fa fa-circle">90%</i>
                        </div>
                      </div>

                      <span>Dedication</span>
                      <div className="progress">
                        <div
                          className="determinate"
                          style={{
                            width: "85%",
                            minWidth: "85%",
                            maxWidth: "85%",
                          }}
                        >
                          <i className="fa fa-circle">85%</i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="works">
          <div className="container">
            <div className="row">
              <div className="section-title">
                <h2>
                  {" "}
                  <i className="fa fa-suitcase"> </i>Work Experience
                </h2>
              </div>
              <div id="cd-timeline" className="cd-container">
                <div
                  className="cd-timeline-block wow fadeIn a2"
                  data-wow-delay="0.2s"
                >
                  <div className="cd-timeline-img"></div>
                  <div className="cd-timeline-content col m5 s12 z-depth-1">
                    <a href="https://www.fidelityinvestments.ie/">
                      <h2>Senior Software Engineer @ Fidelity Investments</h2>
                    </a>
                    <span>April 2022 to December 2024</span>
                    <p>
                      Gained valuable experience as a full-stack engineer over
                      the past years, working with various technologies and
                      components such as RESTful API, microservices, CI/CD, AWS,
                      web development, and User Acceptance Testing (UAT).
                    </p>
                  </div>
                </div>
                <div
                  className="cd-timeline-block wow fadeIn a2"
                  data-wow-delay="0.2s"
                >
                  <div className="cd-timeline-img"></div>
                  <div className="cd-timeline-content col m5 s12 z-depth-1">
                    <a href="https://www.exads.com/">
                      <h2>Frontend Developer @Exads.com</h2>
                    </a>
                    <span>Oct 2020 to March 2022</span>
                    <p>
                      During this role, I have got experience developing an app
                      on Angular and React, I also have implement ideas and new
                      concepts like new css frameworks in the market, one of my
                      achievement have been developing new feature for the
                      current app and creating a new website (www.exads.com).
                    </p>
                  </div>
                </div>
                <div
                  className="cd-timeline-block wow fadeIn a2"
                  data-wow-delay="0.2s"
                >
                  <div className="cd-timeline-img"></div>
                  <div className="cd-timeline-content col m5 s12 z-depth-1">
                    <a href="http://www.equifax.com/personal">
                      <h2>Software Engineer @Equifax.ie</h2>
                    </a>
                    <span>Sept 2017 to March 2020</span>
                    <p>
                      In this role, I got experience by performing such as the
                      design, implementation as the maintenance of product
                      modules and systems delivered by Equifax and I also
                      offered support as QA developer to develop end-to-end
                      tests and worked close with the backend developer in the
                      process of building RESTful APIs.
                    </p>
                  </div>
                </div>
                <div
                  className="cd-timeline-block wow fadeIn a2"
                  data-wow-delay="0.2s"
                >
                  <div className="cd-timeline-img"></div>
                  <div className="cd-timeline-content col m5 s12 z-depth-1">
                    <a href="https://francoj22.github.io/liveirishradio/">
                      <h2>Software Developer @LiveIrishRadio.ie</h2>
                    </a>
                    <span>Feb 2015 to April 2017</span>
                    <p>
                      In this role, I got experience doing a website using
                      Material Design, PHP, Angular JS, and MySQL., It is
                      personal project which integrates an app made for Android
                      devices where populates a list of music from a RESTful web
                      services.
                    </p>
                  </div>
                </div>
                <div
                  className="cd-timeline-block wow fadeIn a3"
                  data-wow-delay="0.3s"
                >
                  <div className="cd-timeline-img"></div>
                  <div className="cd-timeline-content col m5 s12 z-depth-1">
                    <a href="http://bluebridgetechnologies.com">
                      <h2>
                        Junior Software Engineer @BlueBridgeTechnologies.IE
                      </h2>
                    </a>
                    <span>Oct 2016 to April 2017 </span>
                    <p>
                      I worked as a team player by delivering smart solutions
                      for the development of an Android Medical App. I helped
                      deliver high quality of code which involves more than
                      200,000 lines of code for a high known brand in Europe. We
                      used the latest technologies on the market such as a
                      distributed version control system (Bitbucket) and agile
                      methodologies (Scrum, Kanban). During the project, I was
                      involved as the RESTful APIs in Java for delivering
                      information and set up the devices needed as a
                      microservices for our Client to assist customer needs
                    </p>
                  </div>
                </div>
                <div
                  className="cd-timeline-block wow fadeIn a4"
                  data-wow-delay="0.3s"
                >
                  <div className="cd-timeline-img"></div>
                  <div className="cd-timeline-content col m5 s12 z-depth-1">
                    <a href="http://PRINTBOX.IE">
                      <h2>WebDesigner and Mobile App Developer @PRINTBOX.IE</h2>
                    </a>
                    <span>April 2014 to August 2014 </span>
                    <p>
                      In this position, I acquired valuable knowledge about
                      computer maintenance, testing software development on the
                      server side, detecting bugs and providing problem-solving
                      such as, database development and RESTful APIs in PHP and
                      Java.
                    </p>
                  </div>
                </div>
                <div
                  className="cd-timeline-block wow fadeIn a5"
                  data-wow-delay="0.4s"
                >
                  <div className="cd-timeline-img"></div>
                  <div className="cd-timeline-content col m5 s12 z-depth-1">
                    <a href="http://square1.io/">
                      <h2>Android Developer @Square1.io</h2>
                    </a>
                    <span>March 2014 to April 2014 </span>
                    <p>
                      In this role I was working as part of a team and was
                      responsible for developing an application for Android
                      platforms that played videos where we panned the UI, and
                      defined as first step all the requirements functional and
                      no functional for starting the project.
                    </p>
                  </div>
                </div>

                <div
                  className="cd-timeline-block wow fadeIn a6"
                  data-wow-delay="0.5s"
                >
                  <div className="cd-timeline-img"></div>
                  <div className="cd-timeline-content col m5 s12 z-depth-1">
                    <a href="http://sidor.com">
                      <h2>Software Engineer @SIDOR C.A</h2>
                    </a>
                    <span>April 2012 and April 2013 / September 2012 </span>
                    <p>
                      I worked on a project which involved developing an
                      intelligent system which was required to improve the
                      process for SIDORs methods in mineral seeking. The methods
                      provided them options for improvement in suitability of
                      finding the different variables. The result of the project
                      gave the company new options for finding specific high
                      quality ores for mining. Click to the link below here to
                      watch the presentation{" "}
                      <a href="http://sh.st/Q46Qn.">Link Here</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio">
          <div className="container">
            <div className="row">
              <div
                className="section-title wow fadeIn a1"
                data-wow-delay="0.1s"
              >
                <h2>
                  <i className="fa fa-th-list"></i>Portfolio
                </h2>
              </div>

              <div id="loader">
                <div className="loader-icon"></div>
              </div>
              <div className="screenshots" id="portfolio-item">
                <div className="row">
                  <ul>
                    <li className="col m12 s12 category-1">
                      <figure className="more">
                        <img
                          height="500px"
                          width="500px"
                          src={fideitySite}
                          alt="Screenshotite 01"
                        />
                        <figcaption>
                          <div className="caption-content">
                            <div className="single_image">
                              <h2>
                                American multinational financial services
                                corporation based in Boston, Massachusetts. The
                                company was established in 1946 and is one of
                                the largest asset managers in the world with
                                $4.3 trillion in assets under management
                              </h2>
                              <p>Web Development, Microservices, and Testing</p>
                            </div>
                          </div>
                        </figcaption>
                      </figure>
                    </li>
                    <li className="col m12 s12 category-1">
                      <figure className="more">
                        <img
                          height="500px"
                          width="500px"
                          src={exadsSite}
                          alt="ExdasSite"
                        />
                        <figcaption>
                          <div className="caption-content">
                            <div className="single_image">
                              <h2>
                                Platform developed on Angular, and the offical
                                website on React
                              </h2>
                              <p>
                                Using as technique Bootstrap, Jasmine, Karma,
                                MaterialUI, TailwindCSS
                              </p>
                            </div>
                          </div>
                        </figcaption>
                      </figure>
                    </li>
                    <li className="col m12 s12 category-1">
                      <figure className="more">
                        <img
                          height="500px"
                          width="500px"
                          src={equifaxSite}
                          alt="equifaxsite"
                        />
                        <figcaption>
                          <div className="caption-content">
                            <div className="single_image">
                              <h2>
                                Contribute on the Complice Center and I-9
                                platform developed on Angular
                              </h2>
                              <p>
                                Using as technique Bootstrap, Jasmine, Karma,
                                MaterialUI
                              </p>
                            </div>
                          </div>
                        </figcaption>
                      </figure>
                    </li>
                    <li className="col m12 s12 category-1">
                      <figure className="more">
                        <img
                          height="500px"
                          width="500px"
                          src={medicalSite}
                          alt="medicalSite1"
                        />
                        <figcaption>
                          <div className="caption-content">
                            <div className="single_image">
                              <h2>Mobile Java Project</h2>
                              <p>
                                Tech Stack: Java, Reactive Programming, XML,
                                Ruby and Python
                              </p>
                            </div>
                          </div>
                        </figcaption>
                      </figure>
                    </li>
                    <li className="col m4 s12 category-1">
                      <figure className="more">
                        <img
                          height="200px"
                          width="200px"
                          src={liveirishradio}
                          alt="liveirishradio"
                        />
                        <figcaption>
                          <div className="caption-content">
                            <div className="single_image">
                              <h2>
                                Web Design, Mobile App Developer, Backed
                                Developer
                              </h2>
                              <p>Using Java and Web Services RESTful API</p>
                            </div>
                          </div>
                        </figcaption>
                      </figure>
                    </li>
                    <li className="col m4 s12 category-1">
                      <figure className="more">
                        <img
                          height="200px"
                          width="200px"
                          src={stream1}
                          alt="stream1"
                        />
                        <figcaption>
                          <div className="caption-content">
                            <div className="single_image">
                              <h2> Mobile App Developer</h2>
                              <p>On Android Studio</p>
                            </div>
                          </div>
                        </figcaption>
                      </figure>
                    </li>
                    <li className="col m4 s12 category-1">
                      <figure className="more">
                        <img
                          height="200px"
                          width="200px"
                          src={AIproject}
                          alt="AIproject"
                        />
                        <figcaption>
                          <div className="caption-content">
                            <div className="single_image">
                              <h2>Artificial Intelligence</h2>
                              <p>
                                Using neural network as technique and Matlab as
                                framework.
                              </p>
                            </div>
                          </div>
                        </figcaption>
                      </figure>
                    </li>
                    <li className="col m4 s12 category-2">
                      <figure className="more">
                        <img
                          height="200px"
                          width="200px"
                          src={mailboxSite}
                          alt="mailboxSite"
                        />
                        <figcaption>
                          <div className="caption-content">
                            <div className="single_image">
                              <h2>Web Design</h2>
                              <p>
                                Prototyping front end development and api for
                                mobile app.
                              </p>
                            </div>
                          </div>
                        </figcaption>
                      </figure>
                    </li>
                    <li className="col m4 s12 category-1">
                      <figure className="more">
                        <img
                          height="200px"
                          width="200px"
                          src={scuv14}
                          alt="scuv14"
                        />
                        <figcaption>
                          <div className="caption-content">
                            <div className="single_image">
                              <h2>Software Developer and Database</h2>
                              <p>
                                Part of the software developer team. Providing
                                base component of the form and the queries to
                                the data base.
                              </p>
                            </div>
                          </div>
                        </figcaption>
                      </figure>
                    </li>
                  </ul>
                </div>
              </div>

              <a id="back-button" className="" href="#">
                <img src="assets/images/np.png" />
              </a>

              <div
                className="market-place col m12 s12 z-depth-1 wow fadeIn a3"
                data-wow-delay="0.3s"
              >
                <ul>
                  <li>
                    <a href="http://github.com/francoj22">
                      <h3>Github</h3>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="education">
          <div className="container">
            <div className="row">
              <div
                className="section-title wow fadeIn a1"
                data-wow-delay="0.1s"
              >
                <h2>
                  {" "}
                  <i className="fa fa-graduation-cap"></i>Education
                </h2>
              </div>
              <div className="cd-container" id="ed-timeline">
                <div
                  className="cd-timeline-block wow fadeIn a2"
                  data-wow-delay="0.2s"
                >
                  <div
                    className="cd-timeline-block wow fadeIn a2"
                    data-wow-delay="0.2s"
                  >
                    <div className="cd-timeline-img"></div>
                    <div className="cd-timeline-content col m5 s12 z-depth-1">
                      <a href="">
                        <h2>Master Class @Simplilearn</h2>
                      </a>
                      <span>2021</span>
                      <p>
                        The program is a Master Class focused on Sprint Boot
                        framework, Automation and Frontend Frameworks.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="cd-timeline-block wow fadeIn a2"
                  data-wow-delay="0.2s"
                >
                  <div className="cd-timeline-img"></div>
                  <div className="cd-timeline-content col m5 s12 z-depth-1">
                    <a href="">
                      <h2>MSc in Computing Science @Griffith College</h2>
                    </a>
                    <span>2016</span>
                    <p>
                      The program of my Master is handle the standard study of
                      algorithms, programming on Java SE as EE, ORM, and New
                      Techniques as Text Processing, Mobile App Development,
                      Cloud computing. It gives the expertise to handle any kind
                      of area of the IT development.
                    </p>
                  </div>
                </div>

                <div
                  className="cd-timeline-block wow fadeIn a2"
                  data-wow-delay="0.2s"
                >
                  <div className="cd-timeline-img"></div>
                  <div className="cd-timeline-content col m5 s12 z-depth-1">
                    <a href="">
                      <h2>
                        BSc in Computer Science @Universidad Catolica Andres
                        Bello
                      </h2>
                    </a>
                    <span>2013</span>
                    <p>
                      The program at my University handle the standard study of
                      algorithms, programming on Java and Development of Data
                      Base. Through this i got knowledge on building SaaS
                      aplications with Java, where it involves the study of the
                      business logic, choosing the best methodologies and
                      working as a team to delivery success products.
                    </p>
                  </div>
                </div>
                <div
                  className="cd-timeline-block wow fadeIn a3"
                  data-wow-delay="0.3s"
                >
                  <div className="cd-timeline-img"></div>
                  <div className="cd-timeline-content col m5 s12 z-depth-1">
                    <a href="">
                      <h2>Cisco Certified Network Associate @CCNA</h2>
                    </a>
                    <span>2013</span>
                    <p>
                      Although i am not implemented the full knowledge of the
                      main className that i am still have the main idea and
                      programming by prompt, using packet tracer as software.
                      Also through during this course I got networking tech
                      knowledge and techniques used for the development of
                      network programms as security that shoube take care before
                      put a product on production
                    </p>
                  </div>
                </div>

                <div
                  className="cd-timeline-block wow fadeIn a4"
                  data-wow-delay="0.4s"
                >
                  <div className="cd-timeline-img"></div>
                  <div className="cd-timeline-content col m5 s12 z-depth-1">
                    <a href="">
                      <h2>English Course@Dorset College Ireland</h2>
                    </a>
                    <span>2014</span>
                    <p>English course in Ireland</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="blog">
          <div className="container">
            <div className="row">
              <div
                className="section-title wow fadeIn a1"
                data-wow-delay="0.1s"
              >
                <h2>
                  {" "}
                  <i className="fa fa-edit"> </i>Blog
                </h2>
              </div>
              <div className="row">
                <div className="blog">
                  <div
                    className="col  s12 blog-post wow fadeIn a2"
                    data-wow-delay="0.2s"
                  >
                    <div className="thumbnail z-depth-1 animated">
                      <div className="blog-details">
                        <div className="post-title" id="blog-post-1">
                          <Link to={"blog/blog-research"}>
                            <h2>Research Methods</h2>
                            <span>Consciousness</span>
                          </Link>
                        </div>
                        <div className="post-details">
                          <p>
                            In this article your will find a short story about
                            research on the field of the Consciousness and how
                            it is been using as learning methodology
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col  s12 blog-post wow fadeIn a2"
                    data-wow-delay="0.2s"
                  >
                    <div className="thumbnail z-depth-1 animated">
                      <div className="blog-details">
                        <div className="post-title" id="blog-post-1">
                          <Link to={"blog/jorney-tracker"}>
                            <h2>Andorid Project</h2>
                            <span>GPS</span>
                          </Link>
                        </div>
                        <div className="post-details">
                          <p>
                            In this article you will find a sample of using GPS
                            and a mock location
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col  s12 blog-post wow fadeIn a2"
                    data-wow-delay="0.2s"
                  >
                    <div className="thumbnail z-depth-1 animated">
                      <div className="blog-details">
                        <div className="post-title" id="blog-post-1">
                          <Link to="blog/english-draughts">
                            <h2>Android Project</h2>
                            <span>Game using Custom Views</span>
                          </Link>
                        </div>
                        <div className="post-details">
                          <p>
                            In this article your will find a project using
                            custom view and how it was implemented
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col  s12 blog-post wow fadeIn a2"
                    data-wow-delay="0.2s"
                  >
                    <div className="thumbnail z-depth-1 animated">
                      <div className="blog-details">
                        <div className="post-title" id="blog-post-1">
                          <Link to="blog/memetomiaapp">
                            <h2>Android Project</h2>
                            <span>ListFragments,Fragments,SDK</span>
                          </Link>
                        </div>
                        <div className="post-details">
                          <p>
                            Article about fragments, Login Session from Facebook
                            and font design
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col  s12 blog-post wow fadeIn a2"
                    data-wow-delay="0.2s"
                  >
                    <div className="thumbnail z-depth-1 animated">
                      <div className="blog-details">
                        <div className="post-title" id="blog-post-1">
                          <Link to="blog/stream4pro">
                            <h2>Android Project</h2>
                            <span>
                              Navigation Drawer, Fragment, Login Session
                            </span>
                          </Link>
                        </div>
                        <div className="post-details">
                          <p>Article about fragments and login session</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact-form">
          <div className="container">
            <div className="row">
              <div
                className="section-title wow fadeIn a1"
                data-wow-delay="0.1s"
              >
                <h2>
                  {" "}
                  <i className="fa fa-send"></i>Contact
                </h2>
              </div>
              <div className="contact-form z-depth-1" id="contact">
                <div className="row"></div>
              </div>

              <div
                className="interests col s12 m12 l12 wow fadeIn"
                data-wow-delay="0.1s"
              >
                <div className="row">
                  <ul className="z-depth-1">
                    <li>
                      <a
                        className="fa fa-linkedin tooltipped col m6 s5"
                        data-position="top"
                        data-delay="50"
                        data-tooltip="linkedin"
                        href="https://ie.linkedin.com/in/franco-gutierrez-4a073483"
                      ></a>
                    </li>
                    <li>
                      <a
                        className="fa fa-github tooltipped col m6 s5"
                        data-position="top"
                        data-delay="50"
                        data-tooltip="Github"
                        href="http://github.com/francoj22"
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
}

export default MainPage;
