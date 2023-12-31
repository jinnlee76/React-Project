import './App.css';
import TodoInsert from './components/TodoInsert';
import TodoTemplate from './components/TodoTemplate';
import TodoList from './components/TodoList';
import { useState,useRef, useCallback } from 'react';

function createBulktodos(){
  const array= [];
  for(let i=0; i<=2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false, 
    });
  }
  return array;
}

function App() {
  const [todos, setTodos] = useState(createBulktodos);
    /* [ {
      id: 1,
      text: '리액트의 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링 해보기',
      checked: true,
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어 보기',
      checked: false,
    },
  ]);*/

  const nextId = useRef(2501);

  const onInsert = useCallback(
    text => {
        const todo = {
          id: nextId.current,
          text,
          checked: false,
        };
        setTodos(todos => todos.concat(todo));
        nextId.current += 1;
    }, []
  );

  const onRemove = useCallback(
    id => {
      setTodos(todos => todos.filter(todo => todo.id !==id));
    }, []
  );

  const onToggle = useCallback(
    id => {
        setTodos(
          todos.map(todo => (todo.id === id ? { ...todo, checked: !todo.checked} : todo))
        );
    }, [todos]
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
    </TodoTemplate>
  );
}

export default App;
