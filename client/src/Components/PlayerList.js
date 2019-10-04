import React, {Component} from 'react';
import Player from './Player';
import axios from 'axios';


class PlayerList extends Component {
    constructor(props){
        super(props);
        this.state = {
        players: []
        }
    }

    getPlayers = () => {
        axios.get(`http://localhost:5000/api/players`)
            .then(response => {
            this.setState({players: response.data})
            console.log(this.state.players);
            })
            .catch(error => {
            console.log(error.message);
            })
    }

    componentDidMount(){
        this.getPlayers();
    }

        render(){
        return (
            <div className="App">
                {
                this.state.players.map(player => { 
                return (
                    <div key={player.id}>  
                    <Player 
                    name={player.name}  
                    country={player.country}
                    searches={player.searches}
                    />
                    </div>
                    )
                })
            }
            </div>
        );
    }
}

export default PlayerList;