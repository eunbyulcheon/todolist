import React from 'react';
import { useTodoState } from '../TodoContext';
import styled from 'styled-components';

const TodoHeader = () => {
	const todos = useTodoState();
	console.log(todos);

	return (
		<Container>
			<Date>2022년 9월 20일</Date>
			<Day>화요일</Day>
			<TasksLeft>할 일 2개 남음</TasksLeft>
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
