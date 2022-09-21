import React from 'react';
import { useTodoState } from '../TodoContext';
import styled from 'styled-components';

const TodoHeader = () => {
	const todos = useTodoState();
	const undoneTasks = todos.filter((todo) => !todo.done);

	const today = new window.Date();
	const dateString = today.toLocaleDateString('ko-KR', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});
	const dayName = today.toLocaleDateString('ko-KR', { weekday: 'long' });

	return (
		<Container>
			<Date>{dateString}</Date>
			<Day>{dayName}</Day>
			<TasksLeft>할 일 {undoneTasks.length}개 남음</TasksLeft>
		</Container>
	);
};

const Container = styled.div`
	padding: 48px 32px 24px 32px;
	border-bottom: 1px solid #e9ecef;
`;

const Date = styled.h1`
	font-size: 36px;
	color: #343a40;
`;

const Day = styled.div`
	margin-top: 4px;
	color: #868e96;
	font-size: 21px;
`;

const TasksLeft = styled.div`
	margin-top: 40px;
	font-size: 18px;
	font-weight: bold;
	color: #20c997;
`;

export default TodoHeader;
