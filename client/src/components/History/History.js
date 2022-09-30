import React, { useEffect } from "react";
import LoremIpsum from "react-lorem-ipsum";
import "./History.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllHistory } from "../../store/history";

const History = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllHistory());
  }, []);

  const histories = useSelector((state) => state.history);

  return (
    <div className="history-container">
      {histories?.data?.map((history) => (
        <>
          {history.id % 2 === 0 ? (
            <div className="container-left-history">
              <div className="img-left-history">
                <img src={history.image} alt={history.id} />
              </div>
              {history.id === 2 ? (
                <div className="text-history">
                  <p>{history.history}</p>
                </div>
              ) : null}
              {/* <div className="right-line"></div> */}
            </div>
          ) : (
            <div className="container-right-history">
              <div className="img-right-history">
                <img src={history.image} alt={history.id} />
              </div>
              <div className="text-history">
                <p>{history.history}</p>
              </div>
              {/* <div className="left-line"></div> */}
            </div>
          )}
          <div className="right-line"></div>
          <div className="left-line"></div>
          <div className="right-line-sec"></div>
        </>
      ))}
      <div className="text">
        <p>
          <span className="gracias">GRACIAS </span>POR
        </p>
        <br></br>
        <p className="espacio">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          EL APOYO
        </p>
      </div>
    </div>
  );
};

export default History;
