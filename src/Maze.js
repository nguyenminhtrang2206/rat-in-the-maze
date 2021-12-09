import React, { Component } from 'react';
import { ReactDOM } from 'react-dom';
import {Grid,Paper,Box, Button} from "@material-ui/core"
import Cell from './Cell';
import "./index.css"

class Maze extends Component {
    matrix = [2];
    paths = [];
    idx = 0;
    numPaths = 0;
    pathIdx = 0;

    index = () => {
        this.idx += 1;
        return this.matrix[this.idx];
    }

    handleClick = (e) => {
        e.preventDefault();
        window.location.reload(false);
    }

    render() {
        return (
            <div>
                <center>
                <h1>Rat in a maze</h1>
                </center>
                <Grid container spacing={2} justify="center" direction="column">
                    <p>
                        <Grid container spacing={1} justify="center" direction="row">
                            <Grid item>
                                <Paper elevation={3}>
                                    <Box padding={2} height={50} width={50}>
                                        <center></center>
                                    </Box>
                                </Paper>
                            </Grid>
                            <Cell N={this.index()}></Cell>
                            <Cell N={this.index()}></Cell>
                            <Cell N={this.index()}></Cell>
                        </Grid>
                    </p>

                    <p>
                        <Grid container spacing={1} justify="center" direction="row">
                            <Cell N={this.index()}></Cell>
                            <Cell N={this.index()}></Cell>
                            <Cell N={this.index()}></Cell>
                            <Cell N={this.index()}></Cell>
                        </Grid>
                    </p>

                    <p>
                        <Grid container spacing={1} justify="center" direction="row">
                            <Cell N={this.index()}></Cell>
                            <Cell N={this.index()}></Cell>
                            <Cell N={this.index()}></Cell>
                            <Cell N={this.index()}></Cell>
                        </Grid>
                    </p>

                    <p>
                        <Grid container spacing={1} justify="center" direction="row">
                            <Cell N={this.index()}></Cell>
                            <Cell N={this.index()}></Cell>
                            <Cell N={this.index()}></Cell>
                            <Grid item>
                                <Paper elevation={3}>
                                    <Box padding={2} height={50} width={50}>
                                        <center></center>
                                    </Box>
                                </Paper>
                            </Grid>
                            
                        </Grid>
                    </p>

                </Grid>
                <div>
                    <center><Button onClick={this.handleClick} style ={{margin:15, color: "white", background:"#4CAF50", padding: 8}}>Generate new maze</Button></center>
                </div>
            </div>
        );
    }
}

export default Maze;