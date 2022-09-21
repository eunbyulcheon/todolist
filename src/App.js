import React from 'react';
import TodoTemplate from './component/TodoTemplate';
import TodoHeader from './component/TodoHeader';
import TodoList from './component/TodoList';
import TodoCreate from './component/TodoCreate';
import { TodoProvider } from './TodoContext';

function App() {
	return (
		<TodoProvider>
			<TodoTemplate>
				<TodoHeader />
				<TodoList />
				<TodoCreate />
			</TodoTemplate>
		</TodoProvider>
	);
}

export default App;
