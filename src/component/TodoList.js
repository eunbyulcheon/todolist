import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useTodoState } from '../TodoContext';

const TodoList = () => {
	const todos = useTodoState();

	return (
		<Wrapper>
			{todos.map((todo) => (
				<TodoItem
					key={todo.id}
					id={todo.id}
					text={todo.text}
					done={todo.done}
				/>
			))}
		</Wrapper>
	);
};

const Wrapper = styled.div`
	flex: 1;
	padding: 20px 32px;
	padding-bottom: 48px;
	overflow-y: auto;
`;

export default TodoList;
