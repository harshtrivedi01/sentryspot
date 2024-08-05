import React, { createContext, useState, useContext } from 'react';

const ResumeContext = createContext();

export const useResume = () => {
  return useContext(ResumeContext);
};

export const ResumeProvider = ({ children }) => {
  const [resumeId, setResumeId] = useState(localStorage.getItem('resumeId') || '');
  const [formData, setFormData] = useState(JSON.parse(localStorage.getItem('formData')) || {});

  const saveResumeId = (id) => {
    setResumeId(id);
    localStorage.setItem('resumeId', id);
  };

  const saveFormData = (data) => {
    setFormData(data);
    localStorage.setItem('formData', JSON.stringify(data));
  };

  return (
    <ResumeContext.Provider value={{ resumeId, saveResumeId, formData, saveFormData }}>
      {children}
    </ResumeContext.Provider>
  );
};
