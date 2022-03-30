import React, { Component } from 'react';
import '../styles/work.css'
import uniqid from "uniqid"

class Work extends Component {
  constructor(props) {
    super(props);

    this.state = {
      workItem: {
        company: '',
        position: '',
        tasks: '', 
        from: '',
        until: '',
        id: uniqid(),
      },
      display: 'grid',
    }
  }

  onChange = (e) => {
    this.setState({
      workItem: {
        ...this.state.workItem,
        [e.target.name]: e.target.value,
      }
    })
  }
  submit = (e) => {
    e.preventDefault()
    const result = JSON.parse(e.target.dataset.result)
    this.props.addWork(result)
    this.setState({
      workItem: {
        company: '',
        position: '',
        tasks: '', 
        from: '',
        until: '',
        id: uniqid(),
      },
      display: 'none',
    })
  }
  editWork = (e) => {
    const itemToEdit = this.props.work.find(item => item.id === e.target.dataset.id)
    this.setState({
      workItem: {
        company: itemToEdit.company,
        position: itemToEdit.position,
        tasks: itemToEdit.tasks, 
        from: itemToEdit.from,
        until: itemToEdit.until,
        id: itemToEdit.id,
      },
      display: 'grid'
    })
    this.props.deleteWork(e)
  }
  OpenInputBox = () => {
    this.setState({
      display: 'grid' 
    })
  }

  render() {

    const {work, deleteWork} = this.props

    return (
      <div id='work'>
        <form id="workInput" onSubmit={this.submit} data-result={JSON.stringify(this.state.workItem)} style={{display: `${this.state.display}`}}>
          <div>
            <label>School Name:</label>
            <input type="text" name='company' onChange={this.onChange} value={this.state.workItem.school}></input>
          </div>
          <div>
            <label>Title of Study</label>
            <input type="text" name='title' onChange={this.onChange} value={this.state.workItem.title}></input>
          </div>
          <div id='tasks'>
            <label>Tasks:</label>
            <input type="text" name='tasks' onChange={this.onChange} value={this.state.workItem.tasks}></input>
          </div>
          <div>
            <label>from Date:</label>
            <input type="date" name='from' onChange={this.onChange} value={this.state.workItem.from}></input>
          </div>
          <div>
            <label>until:</label>
            <input type="date" name='until' onChange={this.onChange} value={this.state.workItem.until}></input>
          </div>
          <button type='submit'>submit</button>
        </form>
        <div id="workDisplay">
          <div id='workList'>
            {work.map((item) => {
              return <div id='workItem' key={item.id}>
                        <p><span>company Name:</span> {item.school}</p>
                        <p><span>Position Title:</span> {item.title}</p>
                        <p><span>Main Tasks:</span> {item.tasks}</p>
                        <p><span>From Date:</span> {item.from}</p>
                        <p><span>Until Date:</span> {item.until}</p>
                        <button onClick={this.editWork} data-id={item.id}>Edit</button> 
                        <button onClick={deleteWork} data-id={item.id}>delete</button>
                      </div>
            })}
          </div>
        <button onClick={this.OpenInputBox}>Add</button>
        </div>
      </div>
    );
  }
}

export default Work;