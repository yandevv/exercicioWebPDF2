import { useState, } from 'react';

export default function TaskList() {
  const [newTaskInput, setNewTaskInput] = useState<string>();
  const [task, setTask] = useState<string[]>([]);

  function handleNewTaskFormSubmit() {
    if(newTaskInput) {
      setTask([...task, newTaskInput]);
    } else
      alert("It's not possible to add empty value tasks.");

    document.getElementById('inputNewTask')!.nodeValue = '';
  }

  return (
    <>
      <div>
        <form action={handleNewTaskFormSubmit}>
          <input
            id='inputNewTask'
            type='text'
            placeholder='Write your task'
            style={{marginRight: '8px', fontSize: '14px', padding: '8px', width: '400px'}}
            onChange={function(e){setNewTaskInput(e.target.value ?? undefined)}}
          />
          <button type='submit'>Add</button>
        </form>
        <div style={{textAlign: 'left', width: '80%', margin: '0 auto'}}>
          <ul>
            {task.map(addedTask => {
              return (
                <li>{addedTask}</li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  )
}
