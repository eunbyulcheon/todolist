import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import styled, { css } from 'styled-components';
import { useTodoDispatch, useTodoNextId } from '../TodoContext';

const TodoCreate = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [value, setValue] = useState('');
	const dispatch = useTodoDispatch();
	const nextId = useTodoNextId();

	const onToggle = () => setIsOpen(!isOpen);
	const onChange = (e) => setValue(e.target.value);
	const onSubmit = (e) => {
		e.preventDefault();
		dispatch({
			type: 'CREATE',
			todo: {
				id: nextId.current,
				text: value,
				done: false,
			},
		});

		setValue('');
		setIsOpen(false);
		nextId.current += 1;
	};

	return (
		<>
			{isOpen && (
				<InsertFormPositioner>
					<InsertForm onSubmit={onSubmit}>
						<Input
							autoFocus
							placeholder="할 일을 입력 후, Enter 를 누르세요"
							value={value}
							onChange={onChange}
						/>
					</InsertForm>
				</InsertFormPositioner>
			)}
			<CircleBtn isOpen={isOpen} onClick={onToggle}>
				<MdAdd />
			</CircleBtn>
		</>
	);
};

const CircleBtn = styled.button`
	background: #38d9a9;
	&:hover {
		background: #63e6be;
	}
	&:active {
		background: #20c997;
	}

	z-index: 5;
	cursor: pointer;
	width: 80px;
	height: 80px;
	display: block;
	font-size: 60px;
	position: absolute;
	left: 50%;
	bottom: 0px;
	transform: translate(-50%, 50%);
	color: #fff;
	border-radius: 50%;
	border: none;
	display: flex;
	align-items: center;
	justify-content: center;

	transition: 0.125s all ease-in;
	${(props) =>
		props.isOpen &&
		css`
			background: #ff6b6b;
			&:hover {
				background: #ff8787;
			}
			&:active {
				background: #fa5252;
			}
			transform: translate(-50%, 50%) rotate(45deg);
		`}
`;

const InsertFormPositioner = styled.div`
	width: 100%;
	position: absolute;
	bottom: 0;
	left: 0;
`;

const InsertForm = styled.form`
	background: #f8f9fa;
	padding: 32px 32px 72px 32px;
	border-top: 1px solid #e9ecef;
	border-bottom-left-radius: 16px;
	border-bottom-right-radius: 16px;
`;

const Input = styled.input`
	width: 100%;
	padding: 12px;
	border: 1px solid #dee2e6;
	border-radius: 4px;
	font-size: 18px;
`;

export default React.memo(TodoCreate);
