import React from "react";
import iphonexr from "../images/iphonexr.jpg";

import { AiOutlineInbox, AiOutlineHome } from "react-icons/ai";
import * as moment from "moment";
import { ImBoxRemove } from "react-icons/im";

import { FaShippingFast } from "react-icons/fa";

function OrderPopup({ order }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "90%",
        marginTop: "10px",
        backgroundColor: "white",
        marginBottom: 10,
      }}
    >
      <img
        src={iphonexr}
        style={{
          objectFit: "contain",
          width: "150px",
          height: "200px",
          borderWidth: "1px",
          marginBottom: "10px",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "80%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          <ImBoxRemove color="black" size={40} />
          <div
            style={{
              height: "5px",
              borderWidth: "1px",
              borderColor: "black",
              width: "70px",
              backgroundColor: order.status == "ordered" ? "#d63031" : "grey",
              alignSelf: "center",
              borderRadius: "10px",
              marginTop: 5,
            }}
          ></div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          <FaShippingFast color="black" size={40} />
          <div
            style={{
              height: "5px",
              borderWidth: "1px",
              borderColor: "black",
              width: "70px",
              backgroundColor: order.status == "shipped" ? "#d63031" : "grey",
              alignSelf: "center",
              borderRadius: "10px",
              marginTop: 5,
            }}
          ></div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          <AiOutlineHome color="black" size={40} />
          <div
            style={{
              height: "5px",
              borderWidth: "1px",
              borderColor: "black",
              width: "70px",
              backgroundColor: order.status == "delivered" ? "#d63031" : "grey",
              alignSelf: "center",
              borderRadius: "10px",
              marginTop: 5,
            }}
          ></div>
        </div>
        {/* {order.items[0].estimatedShipDateRange.fromDate} */}
      </div>{" "}
      <div style={{ fontFamily: "Roboto", color: "black", marginTop: 10 }}>
        Expected to Ship:
        {moment(
          `${order.items[0].estimatedShipDateRange.fromDate}`,
          "YYYY-MM-DDTHH:mm:ss.SSS"
        ).format("MMM DD")}
        -{" "}
        {moment(
          `${order.items[0].estimatedShipDateRange.toDate}`,
          "YYYY-MM-DDTHH:mm:ss.SSS"
        ).format("MMM DD")}
        <div
          style={{
            fontFamily: "Roboto",
            color: "black",
            marginTop: 5,
            fontWeight: "bold",
          }}
        >
          {order.items[0].name}
        </div>
        <div
          style={{
            fontFamily: "Roboto",
            color: "black",
            marginTop: 10,
            fontSize: 15,
          }}
        >
          {order.items[0].skuAttributes.color}{" "}
          {order.items[0].skuAttributes.size}
        </div>
        <div
          style={{
            fontFamily: "Roboto",
            color: "black",
            marginTop: 5,
            fontSize: 15,
          }}
        >
          {order.items[0].plan}
        </div>
      </div>
    </div>
  );
}

export default OrderPopup;
