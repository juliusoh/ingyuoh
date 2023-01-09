import React, { useRef } from "react";
import { useState } from "react";
import ReactMapGL from "react-map-gl";
import { useForm } from "react-hook-form";
import { sendForm } from "emailjs-com";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const templateParams = {
    from_name: "",
    from_email: "",
    message: "",
  };

  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    message: "",
    reply_to: "",
  });

  const form = useRef();

  const onSubmit = (e) => {
    console.log(e.target, "ALDSOAS");
    e.target.reset();
    const obj = (
      <form class="contact_form">
        <div className="first">
          <input type="text" className="from_name" value={templateParams.from_name} />
          <input type="text" className="from_email" value={templateParams.from_email} />
          <textarea type="text" className="from_email" value={templateParams.message} />
        </div>
      </form>
    );
    sendForm("service_qsftzaq", "template_63sgcec", "#myForm", "1WYHVD1EiwivRn33t").then(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const [viewport, setViewport] = useState({
    latitude: 34.8233,
    longitude: 135.6641,
    zoom: 8,
  });

  return (
    <>
      <div className="tokyo_tm_contact">
        <div className="tokyo_tm_title">
          <div className="title_flex">
            <div className="left">
              <span>Contact</span>
              <h3>Get in Touch</h3>
            </div>
          </div>
        </div>
        {/* END TITLE */}

        <div className="map_wrap">
          <div className="map">
            <ReactMapGL
              mapStyle={"mapbox://style/mapbox/dark-v9"}
              mapboxApiAccessToken="pk.eyJ1IjoiYmF5YXppZGgiLCJhIjoiY2tvemdwc3ByMDg1YzJubzQxcDR0cDR3dyJ9.s1zXEb5OPqgBDcmupj3GBA"
              {...viewport}
              onViewportChange={(nextViewport) => setViewport(nextViewport)}
            />
          </div>
        </div>
        {/* MENU WRAP */}

        <div className="fields">
          <form className="contact_form" ref={form} id="myForm" onSubmit={onSubmit}>
            <div className="first">
              <ul>
                <li>
                  <input
                    {...register("from_name", { required: true })}
                    type="text"
                    placeholder="Name"
                    name="from_name"
                    value={toSend.from_name}
                    onChange={handleChange}
                  />
                  {errors.from_name && errors.from_name.type === "required" && <span>Name is required</span>}
                </li>
                {/* END FIRST NAME */}

                <li>
                  <input
                    {...register(
                      "from_email",
                      {
                        required: "Email is Required",
                        pattern: {
                          value: /\S+@\S+\.\S+/,
                          message: "Entered value does not match email format",
                        },
                      },
                      { required: true }
                    )}
                    type="email"
                    placeholder="Email"
                    name="from_email"
                    value={toSend.from_email}
                    onChange={handleChange}
                  />
                  {errors.from_email && <span role="alert">{errors.from_email.message}</span>}
                </li>
                {/* END EMAIL */}

                <li>
                  <textarea
                    {...register("message", { required: true })}
                    placeholder="Message"
                    name="message"
                    value={toSend.message}
                    onChange={handleChange}
                  ></textarea>
                  {errors.message && <span>Subject is required.</span>}
                </li>
                {/* END SUBJECT MESSAGE */}
              </ul>
            </div>
            <div className="tokyo_tm_button">
              <button type="submit" className="ib-button">
                Send Message
              </button>
            </div>
            {/* END SUBMIT BUTTON */}
          </form>
          {/* END FORM */}
        </div>
        {/* END FIELDS */}
      </div>
      {/* END COTACT */}
    </>
  );
};

export default Contact;
