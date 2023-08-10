import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Tasks from './Tasks';
import { Task } from '../models/task.model';

describe('Tasks Component', () => {
  const sampleTask: Task = {
    id: '1',
    title: 'Sample Task',
    text: 'This is a sample task',
    date: '2023-08-10',
    color: '#FF5733'
  };

  test('renders task data', () => {
    const { getByText } = render(<Tasks task={sampleTask} handleDelete={() => {}} />);
    const titleElement = getByText('Sample Task');
    const textElement = getByText('This is a sample task');
    const dateElement = getByText('2023-08-10');

    expect(titleElement).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();
    expect(dateElement).toBeInTheDocument();
  });

  test('calls handleDelete when delete button is clicked', () => {
    const handleDeleteMock = jest.fn();
    const { getByText } = render(<Tasks task={sampleTask} handleDelete={handleDeleteMock} />);
    const deleteButton = getByText('Delete');

    fireEvent.click(deleteButton);
    expect(handleDeleteMock).toHaveBeenCalledWith('1');
  });
});
