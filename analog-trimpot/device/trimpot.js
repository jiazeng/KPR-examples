//@module
/*
  Copyright 2011-2014 Marvell Semiconductor, Inc.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

// https://www.sparkfun.com/products/9806
// https://www.sparkfun.com/datasheets/Components/General/TSR-3386.pdf

exports.pins = {
	volume: {type: "A2D"}
};

exports.configure = function() {
	this.volume.init();
}

exports.read = function() {
    return this.volume.read();
}

exports.close = function() {
	this.volume.close();
}

exports.metadata = {
	sources: [
		{
			name: "read",
			result: { type: "Number", name: "volume", defaultValue:0.8, min: 0, max: 1, decimalPlaces: 3 }
		},
	]
};
