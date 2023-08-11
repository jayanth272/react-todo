import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CreateTasks from './CreateTasks';
import { Task } from '../models/task.model';

describe('CreateTasks Component', () => {
  test('displays error message when submitting with empty fields', () => {
    const tasks: Task[] = [];
    const setTasksMock = jest.fn();
    const { getByText, getByLabelText } = render(<CreateTasks tasks={tasks} setTasks={setTasksMock} />);

    const submitButton = getByText('Submit');
    fireEvent.click(submitButton);

    const errorMessage = getByText('All fields are mandatory');
    expect(errorMessage).toBeInTheDocument();
  });

  test('calls setTasks and clears input fields when submitting with valid inputs', () => {
    const tasks: Task[] = [];
    const setTasksMock = jest.fn();
    const { getByLabelText, getByText } = render(<CreateTasks tasks={tasks} setTasks={setTasksMock} />);

    const titleInput = getByLabelText('Title');
    const textInput = getByLabelText('Text');
    const submitButton = getByText('Submit');

    fireEvent.change(titleInput, { target: { value: 'New Task' } });
    fireEvent.change(textInput, { target: { value: 'New Task Description' } });
    fireEvent.click(submitButton);

    expect(setTasksMock).toHaveBeenCalledTimes(1);
    expect(titleInput).toHaveValue('');
    expect(textInput).toHaveValue('');
  });
});
