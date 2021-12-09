import React from 'react';
import {Grid,Paper,Box} from "@material-ui/core"
import Cell from './Cell';
import "./index.css"

import React, { Component } from 'react';

class Path extends Component {
    constructor(props){
        super(props)
    }

    pathIdx = 0;
    foundPath =[];

    createFoundPath = () => {
        //loop for i matrix with value 16
        // this.foundPath.push(0)

        //loop for j matrix with value 16
        //if this.props.maze[j] == 0
        //this.foundPath[j] == 2

        //loop to the currentPath for both x and y

        //e.g
        //for (let k= 0; k<this.props.currentPath.length; k++){
            
        }
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Path;