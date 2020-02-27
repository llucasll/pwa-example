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

const clonner = (clonning) => () => clonning.clone();

console.log('Installing new SW...');

const cacheName = 'app';
const urlsToCache = [
	'/',
	'/webAppManifest.json',
	'/noscript.html',
	'/js/runtime.js',
	'/js/index.js',
	'/js/noscript.js',
	'/assets/favicon152.png',
	'/assets/icon512.png',
	'/assets/styles.css',
];

self.addEventListener('install', event => {
	event.waitUntil(
		caches.open(cacheName).then(
			cache => cache.addAll(urlsToCache)
		)
	);
	console.log('Finished new SW installation!');
});

async function provide (req) {
	try {
		const networkResponse = await fetch(req());
		
		// Check if we received a valid response
		if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic')
			throw networkResponse;
		
		const response = clonner(networkResponse);
		
		const cache = await caches.open(cacheName);
		cache.put(req(), response());
		
		return networkResponse;
	}
	catch (e) {
		const cacheResponse = await caches.match(req());
		return cacheResponse ?
				cacheResponse // Cache hit - return response
			:
				e
			;
	}
}

addEventListener('fetch',
	event => {
		const req = clonner(event.request);
		console.log(req());
		event.respondWith(provide(req))
	}
);
