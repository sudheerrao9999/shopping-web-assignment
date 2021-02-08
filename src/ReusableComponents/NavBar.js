import React, { useEffect, useState, useRef, forwardRef } from "react";
import "../cssFiles/NavBar.css";

import { MdArrowDropDown } from "react-icons/md";

import { RiAccountCircleLine } from "react-icons/ri";
import OrderPopup from "../Pages/OrderPopup";
import { getCall } from "../api/getCall";
import MobileScreen from "./MobileScreen";
import { useHistory } from "react-router-dom";
function Navbar() {
  const history = useHistory();

  const orderref = useRef();
  const summaryref = useRef();
  const [orderDetails, setorderDetails] = useState([]);
  useEffect(() => {
    getOrderdetail();
  }, []);

  const getOrderdetail = () => {
    let res = getCall("/customer/1234/order");
    console.log(res);
    setorderDetails((orderDetails) => res);
  };
  console.log(summaryref.current);
  console.log(orderref.current);

  //   let orderStatusdropdown = document.getElementById("orderStatusdropdown");
  //   let OrderPopupdropdown = document.getElementById("OrderPopupdropdown");
  useEffect(() => {
    console.log(orderref);
    orderref.current.addEventListener("mouseover", () => {
      summaryref.current.style.display = "flex";
    });

    orderref.current.addEventListener("mouseout", () => {
      summaryref.current.style.display = "none";
    });
    summaryref.current.addEventListener("mouseover", () => {
      summaryref.current.style.display = "flex";
    });
    summaryref.current.addEventListener("mouseout", () => {
      summaryref.current.style.display = "none";
    });
  }, [orderref.current]);

  return (
    <>
      <div className="navBody ">
        <div className="d-flex flex-row ml-3 ">
          <div className="drobdownButton">
            Product <MdArrowDropDown />
          </div>
          <div className="drobdownButton">
            Brands <MdArrowDropDown />
          </div>
          <div className="drobdownButton">
            Deal <MdArrowDropDown />
          </div>
          <div className="drobdownButton">
            Services <MdArrowDropDown />
          </div>
        </div>
        <div className="flex-grow-1"></div>
        <div className="d-flex flex-row mr-3">
          <div className="drobdownButton">
            <RiAccountCircleLine /> Account <MdArrowDropDown />
          </div>
          <div className="drobdownButton">
            Recently Viewed <MdArrowDropDown />
          </div>
          <div
            className="drobdownButton OrderPopupOnhover"
            id="orderStatusdropdown"
            ref={orderref}
            onClick={() => {
              history.push(`/order/${orderDetails[0].id}`);
            }}
          >
            Order Status <MdArrowDropDown />
            <div className="OrderPopup" ref={summaryref}>
              {orderDetails.map((item) => (
                <OrderPopup order={item} />
              ))}
            </div>
          </div>
          <div className="drobdownButton">
            Saved Items <MdArrowDropDown />
          </div>
        </div>
      </div>
      <div className="navforMobile">
        <MobileScreen order={orderDetails} />
      </div>
    </>
  );
}

export default Navbar;
