import { useState } from "react";
import "./lor_request.css";

const LorRequest = () => {
  const [cdpc, setCdpc] = useState(false);
  const onchange = (e) => {
    setCdpc(e.target.value);
  };
  return (
    <>
      <div className="Lor__container">
        <div className="heading__container">
          <h1>Request for LOR/ Further Study</h1>
        </div>
        <div className="form__container">
          <form>
            <div className="personal-information__container">
              <div className="personal-information__container__heading">
                Personal Information
              </div>
              <div className="input__container">
                <input placeholder="Student Id" />
              </div>
              <div className="input__container">
                <input placeholder="Email" />
              </div>
              <div className="input__container">
                <input placeholder="Parent Number" />
              </div>
              <div className="input__container">
                <input placeholder="Student Name" />
              </div>
              <div className="input__container">
                <input placeholder="Phone Number" />
              </div>
              <div className="select__container">
                <select name="passin_year">
                  <option value={""}>Select Passing Year</option>
                  <option value={"2022"}>2022</option>
                  <option value={"2023"}>2023</option>
                  <option value={"2024"}>2024</option>
                  <option value={"2025"}>2024</option>
                </select>
              </div>
            </div>
            <div className="place-through-cdpc">
              <div className="place-through-cdpc__heading">
                Placed Through CDPC, Charusat
              </div>
              <div className="radio__container">
                <div className="radio__container__btn">
                  <div className="radio-one">
                    <input
                      type="radio"
                      id="yes"
                      name="cdpc"
                      value="true"
                      onChange={onchange}
                    />
                    <label>Yes</label>
                  </div>
                  <div className="radio-two">
                    <input
                      type="radio"
                      id="no"
                      name="cdpc"
                      value="false"
                      onChange={onchange}
                    />
                    <label>No</label>
                  </div>
                </div>
                {cdpc === "true" ? (
                  <div className="radio__container__input__container">
                    <input placeholder="Company Name" />
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LorRequest;
