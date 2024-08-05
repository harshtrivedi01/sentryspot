import React from 'react';
import Job_Search_Detail from './Job_Search_Detail';

function Course(props) {
  const course =[
    
    {
        img:"https://blog.sentryspot.co.uk/wp-content/uploads/2024/08/Top-administrative-skills-4.jpg",title:"10 must have administrative skills for professionals",link:"https://blog.sentryspot.co.uk/2024/08/01/10-must-have-administrative-skills-for-professionals/"
    },
    { img:"https://blog.sentryspot.co.uk/wp-content/uploads/2024/08/Top-administrative-skills-5.jpg",title:"Top teamwork skills to showcase in job",link:"https://blog.sentryspot.co.uk/2024/08/01/top-teamwork-skills-to-showcase-in-job/"},
    { img:"https://blog.sentryspot.co.uk/wp-content/uploads/2024/07/Top-administrative-skills-6.jpg",title:"Topmost skills for resumes for 2024",link:"https://blog.abroadium.com/the-algorithms-behind-the-buzz-of-ai-resume/"},
    { img:"https://blog.sentryspot.co.uk/wp-content/uploads/2024/07/Top-administrative-skills1.jpg",title:"What should a resume look like? Design for success?",link:"https://blog.sentryspot.co.uk/2024/07/30/62/"},
    { img:"https://blog.sentryspot.co.uk/wp-content/uploads/2024/07/Top-administrative-skills2-7.jpg",title:"Why are resumes important to be built from experts?",link:"https://blog.sentryspot.co.uk/2024/07/30/why-are-resumes-important-to-be-built-from-experts/"},
    { img:"https://blog.sentryspot.co.uk/wp-content/uploads/2024/07/Top-administrative-skills2.jpg",title:"Characteristics of a good resume suitable for ATS",link:"https://blog.sentryspot.co.uk/2024/06/19/science-behind-ai-resume-scoring/"},
    { img:"https://blog.sentryspot.co.uk/wp-content/uploads/2024/06/Top-administrative-skills2-1.jpg",title:"Science Behind AI Resume Scoring",link:"https://blog.sentryspot.co.uk/2024/06/19/science-behind-ai-resume-scoring/"},
    { img:"https://blog.sentryspot.co.uk/wp-content/uploads/2024/06/Top-administrative-skills2-2.jpg",title:"10 Features of Our AI Resume Builder",link:"https://blog.sentryspot.co.uk/2024/06/19/10-features-of-our-ai-resume-builder/"},
   
    
  ];
  return (
    <>
      <Job_Search_Detail course={course} id='course' />
    </>
  )
}

export default Course
