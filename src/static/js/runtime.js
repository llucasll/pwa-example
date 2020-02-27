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

if (typeof global === 'undefined') {
	if (typeof self !== 'undefined')
		self.global = self; // self == window
}
global.log = console.log;

export function createElement (type, content) {
	const elem = document.createElement(type);
	elem.innerHTML = content;
	document.body.appendChild(elem);
	return elem;
}

export function userFeedback(msg) {
	return createElement('p', msg);
}

export function errorFeedback (e) {
	userFeedback('Something bad occurred.<br/>Please try again.')
		.style.backgroundColor = 'darkred';
	if(e) log(e);
}
