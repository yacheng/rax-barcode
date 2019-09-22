/* eslint-disable import/no-extraneous-dependencies */
/**
 * @jsx createElement
 */
import { createElement, render, Component } from 'rax';
import DU from 'driver-universal';
import View from 'rax-view';
import BarCode from '../src/index';

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <BarCode
          data={'123123123123'}
          type='CODE39'
          options={{
            lineColor: 'green',
          }}
        />
        <BarCode
          data={'123123123123'}
          options={{
            lineColor: 'red',
            displayValue: true
          }}
        />
        <BarCode
          data={'123456789012'}
          type='UPC'
          options={{
            lineColor: 'blue',
            background: 'red',
          }}
        />
      </View>
    );
  }
}

render(<App />, document.body, { driver: DU });
