import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
    formControl: {
      margin: 0,
      minWidth: 120,
    },
  });
  
  class SelectDriver extends React.Component {
    state = {
      Driver: '',
      open: false,
    };
  
    handleChange = event => {
      this.setState({ [event.target.name]: event.target.value });
    };
  
    handleClose = () => {
      this.setState({ open: false });
    };
  
    handleOpen = () => {
      this.setState({ open: true });
    };
  
    render() {
      const { classes } = this.props;
  
      return (
        <form autoComplete="off">          
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="demo-controlled-open-select">Driver</InputLabel>
            <Select
              open={this.state.open}
              onClose={this.handleClose}
              onOpen={this.handleOpen}
              value={this.state.Driver}
              onChange={this.handleChange}
              inputProps={{
                name: 'Driver',
                id: 'demo-controlled-open-select',
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>Driver id: 1 </MenuItem>
              <MenuItem value={2}>Driver id: 2 </MenuItem>
              <MenuItem value={3}>Driver id: 3 </MenuItem>
              <MenuItem value={4}>Driver id: 4 </MenuItem>
              <MenuItem value={5}>Driver id: 5 </MenuItem>
            </Select>
          </FormControl>
        </form>
      );
    }
  }
  
  SelectDriver.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(SelectDriver);