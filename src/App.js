import React, { Component } from 'react';
import PersonInfo from './components/PersonInfo';
import Work from './components/Work';
import './app.css'
import Education from './components/Education';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personData: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        display: "grid"
      },
      education: [],
      work: [],
    }
  }
  updatePersonInfo = (value) => {
    console.log(value)
    this.setState({
      personData: {
        firstName: value.firstName,
        lastName: value.lastName,
        email: value.email,
        phone: value.phone,
        display: 'none'
      }
    })
  }
  addEducation = (value) => {
    this.setState({
      education: this.state.education.concat(value)
    })
    console.log(this.state.education)
  }
  deleteEdu = (e) => {
    this.setState({
      education: this.state.education.filter(item => item.id !== e.target.dataset.id)
    })
  }
  addWork = (value) => {
    this.setState({
      work: this.state.work.concat(value)
    })
    console.log(this.state.work)
  }
  deleteWork = (e) => {
    this.setState({
      work: this.state.work.filter(item => item.id !== e.target.dataset.id)
    })
  }

  render() {
    return (
      <div className="App">
        <h2>CV - APPLICATION</h2>
        <PersonInfo updatePersonInfo={this.updatePersonInfo} personData={this.state.personData}/>
        <Education addEducation={this.addEducation} education={this.state.education} deleteEdu={this.deleteEdu}/>
        <Work addWork={this.addWork} work={this.state.work} deleteWork={this.deleteWork}/>
      </div>
    );
  }
}

export default App;
