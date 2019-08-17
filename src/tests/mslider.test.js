'use strict';

import React from 'react';
import MSlider from "../components/MSIleder/MSlider";
import renderer from 'react-test-renderer';
import {render, fireEvent, cleanup} from '@testing-library/react';


const elements = [
    "https://www.armeniatravel.am/wcit/V.2.0/images/Amberd/Amberd_1.jpg",
    "https://www.armeniatravel.am/wcit/V.2.0/images/Sevan_Dilijan/Sevan.jpg",
    "https://www.armeniatravel.am/wcit/V.2.0/images/Amberd/Amberd_day_4.jpg",
    "https://www.armeniatravel.am/wcit/V.2.0/images/Amberd/Amberd_2.jpg"
];


describe('mslider', () => {
    afterEach(cleanup);

    it('renders correctly', () => {
        const tree = renderer
            .create(<MSlider elements={elements}
                             duration={2}
                             cb={function(a, b) {
                                 console.log(a, b);
                             }}/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('arrow right handler event set activeElement from 0 to 1 when invoked', () => {
        const {
            getByTestId
        } = render(<MSlider elements={elements}
                            duration={2}
                            cb={function(a, b) {
                                console.log(a, b);
                            }}/>);
        const rightArrowButton = getByTestId('slideRightButton');
        rightArrowButton.click();
        expect(global.dataForTesting.activeElement).toBe(1);
    });

    it('arrow left handler event set activeElement from 0 to the number matching elements length minus 1 when invoked', () => {
        const {
            getByTestId
        } = render(<MSlider elements={elements}
                            duration={2}
                            cb={function(a, b) {
                                console.log(a, b);
                            }}/>);
        const leftArrowButton = getByTestId('slideLeftButton');
        leftArrowButton.click();
        expect(global.dataForTesting.activeElement).toBe(elements.length-1);
    });
});
