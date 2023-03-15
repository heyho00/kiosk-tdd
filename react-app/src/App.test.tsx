import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

// describe('App ', () => {
//   it('renders without crash', () => {
//     render(<App />);
//   });
// });

test('App', async () => {
  render(<App />);

  await waitFor(() => {
    screen.getByText('메뉴');
  });
});
