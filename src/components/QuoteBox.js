import React, {Component} from 'react';

import styles from './../styles/QuoteBox.css.js';

class QuoteBox  extends Component {
   render(){
       return(
           <div id="quote-box" style = {styles["#quote-box"]}>
               <h1 id="text" style = {styles["#text"]}>
                   "Hello this is random quote."
               </h1>
           </div>
       );
   }
}

export default QuoteBox;