import { connect } from 'react-redux';
import React, { Component } from 'react';
import { fetchResultsRequested } from '../../../redux/github/actions';
import GithubSearchComponent from './component';

const GithubSearchContainer = props => {
  return (
    <GithubSearchComponent
      github={props.github}
      handleChange={props.fetchResults}
    />
  );
};

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
