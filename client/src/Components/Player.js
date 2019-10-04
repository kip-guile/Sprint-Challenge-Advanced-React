import React, {Component} from 'react';
import styled from 'styled-components';

const MainDiv = styled.div`
    display: flex;
    flex-wrap: wrap;`

const StyledCard = styled.div`
    display: flex;
    background-color: lightgreen;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 100%;
    align-content: space-around;
    justify-content: baseline;
    border-radius: 1em;
    margin: 1em;
    padding: 1em;`

const StyledInfoDiv = styled.div`
    padding: 1em;
    margin: 0.5em;`

class Player extends Component {
    

    render() {
        const {name, country, searches} = this.props;
      return (
          <MainDiv>
            <StyledCard>
            <StyledInfoDiv>
                <h3>{name}</h3>
                <h4>Country: {country}</h4>
                <h4>Searches: {searches}</h4>
            </StyledInfoDiv>
            </StyledCard>
        </MainDiv>
      );
    }
  }
  
  export default Player;