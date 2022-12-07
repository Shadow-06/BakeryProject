import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUserOrderHistory } from './../../redux/Orders/orders.actions';
import AllOrderHistory from './../../components/AllOrderHistory';
import AdminLayout from "../../layouts/AdminLayout";

import './styles.scss';

const mapState = ({ ordersData }) => ({
  
  orderHistory: ordersData.orderHistory.data
});

const Orders = props => {
  const dispatch = useDispatch();
  const {  orderHistory } = useSelector(mapState);

  useEffect(() => {
    dispatch(
      getAllUserOrderHistory()
    );

  }, []);

  return (
    <div>
      <h1>
        Order History
      </h1>
      
      <AllOrderHistory orders={orderHistory} />
      
    </div>
  );
};
export default Orders;
