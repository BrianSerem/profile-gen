import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchParcels } from "./actions/index";
import CancelOrder from './cancelOrder';


export class OrdersList extends Component {
  constructor() {
    super();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  componentWillMount() {
    this.props.fetchParcels();
}
  onCancelOrder = () => {
    console.log("i was summoned")
  }
  render() {
    return (
      <div>
        <h2 className="text-center">Orders</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Order_No</th>
              <th scope="col">Destination</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
                {this.props.parcels.map((row, i) => (
                    <tr key={i}>
                        <th scope="row">{i + 1}</th>
                        <td>{row.parcel_id}</td>
                        <td>{row.destination}</td>
                        <td>{row.status}</td>
                        <td><CancelOrder onCancelOrder={this.onCancelOrder}/></td>
                        
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      fetchParcels: parcels => dispatch(fetchParcels())
  };
}

const mapStateToProps = state => {
  return { parcels: state.parcels };
};

const Orders = connect(mapStateToProps, mapDispatchToProps)(OrdersList);
export default Orders;
