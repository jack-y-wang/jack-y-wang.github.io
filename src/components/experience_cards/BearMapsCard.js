import React from 'react';
import { Card, Image, Modal, Header } from 'semantic-ui-react';

const BearMapsCard = () => {
	return (
		<Modal
			trigger={
				<Card fluid>
					<Image src="/imgs/bearmap-card.png" />
					<Card.Content>
						<Card.Header>Bear Maps</Card.Header>
						<Card.Description>Java, Heroku</Card.Description>
					</Card.Content>
				</Card>
			}
		>
			<Modal.Header>Bear Maps</Modal.Header>
			<Modal.Content image>
				<Image size="medium" src="/imgs/bearmap-card.png" />
				<Modal.Description>
					<Header>A Google Map Clone of Berkeley</Header>
					<p>
						Built the back-end of a google map clone of the city of Berkeley, CA featuring . Implemented
						route mapping, autocomplete locaiton searching, and image rastering in Java. And hosted the web
						application using Heroku.
					</p>
					<p>Technologies: Java, Heroku</p>
				</Modal.Description>
			</Modal.Content>
		</Modal>
	);
};

export default BearMapsCard;
