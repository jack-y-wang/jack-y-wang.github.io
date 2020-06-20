import React from 'react';
import { Container, Card, Image, Grid, Modal, Header } from 'semantic-ui-react';
import AmazonCard from './experience_cards/AmazonCard';
import SFMotorsCard from './experience_cards/SFMotorsCard';
import BearMapsCard from './experience_cards/BearMapsCard';
import MazeCard from './experience_cards/MazeCard';

const ExperienceSection = () => {
	return (
		<Container text>
			<a name="Experience" />
			{/* <h1>Experience</h1> */}
			<Grid stackable columns={2}>
				<Grid.Column>
					<Container>
						<h3>Work Experience</h3>
						<AmazonCard />
						<SFMotorsCard />
					</Container>
				</Grid.Column>
				<Grid.Column>
					<Container>
						<h3>Projects</h3>
						<BearMapsCard />
						<MazeCard />
					</Container>
				</Grid.Column>
			</Grid>
		</Container>
	);
};

export default ExperienceSection;
