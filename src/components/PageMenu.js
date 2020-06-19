import React from 'react';
import { Container, Menu, Image } from 'semantic-ui-react';

const PageMenu = () => {
	return (
		<Menu secondary borderless>
			<Container text>
				<Menu.Item>
					<a href="/jackwang_resume.pdf">resume</a>
				</Menu.Item>
				<Menu.Item position="right">
					<Image size="mini" src="./imgs/favicon.png" />
				</Menu.Item>
			</Container>
		</Menu>
	);
};

export default PageMenu;
