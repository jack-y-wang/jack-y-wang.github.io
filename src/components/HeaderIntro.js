import React from 'react';
import { Container, Image } from 'semantic-ui-react';

const HeaderIntro = () => {
	return (
		<Container text style={{ marginTop: '5em' }}>
			<a name="Home" />
			<Image src="./imgs/title-hi.png" size="medium" spaced="left" />
			<Image src="./imgs/profile.jpg" size="medium" floated="right" circular />
			<p>
				I'm a fourth year student at{' '}
				<a href="https://www.berkeley.edu/" target="_blank">
					UC Berkeley
				</a>{' '}
				studying Electrical Engineering and Computer Science. I'm currently an intern at{' '}
				<a href="https://www.amazon.com/" target="_blank">
					Amazon
				</a>{' '}
				on their fleet team working on AWS EBS infrastructure. On campus I am involved with{' '}
				<a href="https://hkn.mu" target="_blank">
					HKN
				</a>
				, an honors society that provides services to the community such as review session, and{' '}
				<a href="https://csmentors.berkeley.edu/#/" target="_blank">
					Computer Science Mentors
				</a>
				, a compus organization that provides guidance and resources in group tutoring sessions. I have also
				taught on course staff for{' '}
				<a href="https://cs61a.org" target="_blank">
					CS61A
				</a>{' '}
				, Intro to CS, and{' '}
				<a href="http://www-inst.eecs.berkeley.edu/~cs61b/sp20/" target="_blank">
					CS61B
				</a>{' '}
				, data structures.
			</p>
			<p>
				I'm on the lookout for new grad SWE opportunities for spring 2021 graduates. Here is my{' '}
				<a href="/jackwang_resume.pdf">resume</a> and you can reach me at jackywang@berkeley.edu if you want to
				link up!
			</p>
		</Container>
	);
};

export default HeaderIntro;
