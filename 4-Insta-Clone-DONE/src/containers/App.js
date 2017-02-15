import React, { Component } from 'react';
import axios from 'axios';
import InstaCard from '../components/InstaCard';
import '../style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: []
    }
  }
  componentDidMount() {
    axios.get('./insta_data.json')
      .then(res => {
        this.setState({
          cards: res.data
        })
      })
  }
  render() {
    return (
      <div>
        <p className="title">InstaClone</p>
        <div className="photo-stream">
          {this.state.cards.map(card => {
            return <InstaCard key={card.id} card={card} />
          })}
        </div>
      </div>
    );
  }
}

export default App;
