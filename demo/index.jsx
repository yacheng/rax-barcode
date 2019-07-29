import {createElement, render,Component } from 'rax';
import DU from "driver-universal"
import View from 'rax-view';
import BarCode from '../src/index';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={{flex: 1}}>
	    <BarCode 
           data={'asdf'}
           type='CODE39'
           options={{
             fillColor: 'red'
           }}
        />
      </View>
    );
  }
}

render(<App />, document.body, { driver: DU });
