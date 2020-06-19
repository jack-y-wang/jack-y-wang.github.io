import React from 'react';
import {
	Container,
	Card,
	CardDescription,
	Feed,
	FeedContent,
	List,
	Item,
	Icon,
	CardContent,
	Image,
	Grid
} from 'semantic-ui-react';

const ExperienceSection = () => {
	return (
		<Container text style={{ marginTop: '5em' }}>
			<h1>Experience</h1>
			<Grid columns={2}>
				<Grid.Column>
					<Container>
						<h3>Work Experience</h3>
						<Card fluid>
							<Image src="/imgs/amazon.png" />
							<Card.Content>
								<Card.Header>Amazon, Software Engineer Intern</Card.Header>
							</Card.Content>
						</Card>
						<Card fluid>
							<Image src="/imgs/uncf.png" />
							<Card.Content>
								<Card.Header>UNCF, Instructor</Card.Header>
							</Card.Content>
						</Card>
						<Card fluid>
							<Image src="/imgs/seres.png" />
							<Card.Content>
								<Card.Header>SF Motors, Engineering Intern</Card.Header>
							</Card.Content>
						</Card>
						<Card fluid>
							<Image src="/imgs/karlstorz.png" />
							<Card.Content>
								<Card.Header>Karl Storz Img., Engineering Intern</Card.Header>
							</Card.Content>
						</Card>
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
