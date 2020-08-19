import React, { Component } from 'react';
import './App.css';
import Image from './component/Image'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image url={"https://www.outsideonline.com/sites/default/files/styles/full-page/public/2020/03/11/everest-north-side-china_h.jpg?itok=envCwX0c"} />
      </div>
    );
  }
}

export default App;
