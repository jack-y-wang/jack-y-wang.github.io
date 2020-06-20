import React from 'react';
import { Container, Menu, Image, Visibility } from 'semantic-ui-react';

const menuStyle = {
	border: 'none',
	borderRadius: 0,
	boxShadow: 'none'
	// marginBottom: '',
	// marginTop: '4em',
	// transition: 'box-shadow 0.5s ease, padding 0.5s ease'
};

export default class PageMenu extends React.Component {
	state = {
		barPassed: false
	};

	// stickBar = () => this.setState({ barPassed: true });
	// unStickBar = () => this.setState({ barPassed: false });

	render() {
		const { barPassed } = this.state;

		return (
			<div>
				<Menu borderless style={menuStyle} fixed="top">
					<Container text={barPassed ? false : true} vertical={barPassed ? true : false}>
						<Menu.Item>
							<a href="#Academics">Academics</a>
						</Menu.Item>
						<Menu.Item>
							<a href="#Experience">Experience</a>
						</Menu.Item>
						<Menu.Item>
							<a href="/jackwang_resume.pdf">Resume</a>
						</Menu.Item>
						<Menu.Item position="right">
							<Image size="mini" src="./imgs/favicon.png" />
						</Menu.Item>
					</Container>
				</Menu>
			</div>
		);
	}
}
