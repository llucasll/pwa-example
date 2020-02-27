/*
	Progressive Web App - Simple Example
	Copyright (C) 2020 - Lucas Camilo
	
	This program is free software: you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.
	
	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
	GNU General Public License for more details.
	
	You should have received a copy of the GNU General Public License
	along with this program. If not, see <https://www.gnu.org/licenses/>.
	
	You can find me at:
	- https://github.com/llucasll
	- https://t.me/llucasll
	- llucasll.k@hotmail.com
 */

// Node core libraries

// Third's libraries
const express = require('express');

// My libraries
const {notice, listenPort} = require('./utils');

const configs = require('./config');

notice();

listenPort(
	configs.server.port,
	() => console.log (`Error: probably the port ${configs.server.port} is already in use.`),
	() => {
		const app = express();
		
		app.use(express.static(__dirname + '/static'));
		
		const server = app.listen(configs.server.port);
		console.log(`Express Server initialized with PWA at http://localhost:${server.address().port}`);
	}
);
