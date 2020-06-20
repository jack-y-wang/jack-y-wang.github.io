import React from 'react';
import { Card, Image, Modal, Header } from 'semantic-ui-react';

const AmazonCard = () => {
	return (
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
						Intern on the AWS EBS Fleet team which is responsible for the infratructure and provisioning of
						EBS Servers. I helped reduce the offline capacity of EBS Servers by implementing a framework
						that can be used to automate the rebuilding process of servers to instead of requiring manual
						intervention.
					</p>
					<p>Technologies: Java, Amazon Simple Workflow, AWS</p>
				</Modal.Description>
			</Modal.Content>
		</Modal>
	);
};

export default AmazonCard;
