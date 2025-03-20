import { useEffect, useState } from 'react';

import './App.css';
import TaskList from './components/TaskList';
import BackgroundChanger from './components/BackgroundChanger';

function App() {
  const [personName, setPersonName] = useState<string>();

  useEffect(() => {
    let insertedName: string | null = null;
    do {
      insertedName = prompt("Input your name here:");
    } while(!insertedName);

    localStorage.setItem('pessoa', insertedName);
    setPersonName(insertedName);

    return () => {
      setPersonName(undefined);
      localStorage.removeItem('pessoa');
    };
  }, []);

  if(personName)
    return (
      <>
        <div>
          <h1>{personName}, there's your task list!</h1>
        </div>
        <TaskList />
        <BackgroundChanger />
      </>
    )
}

export default App
