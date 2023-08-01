import { render, cleanup } from '@testing-library/react';
import DeleteServices from '../__mock__/DeleteServices';

afterEach(() => {
  cleanup();
});

describe('DeleteServices', () => {
  it('DeleteServices renders correctly', () => {
    const deletemovies = render(<DeleteServices />);
    expect(deletemovies).toMatchSnapshot();
  });
});
