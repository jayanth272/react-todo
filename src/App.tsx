import React, { useState } from 'react';
import Header from './components/Header';
import NotesList from './components/TasksList';
import { Task } from './models/task.model';
import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import CreateTasks from './components/CreateTasks';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);


  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row>
          <Col>
            <NotesList tasks={tasks} setTasks={ setTasks}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <CreateTasks tasks={tasks} setTasks={ setTasks}/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;