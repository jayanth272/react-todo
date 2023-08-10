import * as React from 'react';
import { Form } from 'react-bootstrap';

interface ICreateTasksProps {
}

const CreateTasks: React.FunctionComponent<ICreateTasksProps> = (props) => {
  return (
    <>
      <h2>Add Task</h2>
      <Form className='mt-3 mb-3'>
        <Form.Group className="mb-3" controlId='formBasicTitle' >
          <Form.Label>Title</Form.Label>
          <Form.Control type='text' placeholder='Enter Desc.'></Form.Control>
        </Form.Group>
      </Form>
    </>
  );
};

export default CreateTasks;
