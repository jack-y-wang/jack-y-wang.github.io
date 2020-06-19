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
	GridColumn,
	Grid
} from 'semantic-ui-react';

const AcademicSection = () => {
	return (
		<Container text style={{ marginTop: '5em' }}>
			<h1>Academics</h1>
			<Item.Group>
				<Item>
					<Item.Content>
						<Item.Header>Education</Item.Header>
						<Item.Meta>University of California, Berkeley</Item.Meta>
						<Item.Description>B.S. in Electrical Engineering & Computer Science (EECS)</Item.Description>
						<Item.Extra>2017-2021</Item.Extra>
					</Item.Content>
				</Item>
			</Item.Group>
			<Grid stackable columns={2}>
				<Grid.Column>
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
				</Grid.Column>

				<GridColumn>
					<Card fluid>
						<Card.Content>
							<Item.Group>
								<Item>
									<Item.Content>
										<Item.Header>Coursework</Item.Header>
										<List size="small">
											<List.Item>
												<List.Header>Computer Science</List.Header>
												<List.List>
													<List.Item>Data Structures (CS 61B)</List.Item>
													<List.Item>Artificial Intelligence (CS 188)</List.Item>
													<List.Item>Algorithms (CS 170)</List.Item>
													<List.Item>Machine Learning (CS 189)</List.Item>
													<List.Item>
														Princples & Techniques of Data Science (Data 100)
													</List.Item>
													<List.Item>Databases (CS 186)</List.Item>
													<List.Item>Security (CS 161)</List.Item>
													<List.Item>Operating Systems (CS 162)</List.Item>
													<List.Item>Machine Structures (CS 61C)</List.Item>
												</List.List>
											</List.Item>
											<List.Item>
												<List.Header>Electrical Engineering</List.Header>
												<List.List>
													<List.Item>
														{' '}
														Probabilility and Random Processes (EECS 126)
													</List.Item>
													<List.Item>
														{' '}
														Linear Algebra & Information Systems (EE16A/B)
													</List.Item>
												</List.List>
											</List.Item>
											<List.Item>
												<List.Header>Miscallaneous</List.Header>
												<List.List>
													<List.Item>Societal Impacts of Technolog (CS 195)</List.Item>
													<List.Item>Linear Algebra (Math 54)</List.Item>
													<List.Item>Multivariable Calculus (Math 53)</List.Item>
												</List.List>
											</List.Item>
										</List>
									</Item.Content>
								</Item>
							</Item.Group>
						</Card.Content>
					</Card>
				</GridColumn>
			</Grid>
		</Container>
	);
};

export default AcademicSection;
