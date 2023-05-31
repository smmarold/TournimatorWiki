import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import pdf2 from '../../images/statusReports/StatusReportWk2-1.png';
import pdf3 from '../../images/statusReports/StatusReportWk3-1.png';
import pdf4 from '../../images/statusReports/StatusReportWk4-1.png';
import pdf5 from '../../images/statusReports/StatusReportWk5-1.png';
import pdf6 from '../../images/statusReports/StatusReportWk6-1.png';
import pdf7 from '../../images/statusReports/StatusReportWk7-1.png';
import pdf8 from '../../images/statusReports/StatusReportWk8-1.png';
import pdf9 from '../../images/statusReports/StatusReportWk9-1.png';
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
			<img
				src={file}
				alt='Use case diagram'
				style={{width:"75%"}}
			/>
		</>
	);
}

export default StatusReports;
