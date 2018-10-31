import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import IResults from '../../../interfaces/IResults';

import Header from '../../atoms/Header';
import Results from '../../organisms/Results';
import PaperSheet from '../../organisms/PaperSheet';

import './styles.css';

interface IProps {
  handleChange(value: string): void;
  github: {
    error: string;
    fetching: boolean;
    results: IResults;
  };
  classes: {
    search: string; // replace with any?
  };
}

const styles = () => ({
  search: {
    marginBottom: 20
  }
});

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
        <Header title="Github Search" />
        <main>
          <form className={this.props.classes.search}>
            <TextField onChange={this.handleChange('search')} />
          </form>
          {(this.props.github.error && (
            <PaperSheet>
              <Typography component="p">{this.props.github.error}</Typography>
            </PaperSheet>
          )) || (
            <section className="results">
              {(this.props.github.fetching && (
                <CircularProgress size={50} />
              )) || <Results results={this.props.github.results} />}
            </section>
          )}
        </main>
      </div>
    );
  }
}
export default withStyles(styles)(GithubSearchComponent);
