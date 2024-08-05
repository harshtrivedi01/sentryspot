import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function AIResume() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [accuracyPercentage, setAccuracyPercentage] = useState(null);
  const [loading, setLoading] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const [isLoading, setLoading1] = useState(false);
  const [error, setError] = useState(null);

  const [editableResumeName, setEditableResumeName] = useState('Resume1');
  const [note, setNote] = useState('');

  const handleClick = async () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setLoading1(true);
      try {
        const response = await axios.get('YOUR_API_ENDPOINT');
        setData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading1(false);
      }
    }
  };

  const resumeScore = async () => {
    try {
      setLoading(true); // Set loading to true when the API call starts
      const token = localStorage.getItem('token'); // Retrieve the token from local storage
      const requestBody = {
        keyword: "Rate this resume content in percentage ? and checklist of scope improvements in manner of content and informations",
        file_location: "/etc/ai_job_portal/jobseeker/resume_uploads/black-and-white-standard-professional-resume-1719321080.pdf"
      };
  
      const response = await axios.post(
        'https://api.abroadium.com/api/jobseeker/file-based-ai',
        requestBody,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token // Include 'Bearer ' prefix if using Bearer token
          }
        }
      );
  
      // Extract only the content_acuracy_percentage from the response
      const { content_acuracy_percentage } = response.data.data;
      setAccuracyPercentage(content_acuracy_percentage);
    } catch (error) {
      console.error('Error fetching data from API', error);
      // Add user-friendly error handling or notifications here
    } finally {
      setLoading(false); // Set loading to false when the API call completes
    }
  };

  return (
    <>
      <div className='bg-gray-300 w-full px-5'>
        <div className='mt-20'>
          <div className='flex items-center md:gap-10'>
            <h1 className='font-bold text-4xl py-8 text-blue-900'>Resume Builder</h1>
            <Link to='/resumebuilder'>
              <div className='flex justify-center mt-2'>
                <button className='px-3 py-3 font-bold rounded-xl bg-blue-900 text-white'>Build your Resume Now</button>
              </div>
            </Link>
          </div>

          <table className='border-2 border-blue-950 w-full text-blue-950  text-lg'>
            <thead>
              <tr className='border-2 border-blue-950'>
                <th className='border-2 border-blue-950 px-6'>Resume</th>
                <th className='border-2 border-blue-950 px-6'>Score</th>
                <th className='border-2 border-blue-950 px-6'>Improve with AI</th>
                
                <th className='border-2 border-blue-950 px-6'>Created</th>
                <th className='border-2 border-blue-950 px-6'>Actions</th>
                <th className='border-2 border-blue-950 px-6 w-40'>JD Match %</th>
              </tr>
            </thead>
            <tbody >
              <tr className='border-2 border-blue-950'>
                <td className='border-2 border-blue-950 text-center w-4'>
                  <input
                    type='text'
                    value={editableResumeName}
                    onChange={(e) => setEditableResumeName(e.target.value)}
                    className='bg-gray-800 text-white px-2 py-1 rounded-md w-40'
                  />
                </td>
                <td className='border-2 border-blue-950 px-6'>
                  {loading ? (
                    <div className='text-white font-semibold px-3 py-3'>Loading...</div> // Display loading indicator
                  ) : accuracyPercentage !== null ? (
                    <div className='api-data-container'>
                      <p className='text-blue-950 font-semibold px-3 py-3'>AI Score: {accuracyPercentage}</p>
                    </div>
                  ) : (
                    <button
                      type='button'
                      onClick={resumeScore}
                      className='text-white hover:text-violet-950 px-1 py-1 bg-blue-950 rounded-md text-lg font-semibold flex align-middle justify-center  items-center'
                    >
                      Resume Score
                    </button>
                  )}
                </td>
                <td className='border-2 border-blue-950 px-6 text-center'>
                  <div className='relative'>
                    <div
                      className='text-white hover:text-yellow-500 px-2 py-2 m-2 items-center rounded-md text-lg font-bold bg-blue-950 0 cursor-pointer'
                      onClick={handleClick}
                    >
                      AI
                    </div>
                    {isOpen && (
                      <div className='absolute top-full mt-2 w-64 bg-blue-950 shadow-lg rounded-md p-4'>
                        {isLoading ? (
                          <div>Please wait for while...</div>
                        ) : error ? (
                          <div className='text-red-500'>{error}</div>
                        ) : (
                          <ul>
                            {Array.isArray(data) && data.length > 0 ? (
                              data.map((item, index) => (
                                <li key={index} className='py-1'>
                                  {item.name} {/* Adjust according to your data structure */}
                                </li>
                              ))
                            ) : (
                              <div>Please wait for while.....</div>
                            )}
                          </ul>
                        )}
                      </div>
                    )}
                  </div>
                </td>
                
                <td className='border-2 border-blue-950 px-6'>02/07/2024</td>
                <td className='border-2 border-blue-950 px-6'>
                  <i className='fa-solid fa-upload px-1'></i>
                  <i className='fa-solid fa-pen-to-square px-1'></i>
                  <i className='fa-solid fa-trash px-1'></i>
                </td>
                <td className='border-2 border-blue-950 px-6'>
                  <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className='bg-gray-800 text-white px-2 py-1 rounded-md w-full'
                    rows='2'
                  />
                </td>
              </tr>
              


              <tr className='border-2 border-blue-950'>
                <td className='border-2 border-blue-950 px-2'>
                 Resume2
                </td>
                <td className='border-2 border-blue-950 px-6'>
                <button
                      type='button'
                      
                      className='text-white hover:text-violet-950 px-1 py-1 bg-blue-950 rounded-md text-lg font-semibold flex align-middle justify-center  items-center'
                    >
                      Resume Score
                    </button>
                </td>
                <td className='border-2 border-blue-950 px-6 text-center'>
                  <div className='relative'>
                    <div
                      className='text-white hover:text-yellow-500 px-2 py-2 m-2 items-center rounded-md text-lg font-bold bg-blue-950 cursor-pointer'
                      onClick={handleClick}
                    >
                      AI
                    </div>
                    {isOpen && (
                      <div className='absolute top-full mt-2 w-64 bg-blue-950 shadow-lg rounded-md p-4'>
                        {isLoading ? (
                          <div>Please wait for while...</div>
                        ) : error ? (
                          <div className='text-red-500'>{error}</div>
                        ) : (
                          <ul>
                            {Array.isArray(data) && data.length > 0 ? (
                              data.map((item, index) => (
                                <li key={index} className='py-1'>
                                  {item.name} {/* Adjust according to your data structure */}
                                </li>
                              ))
                            ) : (
                              <div>Please wait for while.....</div>
                            )}
                          </ul>
                        )}
                      </div>
                    )}
                  </div>
                </td>
                
                <td className='border-2 border-blue-950 px-6'>02/07/2024</td>
                <td className='border-2 border-blue-950 px-6'>
                  <i className='fa-solid fa-upload px-1'></i>
                  <i className='fa-solid fa-pen-to-square px-1'></i>
                  <i className='fa-solid fa-trash px-1'></i>
                </td>
                <td className='border-2 border-blue-950 px-6'>
                
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default AIResume;
