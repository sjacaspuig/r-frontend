'use strict';

import React from 'react';
import Link from '../Link.react';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<Link href="/portfolio/sanderson">Ver proyecto</Link>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders as an anchor when no page is set', () => {
  const tree = renderer.create(<Link href="/portfolio/sanderson">Ver proyecto</Link>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('properly escapes quotes', () => {
  const tree = renderer
    .create(<Link>{"\"Ver\" \\'el \\ 'proyecto'"}</Link>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('changes the class when hovered', () => {
  const component = renderer.create(
    <Link href="/portfolio/sanderson">Ver proyecto</Link>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseEnter();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseLeave();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});