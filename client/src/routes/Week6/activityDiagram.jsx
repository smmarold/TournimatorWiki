import React, { useState, useEffect } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import pdf from '../../images/Proposal.pdf';
import '../styles.css';
import { PDFDocumentProxy } from 'pdfjs-dist';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
	'pdfjs-dist/build/pdf.worker.min.js',
	import.meta.url
).toString();

const options = {
	cMapUrl: 'cmaps/',
	standardFontDataUrl: 'standard_fonts/',
};

function ActivityDiagram({ title, filepath }) {
	const [file, setFile] = useState(filepath);
	const [numPages, setNumPages] = useState(1);

	function onDocumentLoadSuccess({ numPages: nextNumPages }) {
		setNumPages(nextNumPages);
	}

	useEffect(() => {
		setFile(filepath);
	}, [filepath]);

	return (
		<>
			<header>
				<h1>{title}</h1>
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

export default ActivityDiagram;
