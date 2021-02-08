import React, { useRef, useEffect } from "react";
import "../cssFiles/MobileScreen.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useHistory } from "react-router-dom";

function MobileScreen({ order }) {
  const history = useHistory();
  const hamref = useRef();
  const hamContent = useRef();
  useEffect(() => {
    if (hamref.current) {
      hamref.current.addEventListener("click", () => {
        console.log(hamContent.current.style.display);
        if (hamContent.current.style.display == "none") {
          hamContent.current.style.display = "flex";
        } else {
          hamContent.current.style.display = "none";
        }
      });
    }
  }, [hamref.current]);
  return (
    <div className="mobileNav">
      <div ref={hamref} style={{ position: "absolute", left: "30px" }}>
        <GiHamburgerMenu />
      </div>

      <div className="hamMenuContent" ref={hamContent}>
        <div>Account</div>
        <div>Credit Card</div>
        <div
          onClick={() => {
            history.push(`/order/${order[0].id}`);
          }}
        >
          Order Status
        </div>
      </div>
    </div>
  );
}

export default MobileScreen;
