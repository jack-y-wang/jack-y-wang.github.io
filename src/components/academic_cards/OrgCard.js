import React from 'react';
import { Card, Image, Modal, Header, List, Item } from 'semantic-ui-react';

const OrgCard = () => {
	return (
		<Card fluid>
			<Card.Content>
				<Item.Group>
					<Item>
						<Item.Content>
							<Item.Header>Organizations</Item.Header>
							<List size="small">
								<List.Item>Eta Kappa Nu (HKN) </List.Item>
								<List.Item>Computer Science Mentors</List.Item>
							</List>
						</Item.Content>
					</Item>
				</Item.Group>
			</Card.Content>
		</Card>
	);
};

export default OrgCard;
