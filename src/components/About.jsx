import React, { useState } from "react";
import Modal from "react-modal";
import Brand from "./Brand";
import Images from "./Images"
import Pdf from './VITA.pdf';

Modal.setAppElement("#root");

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  function toggleCv() {
    window.open(Pdf)
  }

  return (
    <>
      <div className="tokyo_tm_about">
        <Images/>
        {/* END ABOUT IMAGE */}
        <div className="description">
          <h3 className="name">Ingyu Oh</h3>
          <div className="description_inner">
            <div>
              <p>
              I'm currently a Professor of Business Management and Korean & Japanese Cultural Industries at Kansai Gaidai University, Osaka, Japan.
              Before coming to Japan in 2018, I had taught at Korea University (2013-1018), Solbridge School of Business (2010-2012), Bristol Business School (2008-2010), Middle East Technical University (2006-2008), UC Berkeley (2005-2006), Ritsumeikan Asia Pacific University (20012006), the University of Waikato (1997-2001), and the University of Oregon (1990-1996). </p>
              <p>My main teaching and research interests include organizational studies, innovation studies, international business, political economy, political sociology, business history, and cultural studies.</p> <p>I am currently President of the World Association for Hallyu Studies, Editor of Culture and Empathy: An International Journal of Sociology, Psychology, and Cultural Studies, and Associate Editor of Asia Pacific Business Review. I have written numerous books, monographs, and journal articles during the last 20+ years. I am currently carrying out various Hallyu-related research projects and editing a book on culture in international relations in East Asia.</p>

              <div className="tokyo_tm_button">
                <button onClick={toggleModal} className="ib-button">
                  Education and Work History
                </button>
              </div>
              <div className="tokyo_tm_button">
              <button onClick={toggleCv} className="ib-button">
              Download and View Full CV
            </button>


            </div>

              {/* END TOKYO BUTTON */}
            </div>
            {/* END LEFT */}

            {/* END RIGHT */}
          </div>
          {/* END DESCRIPTION INNER */}
        </div>
        <div className="description"><h3 className="customName">Links to my organizations</h3></div>

        <Brand className="brandtop" />
      </div>


      {/* START ABOUT POPUP BOX */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_about">
          <button className="close-modal" onClick={toggleModal}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END POPUP CLOSE BUTTON */}
          <div className="box-inner">
            <div className="description_wrap scrollable">
              <div className="my_box">
                <div className="left">
                  <div className="about_title">
                    <h3>Educational Degrees</h3>
                  </div>
                  {/* END ABOUT TITLE */}

                  <div className="tokyo_progress">

                 - Dec. 1996 <h6> <b> University of Oregon, Eugene OR, USA. Ph.D. Sociology (Organization Theory)</b></h6>

                  <span>Dissertation Title: “Making an Octopus: The Rise and Development of the South Korean Chaebol and the Japanese Keiretsu.” Advisor: Donald Van Houten.</span>





                  </div>
                  <div className="tokyo_progress">
                  - June. 1989
                  <h6><b>Ohio State University, Columbus OH, USA. M.A. Political Science</b></h6>
                  <p> - (Organization Theory, Comparative Politics - Korea and Japan, Public Policy). Advisors: Bradley Richardson and Donald Chisholm.</p>




                  </div>

                  <div className="tokyo_progress">
                  - Sep. 1987
                  <h6><b>Roosevelt University, Chicago IL.B.A. English Literature and Political Science.</b></h6>
                  <p> - Advisor: Burton Kendle.</p>




                  </div>
                  {/* END PROGRESS */}
                </div>
                {/* END LEFT */}

                <div className="right">
                  <div className="about_title">
                    <h3>Professional Service</h3>
                  </div>
                  {/* END TITLE */}
                  <div className="tokyo_progress">

                  2019  <span><b>Associate Editor, Asia Pacific Business Review. (SSCI)</b></span>
                  <br/>
                  2018  <span><b>Editor, Culture and Empathy: International Journal of Sociology, Psychology, and Cultural Studies.</b></span>
                  <br/>
                  2017 - 2019 <span><b>Special Issue Editor, Kritika Kultura. (A&HCI)</b></span>
                  <br/>
                  2016 - 2018 <span><b>Editorial Board, Asia Pacific Business Review. (SSCI)</b></span>
                  <br/>
                  2011 - 2014 <span><b>Editorial Board, Asian Journal of Innovation and Policy. (KCI)</b></span>
                  <br/>
                  2010 - 2018 <span><b>Regular Reviewer, Korea Observer. (SSCI)</b></span>


                  </div>
                  {/* EDN TOKYO PROGRESS */}
                </div>
                {/* END RIGHT */}
              </div>
              {/* END MYBOX */}

              <div className="right">
                  <div className="about_title">
                    <h3>Language Skills</h3>
                  </div>
                  {/* END TITLE */}
                  <div className="tokyo_progress">
                    <div className="progress_inner" data-value="100">
                      <span>
                        <span className="label">English</span>
                        <span className="number">100%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                        <div className="bar_in" style={{width: 95 + '%'}}></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="100">
                      <span>
                        <span className="label">Korean</span>
                        <span className="number">100%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                        <div className="bar_in" style={{width: 90 + '%'}}></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="90">
                      <span>
                        <span className="label">Japanese</span>
                        <span className="number">90%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                        <div className="bar_in" style={{width: 85 + '%'}}></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="80">
                    <span>
                      <span className="label">Chinese</span>
                      <span className="number">80%</span>
                    </span>
                    <div className="background">
                      <div className="bar">
                      <div className="bar_in" style={{width: 85 + '%'}}></div>
                      </div>
                    </div>
                  </div>
                  </div>
                  {/* EDN TOKYO PROGRESS */}
                </div>
                {/* END RIGHT */}


              {/* END PARTNER SLIDER */}
            </div>
          </div>
        </div>
      </Modal>
      {/* END ABOUT POPUP BOX */}
    </>
  );
};

export default About;
