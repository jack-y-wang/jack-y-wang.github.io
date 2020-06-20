import React from 'react';
import { Card, Image, Modal, Header } from 'semantic-ui-react';

const MazeCard = () => {
	return (
		<Modal
			trigger={
				<Card fluid>
					<Image src="/imgs/mazeapp.png" />
					<Card.Content>
						<Card.Header>Maze Traversals</Card.Header>
						<Card.Description>HTML, CSS, Javascript</Card.Description>
					</Card.Content>
				</Card>
			}
		>
			<Modal.Header>Maze Traversals</Modal.Header>
			<Modal.Content image>
				<Image size="medium" src="/imgs/mazeapp.png" />
				<Modal.Description>
					<Header>Visualization Tool for Graph Search Algorithms</Header>
					<p>
						To help students understand breadth first search and depth first search, I made a web app
						visualizing these search algorithms being used to find the optimal path to solve randomly
						generated mazes. Also, made a visualization of the search algorithms on a tree diagram.
					</p>
					<p>Technologies: Javascript, HTML, CSS</p>
				</Modal.Description>
			</Modal.Content>
		</Modal>
	);
};

export default MazeCard;
