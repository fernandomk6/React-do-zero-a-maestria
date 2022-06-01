import {useReducer, useState} from 'react';

const HookUseReducer = () => {
  const [number, dispatch] = useReducer((state, action) => {
    return Math.random(state);
  });

  const initialTasks = [
    {id: 1, text: 'fazer alguma coisa'},
    {id: 2, text: 'fazer outra coisa'},
    {id: 3, text: 'fazer uma coisa diferente'}
  ];

  const taskReducer = (state, action) => {
    switch (action.type) {
      case 'ADD':
        const newTask = {
          id: Math.random(),
          text: taskText
        };

        setTaskText('');
        return [...state, newTask];

      case 'DELETE':
        return state.filter(task => task.id !== action.id);

      default:
        return state;
    }
  };

  const [taskText, setTaskText] = useState('');
  const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatchTasks({type: 'ADD'});
  };

  const removeTask = id => {
    dispatchTasks({type: 'DELETE', id});
  };

  return (
    <div>
      <h4>useReducer</h4>
      <p>numero: {number}</p>
      <button onClick={dispatch}>change number</button>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={e => setTaskText(e.target.value)} value={taskText} />
        <input type="submit" value="Enviar" />
      </form>
      <p>Tarefas</p>
      {tasks.map(task => (
        <li key={task.id} onDoubleClick={() => removeTask(task.id)}>{task.text}</li>
      ))}
      <hr />
    </div>
  );
};

export default HookUseReducer;