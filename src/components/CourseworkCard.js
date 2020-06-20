import React from 'react';
import { Card, Image, Modal, Header, List, Item } from 'semantic-ui-react';

const CourseworkCard = () => {
	return (
		<Card fluid>
			<Card.Content>
				<Item.Group>
					<Item>
						<Item.Content>
							<Item.Header>Coursework</Item.Header>
							<List size="small">
								<List.Item>
									<List.Header>Computer Science</List.Header>
									<List.List>
										<List.Item>Data Structures (CS 61B)</List.Item>
										<List.Item>Artificial Intelligence (CS 188)</List.Item>
										<List.Item>Algorithms (CS 170)</List.Item>
										<List.Item>Machine Learning (CS 189)</List.Item>
										<List.Item>Princples & Techniques of Data Science (Data 100)</List.Item>
										<List.Item>Databases (CS 186)</List.Item>
										<List.Item>Security (CS 161)</List.Item>
										<List.Item>Operating Systems (CS 162)</List.Item>
										<List.Item>Machine Structures (CS 61C)</List.Item>
									</List.List>
								</List.Item>
								<List.Item>
									<List.Header>Electrical Engineering</List.Header>
									<List.List>
										<List.Item> Probabilility and Random Processes (EECS 126)</List.Item>
										<List.Item> Linear Algebra & Information Systems (EE16A/B)</List.Item>
									</List.List>
								</List.Item>
								<List.Item>
									<List.Header>Miscallaneous</List.Header>
									<List.List>
										<List.Item>Societal Impacts of Technology (CS 195)</List.Item>
										<List.Item>Linear Algebra (Math 54)</List.Item>
										<List.Item>Multivariable Calculus (Math 53)</List.Item>
									</List.List>
								</List.Item>
							</List>
						</Item.Content>
					</Item>
				</Item.Group>
			</Card.Content>
		</Card>
	);
};

export default CourseworkCard;
