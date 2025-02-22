/*const fs = require("fs");
const svgHeader = require("../templates/chart-pie/header");
const svgFooter = require("../templates/chart-pie/footer");
const config = require("../config");
const utils = require("../utils/utils");

//declarations
let out = svgHeader.header;
let  colors  = config.colors;

const generateSVGChart = async function (languages) {

	//console.log(languages)

	await setInfo(languages);
  
    //construct all to one template
    out = out + svgFooter.footer;

    await fs.writeFile("./assets/github-languages-pie-chart.svg", out, (err) => {
        if (err) {
        console.error(err);
        }
  });
}


function setInfo(languages){

    let lastStartAngle = 0;

    //shuffle colors
    colors = utils.shuffle(colors);


    for (let i = 0; i < 10 ; i++) {
        //console.log(languages[i]['name']+" : "+languages[i]['percentage']);
        //console.log();
        //console.log(languages[i]['name'] + " - " + colors[i]);

        //calculate percent with 2 digits after comma
        const percent = languages[i] && languages[i].percentage !== undefined 
        ? Math.round(languages[i].percentage * 100 * 3.6) / 100
        : 0; // Use a default value if undefined
    
        const path = utils.generateSectorPath(60, 120, 100, lastStartAngle, percent + lastStartAngle);

        lastStartAngle = lastStartAngle + percent;


        out = out +
        `
        
        <!-- ${languages[i]['name']} -->
        <path class="path_${i + 1}" d="${path}" fill="${colors[i]}" stroke="#fff" stroke-width="2"></path>
        <text class="txt_${i + 1}" x="260" y="${150 + i * 20}" fill="${colors[i]}" stroke="${colors[i]}" stroke-width="1" >${languages[i]['name']}</text>

        `
    }

}

exports.generateSVGChart = generateSVGChart;*/

const fs = require("fs");
const svgHeader = require("../templates/chart-pie/header");
const svgFooter = require("../templates/chart-pie/footer");
const config = require("../config");
const utils = require("../utils/utils");

//declarations
let out = svgHeader.header;
let colors = config.colors;

const generateSVGChart = async function (languages) {
    //console.log(languages)

    await setInfo(languages);
  
    //construct all to one template
    out = out + svgFooter.footer;

    await fs.writeFile("./assets/github-languages-pie-chart.svg", out, (err) => {
        if (err) {
            console.error(err);
        }
    });
}

function setInfo(languages) {
    let lastStartAngle = 0;

    //shuffle colors
    colors = utils.shuffle(colors);

    for (let i = 0; i < 10; i++) {
        if (!languages[i] || typeof languages[i].name === 'undefined' || typeof languages[i].percentage === 'undefined') {
            console.error(`Error: Missing language data at index ${i}`);
            continue; // Skip this iteration if data is missing
        }

        //calculate percent with 2 digits after comma
        const percent = Math.round(languages[i].percentage * 100 * 3.6) / 100;

        const path = utils.generateSectorPath(60, 120, 100, lastStartAngle, percent + lastStartAngle);

        lastStartAngle = lastStartAngle + percent;

        out = out + `
        <!-- ${languages[i].name} -->
        <path class="path_${i + 1}" d="${path}" fill="${colors[i]}" stroke="#fff" stroke-width="2"></path>
        <text class="txt_${i + 1}" x="260" y="${150 + i * 20}" fill="${colors[i]}" stroke="${colors[i]}" stroke-width="1" >${languages[i].name}</text>
        `;
    }
}

exports.generateSVGChart = generateSVGChart;



