import React from 'react';
import styled from 'styled-components';

const TodoTemplate = ({ children }) => {
	return <TodoTemplateWrapper>{children}</TodoTemplateWrapper>;
};

const TodoTemplateWrapper = styled.div`
	width: 512px;
	height: 768px;
	position: relative;
	margin: 0 auto;
	margin-top: 96px;
	margin-bottom: 96px;
	display: flex;
	flex-direction: column;
	background: #fff;
	border-radius: 16px;
	box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
`;

export default TodoTemplate;
