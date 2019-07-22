import * as React from 'react';
import { Provider } from 'react-redux';
import {shallow, mount} from 'enzyme';

import store from '../store';
import Table from './table';

describe('<Table />', () => {
  it('Renders without crashing', () => {
    shallow(<Provider store={store} ><Table /></Provider>);
  });

  it('Should call "componentDidMount" lifecycle method when the component mounts', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<Provider store={store} ><Table /></Provider>);
    const instance = wrapper.instance();
    jest.spyOn(instance, 'componentDidMount');
    instance.componentDidMount();
    expect(instance.componentDidMount).toHaveBeenCalled();
  })
});