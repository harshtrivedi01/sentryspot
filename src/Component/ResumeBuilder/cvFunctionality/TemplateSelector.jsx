import React, { useState } from 'react';
import template1 from '../../ResumeBuilder/images/template1.png';
import template2 from './templateimages/template2.png';
import template3 from '../cvFunctionality/templateimages/template6.png';
import template4 from '../cvFunctionality/templateimages/template4.png';
import template5 from '../cvFunctionality/templateimages/template5.png';
import template6 from '../cvFunctionality/templateimages/template3.png';
import template7 from '../cvFunctionality/templateimages/template7.png';
import template8 from '../cvFunctionality/templateimages/template8.png';
import template9 from '../cvFunctionality/templateimages/template9.png';
import template10 from '../cvFunctionality/templateimages/template10.png';

const templates = [
  { id: 'Template1', name: 'Template 1', image: template1 },
  { id: 'Template2', name: 'Template 2', image: template2 },
  { id: 'Template3', name: 'Template 3', image: template3 },
  { id: 'Template4', name: 'Template 4', image: template4 },
  { id: 'Template5', name: 'Template 5', image: template5 },
  { id: 'Template6', name: 'Template 6', image: template6 },
  { id: 'Template7', name: 'Template 7', image: template7 },
  { id: 'Template8', name: 'Template 8', image: template8 },
  { id: 'Template9', name: 'Template 9', image: template9 },
  { id: 'Template10', name: 'Template 10', image: template10 },
];

const TemplateSelector = ({ selectedTemplate, setSelectedTemplate, onImageUpload }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setUploadedImage(file);
    onImageUpload(file); // Call the onImageUpload prop with the uploaded image
  };

  return (
    <div className="">
      <button
        onClick={toggleDropdown}
        className="text-black border-blue-950 border-2 rounded font-bold p-2 w-full"
      >
        Select Templates
      </button>

      {dropdownOpen && (
        <div className="h-60 z-10 bg-white border rounded-lg shadow-lg mt-2 p-4 overflow-auto">
          <div className="grid grid-cols-2 gap-4 overflow-auto">
            {templates.map((template) => (
              <div
                key={template.id}
                className={`border-2 cursor-pointer ${
                  selectedTemplate === template.id ? 'border-blue-950 bg-blue-200' : 'border-gray-300 bg-white'
                }`}
                onClick={() => {
                  setSelectedTemplate(template.id);
                  setDropdownOpen(false); // Close dropdown after selection
                }}
              >
                <img src={template.image} alt={template.name} className="w-full h-36 object-cover rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TemplateSelector;
