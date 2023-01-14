import "./lor_request.css";

const LorRequest = () => {
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
          </form>
        </div>
      </div>
    </>
  );
};

export default LorRequest;
