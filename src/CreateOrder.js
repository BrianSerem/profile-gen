import React, { Component } from 'react';
import { connect } from "react-redux";
import { Form, Row, Col, Button } from 'react-bootstrap'
import { addOrder } from "./actions/index"

class Order extends Component {
    constructor() {
        super();

        this.state = {
            parcel: {
                "weight": 0,
                "pickup_location": "nyeri",
                "destination": "nyeri",
                "recipient": "",
                "parcel_details": ""
            }
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }


    handleChange = (event) => {
        let form_data = this.state.parcel
        form_data[event.target.name] = event.target.value;
        this.setState({ parcel: form_data });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addOrder(this.state.parcel);
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Create Order</h2>

                <Form onSubmit={this.handleSubmit}>
                    <Form.Group as={Row} controlId="weight">
                        <Form.Label column sm={2}>Est Weight(Kg):</Form.Label>
                        <Col sm={10}>
                            <Form.Control type="number" name="weight" value={this.state.parcel['weight']} onChange={this.handleChange} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="pickup_location">
                        <Form.Label column sm={2}>Pick Up Location</Form.Label>
                        <Col sm={10}>
                            <Form.Control as="select" name="pickup_location" value={this.state.parcel['pickup_location']} onChange={this.handleChange}>
                                <option value="nyeri">Nyeri</option>
                                <option value="kisumu">Kisumu</option>
                                <option value="mombasa">Mombasa</option>
                                <option value="kitale">Kitale</option>
                                <option value="eldoret">Eldoret</option>
                                <option value="naivasha">Naivasha</option>
                                <option value="kirinyaga">Kirinyaga</option>
                                <option value="mwea">Mwea</option>
                                <option value="narok">Narok</option>
                                <option value="kiambu">Kiambu</option>
                                <option value="nyahururu">Nyahururu</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="destination">
                        <Form.Label column sm={2}>Delivery Location</Form.Label>
                        <Col sm={10}>
                            <Form.Control as="select" name="destination" value={this.state.parcel['destination']} onChange={this.handleChange}>
                                <option value="nyeri">Nyeri</option>
                                <option value="kisumu">Kisumu</option>
                                <option value="mombasa">Mombasa</option>
                                <option value="kitale">Kitale</option>
                                <option value="eldoret">Eldoret</option>
                                <option value="naivasha">Naivasha</option>
                                <option value="kirinyaga">Kirinyaga</option>
                                <option value="mwea">Mwea</option>
                                <option value="narok">Narok</option>
                                <option value="kiambu">Kiambu</option>
                                <option value="nyahururu">Nyahururu</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="recipient">
                        <Form.Label column sm={2}>Receiver</Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" name="recipient" value={this.state.parcel['recipient']} onChange={this.handleChange} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="parcel_details">
                        <Form.Label column sm={2}>Details</Form.Label>
                        <Col sm={10}>
                            <Form.Control as="textarea" rows="3" name="parcel_details" value={this.state.parcel['parcel_details']} onChange={this.handleChange} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Col sm={6}></Col>
                        <Col sm={6}>
                            <Button variant="primary" type="submit">Submit</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addOrder: parcel => dispatch(addOrder(parcel))
    };
}

const mapStateToProps = state => {
    return { parcels: state.parcels };
};

const CreateOrder = connect(mapStateToProps, mapDispatchToProps)(Order);

export default CreateOrder;