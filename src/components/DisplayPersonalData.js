import React, { Component } from 'react';


class DisplayPersonalData extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {personData, editPerson} = this.props
    return (
        <div>
            First Name: {personData.firstName} <br></br>
            last Name: {personData.lastName} <br></br>
            E-mail: {personData.email} <br></br>
            Phone Number: {personData.phone} <br></br>
            <button onClick={editPerson}>Edit</button>
        </div>
    );
  }
}

export default DisplayPersonalData;