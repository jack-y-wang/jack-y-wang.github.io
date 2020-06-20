import React from 'react';
import { Card, Image, Modal, Header } from 'semantic-ui-react';

const SFMotorsCard = () => {
	return (
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
						Worked on design validation testing of electric motors by designing components/assemblies of
						dyno motors and drivetrain dynos, documenting with engineering drawings, reaching out to vendors
						to find custom partsolutions, and assisted with release of documentation to suppliers.
					</p>
					<p>Technologies: Catia v5</p>
				</Modal.Description>
			</Modal.Content>
		</Modal>
	);
};

export default SFMotorsCard;
