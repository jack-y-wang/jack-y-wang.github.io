import React from 'react';
import { Card, Image, Modal, Header } from 'semantic-ui-react';

const Card61A = () => {
	return (
		<Modal
			trigger={
				<Card fluid>
					<Card.Content>
						<Image floated="right" size="tiny" src="/imgs/61a-logo.png" />
						<Card.Header>61A: Structures and Interpretation of Computer Programs</Card.Header>
					</Card.Content>
				</Card>
			}
		>
			<Modal.Header>UNCF: United Negro College Fund</Modal.Header>
			<Modal.Content image>
				<Image size="medium" src="/imgs/61a-logo.png" />
				<Modal.Description>
					<Header>Data Structures Tutor</Header>
					<p>Taught 61B</p>
					<p>Technologies: python, codio</p>
				</Modal.Description>
			</Modal.Content>
		</Modal>
	);
};

export default Card61A;
