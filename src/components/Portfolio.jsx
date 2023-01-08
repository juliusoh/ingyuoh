import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";

const Portfolio = () => {
  return (
    <>
      <SimpleReactLightbox>
        <div className="tokyo_tm_portfolio">
          <div className="tokyo_tm_title">
            <div className="title_flex">
              <div className="left">
                <span>Works</span>
                <h3>Books</h3>
              </div>
            </div>
          </div>
          {/* END TOKYO_TM_TITLE */}
          <div className="portfolio_filter">
            <Tabs>
              <TabList>
                <Tab>All</Tab>
              </TabList>
              {/* END TABLIST */}
              <div className="list_wrapper">
                <TabPanel>
                  <ul className="portfolio_list">
                    <li>
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <a
                            href="https://www.amazon.com/Corporate-Performance-Managerial-Ties-China/dp/1032107553/ref=sr_1_3?crid=3UYOI85EIELSV&keywords=ingyu+oh&qid=1656562951&s=books&sprefix=ingyu+oh%2Cstripbooks%2C240&sr=1-3"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img
                              src="https://m.media-amazon.com/images/P/1032107553.01._SCLZZZZZZZ_SX500_.jpg"
                              alt="Portfolio"
                            />
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <a
                            href="https://www.amazon.com/East-Asia-Transition-Ingyu-Oh/dp/1527575071/ref=sr_1_2?crid=3UYOI85EIELSV&keywords=ingyu+oh&qid=1656562951&s=books&sprefix=ingyu+oh%2Cstripbooks%2C240&sr=1-2"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img src="https://images-na.ssl-images-amazon.com/images/I/41SqKpJfPoL._SX349_BO1,204,203,200_.jpg" alt="Portfolio" />
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <a
                            href="https://www.amazon.com/Mafioso-Big-Business-Financial-Crisis/dp/1138324930/ref=sr_1_2?dchild=1&qid=1625034250&refinements=p_27%3AIngyu+Oh&s=books&sr=1-2"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img src="assets/img/portfolio/mafioso.jpg" alt="Portfolio" />
                          </a>
                        </div>
                      </div>
                    </li>
                    {/* END VIMEO */}
                    <li>
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <a
                            href="https://www.amazon.com/Political-Economy-Business-Ethics-East/dp/008100690X/ref=sr_1_3?dchild=1&qid=1625034250&refinements=p_27%3AIngyu+Oh&s=books&sr=1-3"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img src="assets/img/portfolio/parkoh.jpg" alt="portfolio" />
                          </a>
                        </div>
                      </div>
                    </li>
                    {/* END YOUTUBE */}
                    <li>
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <a
                            href="https://www.amazon.com/Inside-Changing-Business-China-Organizational/dp/0367522969/ref=sr_1_4?dchild=1&qid=1625034250&refinements=p_27%3AIngyu+Oh&s=books&sr=1-4"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img src="assets/img/portfolio/businesschina.jpg" alt="portfolio" />
                          </a>
                        </div>
                      </div>
                    </li>
                    {/* END SOUNDCLOUD */}
                    <li>
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <a
                            href="https://www.amazon.com/Business-Ethics-East-Asia-Historical/dp/1138210250/ref=sr_1_5?dchild=1&qid=1625034250&refinements=p_27%3AIngyu+Oh&s=books&sr=1-5"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img src="assets/img/portfolio/businessethics.jpg" alt="portfolio" />
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <a
                            href="https://www.amazon.com/Leadership-East-Asia-Globalization-Innovation/dp/0367335182/ref=sr_1_6?dchild=1&qid=1625034250&refinements=p_27%3AIngyu+Oh&s=books&sr=1-6"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img src="assets/img/portfolio/leadership.jpg" alt="portfolio" />
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <a
                            href="https://www.amazon.com/Mad-Technology-Companies-Technological-Advantages/dp/1403945071/ref=sr_1_7?dchild=1&qid=1625034250&refinements=p_27%3AIngyu+Oh&s=books&sr=1-7"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img src="assets/img/portfolio/mad.jpg" alt="portfolio" />
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                  {/* END PORTFOLIO LIST */}
                </TabPanel>
                {/* END ALL PORTFOLIO GALLERY */}

                <TabPanel>
                  <ul className="portfolio_list">
                    <li>
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <a href="assets/img/portfolio/3.jpg">
                            <img src="assets/img/portfolio/3.jpg" alt="Ui/Ux" />
                          </a>
                        </div>
                      </div>
                    </li>
                    {/* END VIMEO */}
                    <li>
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <a href="assets/img/portfolio/5.jpg">
                            <img src="assets/img/portfolio/5.jpg" alt="Ui/Ux" />
                          </a>
                        </div>
                      </div>
                    </li>
                    {/* END VIMEO */}
                  </ul>
                  {/* END PORTFOLIO LIST */}
                </TabPanel>
                {/* END UI/UX GALLERY */}

                <TabPanel>
                  <ul className="portfolio_list">
                    <li>
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <a href="assets/img/portfolio/2.jpg">
                            <img src="assets/img/portfolio/2.jpg" alt="Website" />
                          </a>
                        </div>
                      </div>
                    </li>
                    {/* END YOUTUBE */}
                    <li>
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <a href="assets/img/portfolio/4.jpg">
                            <img src="assets/img/portfolio/4.jpg" alt="Website" />
                          </a>
                        </div>
                      </div>
                    </li>
                    {/* END YOUTUBE */}
                  </ul>
                  {/* END PORTFOLIO LIST */}
                </TabPanel>
                {/* END WEBSITE GALLERY */}

                <TabPanel>
                  <ul className="portfolio_list">
                    <li>
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <a href="assets/img/portfolio/3.jpg">
                            <img src="assets/img/portfolio/3.jpg" alt="Graphic" />
                          </a>
                        </div>
                      </div>
                    </li>
                    {/* END SOUNDCLOUD */}
                    <li>
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <a href="assets/img/portfolio/5.jpg">
                            <img src="assets/img/portfolio/5.jpg" alt="Graphic" />
                          </a>
                        </div>
                      </div>
                    </li>
                    {/* END SOUNDCLOUD */}
                  </ul>
                  {/* END PORTFOLIO LIST */}
                </TabPanel>
                {/* END GRAPHIC GALLERY */}

                <TabPanel>
                  <ul className="portfolio_list">
                    <li>
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <a href="assets/img/portfolio/2.jpg">
                            <img src="assets/img/portfolio/2.jpg" alt="Creative" />
                          </a>
                        </div>
                      </div>
                    </li>
                    {/* END IMAGE */}
                    <li>
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <a href="assets/img/portfolio/3.jpg">
                            <img src="assets/img/portfolio/3.jpg" alt="Creative" />
                          </a>
                        </div>
                      </div>
                    </li>
                    {/* END IMAGE */}
                  </ul>
                  {/* END PORTFOLIO LIST */}
                </TabPanel>
                {/* END CREATIVE PORTFOLIO GALLERY */}

                {/* END TABPANEL */}
              </div>
              {/* END LIST WRAPPER */}
            </Tabs>
          </div>
        </div>
      </SimpleReactLightbox>
    </>
  );
};

export default Portfolio;
