import React , {useState} from 'react';
import Header from './components/Header';
import {Task} from './models/task.model'
import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import TasksList from './components/TasksList';




function App() {
  const [tasks, setTasks] = useState< Task[] >([{
    id:( new Date).toString(),
    title : "Meetings",
    text : "Standup at 11:00",
    color: "light-grey",
    date : (new Date).toString()
  }]

  );

  return (
    <>
    <Header/>
    <Container className="mt-5">
      <Row>
        <Col>
          <TasksList tasks ={tasks} setTasks = {setTasks}/>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default App;
