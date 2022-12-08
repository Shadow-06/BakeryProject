import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCustomUserOrderHistory } from "../../redux/Orders/orders.actions";
import CustomOrderHistory from "../../components/CustomOrderHistory";
import "./styles.scss";

const mapState = ({ ordersData }) => ({
  orderHistory: ordersData.orderHistory.data,
});

const Customisedorders = props => {
  const dispatch = useDispatch();
  const { orderHistory } = useSelector(mapState);

  useEffect(() => {
    dispatch(getCustomUserOrderHistory());
  }, []);

  return (
    <div>
      <h1>Order History</h1>

      <CustomOrderHistory orders={orderHistory} />
    </div>
  );
};
export default Customisedorders;
