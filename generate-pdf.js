const pdf = require('html-pdf');
const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, 'public', 'report.html');
const outputPath = path.join(__dirname, 'public', 'patient_report.pdf');

fs.readFile(htmlPath, 'utf8', (err, html) => {
    if (err) {
        console.error('Error reading HTML file:', err);
        return;
    }

    pdf.create(html, {}).toFile(outputPath, (err, res) => {
        if (err) {
            console.error('Error creating PDF:', err);
        } else {
            console.log('PDF created successfully:', res.filename);
        }
    });
});
