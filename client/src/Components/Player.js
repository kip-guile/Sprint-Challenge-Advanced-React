import React, {Component} from 'react';

class Player extends Component {
    

    render() {
        const {name, country, searches} = this.props;
      return (
        <div>
          <div>
              <h3>{name}</h3>
              <h4>Country: {country}</h4>
              <h4>Searches: {searches}</h4>
          </div>
        </div>
      );
    }
  }
  
  export default Player;