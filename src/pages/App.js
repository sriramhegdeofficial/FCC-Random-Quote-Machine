import React, {Component} from 'react';

import QuoteBox from './../components/QuoteBox';

import styles from './../styles/App.css.js';

class App extends Component {
    render(){
        return (
            <div className="App" style={styles.App}>
                <QuoteBox />
            </div>
            
        );
    }
}

export default App;