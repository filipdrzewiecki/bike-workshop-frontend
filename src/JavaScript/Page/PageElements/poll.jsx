import '../../Css/index.css';
import React, { Component } from 'react';
import Poll from 'react-polls';

const pollQuestion = 'Ile masz rowerów?'
const pollAnswers = [
  { option: 'Jeden', votes: 8 },
  { option: 'Dwa', votes: 2 },
  { option: 'Trzy', votes: 2 },
  { option: 'Cztery +', votes: 2 }
]

export default class VotingPoll extends Component {
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