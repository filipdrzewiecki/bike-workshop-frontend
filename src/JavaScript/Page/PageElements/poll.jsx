import React, { Component } from 'react';
import Poll from 'react-polls';
 
// Declaring poll question and answers
const pollQuestion = 'Ile masz rowerów?'
const pollAnswers = [
  { option: 'Jeden', votes: 1 },
  { option: 'Dwa', votes: 1 },
  { option: 'Trzy', votes: 1 },
  { option: 'Cztery', votes: 1 },
  { option: 'Pięć', votes: 1 },
  { option: 'Sześć lub więcej', votes: 2 }
]
 
export default class VotingPoll extends Component {
  // Setting answers to state to reload the component with each vote
  state = {
    pollAnswers: [...pollAnswers]
  }
 
  handleVote = voteAnswer => {
    const { pollAnswers } = this.state
    const newPollAnswers = pollAnswers.map(answer => {
      if (answer.option === voteAnswer) answer.votes++
      return answer
    })
    this.setState({
      pollAnswers: newPollAnswers
    })
  }
 
  render () {
    const { pollAnswers } = this.state
    return (
      <div>
        <Poll question={pollQuestion} answers={pollAnswers} onVote={this.handleVote} />
      </div>
    );
  }
};