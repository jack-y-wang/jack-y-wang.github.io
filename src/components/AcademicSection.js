import React from 'react';
import { Container, Menu, Card, List, Item, GridColumn, Grid } from 'semantic-ui-react';
import TeachingCard from './TeachingCard';
import CourseworkCard from './CourseworkCard';
import UNCFCard from './UNCFCard';
import Card61B from './Card61B';
import Card61A from './Card61A';
import CSMCard from './CSMCard';

const AcademicSection = () => {
	return (
		<Container text style={{ marginTop: '5em' }}>
			<a name="Academics" />
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
			<AcademicMenu />
		</Container>
	);
};

class AcademicMenu extends React.Component {
	state = {
		activeItem: 'overview'
	};

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

	render() {
		const { activeItem } = this.state;
		console.log(activeItem);

		return (
			<div>
				<Menu tabular>
					<Menu.Item name="overview" active={activeItem === 'overview'} onClick={this.handleItemClick} />
					<Menu.Item name="teaching" active={activeItem === 'teaching'} onClick={this.handleItemClick} />
					<Menu.Item
						name="organizations"
						active={activeItem === 'organizations'}
						onClick={this.handleItemClick}
					/>
				</Menu>
				{this.state.activeItem == 'overview' && (
					<Grid stackable columns={2}>
						<Grid.Column>
							<TeachingCard />
						</Grid.Column>
						<Grid.Column>
							<CourseworkCard />
						</Grid.Column>
					</Grid>
				)}
				{this.state.activeItem == 'teaching' && (
					<Grid stackable columns={2}>
						<Grid.Column>
							<TeachingCard />
						</Grid.Column>
						<Grid.Column>
							<Card61B />
							<CSMCard />
							<Card61A />
							<UNCFCard />
						</Grid.Column>
					</Grid>
				)}
				{this.state.activeItem == 'organizations' && (
					<Grid stackable columns={2}>
						<Grid.Column>
							<Card61B />
						</Grid.Column>
						<Grid.Column>
							<CSMCard />
						</Grid.Column>
					</Grid>
				)}
			</div>
		);
	}
}

export default AcademicSection;
