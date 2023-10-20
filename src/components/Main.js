import React, { Component } from 'react';
import { FilmsData } from '../shared/ListOfFilms';
import Films from './Films';
export class Main extends Component {
    constructor() {
        super();
        this.state = {
           films: FilmsData
        };
     }
  render() {
    return <Films films={this.state.films}/>
}
}
export default Main

