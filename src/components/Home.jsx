import React from "react";
import Social from "./Social";
import Brand from './Brand';

const Home = () => {
  return (
    <>
      <div className="tokyo_tm_home">
        <div className="home_content">
          <div className="avatar">
            <div
              className="image avatar_img"
              style={{
                backgroundImage: "url(assets/img/slider/ingyu3.jpg)",
              }}
            ></div>
            {/* END AVATAR IMAGE */}
          </div>
          {/* END AVATAR */}
          <div className="details">
            <h3 className="name">Ingyu Oh</h3>
            <p className="job">
            PROFESSOR OF KANSAI GADAI UNIVERSITY
            </p>
            {/* END JOB */}



          </div>
          {/* END DETAILS */}

        </div>
        {/* END HOME CONTENT */}

      </div>
      {/* END HOME */}
      <Brand />
    </>
  );
};

export default Home;
