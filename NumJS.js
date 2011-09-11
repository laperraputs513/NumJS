/*
 *  NumJS -- a JavaScript library for numerical computing
 *
 *  Copyright (C) 2011  Clifford Wolf <clifford@clifford.at>
 *
 *  This program is free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 2 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program; if not, write to the Free Software
 *  Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA
 *
 */

"use strict";

var NumJS = new Object();

NumJS.modules = [
	"GenOps",
	"Parser",
	"Cmplx",
	"Matrix",
	"MatRREF",
	"MatLU",
];

NumJS.loader_html = function(prefix)
{
	var idx = 0;

	function loadHead() {
		if (idx >= NumJS.modules.length) {
			if (console)
				console.log("NumJS initialized.");
			return;
		}
		var src = prefix + 'NumJS.' + NumJS.modules[idx++] + '.js';
		var element = document.createElement('script');
		if (console)
			console.log("NumJS loading `" + src + "'.");
		element.setAttribute('src', src);
		element.addEventListener('load', loadHead, false);
		document.body.appendChild(element);
	}

	// load one script file after another
	// (use script generated by "export.sh" for fast loading)
	loadHead();
};

