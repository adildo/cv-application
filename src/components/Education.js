import React, { Component } from 'react';
import '../styles/education.css'
import uniqid from "uniqid"

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      educationItem: {
        school: '',
        title: '',
        from: '', 
        until: '',
        id: uniqid(),
      },
      display: 'grid',
    }
  }

  onChange = (e) => {
    this.setState({
      educationItem: {
        ...this.state.educationItem,
        [e.target.name]: e.target.value,
      }
    })
  }
  submit = (e) => {
    e.preventDefault()
    const result = JSON.parse(e.target.dataset.result)
    this.props.addEducation(result)
    this.setState({
      educationItem: {
        school: '',
        title: '',
        from: '', 
        until: '',
        id: uniqid(),
      },
    display: 'none',
    })
  }
  editEducation = (e) => {
    const itemToEdit = this.props.education.find(item => item.id === e.target.dataset.id)
    this.setState({
      educationItem: {
        school: itemToEdit.school,
        title: itemToEdit.title,
        from: itemToEdit.from, 
        until: itemToEdit.until,
        id: itemToEdit.id,
      },
      display: 'grid'
    })
    this.props.deleteEdu(e)
  }
  OpenInputBox = () => {
    this.setState({
      display: 'grid' 
    })
  }

  render() {

    const {education, deleteEdu} = this.props

    return (
      <div id='education'>
        <form id="eduInput" onSubmit={this.submit} data-result={JSON.stringify(this.state.educationItem)} style={{display: `${this.state.display}`}}>
          <div>
            <label>School Name:</label>
            <input type="text" name='school' onChange={this.onChange} value={this.state.educationItem.school}></input>
          </div>
          <div>
            <label>Title of Study</label>
            <input type="text" name='title' onChange={this.onChange} value={this.state.educationItem.title}></input>
          </div>
          <div>
            <label>from Date:</label>
            <input type="date" name='from' onChange={this.onChange} value={this.state.educationItem.from}></input>
          </div>
          <div>
            <label>until:</label>
            <input type="date" name='until' onChange={this.onChange} value={this.state.educationItem.until}></input>
          </div>
          <button type='submit'>submit</button>
        </form>
        <div id="eduDisplay">
          <div id='eduList'>
            {education.map((item) => {
              return <div id='eduItem' key={item.id}>
                        <p><span>School Name:</span> {item.school}</p>
                        <p><span>Title of Study:</span> {item.title}</p>
                        <p><span>From Date:</span> {item.from}</p>
                        <p><span>Until Date:</span> {item.until}</p>
                        <button onClick={this.editEducation} data-id={item.id}>Edit</button> 
                        <button onClick={deleteEdu} data-id={item.id}>delete</button>
                      </div>
            })}
          </div>
        <button onClick={this.OpenInputBox}>Add</button>
        </div>
      </div>
    );
  }
}

export default Education;