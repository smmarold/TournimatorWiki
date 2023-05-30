import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import pdf2 from '../../images/statusReports/StatusReportWk2.pdf';
import pdf3 from '../../images/statusReports/StatusReportWk3.pdf';
import pdf4 from '../../images/statusReports/StatusReportWk4.pdf';
import pdf5 from '../../images/statusReports/StatusReportWk5.pdf';
import pdf6 from '../../images/statusReports/StatusReportWk6.pdf';
import pdf7 from '../../images/statusReports/StatusReportWk7.pdf';
import pdf8 from '../../images/statusReports/StatusReportWk8.pdf';
import pdf9 from '../../images/statusReports/StatusReportWk9.pdf';
// import pdf10 from '../../images/statusReports/StatusReportWk10.pdf';
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

const statusReports = {
	2: pdf2,
	3: pdf3,
	4: pdf4,
	5: pdf5,
	6: pdf6,
	7: pdf7,
	8: pdf8,
	9: pdf9,
};

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
	'pdfjs-dist/build/pdf.worker.min.js',
	import.meta.url
).toString();

const options = {
	cMapUrl: 'cmaps/',
	standardFontDataUrl: 'standard_fonts/',
};

function StatusReports() {
	const location = useLocation();
	const wk = new URLSearchParams(location.search).get('wk');
	const source = statusReports[wk];

	const [file, setFile] = useState(source);
	const [numPages, setNumPages] = useState(3);

	function onDocumentLoadSuccess({ numPages: nextNumPages }) {
		setNumPages(nextNumPages);
	}

	return (
		<>
			<header>
				<h1>Status Report Week {wk}</h1>
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

export default StatusReports;
