import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Tooltip from '@mui/material/Tooltip';

import { DiJava } from 'react-icons/di';
import {
	SiFlutter,
	SiKotlin,
	SiPython,
	SiFirebase,
	SiMysql,
	SiWechat,
} from 'react-icons/si';

import { IoMdAppstore } from 'react-icons/io';
import { RiLiveFill } from 'react-icons/ri';
import {BsFillPersonLinesFill} from 'react-icons/bs';

function Techstack() {
	return (
		<Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
			<Col xs={4} md={2} className='tech-icons'>
				<Tooltip title='Java' placement='top' arrow>
					<span>
						<DiJava />
					</span>
				</Tooltip>
			</Col>

			<Col xs={4} md={2} className='tech-icons'>
				<Tooltip title='Kotlin' placement='top' arrow>
					<span>
						<SiKotlin />
					</span>
				</Tooltip>
			</Col>

			<Col xs={4} md={2} className='tech-icons'>
				<Tooltip title='Python' placement='top' arrow>
					<span>
						<SiPython />
					</span>
				</Tooltip>
			</Col>

			<Col xs={4} md={2} className='tech-icons'>
				<Tooltip title='Firebase' placement='top' arrow>
					<span>
						<SiFirebase />
					</span>
				</Tooltip>
			</Col>

			<Col xs={4} md={2} className='tech-icons'>
				<Tooltip title='MySql' placement='top' arrow>
					<span>
						<SiMysql />
					</span>
				</Tooltip>
			</Col>

			<Col xs={4} md={2} className='tech-icons'>
				<Tooltip title='Flutter' placement='top' arrow>
					<span>
						<SiFlutter />
					</span>
				</Tooltip>
			</Col>

			<Col xs={4} md={2} className='tech-icons'>
				<Tooltip title='Play Store' placement='top' arrow>
					<span>
						<IoMdAppstore />
					</span>
				</Tooltip>
			</Col>

			<Col xs={4} md={2} className='tech-icons'>
				<Tooltip title='Live Streaming' placement='top' arrow>
					<span>
						<RiLiveFill />
					</span>
				</Tooltip>
			</Col>

			<Col xs={4} md={2} className='tech-icons'>
				<Tooltip title='Chat App' placement='top' arrow>
					<span>
						<SiWechat />
					</span>
				</Tooltip>
			</Col>

			<Col xs={4} md={2} className='tech-icons'>
				<Tooltip title='Booking App' placement='top' arrow>
					<span>
						<BsFillPersonLinesFill />
					</span>
				</Tooltip>
			</Col>
		</Row>
	);
}

export default Techstack;
