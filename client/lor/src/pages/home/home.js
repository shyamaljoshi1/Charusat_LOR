import "./home.css";

const Home = () => {
  return (
    <div className="home__container">
      <div className="home__container__heading">
        LOR (Letter Of Recommendation)
      </div>
      <div className="home__container__data">
        <div className="home__container__data__heading">
          1. Request LOR <br />
          2. Upload Admit-Card <br />
          3. View Report <br />
          <br />
        </div>
        <div className="home__container__instructions">
          {/* <u>
            <b>Request LOR Flow</b>
          </u> */}
          <div className="home__container__instructions__heading">
            Request LOR Flow
          </div>
          {/* <br /> */}
          1. Students can fill their personal information.
          <br />
          2. Students can fill the result details from 1st semester to 8th
          semester along with CGPA.
          <br />
          3. Students can fill details of competitive exams such as
          GRE/TOEFL/GATE/IELTS/GMAT etc.
          <br />
          <b>Note:</b> Students need to attach relevant proof of competitive
          exams in .pdf format. It is requested to upload an unencrypted doc of
          GRE or upload screenshots converted into pdf format.
          <br />
          4. Students can enter a number of letter heads required for
          recommendation.
          <br />
          5. Students can give university/institute/collage preferences for
          which they are going to apply.
          <br />
          <b>Note:</b> In the future, it is required to update final university
          details using the same system.
          <br />
          6. Students can give faculty preferences by uploading their LOR doc
          for further verification.
          <br />
          7. Faculty can receive LOR request forms along with all documents in
          email and send approval of LOR request.
          <br />
          8. Students can print the entire LOR with documents uploaded and
          signed at campus with concerned committee mentioned in the form.
          <br />
          <br />
        </div>
        <div className="home__container__upload__instruction">
          {/* <u>
            <b>Upload Admit-Card Flow</b>
          </u>
          <br /> */}
          <div className="home__container__instructions__heading">
            Upload Admit-Card Flow
          </div>
          1. Students can upload the final admission status with necessary proof
          such as admission card/admission letter.
          <br />
          2. Student can upload details and proof of competitive exam given
          after LOR request made.
          <br />
          <br />
        </div>
        <div className="home__container__view-report__instruction">
          {/* <u>
            <b>View Report on Further Study</b>
          </u>
          <br /> */}
          <div className="home__container__instructions__heading">
            View Report on Further Study
          </div>
          This will give you search facility for further study records By
          University Name or Country Name or By Year.
          <br />
        </div>
      </div>
    </div>
  );
};

export default Home;
