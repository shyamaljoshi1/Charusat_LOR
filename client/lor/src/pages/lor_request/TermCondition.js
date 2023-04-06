import { Card, CardHeader, Heading, Checkbox } from "@chakra-ui/react";
import "./note.css";
const TermCondition = ({ onChange }) => {
  return (
    <>
      <Card margin={"7rem 7rem 4rem 5rem"}>
        <CardHeader className="lor-request__note" borderRadius=".5rem">
          <Heading
          border={'none'}
          borderLeft={'4px solid red'}
            className="lor-request__note"
            paddingLeft={"1.5rem"}
          >
            Note
          </Heading>
          <div className="lor-request__condition__container lor-request__note">
            <div className=" lor-request__note" style={{border:'none'}}>
              <input
                onChange={onChange}
                name="termAndConditoin"
                className="lor-request__condition__container__check"
                type="checkbox"
              ></input>
            </div>
            <div className="lor-request__condition__container__text lor-request__note">
              I hereby declared that the details furnished above are true and
              correct to the best of my knowledge.
            </div>
          </div>
        </CardHeader>
      </Card>
    </>
  );
};
export default TermCondition;
