//@ts-nocheck
// working test case for mocking thunk
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from '../App';
import configureStore from 'redux-mock-store';
import { thunk } from 'redux-thunk';

const mockStore = configureStore([thunk])

test("testing, cards should be render as per the length of response", () => {
    let cardData = [
        {
            "id": 1,
            "email": "george.bluth@reqres.in",
            "first_name": "George",
            "last_name": "Bluth",
            "avatar": "https://reqres.in/img/faces/1-image.jpg"
        },
        {
            "id": 2,
            "email": "janet.weaver@reqres.in",
            "first_name": "Janet",
            "last_name": "Weaver",
            "avatar": "https://reqres.in/img/faces/2-image.jpg"
        },
        {
            "id": 3,
            "email": "emma.wong@reqres.in",
            "first_name": "Emma",
            "last_name": "Wong",
            "avatar": "https://reqres.in/img/faces/3-image.jpg"
        },
        {
            "id": 4,
            "email": "eve.holt@reqres.in",
            "first_name": "Eve",
            "last_name": "Holt",
            "avatar": "https://reqres.in/img/faces/4-image.jpg"
        },
        {
            "id": 5,
            "email": "charles.morris@reqres.in",
            "first_name": "Charles",
            "last_name": "Morris",
            "avatar": "https://reqres.in/img/faces/5-image.jpg"
        },
        {
            "id": 6,
            "email": "tracey.ramos@reqres.in",
            "first_name": "Tracey",
            "last_name": "Ramos",
            "avatar": "https://reqres.in/img/faces/6-image.jpg"
        }
    ];
    let store = mockStore({
        cardData: cardData,
    })
    const lengthOfData = cardData.length;
    const renderComponent = render(<Provider store={store}><App /></Provider>)
    const testId = renderComponent.getByTestId('mainContainer-component');
    expect(testId.childNodes.length).toBe(lengthOfData);

})