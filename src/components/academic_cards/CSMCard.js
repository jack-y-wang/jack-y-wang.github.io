import React from 'react';
import { Card, Image, Modal, Header } from 'semantic-ui-react';

const CSMCard = () => {
	return (
		<Modal
			trigger={
				<Card fluid>
					<Card.Content>
						<Image floated="right" size="tiny" src="/imgs/csm.png" />
						<Card.Header>Computer Science Mentors</Card.Header>
					</Card.Content>
				</Card>
			}
		>
			<Modal.Header>CS 88: Computational Structures for Data Science</Modal.Header>
			<Modal.Content image>
				<Image size="medium" src="/imgs/csm.png" />
				<Modal.Description>
					<Header>Senior Mentor - Fall 2020, Spring 2020, Fall 2019</Header>
					<p>
						In{' '}
						<a href="https://csmentors.berkeley.edu/#/" target="_blank">
							Computer Science Mentors
						</a>, I am mentor for {' '}
						<a href="https://cs88-website.github.io/" target="_blank">
							CS 88
						</a>
						, our introductory computer science class for data science majors covering python, higher order
						functions, recursion, abstract data types, OOP, and introductory data structures.
					</p>
					<p>
						Led weekly family meetings for six junior mentors to learn about pedagogy. Interviewed candidate
						mentors and developed course content, including review slides, worksheets, and teaching guides.
					</p>
				</Modal.Description>
			</Modal.Content>
		</Modal>
	);
};

export default CSMCard;
