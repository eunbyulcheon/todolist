import React from 'react';
import TodoTemplate from './component/TodoTemplate';
import TodoHeader from './component/TodoHeader';
import TodoList from './component/TodoList';
import TodoCreate from './component/TodoCreate';

function App() {
	return (
		<>
			<TodoTemplate>
				<TodoHeader />
				<TodoList />
				<TodoCreate />
			</TodoTemplate>
		</>
	);
}

export default App;
