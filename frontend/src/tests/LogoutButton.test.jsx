import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import LogoutButton from '../components/LogoutButton.jsx';

jest.mock('axios');

describe('Logout Button Component', () => {
  const token = 'testtoken';

  it('renders a logout button', () => {
    render(<LogoutButton token={token} />);
    expect(screen.getByText('Logout')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('updates token after successful logout', async () => {
    axios.post.mockResolvedValueOnce();
    const setToken = jest.fn();
    render(<LogoutButton token={token} setToken={setToken} />);

    userEvent.click(screen.getByRole('button', { name: 'Logout' }));

    await waitFor(() => {
      expect(setToken).toHaveBeenCalledWith('null');
    });
  });

  it('triggers logout when clicked', async () => {
    axios.post.mockResolvedValueOnce();
    const setToken = jest.fn();
    render(<LogoutButton token={token} setToken={setToken} />);

    userEvent.click(screen.getByRole('button', { name: 'Logout' }));

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledTimes(1);
    });
  });
});
