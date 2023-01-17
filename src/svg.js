const fs = require("fs");

const content = `
<svg 
	viewBox="0 0 650 300"
	height="200px"
	width="600px" 
	xmlns="http://www.w3.org/2000/svg">
	<!-- author: meugenom.com -->
	<style>
		
		.label {
			font: bold 30px sans-serif;
			color: #404040;
			-webkit-text-stroke: 1px white;
	  	}
		.name {
			font: bold 18px sans-serif;
			color: #404040;
	  	}

		.line {
			stroke-dasharray: 1000;
			stroke-dashoffset: 1000;
			animation: dash 3s linear forwards;
		}

		.path {
			stroke-dasharray: 1000;
			stroke-dashoffset: 1000;
			animation: dash 5s linear forwards;
		}
		  
		@keyframes dash {
			to {
				stroke-dashoffset: 0;
			}
		}

	</style>
	<!-- gray rails-->
	<g stroke="#E6E2E1" fill="none" stroke-width="1">
  		<circle cx="20" cy="150" r="125" />
		<circle cx="20" cy="150" r="105" />
		<circle cx="20" cy="150" r="85" />
		<circle cx="20" cy="150" r="65" />
		<circle cx="20" cy="150" r="45" />
  		<circle cx="20" cy="150" r="25" />
	</g>

	<!-- lines -->
	<g fill="none" stroke-width="20" stroke-linecap="round" class="line">
		<line x1="20" y1="275" x2="650" y2="275" stroke="#404040" />
		<line x1="20" y1="255" x2="550" y2="255" stroke="#93648D" />
		<line x1="20" y1="235" x2="450" y2="235" stroke="#4CC3D9" />
		<line x1="20" y1="215" x2="350" y2="215" stroke="#7BC8A4" />
		<line x1="20" y1="195" x2="250" y2="195" stroke="#FFC65D" />
		<line x1="20" y1="175" x2="150" y2="175" stroke="#F16745" />		
	</g>

	<g fill="none" stroke-width="20" stroke-linecap="round" class="path">
		<path d="M 20 275 A 125 125 45 0 1 20 25" stroke="#404040"/>
		<path d="M 20 255 A 105 105 45 0 1 20 45" stroke="#93648D" />
		<path d="M 20 235 A 85 85 45 0 1 20 65" stroke="#4CC3D9" />
		<path d="M 20 215 A 65 65 45 0 1 20 85" stroke="#7BC8A4" />
		<path d="M 20 195 A 45 45 45 0 1 20 105" stroke="#FFC65D" />
		<path d="M 20 175 A 25 25 45 0 1 20 125" stroke="#F16745" />
	</g>
	<g class="name">
		<text x="575" y="260" fill="#404040" >Java</text>
		<text x="475" y="240" fill="#93648D" >JavaScript</text>
		<text x="375" y="220" fill="#4CC3D9" >TypeScript</text>
		<text x="275" y="200" fill="#7BC8A4" >SCSS</text>
		<text x="175" y="180" fill="#FFC65D" >C++</text>
		<text x="75" y="160" fill="#F16745" >Go</text>
	</g>
	<g class="label"> 
	<text x="330" y="50" fill="#A0C0D0" >Most Used Languages</text>
	</g>

</svg>
`;

const generateSVG = async function (languages) {
  fs.writeFile("./assets/chart.svg", content, (err) => {
    if (err) {
      console.error(err);
    }
  });
};

function calculatePath(centerX, centerY, startX, startY, radius, procentLanguage){


}


exports.generateSVG = generateSVG;
