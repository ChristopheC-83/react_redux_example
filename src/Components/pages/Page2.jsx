/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import { grandir, feterAnniv } from "../../features/reducer_file";
import BtnFam from "./BtnFam";
import CumulAges from "./CumulAges";
import AgeKiki from "./AgeKiki";

function Page2() {

  const dispatch = useDispatch();
  const userFamily = useSelector((state) => state.reducer_file);

  return (
    <div>
      <h1>test redux</h1>

      <div className="familyFrame">
        {userFamily.map((userFam) => (
          <div className="userFam" key={userFam.id}>
            <h3>{userFam.name}</h3>
            <p>age : {userFam.age} ans</p>
            <p>mesure {userFam.taille} cm</p>
            <div className="btnFam">
              <BtnFam foo={feterAnniv({ id: userFam.id })} btnName="Vieillir"/>
              <BtnFam foo={grandir({ id: userFam.id })} btnName="Grandir ?"/>
            </div>
          </div>
        ))}
      </div>
      <div className="extra">
        
         <AgeKiki/>
        <CumulAges userFamily={userFamily} />
      </div>
    </div>
  );
}

export default Page2;


