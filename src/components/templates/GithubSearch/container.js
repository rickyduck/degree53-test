import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchResultsRequested } from '../../../redux/github/actions';
import GithubSearchComponent from './component';
import CircularProgress from '@material-ui/core/CircularProgress';

class GithubSearchContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <GithubSearchComponent
        github={this.props.github}
        handleChange={this.props.fetchResults}
      />
    );
  }
}

const mapStateToProps = state => ({
  github: state.github
});

const mapDispatchToProps = dispatch => ({
  fetchResults: searchText => dispatch(fetchResultsRequested(searchText))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GithubSearchContainer);
