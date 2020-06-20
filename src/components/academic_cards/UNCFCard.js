import React from 'react';
import { Card, Image, Modal, Header } from 'semantic-ui-react';

const UNCFCard = () => {
	return (
		<Modal
			trigger={
				<Card fluid>
					<Card.Content>
						<Image floated="right" size="tiny" src="/imgs/uncf.png" />
						<Card.Header>UNCF Data Structures Instructor</Card.Header>
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
						Instructor of a{' '}
						<a href="https://www.cmu.edu/ini/news/2019/cs-academy.html" target="_blank">
							UNCF pilot programmed
						</a>{' '}
						designed to help students from historically black colleges and universities (HBCUs) to get into
						the software engineering industry. I taught 30 students in discussion sections, created content
						for the class (notes, problems, and solutions), and contributed for future iterations of the
						program. Lead sections initiatives aimed to help students with less incoming computer science
						experience in the form of break out sessions.
					</p>
					<p>Technologies: python, codio</p>
				</Modal.Description>
			</Modal.Content>
		</Modal>
	);
};

export default UNCFCard;
