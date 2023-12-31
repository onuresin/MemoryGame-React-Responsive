import { useEffect, useState } from "react";
import "./Squares.css";

export default function Squares({ num, status, changeStatus, id, isFound }) {
    const [rotationClass, setRotationClass] = useState ("");
    
    useEffect (() => {
      if (status) {
        setRotationClass("rotate");
      } else {
        setRotationClass("");
      }
    }, [status]);
    return (
      <div className="centered">
        <button
          className={`banner ${isFound ? "numberCircle active" : "numberCircle"} ${rotationClass}`}
          onClick={() => {
            if (!status) {
              changeStatus(id);
            }
          }}
        >
          {status && <span>{num}</span>}
        </button>
      </div>
    );
}