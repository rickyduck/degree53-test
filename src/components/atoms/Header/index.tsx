import React, { SFC } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

interface IProps {
  title: string;
  classes?: { root: any };
}

const styles = {
  root: {
    flexGrow: 1
  }
};

const Header: SFC<IProps> = (props): JSX.Element => {
  const { classes, title } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(Header);
