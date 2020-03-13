import React from 'react';
import ReactDOM from 'react-dom';
import {render, mount, waitForElement, getByAltText, getAllByText} from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect";
import App from './App';
import GetData from './Components/GetData'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('see that data is returned from api', async () => {

const {getAllByText} = render(<App/>);

const data = await waitForElement(() => getAllByText(/Name:/i));

expect(data[0]).toBeInTheDocument();

})