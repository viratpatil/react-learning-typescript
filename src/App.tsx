import React, {ChangeEvent, FC, useState} from 'react';
import './App.css';
import { StockSearch } from './components/jpmorgan/StockSearch';
import { StockService } from './components/jpmorgan/StockService';
import { Book, GenericSelect, Movie } from './components/todolist/SelectComp';
import { TodoTask } from './components/todolist/TodoTask';
import GenClass  from './utils/GenClass';
import { Greet } from './components/Practice/Greet';
import { Person } from './components/Practice/Person';
import { PersonList } from './components/Practice/PersonList';
import { Button } from './components/Practice/Button';
import { Input } from './components/Practice/Input';
import { Container } from './components/Practice/Container';
import { ThemeContextProvider } from './components/Practice/context/ThemeContext';
import { Box } from './components/Practice/context/Box';
import { UserContextProvider } from './components/Practice/context/UserContext';
import { User } from './components/Practice/context/User';
import { List } from './components/Practice/generics/List';
import { RandomNumber } from './components/Practice/restrictions/RandomNumber';
import { Toast } from './components/Practice/literals/Toast';
import { CustomButton } from './components/Practice/html/Button';
import { Text } from './components/Practice/polymorphic/Text';
// import {Person} from './components/Person';

export interface ITask {
  taskName: string;
  deadline: number;
}

const mockOptions: Book[]  = [
  { id: "banana", title: 'Banana 🍌' },
  { id: 'apple', title: 'Apple 🍎' }
];

const mockOptionsM: Movie[]  = [
  { id: "banana", title: 'Movie1', releaseDate: '4444' },
  { id: 'apple', title: 'Apple 🍎', releaseDate: '4444' }
];

const  App: FC = () => {

  // const name: string = "Virat";
  // const age: number = 34;
  // const isMarried: boolean = true;

  // const getName = (name: string): number => {
  //   return 20;
  // }

  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todo, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {  
      setTask(event.currentTarget.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  }

  const addTask = (): void=> {
    const newTask = {taskName: task, deadline: deadline}
    setTodoList([...todo, newTask]);
    setTask("");
    setDeadline(0);
  }

  const completeTask = (taskName: string) => {
    setTodoList(todo.filter((task) => task.taskName !== taskName));
  }

  const onChangeSelect = (value: Book) => {
    console.log(value);
  }

  const genC: GenClass<number> = new GenClass<number>();
  genC.setValue(10);
  console.log(genC.toString());
  // Casting
  genC.checkCasting();

  const learnTS = () => {
    genC.learnTS();
  }

  const personName = {
    first: 'Rohit',
    last: 'Sharma'
  }

  const nameList = [{
   first: 'Jasprit',
   last: 'Bumrah' 
  },
  {
    first: 'Zaheer',
    last: 'Khan' 
   },
   {
    first: 'Asshihs',
    last: 'Nehra' 
   }]

  return (
    <div className="App">
      {/* <GenericSelect values={mockOptions} onChange={onChangeSelect}></GenericSelect>
      <div className='header'>
        <div className="inputContainer">
          <input type="text" placeholder='Task..' name='task' onChange={handleChange} value={task}></input>
          <input type="number" placeholder='Deadline in days..' name='deadline' onChange={handleChange} value={deadline}></input> 
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='todoList'>
        {
          todo.map((task: ITask, key: number) => {
            return <TodoTask key={key} task={task} completeTask={completeTask}></TodoTask>;
          })
        }
      </div> */}
      {/* <StockSearch stockService={StockService}></StockSearch>
      <button onClick={learnTS}>Learn TS</button> */}
      <Greet name={"Virat"} message={10} isLoggedIn={false}></Greet>
      <Person name={personName}></Person>
      <PersonList names={nameList}></PersonList>
      <ThemeContextProvider>
        <Box></Box>
      </ThemeContextProvider>
      <UserContextProvider>
        <User></User>
      </UserContextProvider>
      <Button handleClick={(event,id) => {
        console.log('Button Clicked' + id)
      }}></Button>
      <Input value='ss' handleChange={(event) => {
          console.log(event)
      }}></Input>
      <List items={['v', 'c', 'd']} onClick={(item) => {
        console.log(item)
      }}></List>
      <RandomNumber value={10} isNegative></RandomNumber>
      <Toast position='center'></Toast>
      <CustomButton variant='primary' onClick={() => {console.log('clicked')}}></CustomButton>
      <Text size='lg' as='h1'> Heading</Text>
      <Text size='md' as='p'> para</Text>
      <Container styles={{border: '1px solid black', padding: '1rem'}}></Container>
    </div>
  );
}

export default App;
