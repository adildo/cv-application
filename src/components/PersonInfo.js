import React, { Component } from 'react';
import DisplayPersonalData from './DisplayPersonalData';
import '../styles/personal.css'


class PersonInfo extends Component {
  constructor(props) {
    super(props);

    this.state = this.props.personData
  }
  onChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
    console.log(this.state)
  }
  submit = (e) => {
    e.preventDefault()
    const result = JSON.parse(e.target.dataset.result)
    this.props.updatePersonInfo(result)
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      display: "none"
    })
  }
  editPerson = (e) => {
    console.log(this.props.personData)
    this.setState({
      firstName: this.props.personData.firstName,
      lastName: this.props.personData.lastName,
      email: this.props.personData.email,
      phone: this.props.personData.phone,
      display: "grid"
    })
  }

  render() {
    const {personData} = this.props
    return (
      
      <div id='personal'>
        <form id="info" onSubmit={this.submit} data-result={JSON.stringify(this.state)} style={{display: `${this.state.display}`}}>
            <div>
              <label>First Name:</label>
              <input type="text" name='firstName' onChange={this.onChange} value={this.state.firstName} required></input>
            </div>
            <div>
              <label>Last Name:</label>
              <input type="text" name='lastName' onChange={this.onChange} value={this.state.lastName} required></input>
            </div>
            <div>
              <label>E-mail:</label>
              <input type="email" name="email" onChange={this.onChange} value={this.state.email} required></input>
            </div>
            <div>
              <label>Phone Number:</label>
              <input type="number" name="phone" onChange={this.onChange} value={this.state.phone} required></input>
            </div>
            <button type='submit'>submit</button>
        </form>
        <DisplayPersonalData personData={personData} editPerson={this.editPerson}/>
      </div>
    );
  }
}

export default PersonInfo;
