import React, { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCall } from "../api/getCall";
import "../cssFiles/OrderDetail.css";
import * as moment from "moment";
import iphonexr from "../images/iphonexr.jpg";
import { RiHome5Line } from "react-icons/ri";

import { AiOutlineInbox, AiOutlineHome } from "react-icons/ai";

import { ImBoxRemove } from "react-icons/im";

import { FaShippingFast } from "react-icons/fa";
function OrderDetail() {
  const { id } = useParams();
  const [orderDetail, setorderDetail] = useState([]);
  const [hasshippingdatechanged, sethasshippingdatechanged] = useState(false);

  useEffect(() => {
    getorderdetail();
  }, []);
  const getorderdetail = () => {
    console.log(id);
    const response = getCall(`/order/${id}`);
    setorderDetail(response);
    console.log(response);

    response.map((item) => {
      if (Object.keys(item.items[0]).includes("newEstimatedShipDateRange")) {
        sethasshippingdatechanged(
          (sethasshippingdatechanged) => !sethasshippingdatechanged
        );
        console.log(hasshippingdatechanged);
      }
    });
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      {true & (orderDetail.length != 0) ? (
        <>
          <div className="mainBoxOrder">
            <div style={{ textAlign: "center", fontFamily: "Roboto" }}>
              Heads up:Shipping Date has changed
            </div>
            {orderDetail[0].items[0].userAcceptedDelay ? (
              <>
                <div style={{ textAlign: "center" }}>
                  Thank you for the accepting the new changed shipping Date
                </div>
                <div className="d-flex flex-row justify-content-around mt-2 mb-5">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <ImBoxRemove color="black" size={50} />
                    <div
                      style={{
                        height: "3px",
                        borderWidth: "1px",
                        borderColor: "black",
                        width: "100px",
                        backgroundColor:
                          orderDetail[0].status == "ordered"
                            ? "#487eb0"
                            : "grey",
                        alignSelf: "center",
                        borderRadius: "10px",
                        marginTop: 5,
                      }}
                    ></div>
                    <div>Ordered</div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <FaShippingFast color="black" size={50} />
                    <div
                      style={{
                        height: "3px",
                        borderWidth: "1px",
                        borderColor: "black",
                        width: "100px",
                        backgroundColor:
                          orderDetail[0].status == "shipped"
                            ? "#487eb0"
                            : "grey",
                        alignSelf: "center",
                        borderRadius: "10px",
                        marginTop: 5,
                      }}
                    ></div>
                    <div>Shipped</div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <RiHome5Line color="black" size={50} />
                    <div
                      style={{
                        height: "3px",
                        borderWidth: "1px",
                        borderColor: "black",
                        width: "100px",
                        backgroundColor:
                          orderDetail[0].status == "delivered"
                            ? "#487eb0"
                            : "grey",
                        alignSelf: "center",
                        borderRadius: "10px",
                        marginTop: 5,
                      }}
                    ></div>
                    <div>Delivered</div>
                  </div>
                </div>
                <div className="ml-4 font-weight-bold ">
                  Item Ordered:{orderDetail[0].items[0].quantity}
                </div>
                <div className="ml-4 mt-4 font-weight-bold">
                  New Estimate Ship Date:
                </div>
                <div className="ml-4">
                  {moment(
                    `${orderDetail[0].items[0].newEstimatedShipDateRange.fromDate}`,
                    "YYYY-MM-DDTHH:mm:ss.SSS"
                  ).format("MMM,DD-ddd")}
                  -
                  {moment(
                    `${orderDetail[0].items[0].newEstimatedShipDateRange.toDate}`,
                    "YYYY-MM-DDTHH:mm:ss.SSS"
                  ).format("MMM,DD-ddd,YYYY")}
                </div>
                <div className="ml-4 mt-3">Original Estimate Ship Date:</div>
                <div className="ml-4  ">
                  {moment(
                    `${orderDetail[0].items[0].estimatedShipDateRange.fromDate}`,
                    "YYYY-MM-DDTHH:mm:ss.SSS"
                  ).format("MMM,DD-ddd")}
                  -
                  {moment(
                    `${orderDetail[0].items[0].estimatedShipDateRange.toDate}`,
                    "YYYY-MM-DDTHH:mm:ss.SSS"
                  ).format("MMM,DD-ddd,YYYY")}
                </div>
                <br />
                <span className="ml-4 font-weight-bold mt-4">Address</span>
                <span>
                  :{orderDetail[0].shipingAddress.street},
                  {orderDetail[0].shipingAddress.city},
                  {orderDetail[0].shipingAddress.state},
                  {orderDetail[0].shipingAddress.zip}
                </span>
                <br />
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <button
                    style={{
                      width: "90%",
                      borderWidth: "1px",
                      borderRadius: "5px",
                      backgroundColor: "#2D1CE4",
                      color: "white",
                      marginTop: "5px",
                      borderColor: "#2D1CE4",
                    }}
                  >
                    Cancel
                  </button>
                </div>

                <div className="d-flex flex-row">
                  <img
                    src={iphonexr}
                    alt=""
                    className="ml-2 mr-2"
                    style={{
                      width: "100px",
                      height: "250px",
                      objectFit: "contain",
                    }}
                  />
                  <div className="d-flex flex-column justify-content-center ">
                    <div className="text-align-left ml-1 font-weight-bold">
                      {orderDetail[0].items[0].name}-
                      {orderDetail[0].items[0].skuAttributes.size}
                    </div>
                    <div className="ml-1">
                      {orderDetail[0].items[0].skuAttributes.color}
                    </div>
                    <div className="ml-1">
                      Quantity:{orderDetail[0].items[0].quantity}
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default OrderDetail;
