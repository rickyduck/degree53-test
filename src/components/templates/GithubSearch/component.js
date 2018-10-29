import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';

import Header from '../../atoms/Header';
import Results from '../../organisms/Results';

import './styles.css';

class GithubSearchComponent extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = name => event => {
    this.props.handleChange(event.target.value);
  };
  render() {
    return (
      <div className="App">
        <Fragment>
          <Header title="Github Search" />
          <main>
            <form>
              <TextField onChange={this.handleChange('search')} />
            </form>
            {(this.props.github.error && (
              <div>{this.props.github.error}</div>
            )) || (
              <section className="results">
                {(this.props.github.fetching && (
                  <CircularProgress size={50} />
                )) || <Results results={this.props.github.results} />}
              </section>
            )}
          </main>
        </Fragment>
      </div>
    );
  }
}

GithubSearchComponent.propTypes = {
  results: PropTypes.array.isRequired
};

export default GithubSearchComponent;
