import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TasksList from './TasksList';
import { Task } from '../models/task.model';

describe('TasksList Component', () => {
  const sampleTasks: Task[] = [
    {
      id: '1',
      title: 'Task 1',
      text: 'Description for Task 1',
      date: '2023-08-10',
      color: '#FF5733'
    },
    {
      id: '2',
      title: 'Task 2',
      text: 'Description for Task 2',
      date: '2023-08-11',
      color: '#3399FF'
    }
    // Add more tasks if needed
  ];

  test('renders all tasks', () => {
    const { getByText } = render(<TasksList tasks={sampleTasks} setTasks={() => {}} />);
    const task1Title = getByText('Task 1');
    const task2Title = getByText('Task 2');
    // Add assertions for other tasks as well
    expect(task1Title).toBeInTheDocument();
    expect(task2Title).toBeInTheDocument();
  });

  test('calls setTasks when a task is deleted', () => {
    const setTasksMock = jest.fn();
    const { queryAllByText } = render(<TasksList tasks={sampleTasks} setTasks={setTasksMock} />);
    const deleteButtons = queryAllByText('Delete', { selector: 'button' });
  
    fireEvent.click(deleteButtons[0]); // Assuming the first delete button is the one you want to click
    expect(setTasksMock).toHaveBeenCalledTimes(1);
  });
  
});
