import React, { useState } from "react";
import Modal from "react-modal";
import Brand from "./Brand";

Modal.setAppElement("#root");

const News = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }
  function toggleModalFive() {
    setIsOpen5(!isOpen5);
  }
  function toggleModalSix() {
    setIsOpen6(!isOpen6);
  }

  return (
    <>
      <div className="tokyo_tm_news">
        <div className="tokyo_tm_title">
          <div className="title_flex">
            <div className="left">
              <span>CV</span>
              <h3>CV</h3>
            </div>
          </div>
        </div>
        {/* END TITLE */}

        <ul>
          <li>
            <div className="list_inner">
              <div className="image" onClick={toggleModalOne}>

              </div>
              {/* END IMAGE */}
              <div className="details">
                <div className="extra">
                </div>
                {/* END EXTRA */}

                <h3 className="title" onClick={toggleModalOne}>
                  APPOINTMENTS
                </h3>
                <div className="tokyo_tm_read_more">

                <a onClick={toggleModalOne}>
                  <span>Read More</span>
                </a>

                </div>
                {/* END READ MORE BUTTON */}
              </div>
              {/* END DETAILS */}

              {/* START MODAL */}
              <Modal
                isOpen={isOpen}
                onRequestClose={toggleModalOne}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalOne}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* END CLOSE ICON */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="image">

                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/news/1.jpg)",
                          }}
                        ></div>
                      </div>
                      {/* END IMAGE */}
                      <div className="details">
                        <div className="extra">
                        <h3 className="title">
                          Appointments
                        </h3>
                        </div>

                      </div>
                      {/* END DETAILS */}
                      <div className="main_content ">
                        <div className="descriptions">
                          <p className="bigger">
                          <ul>
                          <li><h5>2018</h5> - Professor, College of Foreign Studies, Kansai Gaidai University, Osaka, Japan. </li>
                          <li><h5>2013-2018</h5> - Professor. Research Institute of Korean Studies (RIKS), Korea University, Seoul, Korea. </li>
                          <li><h5>2014-2015</h5> - Director. RIKS Center for Hallyu Studies, Korea University, Seoul, Korea. </li>
                          <li><h5>2010-2012</h5> - Associate Professor. SolBridge International School of Business, Daejeon, Korea. </li>
                          <li><h5>2009-2010</h5> - Visiting Research Fellow, Center for East Asian Studies, University of Bristol, Bristol, UK. </li>
                          <li><h5>2008-2011</h5> - Senior Lecturer. Bristol Business School, University of the West of England, Frenchay Campus, Bristol, UK. </li>
                          <li><h5>2005-06</h5> - Visiting Professor. School of International and Area Studies. University of California at Berkeley. Courses Taught: “Corporate Capitalism in Korea and Japan” and “Korean Learning.” </li>
                          <li><h5>2004-06</h5> - Professor. Graduate School of Management. Ritsumeikan Asia Pacific University. Beppu, Japan. </li>
                          <li><h5>2001-03</h5> - Associate Professor. Graduate School of Management. Ritsumeikan Asia Pacific University. Beppu, Japan. </li>
                          <li><h5>1997-01</h5> - Lecturer. Department of Political Science and Public Policy. University of Waikato. Hamilton, New Zealand. </li>
                          <li><h5>1994-95</h5> - Instructor and Visiting Assistant Professor. Department of Sociology. University of Oregon. Eugene OR, USA </li>
                          </ul>
                          </p>
                          <p>

                          </p>
                          <p>

                          </p>

                          {/* END QUOTEBOX */}
                          <p>

                          </p>
                          <p>

                          </p>
                        </div>
                        {/* END DESCRIPTION */}

                        {/* END NEWS SHARE */}
                      </div>
                    </div>
                  </div>
                  {/* END BOX INNER */}
                </div>
                {/* END MODALBOX NEWS */}
              </Modal>
              {/* END MODAL */}
            </div>
          </li>
          {/* END SINGLE BLOG */}

          <li>
            <div className="list_inner">

              {/* END IMAGE */}

              <div className="details">
                <div className="extra">

                </div>
                {/* END EXTRA */}

                <h3 className="title" onClick={toggleModalTwo}>
                HONORS, FELLOWSHIPS, AND GRANTS
                </h3>
                <div className="tokyo_tm_read_more">

                <a onClick={toggleModalTwo}>
                  <span>Read More</span>
                </a>

                </div>
                {/* END READ MORE BUTTON */}
              </div>

              <Modal
                isOpen={isOpen2}
                onRequestClose={toggleModalTwo}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalTwo}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* END CLOSE MODAL */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="image">

                        <div
                          className="main"
                          style={{
                            backgroundImage: "",
                          }}
                        ></div>
                      </div>
                      {/* END IMAGE */}
                      <div className="details">
                        <div className="extra">
                        <h3 className="title">
                        HONORS, FELLOWSHIPS, AND GRANTS
                      </h3>
                        </div>

                      </div>
                      {/* END DETAILS */}
                      <div className="main_content ">
                        <div className="descriptions">
                          <p className="bigger">
                            <ul>
                              <li><h5>2019</h5>Ministry of Foreign Affairs Research Project ($20,000)</li>
                              <li><h5>2017-21</h5>National Research Foundation Social Science Korea Funding ($1.5 million)</li>
                              <li><h5>2017</h5>Ministry of Foreign Affairs Research Project ($20,000)</li>
                              <li><h5>2015-18</h5>National Research Foundation of Korea Grant ($500,000)</li>
                              <li><h5>2015</h5>Korea Foundation Research Grant ($70,000)</li>
                              <li><h5>2014</h5>National Research Council for Economics, Humanities, and Social Sciences Research Grant ($30,000)</li>
                              <li><h5>2014</h5>Korea Foundation Research Grant ($20,000)</li>
                              <li><h5>2013</h5>National Research Foundation of Korea Research Grant ($100,000)</li>
                              <li><h5>2012</h5>Korea Energy and Technology Evaluation and Planning Research Grant ($80,000)</li>
                              <li><h5>2012</h5>IOM MRTC Research Grant ($70,000)</li>
                              <li><h5>2012</h5>Korea Research Institute of Standards and Science Grant ($30,000)</li>
                              <li><h5>2011-12</h5>Woosong Research Grant ($25,000)</li>
                            </ul>
                          </p>
                          <p>

                          </p>
                          <p>

                          </p>

                          {/* END QUOTEBOX */}
                          <p>

                          </p>
                          <p>

                          </p>
                        </div>
                        <div className="news_share">

                          {/* END SOCIAL */}
                        </div>
                        {/* END NEWS SHARE */}
                      </div>
                      {/* END MAIN CONTENT */}
                    </div>
                  </div>
                </div>
              </Modal>
              {/* END MODAL */}
            </div>
            {/* END LIST INNER */}
          </li>
          {/* END SINGLE BLOG */}

          <li>
            <div className="list_inner">

              {/* END IMAGE */}

              <div className="details">
                <div className="extra">

                </div>

                <h3 className="title" onClick={toggleModalThree}>
                          BOOKS
                </h3>
                <div className="tokyo_tm_read_more">

                <a onClick={toggleModalThree}>
                  <span>Read More</span>
                </a>

                </div>
              </div>
              {/* END DETAILS */}

              {/* START MODAL */}
              <Modal
                isOpen={isOpen3}
                onRequestClose={toggleModalThree}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalThree}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="image">

                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/news/3.jpg)",
                          }}
                        ></div>
                      </div>
                      <div className="details">
                        <div className="extra">
                        <h3 className="title">
                         PUBLICATIONS
                        </h3>
                          <p className="date">

                          </p>
                        </div>

                      </div>
                      <div className="main_content ">

                        <div className="descriptions">

                          <p className="bigger">
                            <ul>
                              <li><h5>Forthcoming</h5><p>Ingyu Oh (ed.) East Asia in Transition: Democracy, Diaspora, and the New Cold War. New Castle upon Tyne: Cambridge Scholars Publishing.</p></li>
                              <li><h5>Forthcoming</h5><p>Chris Rowley, Ingyu Oh, and Wonho Jang (eds.) Leadership and Innovation in China and Vietnam: Principles, Styles and Comparisons. London: Routledge.</p></li>
                              <li><h5>2021</h5><p>Chris Rowley and Ingyu Oh (eds.) Performance and Managerial Ties in China: Theories and Dimensions. London: Routledge.</p></li>
                              <li><h5>2020</h5><p>Chris Rowley and Ingyu Oh (eds.) Inside the Changing Business of China: Organizational Evolution, Culture, Leadership, and Innovation. London: Routledge.</p></li>
                              <li><h5>2019</h5><p>Chris Rowley and Ingyu Oh (eds.) Leadership in East Asia: Globalization, Innovation and Creativity in Japan, South Korea and China. London: Routledge.</p></li>
                              <li><h5>2016</h5><p>Chris Rowley and Ingyu Oh (eds.) Business Ethics in East Asia: Examples in Historical Context. London: Routledge.</p></li>
                              <li><h5>2016</h5><p>Ingyu Oh and Gil-Sung Park (eds.) The Political Economy of Business Ethics in East Asia: A Historical and Comparative Perspective. Cambridge, MA: Elsevier.</p></li>
                              <li><h5>2014</h5><p>한류 3.0 과 문화글로컬화의 인문학적 연구. 세종: 경제사회인문연구회</p></li>
                              <li><h5>2005</h5><p>Ingyu Oh, Hun-Joon Park, Shigemi Yoneyama, and Hyuk-Rae Kim. Mad Technology: How East Asian Companies Are Defending Their Technological Advantages. London & New York: Palgrave.</p></li>
                              <li><h5>2004</h5><p>Japanese Management: Past, Present, and Future. Singapore: Prentice Hall. (Translated into Russian).</p></li>
                              <li><h5>2018</h5><p>Mafioso, Big Business, and the Financial Crisis: The State-Business Relations in South Korea and Japan. London & New York: Routledge.</p></li>
                              <li><h5>1999</h5><p>Mafioso, Big Business, and the Financial Crisis: The State-Business Relations in South Korea and Japan. Aldershot, UK: Ashgate.</p></li>
                            </ul>
                          </p>

                          <p>

                          </p>
                          <p>

                          </p>

                          {/* END QUOTEBOX */}
                          <p>

                          </p>
                          <p>

                          </p>
                        </div>
                        <div className="news_share">

                          {/* END SCCIAL SHARE */}
                        </div>
                      </div>
                      {/* END MAIN CONTENT */}
                    </div>
                  </div>
                </div>
              </Modal>
            </div>
            {/* END LIST INNER */}
          </li>
          {/* END SINGLE BLOG */}

          <li>
            <div className="list_inner">
              <div className="image" onClick={toggleModalFour}>
              </div>
              {/* END IMAGE */}

              <div className="details">
                <div className="extra">
                  <p className="date">

                  </p>
                </div>
                {/* END EXTRA */}

                <h3 className="title" onClick={toggleModalFour}>
                  INVITED LECTURES, MEDIA INTERVIEWS, NEWSPAPER ARTICLES
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalFour}>
                    <span>Read More</span>
                  </a>
                </div>
              </div>
              {/* END DETAILS */}
              <Modal
                isOpen={isOpen4}
                onRequestClose={toggleModalFour}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalFour}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* END CLOSE ICON */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                    <h3 className="title">
                    INVITED LECTURES, MEDIA INTERVIEWS, NEWSPAPER ARTICLES (Since 2010)
                    </h3>
                      {/* END IMAGE */}

                      <div className="details">
                        <div className="extra">
                          <p className="date">

                          </p>
                        </div>

                      </div>
                      {/* END DETAILS */}

                      <div className="main_content ">
                        <div className="descriptions">
                          <p className="bigger">
                            <ul>
                              <li><h6>2020</h6><p>Interview on Hallyu for MBC TV.</p></li>
                              <li><h6>2018</h6><p>Interview on K-pop in North Korea. Australian Broadcasting Corp. (ABC)</p></li>
                              <li><h6>2017</h6><p>Invited Speech, “Understanding the Melancholia Epidemic: The Case of Hallyu (the Korean Wave) Fans.” East Asian Studies. Ohio State University.</p></li>
                              <li><h6>2017</h6><p>Invited Speech, “Mafia and Peddlers: Korean Economic Development amid Political Corruption.” Access Asia. UC Irvine.</p></li>
                              <li><h6>2017</h6><p>Invited Speech, “Understanding the Melancholia Epidemic: The Case of Hallyu (the Korean Wave) Fans.” Program in Transnational Korean Studies. UC San Diego.</p></li>
                              <li><h6>2017</h6><p>Le Monde interview on Hallyu.</p></li>
                              <li><h6>2016</h6><p>Invited Speech, “Africa and Korea in the Age of Globalization.” Center for African Studies, Bayreuth University. 2016	NY Times interview on Korea.</p></li>
                              <li><h6>2016</h6><p>Various TV appearances on BBC, CNN, and Arirang TV.</p></li>
                              <li><h6>2015</h6><p>Various TV appearances on CCTV (Chinese Central TV) on East Asian.</p></li>
                              <li><h6>2014</h6><p>Guest Speech, “Cultural Cooperation between Taiwan and Korea.” National Chengchi University. Taipei: Taiwan.</p></li>
                              <li><h6>2014</h6><p>Guest Speech, “Cultural Cooperation between Thailand and Korea.” Thammasat University. Bangkok: Thailand.</p></li>
                              <li><h6>2014</h6><p>Guest Speech, “Cultural Cooperation between the Philippines and Korea.” Asia Institute of Management. Manila: Philippines.</p></li>
                              <li><h6>2014</h6><p>Keynote Speech, “Globalization and K-pop.” Ateneo Initiative in Korean Studies, Manila, the Philippines.</p></li>
                              <li><h6>2014</h6><p>On Hallyu, interview with Hokkaido Newspaper.</p></li>
                              <li><h6>2014</h6><p>On Hallyu, interview with Dong-A Daily.</p></li>
                              <li><h6>2014</h6><p>On Hallyu, interview with Hokkaido Newspaper.</p></li>
                              <li><h6>2014</h6><p>On Hallyu, interview with The Times (London). </p></li>
                              <li><h6>2013</h6><p>MBA Program, Sungkyunkwan University. “Hallyu.”</p></li>
                              <li><h6>2012</h6><p>Korea Energy and Technology Evaluation and Planning. “Hallyu.”</p></li>
                              <li><h6>2012</h6><p>Interview with SankeiBiz, May 12.</p></li>
                              <li><h6>2011</h6><p>Host, “Solbridge 3-Minute Column,” weekly program on Radio Korea Hawaii.</p></li>
                              <li><h6>2010</h6><p>TBS FM radio interview on the Korean chaebol.</p></li>
                            </ul>
                          </p>
                          <p>

                          </p>
                          <p>

                          </p>

                          {/* END QUOTEBOX */}
                          <p>

                          </p>
                          <p>

                          </p>
                        </div>
                        <div className="news_share">

                          {/* END SOCIAL SHARE */}
                        </div>
                      </div>
                      {/* END MAIN CONTENT */}
                    </div>
                  </div>
                </div>
              </Modal>
              {/* END MODAL */}
            </div>
            {/* END LIST INNER */}
          </li>
          <li>
            <div className="list_inner">

              {/* END IMAGE */}

              <div className="details">
                <div className="extra">

                </div>

                <h3 className="title" onClick={toggleModalFive}>
                PEER REVIEWED JOURNAL ARTICLES
                </h3>
                <div className="tokyo_tm_read_more">

                <a onClick={toggleModalFive}>
                  <span>Read More</span>
                </a>

                </div>
              </div>
              {/* END DETAILS */}

              {/* START MODAL */}
              <Modal
                isOpen={isOpen5}
                onRequestClose={toggleModalFive}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalFive}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="image">

                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/news/3.jpg)",
                          }}
                        ></div>
                      </div>
                      <div className="details">
                        <div className="extra">
                        <h3 className="title">
                         PEER REVIEWED JOURNAL ARTICLES
                        </h3>
                          <p className="date">

                          </p>
                        </div>

                      </div>
                      <div className="main_content ">

                        <div className="descriptions">

                          <p className="bigger">
                            <ul>
                            <li><h5>2021</h5><p>Chris Rowley, Ingyu Oh, and Wonho Jang. “Leadership, Performance and Socialist Reforms: How did Reform Leadership Emerge and Create Change?” Asia Pacific Business Review 27(1): 1-10.</p></li>
                            <li><h5>2020</h5><p>Chris Rowley and Ingyu Oh. “The Enigma of Chinese Power: Understanding Corporate Performances through Managerial Ties.” Asia Pacific Business Review 26(5): 529-536.</p></li>
                            <li><h5>2020</h5><p>Ingyu Oh and Wonho Jang. “From Globalization to Glocalization: Configuring Korean Pop Culture to Meet Glocal Demands.” Culture and Empathy 3(1-2): 23-42.</p></li>
                            <li><h5>2020</h5><p>Chris Rowley and Ingyu Oh. “Trends in Chinese Management and Business: Change, Confucianism, Leadership, Knowledge and Innovation.” Asia Pacific Business Review 26(1): 1-8.</p></li>
                            <li><h5>2019</h5><p>Ingyu Oh and Soel-Ah Kim. “Connexion Interculturelle: Communication et Comportement Socioculturel entre Citoyens Empathiques dans le Monde.” Sociétes 145: 5-10.</p></li>
                            <li><h5>2019</h5><p>Ingyu Oh and Soel-Ah Kim. “Comprendre la communication de la gender mélancolie - autour du fan féminin de Hallyu.” Sociétes 145: 11-24.</p></li>
                            <li><h5>2019</h5><p>Chris Rowley, Jun Ishikawa, and Ingyu Oh. “Changing Facets of Leadership Performance in Japan, South Korea and China.” Asia Pacific Business Review 25(2): 161-172.</p></li>
                            <li><h5>2019</h5><p>Ingyu Oh and Taichi Takahara. “From Business to Politics: Cross-Border CEOs and Political Leadership in Japan and South Korea.” Asia Pacific Business Review 25(2): 173-193.</p></li>
                            <li><h5>2019</h5><p>Chris Rowley, Ingyu Oh, and Wonho Jang. “New Perspectives on East Asian Leadership in the Age of Globalization: Local Grounding and Historical Comparisons in the Asia Pacific Region.” Asia Pacific Business Review 25(2): 307-315.</p></li>
                            <li><h5>2019</h5><p>“Top Heavy: Globalization and Inequality in South Korea.” Culture and Empathy 2(3): 164-191.</p></li>
                            <li><h5>2019</h5><p>“Korea vs. Italy: Why Culture is Important in Keeping your Country Competitive.” Culture and Empathy 2(2): 86-104.</p></li>
                            <li><h5>2019</h5><p>“Internal Diaspora: Kang Hang’s Japan Experience and Intellectual Isolation in Joseon.” Culture and Empathy 2(1): 18-31.</p></li>
                            <li><h5>2018</h5><p>「해양한류와 지역발전 – 부산을 중심으로」『人文社会研究』 19(3): 107-142. Culture and Empathy 2(1): 18-31.</p></li>
                            <li><h5>2018</h5><p>Ingyu Oh, Wonho Jang, and Sanghyeon Kim. “Selling trust in cyber space: social networking service (SNS) providers and social capital amongst netizens in South Korea.” Asia Pacific Business Review 24(2): 196-211.</p></li>
                            <li><h5>2018</h5><p>Ingyu Oh and Bonwon Koo. “Japanese Webtoon: Digitalizing and Marketing Manga Online Using South Korean App Designs.” Culture and Empathy 1(1-4): 49-69.</p></li>
                            <li><h5>2017</h5><p>“From Localization to Glocalization: Contriving Korean Pop Culture to Meet Glocal Demands.” Kritika Kultura 29: 157-167.</p></li>
                            <li><h5>2016</h5><p>Ingyu Oh and Insook Kim. 「민족감정의 극복과 한류소비현상 – 한류 드라마의 반일・반중묘사와 일본・중국관객의 반응」『韓日經商論集』 第 71 卷: 29-51.</p></li>
                            <li><h5>2016</h5><p>Ingyu Oh and Chris Rowley. “Business Ethics and the Role of Context: Institutionalism, History and Comparisons in the Asia Pacific Region.” Asia Pacific Business Review 22(3): 353-365.</p></li>
                            <li><h5>2016</h5><p>Ingyu Oh and Chris Rowley. “Relinquishing Business Ethics from a Theoretical Deadlock: the Requirement for Local Grounding and Historical Comparisons in the Asia Pacific Region.” Asia Pacific Business Review 22(3): 516-521.</p></li>
                            <li><h5>2016</h5><p>Ingyu Oh and Young-Ran Koh. “The State as a Regulator of Business Ethics: The Tokugawa Authority Structure and Private Interests.” Asia Pacific Business Review 22(3): 397-410.</p></li>
                            <li><h5>2014</h5><p>"Comparing State Economic Ideologies and Business Ethics in East Asia." Korea Observer 45(3): 347-361.</p></li>
                            <li><h5>2014</h5><p>Ingyu Oh and Choong-Mook Lee. "A League of their Own: Female Hallyu Fans and Korea-Japan Relations." Pacific Focus 29(2):284-302.</p></li>
                            <li><h5>2013</h5><p>“Intuition and consilience: the creation of clinical and symptomatic knowledge in entertainment industries.” International Journal of Technology Management and Sustainable Development 12(2):137-153.</p></li>
                            <li><h5>2013</h5><p>“The Globalization of K-pop: Korea’s Place in the Global Music Industry.” Korea Observer 44(3):389-409.</p></li>
                            <li><h5>2013</h5><p>Ingyu Oh and Hyo-Jung Lee. “Mass media technologies and popular music genres: K- pop and YouTube.” Korea Journal 53(4):34-58.</p></li>
                            <li><h5>2013</h5><p>Andew Eungi Kim, Fitria Mayasari, and Ingyu Oh “When ‘tourist audiences’ encounter each other: K-pop fans and transnational identity building.” Korea Journal 53(4):59- 82.</p></li>
                            <li><h5>2013</h5><p>Ingyu Oh and Hyo-Jung Lee. “K-pop in Korea: How the pop music industry is changing a post-developmental society.” Cross-Currents: East Asian History and Culture Review 9:105-124.</p></li>
                            <li><h5>2012</h5><p>John Lie and Ingyu Oh. “Introduction.” Korea Observer 43(3):333-337.</p></li>
                            <li><h5>2012</h5><p>Ingyu Oh and Gil-Sung Park. “From B2C to B2B: selling Korean pop music in the age of new social media.” Korea Observer 43(3):365-397.</p></li>
                            <li><h5>2012</h5><p>「내부자산업스파이의 증가요인과 정책시사점」 『韓国警察研究』 11(2):205-226.</p></li>
                            <li><h5>2012</h5><p>Hyuk-Rae Kim and Ingyu Oh. “Foreigners cometh!: Paths to multiculturalism in Japan, Korea, and Taiwan.” Asian and Pacific Migration Journal 21(1):105-133.</p></li>
                            <li><h5>2012</h5><p>“From nationalistic diaspora to transnational diaspora: The evolution of identity crisis among the Korean Japanese.” Journal of Ethnic and Migration Studies 38(4): 651-669.</p></li>
                            <li><h5>2012</h5><p>“The use of feed-forward and feedback learning in firm-university knowledge development: the case of Japan.” Asian Journal of Innovation and Policy 1(1):92- 115.</p></li>
                            <li><h5>2011</h5><p>Hyuk-Rae Kim and Ingyu Oh. “Migration and multicultural contention in East Asia.” Journal of Ethnic and Migration Studies 37(10): 1563-1581.</p></li>
                            <li><h5>2011</h5><p>“Torn between two lovers: Retrospective learning and postcolonial melancholia among Japanese women.” Korea Observer 42(2): 223-254.</p></li>
                            <li><h5>2011</h5><p>“Strategies of Innovation for Firms in the Emerging Markets.” International Journal of Technology Management and Sustainable Development 10(2): 103-105.</p></li>
                            <li><h5>2011</h5><p>“Leveraging corporate success via R&D and niche market strategies: The case of Shin Ramyeon born global in Korea.” International Journal of Technology Management and Sustainable Development 10(2): 107-123.</p></li>
                            <li><h5>2010</h5><p>Ingyu Oh and Recep Varcin. “Rent-sharing: Organizational and technological innovations under the military regimes in South Korea and Turkey.” International Journal of Technology Management and Sustainable Development 9(2):77-94.</p></li>
                            <li><h5>2010</h5><p>“Editorial.” International Journal of Technology Marketing 5(2):105-110.</p></li>
                            <li><h5>2010</h5><p>“Virtual technology marketing and governance problems: How can firms benefit from dynamic boundaries?” International Journal of Technology Marketing 5(2):111-126.</p></li>
                            <li><h5>2010</h5><p>“The development of cluster tool controllers (CTC) for semiconductor manufacturing: The case of KAIST and Jusung Engineering, Co.” International Journal of Technology Marketing 5(2):192-200.</p></li>
                            <li><h5>2010</h5><p>“New product development and commercialization at SK Chemical.” International Journal of Technology Marketing 5(2):181-191.</p></li>
                            <li><h5>2010</h5><p>“Education and development: Why are Koreans obsessed with learning?” Comparative Sociology 9(3):308-327.</p></li>
                            </ul>
                          </p>

                          <p>

                          </p>
                          <p>

                          </p>

                          {/* END QUOTEBOX */}
                          <p>

                          </p>
                          <p>

                          </p>
                        </div>
                        <div className="news_share">

                          {/* END SCCIAL SHARE */}
                        </div>
                      </div>
                      {/* END MAIN CONTENT */}
                    </div>
                  </div>
                </div>
              </Modal>
            </div>
            {/* END LIST INNER */}
          </li>

          <li>
            <div className="list_inner">

              {/* END IMAGE */}

              <div className="details">
                <div className="extra">

                </div>

                <h3 className="title" onClick={toggleModalSix}>
                BOOK CHAPTERS
                </h3>
                <div className="tokyo_tm_read_more">

                <a onClick={toggleModalSix}>
                  <span>Read More</span>
                </a>

                </div>
              </div>
              {/* END DETAILS */}

              {/* START MODAL */}
              <Modal
                isOpen={isOpen6}
                onRequestClose={toggleModalSix}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalSix}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="image">

                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/news/3.jpg)",
                          }}
                        ></div>
                      </div>
                      <div className="details">
                        <div className="extra">
                        <h3 className="title">
                         BOOK CHAPTERS (Since 2010)
                        </h3>
                          <p className="date">

                          </p>
                        </div>

                      </div>
                      <div className="main_content ">

                        <div className="descriptions">

                          <p className="bigger">
                            <ul>
                            <li><h5>Forthcoming</h5><p>Ingyu Oh and Wonho Jang. “From Globalization to Glocalization: Configuring Korean Pop Culture to Meet Glocal Demands.” In Victor Roudometof and Ugo Dessi (Eds.), Handbook of Culture and Glocalization, pp. xxx-xxx. Cheltenham: Edward Elgar.</p></li>
                            <li><h5>Forthcoming</h5><p>Chris Rowley, Ingyu Oh, Wonho Jang. “Leadership, Performance and Socialist Reforms: How did Reform Leadership Emerge and Create Change?” In Chris Rowley, Ingyu Oh, and Wonho Jang (Eds.), Leadership and Innovation in China and Vietnam: Principles, Styles and Comparisons, pp. xx-xx. London: Routledge.</p></li>
                            <li><h5>2021</h5><p>Chris Rowley and Ingyu Oh. “The Enigma of Chinese Power: Understanding Corporate Performances through Managerial Ties.”  In Chris Rowley and Ingyu Oh (Eds.). Performance and Managerial Ties in China: Theories and Dimensions, pp. 1-8. London: Routledge.</p></li>
                            <li><h5>2020</h5><p>Chris Rowley and Ingyu Oh. “Trends in Chinese Management and Business: Change, Confucianism, Leadership, Knowledge and Innovation.” In Chris Rowley and Ingyu Oh (Eds.). Inside the Changing Business of China: Organizational Evolution, Culture, Leadership, and Innovation, pp. 1-8. London: Routledge.</p></li>
                            <li><h5>2019</h5><p>Chris Rowley and Ingyu Oh (eds.) Leadership in East Asia: Globalization, Innovation and Creativity in Japan, South Korea and China. London: Routledge</p></li>
                            <li><h5>2019</h5><p>Ingyu Oh and Bonwon Koo. “Japanese Webtoon: Digitalizing and Marketing Manga Online.” In G. Park, N. Otmazgin, and K. Howard (Eds.), Transcultural Fandom and the Globalization of Hallyu, pp. 181-206. Seoul: Korea University Press.</p></li>
                            <li><h5>2019</h5><p>Chris Rowley, Jun Ishikawa, and Ingyu Oh. “Changing Facets of Leadership Performance in Japan, South Korea and China.” Asia Pacific Business Review 25(2): 161-172.</p></li>
                            <li><h5>2019</h5><p>Ingyu Oh and Taichi Takahara. “From Business to Politics: Cross-Border CEOs and Political Leadership in Japan and South Korea.” Asia Pacific Business Review 25(2): 173-193.</p></li>
                            <li><h5>2018</h5><p>Ingyu Oh, Wonho Jang, and Sanghyeon Kim. “Selling trust in cyber space: social networking service (SNS) providers and social capital amongst netizens in South Korea.” In Y. Suseno and C. Rowley (Eds.), Social Capital in the Asia Pacific: Examples from the Services Industry. London: Routledge.</p></li>
                            <li><h5>2017</h5><p>“전염의 사회학적 이해: 멜랑콜리아를 중심으로.” 박길성, 김우주 외. 전염의 상상력. 서울 나남, pp. 67-100. </p> </li>
                            <li><h5>2017</h5><p>“From Credible Threats to Credible Commitments? The Changing Face of South Korean Corruption.” In M. dela Rama and C. Rowley (Eds.), The Changing Face of Corruption in the Asia Pacific, pp. 243-250. Cambridge: Elsevier.</p></li>
                            <li><h5>2017</h5><p>“Chaebols’ Innovation Management without an Economic Miracle.” In A. Brem and E. Viardot (Eds.), Revolution of Innovation Management, Vol. 2, pp. 41-68. London: Palgrave. </p></li>
                            <li><h5>2015</h5><p>Ingyu Oh and Hannah Jun. “Economic Miracle.” In Michael Seth (Ed.), Handbook of Modern Korean History, pp. 295-313. London: Routledge.</p></li>
                            <li><h5>2018</h5><p>Ingyu Oh, Wonho Jang, and Sanghyeon Kim. “Selling trust in cyber space: social networking service (SNS) providers and social capital amongst netizens in South Korea.” Asia Pacific Business Review 24(2): 196-211.</p></li>
                            <li><h5>2015</h5><p>「日本発の韓流と嫌韓流が東アジアに齎す文化の未来」呉スンホ（編）、『韓国インテ リジェンスの憂鬱』 東京： KK ベストセラーズ, pp. 125-158.</p></li>
                            <li><h5>2017</h5><p>“From Localization to Glocalization: Contriving Korean Pop Culture to Meet Glocal Demands.” Kritika Kultura 29: 157-167.</p></li>
                            <li><h5>2014</h5><p>John Lie and Ingyu Oh. “SM Entertainment and Soo Man Lee.” In Fu La Tony Yu and Ho don Yan (Eds.), Handbook in East Asian Entrepreneurship, pp. 346-352.  London: Routledge.</p></li>
                            <li><h5>2013</h5><p>“Joining innovation efforts using both feed-forward and feedback learning: the case of Japanese and Korean universities.” In Eric Viardot and Alexander Brem (eds.), Evolution of Innovation Management: Trends in International Context, pp. 208-235.  Hampshire: Palgrave.</p></li>
                            <li><h5>2011</h5><p>“Not yet Triple Helix III?: Japanese MOT policies and the problem of technology exploitation.” In Mohammed Saad and Girma Zawddie (eds.), Theory and Practice of Triple Helix Model in Developing Countries, pp. 283-304. London: Routledge.</p></li>
                            <li><h5>2010</h5><p>“Hallyu: new politico-cultural discourse in East Asia?” In Marie Söderberg (ed.) The Japan-South Korea Relationship, pp. 99-118. London: Routledge.</p></li>

                            </ul>
                          </p>

                          <p>

                          </p>
                          <p>

                          </p>

                          {/* END QUOTEBOX */}
                          <p>

                          </p>
                          <p>

                          </p>
                        </div>
                        <div className="news_share">

                          {/* END SCCIAL SHARE */}
                        </div>
                      </div>
                      {/* END MAIN CONTENT */}
                    </div>
                  </div>
                </div>
              </Modal>
            </div>
            {/* END LIST INNER */}
          </li>

        </ul>

      </div>
      
    </>

  );
};

export default News;
