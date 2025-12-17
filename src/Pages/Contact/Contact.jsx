import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [passwoed, setPassword] = useState("");

  const [nameLabel, setNameLabel] = useState(false);
  const [ageLabel, setAgeLabel] = useState(false);
  const [emailLabel, setEmailLabel] = useState(false);
  const [passwordLabel, setPasswordLabel] = useState(false);

  return (
    <>
      <title>Contact</title>
      <section className="contact bg-white d-flex justify-content-center align-items-center">
        <div className="container">
          <h2 className="mb-5 h1 fw-bold text-uppercase text-center">
            contact section
          </h2>
          <form className="mx-auto d-flex flex-wrap gap-2">
            <div className="w-100">
              <label
                htmlFor="userName"
                className={`${nameLabel === false ? "" : "visible"}`}
              >
                userName:
              </label>

              <input
                type="text"
                placeholder="userName"
                id="userName"
                className="w-100 rounded-1 p-2"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  e.target.value !== ""
                    ? setNameLabel(true)
                    : setNameLabel(false);
                }}
              />
            </div>

            <div className="w-100">
              <label
                htmlFor="userAge"
                className={`${ageLabel === false ? "invisible" : "visible"}`}
              >
                userAge:
              </label>

              <input
                type="number"
                placeholder="userAge"
                id="userAge"
                className="w-100 rounded-1 p-2"
                value={age}
                onChange={(e) => {
                  setAge(e.target.value);
                  e.target.value !== ""
                    ? setAgeLabel(true)
                    : setAgeLabel(false);
                }}
              />
            </div>

            <div className="w-100">
              <label
                htmlFor="userEmail"
                className={`${emailLabel === false ? "invisible" : "visible"}`}
              >
                userEmail:
              </label>

              <input
                type="email"
                placeholder="userEmail"
                id="userEmail"
                className="w-100 rounded-1 p-2"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  e.target.value !== ""
                    ? setEmailLabel(true)
                    : setEmailLabel(false);
                }}
              />
            </div>

            <div className="w-100">
              <label
                htmlFor="userPassword"
                className={`${
                  passwordLabel === false ? "invisible" : "visible"
                }`}
              >
                userPassword:
              </label>
              <input
                type="password"
                placeholder="userPassword"
                id="userPassword"
                className="w-100 rounded-1 p-2"
                value={passwoed}
                onChange={(e) => {
                  setPassword(e.target.value);
                  e.target.value !== ""
                    ? setPasswordLabel(true)
                    : setPasswordLabel(false);
                }}
              />
            </div>

            <button className="btn text-white mt-4">Send Message</button>
          </form>
        </div>
      </section>
    </>
  );
}
