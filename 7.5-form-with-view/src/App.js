import React, { Component } from 'react';
import Form from './Form';
import InfoPanel from './InfoPanel';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      //lastName: '', // Last name is handled inside of handleFormSubmit
      programmer: false,
      ageRanges: ['18-25', '26-35', '36-45', '46-55', '56+'],
      ageRange: null,
      lunchOptions: ['sandwich', 'burrito', 'sushi', 'hot dog'],
      lunchChoice: null,
      submittedData: null
    }
    // form submit function
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

    // functions to handle individual form elements
    this.handleLunchSelect = this.handleLunchSelect.bind(this);
    this.handleProgrammerCheckbox = this.handleProgrammerCheckbox.bind(this);
    this.handleAgeSelect = this.handleAgeSelect.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
  }

  handleFirstNameChange(e) {
    const content = e.target.value;

    const filtered = content
      .split('') // E.g. 'react' becomes ['r','e','a','c','t']
      .map(letter => {

          if(letter === 'e') letter = 'E';
          if(letter === 'r') letter = 'R';

        return letter;
      }).join(''); // E.g. ['R','E','a','c','t'] becomes 'REact'

    this.setState({
      firstName: filtered
    })
  }

  handleProgrammerCheckbox() {
    this.setState({
      programmer: !this.state.programmer
    })
  }

  handleAgeSelect(e) { console.log('age', e.target.value)
    this.setState({
      ageRange: e.target.value
    })
  }

  handleLunchSelect(option) {
    this.setState({
      lunchChoice: option
    })
  }

  handleFormSubmit(e, lastName) {
    e.preventDefault();
    const formData = {
      firstName: this.state.firstName,
      lastName: lastName.value,
      lunchChoice: this.state.lunchChoice,
      programmer: this.state.programmer,
      ageRange: this.state.ageRange
    }
    this.setState({
      submittedData: formData
    })
    console.log('refs', lastName, lastName.value)
    console.log('here it is', formData)
  }
  render() {
    return(
      <div className="container">
        <h1 className="text-center">React Form</h1>
        <div className="row">
          <div className="col-sm-12">
            <Form
              firstName={this.state.firstName}
              onFirstNameChange={this.handleFirstNameChange}
              isProgrammer={this.state.programmer}
              onProgrammerClick={this.handleProgrammerCheckbox}
              ageRanges={this.state.ageRanges}
              onAgeSelect={this.handleAgeSelect}
              lunchOptions={this.state.lunchOptions}
              onLunchSelect={this.handleLunchSelect}
              lunchChoice={this.state.lunchChoice}
              onFormSubmit={this.handleFormSubmit} />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            {this.state.submittedData
              ? <InfoPanel formData={this.state.submittedData} />
              : null }
          </div>
        </div>
      </div>
    )
  }
}

export default App;
