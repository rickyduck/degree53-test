import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Header from '../../atoms/Header';
import MultipleSelect from '../../atoms/MultipleSelect';
import Select from '../../atoms/SimpleSelect';
import HotelListings from '../../organisms/HotelListings';

import './styles.css';

class GithubSearchComponent extends Component {
  render() {
    return (
      <div className="App">
        {(this.props.results.fetching && <CircularProgress size={50} />) || (
          <Fragment>
            <Header title="Github Search" />
          </Fragment>
        )}
      </div>
    );
  }
}

GithubSearchComponent.propTypes = {
  results: PropTypes.object.isRequired
};

export default GithubSearchComponent;
