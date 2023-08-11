import * as React from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Task } from '../models/task.model';

interface ITasksProps {
    task: Task,
    handleDelete: (id: string) => void
}

const Tasks: React.FC<ITasksProps> = ({task, handleDelete}) => {
    return (
        <div className="mb-3">
            <Card style={{backgroundColor: task.color}}>
                <Card.Body>
                    <Card.Title>{task.title}</Card.Title>
                    <Card.Text>{task.text}</Card.Text>
                    <Card.Subtitle className="text-muted">{ task.date}</Card.Subtitle>
                    <Button className="mt-3" variant="danger" onClick={ () => handleDelete(task.id)}>Delete</Button>
                </Card.Body>
            </Card>
            </div>
  );
};

export default Tasks;