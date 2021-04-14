//first file to be executed
import ReactDOM from 'react-dom';

import './index.css'; //would be invalid in pure JS. It is syntax sugare that is processed/translated during nmp start
import App from './App';

ReactDOM.render(<App />, document.getElementById('root')); //html stuff inside js would also be invalid in pure JS.
//App is an component!