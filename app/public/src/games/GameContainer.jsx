import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import GameList from './GameList.jsx';
// Actioins
import * as actions from './actions';
const { FetchSucess, ToggleActive } = actions;

class GameListContainer extends Component{
  constructor(props) {
    super(props);

    // binding 'this'
    this.fetchGames = this.fetchGames.bind(this);
    this.updateGames = this.updateGames.bind(this);
  }

  componentDidMount() {
    this.fetchGames();
  }

  fetchGames() {
    // Try to use Arrow functions in Promise
    // to maintain this context
    fetch('http://localhost:3001/api/games')
    .then((response) => {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
    .then((games) => {
      console.log(games);
      this.props.onFetchSuccess(games);
    });
  }

  // TODO: how can we update data back to the server as a side-effect
  // maybe use redux-saga???
  updateGames() {
    fetch('http://localhost:3001/api/update', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.props.games),
    }).then((res) => {
      console.log(res);
    });
  }

  // Note that the key prop is nessesary to minimize DOM change
  render() {
    // TODO: how can we update data back to the server as a side-effect
    // work-around: update everytime when render
    //this.updateGames();
    console.log('rendering');
    return (
      <GameList games={this.props.games} onToggleActive={this.props.onToggleActive}></GameList>
    );
  }
}

// put selectors here later
const mapStateToProps = (state, ownProps) => {
  return {
    games: state.gameState.games,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onFetchSuccess: (games) => dispatch(FetchSucess(games)),
    onToggleActive: (id) => dispatch(ToggleActive(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameListContainer);
