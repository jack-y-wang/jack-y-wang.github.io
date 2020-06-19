import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PageMenu from './components/PageMenu';
import HeaderIntro from './components/HeaderIntro';
import AcademicSection from './components/AcademicSection';
import ExperienceSection from './components/ExperienceSection';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<div>
		<PageMenu />
		<HeaderIntro />
		<AcademicSection />
		<ExperienceSection />
	</div>,
	document.getElementById('root')
);
