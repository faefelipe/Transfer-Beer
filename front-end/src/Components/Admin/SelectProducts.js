import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: 5,
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit / 4,
  },
  noLabel: {
    marginTop: theme.spacing.unit * 3,
  },
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const products = [
    { id: '01', name: 'Beer 1 (Pilsner)', tempMin: '4°C', tempMax: '6°C' },
    { id: '02', name: 'Beer 2 (IPA)', tempMin: '5°C', tempMax: '6°C' },
    { id: '03', name: 'Beer 3 (Lager)', tempMin: '4°C', tempMax: '7°C' },
    { id: '04', name: 'Beer 4 (Stout)', tempMin: '6°C', tempMax: '8°C' },
    { id: '05', name: 'Beer 5 (Wheat beer)', tempMin: '3°C', tempMax: '5°C' },
    { id: '06', name: 'Beer 6 (Pale Ale)', tempMin: '4°C', tempMax: '6°C' },
];

class MultipleSelect extends React.Component {
  state = {
    products: []    
  };

  handleChange = event => {
    this.setState({ products: event.target.value });    
  };

  handleChangeMultiple = event => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    this.setState({
      products: value      
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>        
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="select-multiple-chip">Product</InputLabel>
          <Select
            multiple
            value={this.state.products}
            onChange={this.handleChange}
            input={<Input id="select-multiple-chip" />}
            renderValue={selected => (
              <div className={classes.chips}>
                {selected.map(value => (
                  <Chip key={value} label={value} className={classes.chip} />
                ))}
              </div>
            )}
            MenuProps={MenuProps}
          >
            {products.map(products => (
              <MenuItem key={products.id} value={products.name}>
                {products.name}                
              </MenuItem>              
            ))}                        
          </Select>
        </FormControl>        
      </div>
    );
  }
}

MultipleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MultipleSelect);