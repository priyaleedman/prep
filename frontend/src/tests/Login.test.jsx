// Login.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import Login from '../pages/Login.jsx';

jest.mock('axios');

describe('Login Component', () => {
  const setTokenFunction = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks(); // Reset mocks between tests
  });

  it('renders login form', () => {
    render(
      <BrowserRouter>
        <Login token="null" setTokenFunction={setTokenFunction} />
      </BrowserRouter>
    );
    expect(screen.queryAllByText('Log in')).toHaveLength(2);
    expect(screen.getByText('Email Address')).toBeInTheDocument();
    expect(screen.getByText('Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Log in' })).toBeInTheDocument();
  });

  it('logs in successfully', async () => {
    const token = 'testtoken';
    axios.post.mockResolvedValueOnce({ data: { token } });
    const email = 'test@example.com';
    const password = 'password';

    render(
      <BrowserRouter>
        <Login token="null" setTokenFunction={setTokenFunction} />
      </BrowserRouter>
    );

    userEvent.type(screen.getByText('Email Address'), email);
    userEvent.type(screen.getByText('Password'), password);
    userEvent.click(screen.getByRole('button', { name: 'Log in' }));
  });
});
