import React from 'react';
import { Card, Image, Modal, Header } from 'semantic-ui-react';

const HKNCard = () => {
	return (
		<Modal
			trigger={
				<Card fluid>
					<Card.Content>
						<Image floated="right" size="tiny" src="/imgs/hkn.jpg" />
						<Card.Header>HKN - Eta Kappa Nu</Card.Header>
					</Card.Content>
				</Card>
			}
		>
			<Modal.Header>HKN - Eta Kappa Nu</Modal.Header>
			<Modal.Content image>
				<Image size="medium" src="/imgs/hkn.jpg" />
				<Modal.Description>
					<Header>Executive Member - Fall 2020, Spring 2020</Header>
					<p>
						<a href="https://hkn.mu" target="_blank">
							HKN
						</a>{' '}
						is an EECS honors society that focuses on providing services to the student community and
						Berkeley community. Example of services we provide are: review sessions for midterms/finals,
						senior workshops, hackathons for high school students, course planning workshops, and more.
					</p>
					<p>
						I help manage and discuss how our orgnization can help improve the EECS undergraduate experience
						and community. I coordinate with the EECS department to post professor and TA{' '}
						<a href="https://cs88-website.github.io/" target="_blank">
							course survey ratings
						</a>{' '}
						on our website to assist with course hiring and communicate with the national chapter of HKN.
					</p>
				</Modal.Description>
			</Modal.Content>
		</Modal>
	);
};

export default HKNCard;
