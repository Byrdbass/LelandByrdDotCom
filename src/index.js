import { saveAs } from "file-saver";

const saveResume = () => {
    saveAs("dist/Resume.pdf", "leland-byrd-resume.pdf");
};

document.querySelector('.resumeBtn').addEventListener('click', saveResume);
