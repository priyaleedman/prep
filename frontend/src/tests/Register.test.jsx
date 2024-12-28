import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import Register from '../pages/Register.jsx';

jest.mock('axios');

describe('Register Component', () => {
  const setTokenFunction = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks(); // Reset mocks between tests
  });

  it('renders registration form', () => {
    render(
      <BrowserRouter>
        <Register token="null" setTokenFunction={setTokenFunction} />
      </BrowserRouter>
    );
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Email Address')).toBeInTheDocument();
    expect(screen.getByText('Password')).toBeInTheDocument();
    expect(screen.getByText('Confirm Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Register' })).toBeInTheDocument();
  });

  it('registers successfully', async () => {
    const token = 'testtoken';
    axios.post.mockResolvedValueOnce({ data: { token } });
    const name = 'Test User';
    const email = 'test@example.com';
    const password = 'password';

    render(
      <BrowserRouter>
        <Register token="null" setTokenFunction={setTokenFunction} />
      </BrowserRouter>
    );

    userEvent.type(screen.getByText('Name'), name);
    userEvent.type(screen.getByText('Email Address'), email);
    userEvent.type(screen.getByText('Password'), password);
    userEvent.type(screen.getByText('Confirm Password'), password);
    userEvent.click(screen.getByRole('button', { name: 'Register' }));
  });

  it('displays error message if passwords do not match', async () => {
    render(
      <BrowserRouter>
        <Register token="null" setTokenFunction={setTokenFunction} />
      </BrowserRouter>
    );

    const name = 'Test User';
    const email = 'test@example.com';
    const password = 'password';
    const confirmPassword = 'password123'; // different from password

    userEvent.type(screen.getByText('Name'), name);
    userEvent.type(screen.getByText('Email Address'), email);
    userEvent.type(screen.getByText('Password'), password);
    userEvent.type(screen.getByText('Confirm Password'), confirmPassword);
    userEvent.click(screen.getByRole('button', { name: 'Register' }));

    await waitFor(() => {
      expect(setTokenFunction).not.toHaveBeenCalled(); // setTokenFunction should not be called
    });
  });
});
