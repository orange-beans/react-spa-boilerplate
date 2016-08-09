import React, { Component } from 'react';
import { Link } from 'react-router';

import CSSModules from 'react-css-modules';
import styles from './styles.css';

class GameList extends Component{

  onToggleActive(id) {
    console.log('toggle', id);
  }

  static propTypes = {
    onToggleActive: React.PropTypes.func.isRequired,
  }
  // Note that the key prop is nessesary to minimize DOM change
  render() {
    return (
      <ul className="game-list">
        {this.props.games.map((game) => {
          return (
            <li key={game.id}>
              <Link to={`/games/${game.id}`}>{game.name}</Link>
              <button onClick={this.props.onToggleActive.bind(null, game.id)}>
                {game.active? 'Active': 'In-active'}
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default CSSModules(GameList, styles);
