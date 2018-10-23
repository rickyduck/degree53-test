import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchResultsRequested } from '../../../redux/github/actions';
import GithubSearchComponent from './component';

class GithubSearchContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      (this.props.github.loading && <div data->Loading</div>) || (
        <GithubSearchComponent results={this.props.github.results} />
      )
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
