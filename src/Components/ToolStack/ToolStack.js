import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Tooltip from '@mui/material/Tooltip';
import { DiGit } from 'react-icons/di';
import {
	SiLinux,
	SiAndroidstudio,
	SiPostman,
	SiAmazonaws,
	SiFirebase,
	SiGoogleoptimize,
	SiGitlab,
	SiJira,
	SiTestinglibrary,
} from 'react-icons/si';

import { BsFlower1 } from 'react-icons/bs';
import { FaSolarPanel } from 'react-icons/fa';

function ToolStack() {
	return (
		<Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
			<Col xs={4} md={2} className='tech-icons'>
				<Tooltip title='Android Studio' placement='top' arrow>
					<span>
						<SiAndroidstudio />
					</span>
				</Tooltip>
			</Col>

			<Col xs={4} md={2} className='tech-icons'>
				<Tooltip title='Firebase Server' placement='top' arrow>
					<span>
						<SiFirebase />
					</span>
				</Tooltip>
			</Col>

			<Col xs={4} md={2} className='tech-icons'>
				<Tooltip title='Postman' placement='top' arrow>
					<span>
						<SiPostman />
					</span>
				</Tooltip>
			</Col>

			<Col xs={4} md={2} className='tech-icons'>
				<Tooltip title='PenTesting' placement='top' arrow>
					<span>
						<SiTestinglibrary />
					</span>
				</Tooltip>
			</Col>

			<Col xs={4} md={2} className='tech-icons'>
				<Tooltip title='Linux' placement='top' arrow>
					<span>
						<SiLinux />
					</span>
				</Tooltip>
			</Col>

			<Col xs={4} md={2} className='tech-icons'>
				<Tooltip title='AWS' placement='top' arrow>
					<span>
						<SiAmazonaws />
					</span>
				</Tooltip>
			</Col>

			<Col xs={4} md={2} className='tech-icons'>
				<Tooltip title='FernFlower' placement='top' arrow>
					<span>
						<BsFlower1 />
					</span>
				</Tooltip>
			</Col>

			<Col xs={4} md={2} className='tech-icons'>
				<Tooltip title='Git' placement='top' arrow>
					<span>
						<DiGit />
					</span>
				</Tooltip>
			</Col>

			<Col xs={4} md={2} className='tech-icons'>
				<Tooltip title='GitLab' placement='top' arrow>
					<span>
						<SiGitlab />
					</span>
				</Tooltip>
			</Col>

			<Col xs={4} md={2} className='tech-icons'>
				<Tooltip title='Jira' placement='top' arrow>
					<span>
						<SiJira />
					</span>
				</Tooltip>
			</Col>

			<Col xs={4} md={2} className='tech-icons'>
				<Tooltip title='Optimized' placement='top' arrow>
					<span>
						<SiGoogleoptimize />
					</span>
				</Tooltip>
			</Col>

			<Col xs={4} md={2} className='tech-icons'>
				<Tooltip title='Mix Panel' placement='top' arrow>
					<span>
						<FaSolarPanel />
					</span>
				</Tooltip>
			</Col>
		</Row>
	);
}

export default ToolStack;
