import PersonalInfo from "../lor_request/personalInfo";
const UploadAdmissionLetter = () => {
  return (
    <div className="form_container">
      <form action="POST">
        <PersonalInfo />
      </form>
    </div>
  );
};
export default UploadAdmissionLetter;
