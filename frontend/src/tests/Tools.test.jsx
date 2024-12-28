import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Tools from '../components/Tools.jsx'

describe('Tools', () => {
  const dummyElements = [
    { name: 'name1', icon: 'icon1', onClick: jest.fn() },
    { name: 'name2', icon: 'icon2', onClick: jest.fn() },
  ];

  it('renders list of buttons', () => {
    render(<Tools elements={dummyElements} />);
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /icon1name1/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /icon2name2/i })).toBeInTheDocument();
  });

  it('triggers onClick when clicked', () => {
    const onClick1 = jest.fn();
    const onClick2 = jest.fn();
    const dummyElements = [
      { name: 'name1', icon: 'icon1', onClick: onClick1 },
      { name: 'name2', icon: 'icon2', onClick: onClick2 },
    ];

    render(<Tools elements={dummyElements} />);

    // Click the first button
    userEvent.click(screen.getByRole('button', { name: /icon1name1/i }));
    expect(onClick1).toHaveBeenCalledTimes(1);
    expect(onClick2).not.toHaveBeenCalled(); // Make sure the other onClick hasn't been called

    // Click the second button
    userEvent.click(screen.getByRole('button', { name: /icon2name2/i }));
    expect(onClick2).toHaveBeenCalledTimes(1);
    expect(onClick1).toHaveBeenCalledTimes(1); // Make sure the first onClick hasn't been called again
  });
})
