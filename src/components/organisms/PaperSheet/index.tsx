import React, { SFC } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

interface IProps {
  classes: {
    root: string;
  };
}

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

export const PaperSheet: SFC<IProps> = ({ classes, children }): JSX.Element => {
  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        {children}
      </Paper>
    </div>
  );
};

export default withStyles(styles)(PaperSheet);
