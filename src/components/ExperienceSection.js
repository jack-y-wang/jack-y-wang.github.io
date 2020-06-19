import React from 'react';
import { Container, Card, Image, Grid, Modal, Header } from 'semantic-ui-react';
import AmazonCard from './AmazonCard';
import UNCFCard from './UNCFCard';
import SFMotorsCard from './SFMotorsCard';

const ExperienceSection = () => {
	return (
		<Container text style={{ marginTop: '5em' }}>
			<a name="Experience" />
			<h1>Experience</h1>
			<Grid stackable columns={2}>
				<Grid.Column>
					<Container>
						<h3>Work Experience</h3>
						<AmazonCard />
						<UNCFCard />
						<SFMotorsCard />
					</Container>
				</Grid.Column>
				<Grid.Column>
					<Container>
						<h3>Projects</h3>
						<Card fluid>
							<Image src="/imgs/bearmap-card.png" />
							<Card.Content>
								<Card.Header>Bear Maps</Card.Header>
								<Card.Description>Java, Heroku</Card.Description>
							</Card.Content>
						</Card>
						<Card fluid>
							<Image src="/imgs/mazeapp.png" />
							<Card.Content>
								<Card.Header>Maze Traversals</Card.Header>
								<Card.Description>HTML, CSS, Javascript</Card.Description>
							</Card.Content>
						</Card>
					</Container>
				</Grid.Column>
			</Grid>
		</Container>
	);
};

export default ExperienceSection;
