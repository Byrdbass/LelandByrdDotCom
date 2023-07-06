// function component() {
//     const elem = document.createElement('div');
//     elem.innerHTML = _.join(['hello', 'webpack'], ' ');
//     return elem;
// }

// document.body.appendChild(component());

const FileSaver = require('file-saver');

const saveResume = () => {
    FileSaver.saveAs("dist/Resume.pdf", "leland-byrd-resume.pdf");
};

document.querySelector('.resumeBtn').addEventListener('click', saveResume);
