import React from 'react';
import { Card, Image, Modal, Header, List, Item } from 'semantic-ui-react';

const SFMotorsCard = () => {
	return (
		<Card fluid>
			<Card.Content>
				<Item.Group>
					<Item>
						<Item.Content>
							<Item.Header>Teaching</Item.Header>
							<List size="small">
								<List.Item>
									<List.Header>Fall 2020</List.Header>
									<List items={[ 'CS61B Tutor (8hr)', 'CSM88 Senior Mentor' ]} />
								</List.Item>
								<List.Item>
									<List.Header>Spring 2020</List.Header>
									<List items={[ 'CS61B Tutor (8hr)', 'CSM88 Senior Mentor' ]} />
								</List.Item>
								<List.Item>
									<List.Header>Fall 2019</List.Header>
									<List items={[ 'CS61A Tutor (8hr)', 'CSM88 Junior Mentor' ]} />
								</List.Item>
								<List.Item>
									<List.Header>Summer 2019</List.Header>
									<List items={[ 'UNCF Data Structures Teaching Assistant' ]} />
								</List.Item>
								<List.Item>
									<List.Header>Spring 2019</List.Header>
									<List items={[ 'CS61A Lab Assistant' ]} />
								</List.Item>
							</List>
						</Item.Content>
					</Item>

					<Item>
						<Item.Content>
							<Item.Header>Awards</Item.Header>
							<List size="small">
								<List.Item>Dean's Scholar</List.Item>
								<List.Item>Eta Kappa Nu (HKN) - EECS Honors Society</List.Item>
							</List>
						</Item.Content>
					</Item>
				</Item.Group>
			</Card.Content>
		</Card>
	);
};

export default SFMotorsCard;
