/*
	Progressive Web App - Simple Example
	Copyright (C) 2020 - Lucas Camilo
	
	This program is free software: you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.
	
	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.
	
	You should have received a copy of the GNU General Public License
	along with this program. If not, see <https://www.gnu.org/licenses/>.
	
	You can find me at:
	- https://github.com/llucasll
	- https://t.me/llucasll
	- llucasll.k@hotmail.com
 */

// Node core libraries
const net = require ('net');

exports.notice = function () {
	console.log(`PWA-SimpleExample Copyright (C) 2020 - Lucas Camilo

This program comes with ABSOLUTELY NO WARRANTY; for details look the COPYING file at the root of this repo.
This is free software, and you are welcome to redistribute it under certain conditions.
`);
};

exports.listenPort = function (port, inUseCallback, notInUseCallback) {
	const server = net.createServer(()=>{});
	server.listen(port, '127.0.0.1');
	server.on('error', e => inUseCallback());
	server.on('listening', e => {
		server.close();
		notInUseCallback();
	});
};