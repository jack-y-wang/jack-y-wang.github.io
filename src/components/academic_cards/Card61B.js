import React from 'react';
import { Card, Image, Modal, Header } from 'semantic-ui-react';

const Card61B = () => {
	return (
		<Modal
			trigger={
				<Card fluid>
					<Card.Content>
						<Image floated="right" size="tiny" src="/imgs/61b-logo.png" />
						<Card.Header>61B: Data Structures</Card.Header>
					</Card.Content>
				</Card>
			}
		>
			<Modal.Header>CS 61B: Data Structures</Modal.Header>
			<Modal.Content image>
				<Image size="medium" src="/imgs/61b-logo.png" />
				<Modal.Description>
					<Header>Tutor - Spring 2020, Fall 2020</Header>
					<p>
						Taught and developed content for two weekly data structures discussions, and hosted office hours
						for{' '}
						<a href="http://www-inst.eecs.berkeley.edu/~cs61b/sp20/" target="_blank">
							CS61B
						</a>
						, which covers the following topics: Java, OOP, inheritance, asymptotic analysis, data
						structures, and algorithms.
					</p>
				</Modal.Description>
			</Modal.Content>
		</Modal>
	);
};

export default Card61B;
