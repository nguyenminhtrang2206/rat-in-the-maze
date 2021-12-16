import React from 'react';
import {Grid,Paper,Box, makeStyles} from "@material-ui/core";

const style1 = {
    paper:{
        background: "#4CAF50"
    },
};

const style2 = {
    paper:{
        background: "#FF0000"
    },
};

const useStyle1 = makeStyles(style1);
const useStyle2 = makeStyles(style2);

const Cell = (props) => {
   if (props.N == 0) {
       return <RedCell></RedCell>
   } else if (props.N == 1){
       return <GreenCell></GreenCell>
   } else {
       return <WhiteCell></WhiteCell>
   }  
};

const WhiteCell=()=>{
    return(
        <Grid item>
             <Paper elevation={3}>
                <Box padding={2} height={50} width={50}></Box>
            </Paper>
        </Grid>
    )
}

const RedCell=()=>{
    const classes =useStyle2()
    return(
        <Grid item>
             <Paper className={classes.paper} elevation={3}>
                <Box padding={2} height={50} width={50}></Box>
            </Paper>
        </Grid>
    )
}

const GreenCell=()=>{
    const classes =useStyle1()
    return(
        <Grid item>
             <Paper className={classes.paper} elevation={3}>
                <Box padding={2} height={50} width={50}></Box>
            </Paper>
        </Grid>
    )
}

export default Cell;