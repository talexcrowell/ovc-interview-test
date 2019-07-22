import * as React from 'react';
import { Provider } from 'react-redux';
import {shallow, mount} from 'enzyme';

import store from '../store';
import {Listing} from './listing';

describe('<Listing />', () => {
    it('Renders without crashing when provided with sample props', () => {
        shallow(<Provider store={store} >
            <Listing key={0} name={'Example'} email={'Email'} city={'City'} company={'Company'}/>
          </Provider>);
    });

    it('Renders the components with matching values provided by props.', () => {
        let wrapper = shallow(<Listing key={0} name={'Example'} email={'Email'} city={'City'} company={'Company'}/>);
        expect(wrapper.hasClass('listing')).toEqual(true);
    });
});