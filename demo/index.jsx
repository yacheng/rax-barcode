/* eslint-disable import/no-extraneous-dependencies */
/**
 * @jsx createElement
 */
import { createElement, render, Component } from 'rax';
import DU from 'driver-universal';
import BarCode from '../src/index';

class App extends Component {
  render() {
    return (
      [<BarCode
        data={'123123123123'}
        type='CODE39'
        options={{
          fillColor: 'green',
        }}
      />,
      <BarCode
        data={'http://market.m.taobao.com/apps/market/m-vip/88-festival.html?wh_weex=true&wx_navbar_transparent=true'}
        options={{
          fillColor: 'red',
          displayValue: true
        }}
      />,
      <BarCode
        data={'123456789012'}
        type='EAN13'
        options={{
          fillColor: 'blue',
          background: 'red',
        }}
      />,
      ]
    );
  }
}

render(<App />, document.body, { driver: DU });
