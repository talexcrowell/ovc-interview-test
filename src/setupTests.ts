import * as Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import {GlobalWithFetchMock} from "jest-fetch-mock";
 
const customGlobal: GlobalWithFetchMock = global as GlobalWithFetchMock;
customGlobal.fetch = require('jest-fetch-mock');
customGlobal.fetchMock = customGlobal.fetch;

Enzyme.configure({ adapter: new EnzymeAdapter() });