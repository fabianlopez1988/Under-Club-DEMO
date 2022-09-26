import "./UpdateHistory.css";
import { useDispatch, useSelector } from "react-redux";
import { updateHistory, getAllHistory } from "../../../../../../store/history";
import { useEffect, useState } from "react";

const UpdateHistory = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getAllHistory());
  }, []);
  
  const histories = useSelector((state) => state.history);


  return (
    <div className="update-history-container">
      <h1>Editar Historias</h1>
      {/* {
        console.log(histories?.data)
      } */}
      <ul>
      {
        histories?.data.map((history) => (
          <div>
            <img src={history.image} alt={history.id} />
            <p>{history.history}</p>
          </div>
        ))
      }
    </ul>
    </div>
  );
};

export default UpdateHistory;
