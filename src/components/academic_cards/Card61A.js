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
			<Modal.Header>61A: Structures and Interpretation of Computer Programs</Modal.Header>
			<Modal.Content image>
				<Image size="medium" src="/imgs/61a-logo.png" />
				<Modal.Description>
					<Header>Tutor - Fall 2019, Spring 2019</Header>
					<p>
						Taught and developed content for two weekly discussion sections and hosted office hours for {' '}
						<a href="https://cs61a.org" target="_blank">
							CS61A
						</a>, the introductory CS class offered at Berkeley which covers: python, higher order
						funcitons, recursion, OOP, introductory data structures, and inheritance.
					</p>
				</Modal.Description>
			</Modal.Content>
		</Modal>
	);
};

export default Card61A;
