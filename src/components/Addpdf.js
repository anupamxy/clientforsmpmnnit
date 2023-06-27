import React, { useState } from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { Worker } from '@react-pdf-viewer/core';
import './Addpdf.css';

const Addpdf = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfFileError, setPdfFileError] = useState('');
  const [viewPdf, setViewPdf] = useState(null);
  const fileType = ['application/pdf'];
  
  const handlePdfFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && fileType.includes(selectedFile.type)) {
        const reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = (e) => {
          setPdfFile(e.target.result);
          setPdfFileError('');
        };
      } else {
        setPdfFile(null);
        setPdfFileError('Please select a valid PDF file.');
      }
    } else {
      console.log('Select your file');
    }
  };

  const handlePdfFileSubmit = (e) => {
    e.preventDefault();
    if (pdfFile !== null) {
      setViewPdf(pdfFile);
    } else {
      setViewPdf(null);
    }
  };

  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className='container'>
      <br />
      <form className='form-group' onSubmit={handlePdfFileSubmit}>
        <input
          type='file'
          className='form-control'
          required
          onChange={handlePdfFileChange}
        />
        {pdfFileError && <div className='error-msg'>{pdfFileError}</div>}
        <br />
        <button type='submit' className='btn btn-success btn-lg'>
          UPLOAD
        </button>
      </form>
      <br />
      <h4>View PDF</h4>
      <div className='pdf-container'>
        {viewPdf && (
          <Worker workerUrl='https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js'>
            <Viewer fileUrl={viewPdf} plugins={[defaultLayoutPluginInstance]} />
          </Worker>
        )}
        {!viewPdf && <>No PDF file selected</>}
      </div>
    </div>
  );
};

export default Addpdf;
