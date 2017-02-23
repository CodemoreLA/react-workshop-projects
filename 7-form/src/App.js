import React, { Component } from 'react';
import Form from './Form';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      // Last name is handled inside of Form via refs
      isProgrammer: false,
      ageRanges: ['18-25', '26-35', '36-45', '46-55', '56+'],
      // ageRange is hangled inside Form via refs
      lunchOptions: ['sandwich', 'burrito', 'sushi', 'hot dog'],
      lunchChoice: null
    }
    // form submit function
    this.handleFormData = this.handleFormData.bind(this);

    // functions to handle individual form elements
    this.handleLunchSelect = this.handleLunchSelect.bind(this);
    this.handleProgrammerCheckbox = this.handleProgrammerCheckbox.bind(this);
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
      isProgrammer: !this.state.isProgrammer
    })
  }

  handleLunchSelect(option) {
    this.setState({
      lunchChoice: option
    })
  }

  handleFormData(formData) {
    console.log('here it is', formData)
  }
  render() {
    return(
      <div className="container">
        <h1 className="text-center">React Form</h1>
        <div className="row">
          <div className="col-sm-12">
            <Form
              postFormData={this.handleFormData}
              firstName={this.state.firstName}
              onFirstNameChange={this.handleFirstNameChange}
              isProgrammer={this.state.isProgrammer}
              onProgrammerClick={this.handleProgrammerCheckbox}
              ageRanges={this.state.ageRanges}
              lunchOptions={this.state.lunchOptions}
              onLunchSelect={this.handleLunchSelect}
              lunchChoice={this.state.lunchChoice}
              onFormSubmit={this.handleFormSubmit} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
