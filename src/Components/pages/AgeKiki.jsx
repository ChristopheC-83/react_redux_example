/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import { grandir, feterAnniv } from "../../features/reducer_file";
import BtnFam from "./BtnFam";

function AgeKiki() {
  const userFamily = useSelector((state) => state.reducer_file);
  const kiki = userFamily.find((person) => person.name === "kiki");
  const ageOfKiki = kiki && kiki.age;
  const idOfKiki = kiki && kiki.id;

  return (
    <div>
      <h3>Kiki a {ageOfKiki} ans !</h3>
      <BtnFam foo={feterAnniv({ id: idOfKiki })} btnName="Vieillir" />
    </div>
  );
}

export default AgeKiki;
