import { render, cleanup } from '@testing-library/react';
import DeleteServiceCard from '../__mock__/DeleteServiceCard';

afterEach(() => {
  cleanup();
});

describe('DeleteServiceCard', () => {
  it('DeleteServiceCard renders correctly', () => {
    const deletemoviecard = render(<DeleteServiceCard />);
    expect(deletemoviecard).toMatchSnapshot();
  });
});
