import React, { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
const Template1 = ({
  data = {},
  boxBgColor,
  font,
  textSize,
  sectionSpacing,
  paragraphSpacing,
  lineSpacing,
  isPreviewScreen,
  isTemplate1Previewing,
  predefinedText = {},
  skillsfromapi
}) => {


  
  // Define classes based on props
  const textSizeClass = textSize === 'small' ? 'text-sm' : textSize === 'medium' ? 'text-base' : 'text-lg';
  const sectionSpacingClass = sectionSpacing === 'small' ? 'space-y-2' : sectionSpacing === 'medium' ? 'space-y-4' : 'space-y-6';
  const paragraphSpacingClass = paragraphSpacing === 'small' ? 'mb-2' : paragraphSpacing === 'medium' ? 'mb-4' : 'mb-6';
  const lineHeightClass = lineSpacing === '1' ? 'leading-tight' : lineSpacing === '1.5' ? 'leading-snug' : 'leading-relaxed';

  // Provide default values for data properties
  const { details = [], experiences = [], educations = [], skills = [], sectionadd = [], summary = [] } = data;

  // Debug logs to trace the data flow
  useEffect(() => {
    console.log("data: ", data);
    console.log("details: ", details);
    console.log("experiences: ", experiences);
    console.log("educations: ", educations);
    console.log("skills: ", skills);
    console.log("sectionadd: ", sectionadd);
    console.log("summary: ", summary);
  }, [data]);

  // State variables to track user input
  const [userDetails, setUserDetails] = useState('');
  const [userExperiences, setUserExperiences] = useState('');
  const [userEducations, setUserEducations] = useState('');
  const [userSkills, setUserSkills] = useState('');
  const [userAdditionalSections, setUserAdditionalSections] = useState('');
  const [userSummary, setUserSummary] = useState('');

  // Generic function to check if all required fields are filled
  const areAllFieldsFilled = (item, fields) => {
    return fields.every(field => item[field] && item[field].trim() !== '');
  };

  // Check if all details are filled
  const allDetailsFilled = details.every(detail =>
    areAllFieldsFilled(detail, ['Profession', 'phoneNumber', 'email', 'link', 'address', 'name'])
  );

  const allDetailsFilled2 = experiences.every(experience =>
    areAllFieldsFilled(experience, ['Company', 'month1', 'role', 'companydescription'])
  );

  const allDetailsFilled3 = educations.every(education =>
    areAllFieldsFilled(education, ['schoolname', 'edmonth1', 'edmonth2', 'coursename'])
  );

  const allDetailsFilled4 = skills.every(skill =>
    areAllFieldsFilled(skill, ['skillname', 'skilldetails'])
  );

  const allDetailsFilled5 = sectionadd.some(section => areAllFieldsFilled(section, ['sectiontitle', 'sectiondescription']));

  const allDetailsFilled6 = summary.some(summar => summar.summarydescription.trim() !== '');

  const truncate = (str, maxLength) => {
    if (!str) return '';
    return str.length > maxLength ? str.substring(0, maxLength) + '...' : str;
  };
  return (
    <div
      className={`border-2  border-gray-300 p-7 ${textSizeClass} ${sectionSpacingClass} ${lineHeightClass}`}
      style={{ fontFamily: font }}
    >
      {/* Red circle indicating all fields are filled */}
      {!isPreviewScreen && !isTemplate1Previewing && (
        <div className="">
          {allDetailsFilled && (
            <div className="w-7 h-7 ps-2.5 mt-1.5 bg-white rounded-2xl absolute top-48 left-1 font-bold">1</div>
          )}
          {allDetailsFilled2 && (
            <div className="w-7 h-8 ps-2.5 pt-0.5  mt-3.5 bg-white rounded-2xl absolute top-56 left-1 font-bold">2</div>
          )}
          {allDetailsFilled3 && (
            <div className="w-7 h-8 ps-2.5 pt-0.5 mt-11  bg-white rounded-2xl absolute top-60 left-1 font-bold">3</div>
          )}
          {allDetailsFilled4 && (
            <div className="w-7 h-7 ps-2.5 mt-2 bg-white rounded-2xl absolute top-80 left-1 font-bold">4</div>
          )}
          {allDetailsFilled5 && (
            <div className="w-7 h-7 ps-2.5 mt-8 bg-white rounded-2xl absolute top-96 left-1 font-bold">6</div>
          )}
          {allDetailsFilled6 && (
            <div className="w-7 h-8 ps-2.5 pt-1 mt-28 bg-white rounded-2xl absolute top-64 left-1 font-bold">5</div>
          )}
        </div>
      )}

      <div>
        {/* User details */}
{details.map((del, index) => (
        <div key={index}>
          <h3 className="text-xs sm:text-sm md:text-2xl lg:text-3xl text-cyan-600 font-bold ms-">
            {truncate(del.name || predefinedText.details.name, 20 )}
          </h3>
          <p className="text-xs sm:text-sm md:text-xl lg:text-lg ms-">
            {truncate(del.Profession || predefinedText.details.profession, 200)}
          </p>
          <ul className="flex text-xs sm:text-xs md:text-xs lg:text-xs m-2 gap-4 font-semibold">
            <li>
              <FaMapMarkerAlt className="inline-block align-text-top mr-1" />
              {truncate(del.address || predefinedText.details.address, 25)}
            </li>
            <li>
              <FaPhoneAlt className="inline-block align-text-top mr-1" />
              {truncate(del.phoneNumber || predefinedText.details.phoneNumber, 15)}
            </li>
            <li>
              <FaEnvelope className="inline-block align-text-top mr-1" />
              {truncate(del.email || predefinedText.details.email, 25)}
            </li>
            <li>
              <FaLinkedin className="inline-block align-text-top mr-1" />
              <a href={del.link || '#'} target="_blank" rel="noopener noreferrer">
                {truncate(del.link || predefinedText.details.link, 15)}
              </a>
            </li>
            <li>
              
              <a href={del.github || '#'} target="_blank" rel="noopener noreferrer">
                {truncate(del.github || predefinedText.details.github, 15)}
              </a>
            </li>
            {/* Add more icons and links as needed */}
          </ul>
        
    {summary.length > 0 ? (
  summary.map((sum, index) => (
    <div key={index}><div className='font-bold'>Summary</div>
      <p
        className={`${paragraphSpacingClass} text-xs sm:text-sm md:text-sm lg:text-sm m-2 w-2/2 break-all`}
        dangerouslySetInnerHTML={{ __html: sum.summarydescription.trim() || predefinedText.summary.summarydescription }}
      />
      <br />
    </div>
  ))
) : (
  <div>
    <p
      className={`${paragraphSpacingClass} text-xs sm:text-sm md:text-sm lg:text-sm m-2 w-2/2 break-all`}
      dangerouslySetInnerHTML={{ __html: predefinedText.summary.summarydescription }}
    />
    <br />
  </div>
)}

          </div>
        ))}



        {/* Rendering work experience */}
        <div>
  <h5 className="text-cyan-600 font-bold">WORK EXPERIENCE</h5>
  {experiences.map((exp, index) => (
    <div key={index}>
      <div className="flex justify-between">
        <h6 className="font-bold break-all">{exp.Company || predefinedText.experiences.company}</h6>
        <p className="text-xs sm:text-sm md:text-sm lg:text-sm">{exp.month1} - {exp.month2}</p>
      </div>
      <div className="flex justify-between">
        <h6 className="text-xs sm:text-sm md:text-sm lg:text-sm">{exp.role ||  predefinedText.experiences.role }</h6>
        <p className="text-xs sm:text-xs md:text-xs lg:text-xs">{exp.companyplace ||  predefinedText.experiences.companyplace}</p>
      </div>
      <ul className={`${exp.companydescription ? 'text-xs sm:text-xs md:text-xs lg:text-xs' : ''} w-full break-all`}>
  {exp.companydescription ? (
    // If company description is provided, split by new lines and render each line as a list item
    exp.companydescription.split(/\r?\n/).map((line, i) => (
      <li
        key={i}
        className={`${line.trim() ? 'before:content-[""] before:mr-1' : ''} text-xs sm:text-xs md:text-xs lg:text-xs m-2 w-full break-all`}
        style={{ marginBottom: '4px' }} // Adjust margin bottom as needed
        dangerouslySetInnerHTML={{ __html: line ? `•${line}` : '' }}
      />
    ))
  ) : (
    // Render a placeholder or message if company description is not provided
    <li className="text-gray-400 italic">No description provided</li>
  )}
</ul>

      <br />
    </div>
  ))}
</div>



        {/* Rendering education */}
        <div className="page-break"></div>
        <div className="flex items-center">
          <h5 className="text-cyan-600 font-bold">EDUCATION</h5>
          <div className="flex-grow border-t border-gray-300 align-super"></div>
        </div>
        {educations.map((edu, index) => (
          <div key={index}>
            <div className="flex justify-between">
              <h6 className="font-bold break-all">{edu.schoolname || predefinedText.educations.schoolname}</h6>
              <p className=' text-xs text-xs sm:text-xs md:text-xs lg:text-xs'>{edu.edmonth1} - {edu.edmonth2}</p>
            </div>
            <div className="flex justify-between  text-xs sm:text-sm md:text-sm lg:text-sm">
              <h6>{edu.schoolplace || predefinedText.educations.schoolplace}</h6>
            </div>
            <p className=' text-xs sm:text-xs md:text-xs lg:text-xs'>{edu.coursename  || predefinedText.educations.coursename}</p>
          </div>
        ))}

        {/* Rendering skills */}
        <div className="page-break"></div>
        <div className="flex items-center mt-5">
          <h5 className="text-cyan-600 font-bold">SKILLS</h5>
          <div className="flex-grow border-t border-gray-300 align-super"></div>
        </div>
        <div className="flex flex-wrap gap-2 text-start text-xs sm:text-xs md:text-xs lg:text-xs">
  {skills.map((skill, index) => (
    <span key={index} className="flex items-center text-xs sm:text-xs md:text-xs lg:text-xs mr-2 mt-2 gap-">
      <p className={`${skill.skillname ? 'before:content-["●"] before:m-2 font' : ''} break-all`}>
        {skill.skillname || predefinedText.skills.skillname}
      </p>
      <p className={`${skill.skilldetails ? 'before:content-["●"] before:m-2' : 'ms-2'} w-auto break-all`}>
        {skill.skilldetails || predefinedText.skills.skilldetails}
      </p>
    </span>
  ))}{skillsfromapi && skillsfromapi.length > 0 && (
    <p className="text-start ">
      {skillsfromapi.map((skill, index) => (
        <span key={index}>
          {skill}
          {index !== skillsfromapi.length - 1 && ' ● '}
        </span>
      ))}
    </p>
  )}
</div>

        

        {/* Rendering additional sections */}
        <div className="page-break"></div>
        {sectionadd.map((section, index) => (
          <div key={index} className="mt-5">
            <div className="page-break"></div>
            <div className="flex items-center">
              <h5 className="text-cyan-600 font-bold">{section.sectiontitle || userAdditionalSections || predefinedText.additionalSections}</h5>
              <div className="flex-grow border-t border-gray-300 align-super"></div>
            </div>
            <span className="font-bold text-xs sm:text-sm w-32">{section.sectionname || userAdditionalSections || predefinedText.additionalSections}</span>
            <h6 className="text-xs sm:text-sm">{section.sectiondescription || userAdditionalSections || predefinedText.additionalSections}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Template1;
