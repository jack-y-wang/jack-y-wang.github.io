import React from 'react';
import { Container, Menu, Item, Grid } from 'semantic-ui-react';
import TeachingCard from './academic_cards/TeachingCard';
import CourseworkCard from './academic_cards/CourseworkCard';
import UNCFCard from './academic_cards/UNCFCard';
import Card61B from './academic_cards/Card61B';
import Card61A from './academic_cards/Card61A';
import CSMCard from './academic_cards/CSMCard';
import OrgCard from './academic_cards/OrgCard';
import HKNCard from './academic_cards/HKNCard';
import ExperienceSection from './ExperienceSection';

const AcademicSection = () => {
	return (
		<Container text style={{ marginTop: '5em' }}>
			<h1>About Me</h1>
			<Item.Group>
				<Item>
					<Item.Content>
						<Item.Header>Education</Item.Header>
						<Item.Meta>University of California, Berkeley</Item.Meta>
						<Item.Description>
							B.S. in Electrical Engineering & Computer Science (EECS) // 2017-2021
						</Item.Description>
						<Item.Extra>Awards: Dean's Scholar, Eta Kappa Nu (EECS Honor's Society)</Item.Extra>
					</Item.Content>
				</Item>
			</Item.Group>
			<AcademicMenu />
		</Container>
	);
};

class AcademicMenu extends React.Component {
	state = {
		activeItem: 'experience'
	};

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

	render() {
		const { activeItem } = this.state;
		console.log(activeItem);

		return (
			<div>
				<Menu tabular>
					<Menu.Item name="experience" active={activeItem === 'experience'} onClick={this.handleItemClick} />
					<Menu.Item name="teaching" active={activeItem === 'teaching'} onClick={this.handleItemClick} />
					<Menu.Item
						name="organizations"
						active={activeItem === 'organizations'}
						onClick={this.handleItemClick}
					/>
					<Menu.Item name="coursework" active={activeItem === 'coursework'} onClick={this.handleItemClick} />
				</Menu>

				{this.state.activeItem == 'experience' && <ExperienceSection />}
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
							<OrgCard />
						</Grid.Column>
						<Grid.Column>
							<CSMCard />
							<HKNCard />
						</Grid.Column>
					</Grid>
				)}
				{this.state.activeItem == 'coursework' && (
					<Grid stackable columns={2}>
						<Grid.Column>
							<CourseworkCard />
						</Grid.Column>
						<Grid.Column />
					</Grid>
				)}
			</div>
		);
	}
}

export default AcademicSection;
