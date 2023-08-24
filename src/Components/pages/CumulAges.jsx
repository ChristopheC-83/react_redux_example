/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";

function CumulAges() {
    
  const userFamily = useSelector((state) => state.reducer_file);

  const totalAge = userFamily.reduce((acc, person) => acc + person.age, 0);


  
  return (
    <div>
      <h2>{totalAge} années d'xp au cumul</h2>

    </div>
  )
}

export default CumulAges
