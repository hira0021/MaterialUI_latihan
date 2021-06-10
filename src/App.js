import './App.css';
import {Button, makeStyles, Typography} from '@material-ui/core';

const useStyles = makeStyles({
  helloThereStyle: {
    fontSyle: 'oblique',
    color: 'red'
  },
  buttonStyle: {
    color: 'green',
    border: 0
  }
});

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Typography className={classes.helloThereStyle} variant="h6" color="primary">Hello There</Typography>
      <Button className={classes.buttonStyle} color="primary" variant="outlined">Ini Button</Button>
    </div>
  );
}

export default App;
