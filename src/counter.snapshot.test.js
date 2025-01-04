import React from "react";
import renderer from 'react-test-renderer';
import Counter from "./counter";

it('Snapshot testing on Counter componant', () => {
    const tree = renderer.create(<Counter />).toJSON();
    expect(tree).toMatchSnapshot();
})