import React from 'react';
import PropTypes from 'prop-types';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Routes from '../../routes/Routes';

const { act } = renderer;

function TestRouter({ path }) {
  return (
    <MemoryRouter initialEnteries={[path]}>
      <Routes />
    </MemoryRouter>
  );
}

TestRouter.propTypes = {
  path: PropTypes.string.isRequired,
};

const user = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'johndoe@example.com',
  token_type: 'Bearer',
};

const sessionExpiration = new Date(new Date().getTime() + 1000 * 60 * 60 * 24);

const localStorageMapping = {
  user,
  sessionExpiration,
};

describe('Profile', () => {
  let testRenderer;
  beforeAll(() => {
    act(() => {
      testRenderer = renderer.create(<TestRouter path="/profile/1" />);
    });
  });
  describe('when user is not logged in', () => {
    it('renders the profile page', () => {
      const tree = testRenderer.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe('when user is logged in', () => {
    beforeEach(() => {
      global.Storage.prototype.getItem = jest.fn((key) => JSON.stringify(localStorageMapping[key]));
    });
    afterEach(() => {
      global.Storage.prototype.getItem.mockReset();
    });
    it('renders the profile page', () => {
      const tree = testRenderer.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});