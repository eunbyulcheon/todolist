import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';

const TodoItem = ({ id, text, done }) => {
	return (
		<Wrapper>
			<CheckCircle done={done}>{done && <MdDone />}</CheckCircle>
			<Text done={done}>{text}</Text>
			<Remove>
				<MdDelete />
			</Remove>
		</Wrapper>
	);
};

const Remove = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	color: #dee2e6;
	font-size: 24px;
	cursor: pointer;
	&:hover {
		color: #ff6b6b;
	}
	display: none;
`;

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	padding: 12px 0;
	&:hover {
		${Remove} {
			// Component Selector. When the cursor in on the item, Remove component is shown.
			display: initial;
		}
	}
`;

const CheckCircle = styled.div`
	width: 32px;
	height: 32px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 20px;
	border: 1px solid #ced4da;
	border-radius: 16px;
	font-size: 24px;
	cursor: pointer;
	${(props) =>
		props.done &&
		css`
			border: 1px solid #38d9a9;
			color: #38d9a9;
		`}
`;

const Text = styled.div`
	flex: 1;
	font-size: 21px;
	color: #495057;
	${(props) =>
		props.done &&
		css`
			color: #ced4da;
		`}
`;

export default TodoItem;
