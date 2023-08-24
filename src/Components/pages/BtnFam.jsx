/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useDispatch, useSelector } from "react-redux";

function BtnFam({btnName, foo}) {
    const dispatch = useDispatch();
    const userFamily = useSelector((state) => state.userFamily);


  return (
    <button
    onClick={()=>dispatch(foo)}
    className="btnFamily"
    >
      {btnName}
    </button>
  )
}

export default BtnFam
