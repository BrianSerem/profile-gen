import React from 'react';
import { Provider } from "react-redux";
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { shallow } from 'enzyme';
import CreateOrder from '../CreateOrder';
import Orders from '../Orders';
import App from '../App';
import rootReducer from "../reducers/index";


let initialState = {
  parcels: [],
  parcel: {}
};

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const store = mockStore(rootReducer)

describe('Reducers', () => {
  it('Should return initial state', () => {
    expect(rootReducer(undefined, {})).toEqual(initialState)
  });

  it('Should return parcels', () => {
    initialState.parcels = [{ "order_no": 3 }]
    expect(rootReducer(initialState.parcels, "FETCH_PARCEL")).toEqual(initialState.parcels)
  });

  it('Should return parcels', () => {
    initialState.parcel = { "order_no": 3 }
    expect(rootReducer(initialState.parcel, "ADD_PARCEL")).toEqual(initialState.parcel)
  });
});

describe('App', () => {
  it('Should render App', async (done) => {
    const app = await shallow(<Provider store={store}><App /></Provider>)
    expect(app).toMatchSnapshot();
    done()
  })
})

describe('Orders', () => {
  it('Should render Orders', async (done) => {
    const orders = await shallow(<Provider store={store}><Orders /></Provider>)
    expect(orders).toMatchSnapshot();
    done()
  })
})

describe('CreateOrder', () => {
  it('Should render create order form', async (done) => {
    const create_orders = await shallow(<Provider store={store}><CreateOrder /></Provider>)
    expect(create_orders).toMatchSnapshot();
    done()
  })
})