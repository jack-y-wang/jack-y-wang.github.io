import React from 'react';
import { Container, Card, Image, Grid, Modal, Header } from 'semantic-ui-react';

const ExperienceSection = () => {
	return (
		<Container text style={{ marginTop: '5em' }}>
			<a name="Experience" />
			<h1>Experience</h1>
			<Grid stackable columns={2}>
				<Grid.Column>
					<Container>
						<h3>Work Experience</h3>
						<Modal
							trigger={
								<Card fluid>
									<Image src="/imgs/amazon.png" />
									<Card.Content>
										<Card.Header>Amazon, Software Engineer Intern</Card.Header>
									</Card.Content>
								</Card>
							}
						>
							<Modal.Header>Amazon Software Development Engineer Intern</Modal.Header>
							<Modal.Content image>
								<Image size="medium" src="/imgs/amazon.png" />
								<Modal.Description>
									<Header>AWS Elastic Block Store (EBS) Infratructure</Header>
									<p>
										I was an intern on the AWS EBS Fleet team which is responsible for the
										infratructure and provisioin of EBS Servers. I helped the offline capacity of
										EBS Servers by implementing a framework that can be used to automate the
										rebuilding process to instead of requiring manual intervention.
									</p>
									<p>Technologies: Java, Amazon Simple Workflow, AWS</p>
								</Modal.Description>
							</Modal.Content>
						</Modal>
						<Modal
							trigger={
								<Card fluid>
									<Image src="/imgs/uncf.png" />
									<Card.Content>
										<Card.Header>UNCF Instructor</Card.Header>
									</Card.Content>
								</Card>
							}
						>
							<Modal.Header>UNCF: United Negro College Fund</Modal.Header>
							<Modal.Content image>
								<Image size="medium" src="/imgs/uncf.png" />
								<Modal.Description>
									<Header>Data Structures Instructor</Header>
									<p>
										Instructor of a UNCF pilot programmed designed to help students from
										historically black colleges and universities (HBCUs) to get into the software
										engineering industry. I taught 30 students in discussion sections, created
										content for the class (notes, problems, and solutions), and contributed for
										future iterations of the program. Lead sections initiatives aimed to help
										students with less incoming computer science experience in the form of break out
										sessions.
									</p>
									<p>Technologies: python, codio</p>
								</Modal.Description>
							</Modal.Content>
						</Modal>
						<Modal
							trigger={
								<Card fluid>
									<Image src="/imgs/seres.png" />
									<Card.Content>
										<Card.Header>SF Motors, Engineering Intern</Card.Header>
									</Card.Content>
								</Card>
							}
						>
							<Modal.Header>SF Motors</Modal.Header>
							<Modal.Content image>
								<Image size="medium" src="/imgs/seres.png" />
								<Modal.Description>
									<Header>Engineering Intern</Header>
									<p>
										Worked on design validation testing of electric motors by designing
										components/assemblies of dyno motors and drivetrain dynos, documenting with
										engineering drawings, reaching out to vendors to find custom partsolutions, and
										assisted with release of documentation to suppliers.
									</p>
									<p>Technologies: Catia v5</p>
								</Modal.Description>
							</Modal.Content>
						</Modal>
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
