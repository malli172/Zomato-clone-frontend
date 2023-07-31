import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:8080");

const OrderTracking = ({ orderId }) => {
  const [status, setStatus] = useState("");

  useEffect(() => {
    socket.on("orderUpdate", (data) => {
      if (data.orderId === orderId) {
        setStatus(data.status);
      }
    });
  }, [orderId]);

  return (
    <div>
      <h2>Order Status: {status}</h2>
    </div>
  );
};

export default OrderTracking;
