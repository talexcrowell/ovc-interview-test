import * as React from 'react';
import {shallow, mount} from 'enzyme';

import App from './App';

describe('<App />', () => {
    it('Renders without crashing', () => {
        shallow(<App />);
    });
});