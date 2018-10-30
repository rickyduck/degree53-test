import React, { Component, Fragment } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';

import IResults from '../../../interfaces/IResults';

import Header from '../../atoms/Header';
import Results from '../../organisms/Results';

import './styles.css';

interface IProps {
  handleChange(value: string): void;
  github: {
    error: string;
    fetching: boolean;
    results: IResults;
  };
}

class GithubSearchComponent extends Component<IProps> {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  public handleChange = name => event => {
    this.props.handleChange(event.target.value);
  };
  public render() {
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

export default GithubSearchComponent;
