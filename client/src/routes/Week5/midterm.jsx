import React, { useState } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import pdf from '../../images/MidtermPresentation.pdf';
import '../styles.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
	'pdfjs-dist/build/pdf.worker.min.js',
	import.meta.url
).toString();

const options = {
	cMapUrl: 'cmaps/',
	standardFontDataUrl: 'standard_fonts/',
};

function Week1() {
	const [file, setFile] = useState(pdf);
	const [numPages, setNumPages] = useState();

	function onFileChange(e) {
		const { files } = e.target;

		if (files && files[0]) {
			setFile(files[0] || null);
		}
	}

	function onDocumentLoadSuccess({ numPages: nextNumPages }) {
		setNumPages(nextNumPages);
	}

	return (
		<>
			<header>
				<h1>Midterm Presentation</h1>
			</header>
			<div className='pdfContainer'>
				<div>
					<Document
						file={file}
						onLoadSuccess={onDocumentLoadSuccess}
						options={options}
					>
						{Array.from(new Array(numPages), (el, index) => (
							<Page
								key={`page_${index + 1}`}
								pageNumber={index + 1}
							/>
						))}
					</Document>
				</div>
			</div>
		</>
	);
}

export default Week1;
