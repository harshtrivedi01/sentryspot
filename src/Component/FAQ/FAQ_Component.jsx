import React from 'react';
import FAQItem from './FAQ_Item';
import './FAQ.css'

const FAQ = () => {
  const faqs = [
    {
      question: "What is Resume Builder?",
      answer: "A resume builder is an app or software program anyone can use to quickly and easily make resumes, cover letters and CVs. Many sites, including Resume Now, offer a resume builder service to help you through every resume section, offering tips and guidance along the way. Builders automate parts of the resume-writing process using AI to generate text suggestions based on your work experience. For example, someone who worked in retail would type in their previous job title to get dozens of auto-generated work experience bullet points. They could then edit the text to make it more specific and showcase their unique contributions.Additionally, you can use a free resume builder or a premium one. With a premium builder, you’ll have more download options. When you finish your competitive resume in just a few minutes, you can download the resume in any file format you like."
    },
    {
      question: "What's unique about using online resume builder to build my resume?",
      answer: "Learning how to write a resume from scratch isn’t easy. But Resume Now’s resume generator makes resume building pain-free, fast and straightforward so anyone in any industry can build a professional resume in minutes. Plus, with our application tracking feature, you’ll know when the hiring manager looks at your resume. And, you won’t find our HR-approved template designs anywhere else. Finally, our Resume Builder is free to use, so you can get started on your document without adding your card."
    },
    {
      question: "Is this Resume builder Free?",
      answer: "Our Resume Maker is free to use. You can upload your resume, choose a template and fill out every section. But, you will need to sign up for a subscription to get full access, including premium designs, a cover letter builder and unlimited downloads in whichever file format you need."
    },
    {
      question: "Are Your Resume ATS Friendly?",
      answer: "Yes! All of Resume Now’s resume templates are designed to be easy to scan by both humans and applicant tracking systems (ATS). An ATS is software that scans resumes, screens them for critical information — such as specific skills and experience — and eliminates unqualified applicants.In addition to offering ATS-friendly templates, our builder’s prewritten content suggestions help you choose the critical keywords employers look for in top candidates for your specific job title. Available in our Resume Builder, these content suggestions make it quick and easy to build a strong resume. We also offer Microsoft Word and Google Doc resume templates that are ATS-compatible."
    },
    {
      question: "Can I make CV in your Resume maker?",
      answer: "Yes, the resume creator isn’t just for resumes — you can use it to make a CV, too. The builder is very flexible. You can choose a CV design to edit section by section. To create a CV, simply add more sections than a resume. When you add a new section to your document, you can move it around or change the header to common CV sections like:Teaching experience, Research projects, Publications, Presentations, Professional associations. Finally, if you aren’t sure what to include on your CV, see our library of CV examples for inspiration."
    },
    {
      question: "Is this Resume builder Free?",
      answer: "Our Resume Maker is free to use. You can upload your resume, choose a template and fill out every section. But, you will need to sign up for a subscription to get full access, including premium designs, a cover letter builder and unlimited downloads in whichever file format you need."
    },
    {
      question: "Is It okay to use an online resume builder?",
      answer: "Absolutely! Resume generators are a way to get help in your job search. Some people hire a resume writer or ask friends and family for help. Others choose to use a resume builder. Hiring managers and recruiters are aware many job seekers use a builder to help them get started, and their only expectation is that the resume will be customized to reflect the job seeker’s experience."
    },
    {
      question: "Can your Resume creator help me if I am new to the workforce?",
      answer: "Yes! Whether you’re making an entry-level resume or writing a resume with no experience, our Builder is perfect for new grads and job seekers because we provide more than 150 tips on how to work around a lack of experience. We also help you build a resume that will allow you to stand out in a competitive job market so you can get to work fast. We also showcase the functional resume format, which highlights skills rather than work experience. This is the ideal resume format for recent grads and newcomers making a resume for the first time."
    },
    {
      question: "Can I create a CV with this Resume Generator?",
      answer: "If you sign up for full access, you’ll find our Cover Letter Builder in your account dashboard. This is where you can go to create the perfect companion to your resume. We know that a cover letter is an essential part of your job application, so we also offer a library of cover letter examples and several customizable cover letter templates to help you build a captivating letter in no time. Also, check out our formatting advice to make sure you’re following the rules employers have set."
    },
    {
      question: "I can't Finish my Resume rightnow. Will you save my work?",
      answer: "Yes, don’t worry — you can save your resume in progress in our Resume Builder. Simply log back into the site to finish up anytime."
    },
    {
      question: "I have finished my Resume. How can I download, print and email it?",
      answer: "Once you’re 100% satisfied with your resume, simply choose “download” from your Resume Builder dashboard and select the type of file you want to use. In addition to downloading a copy of your resume, you can email or print it directly from your dashboard."
    },
    {
      question: "I have finished my Resume. How can I download, print and email it?",
      answer: "Once you’re 100% satisfied with your resume, simply choose “download” from your Resume Builder dashboard and select the type of file you want to use. In addition to downloading a copy of your resume, you can email or print it directly from your dashboard."
    },
    {
      question: "Do I need a different resume for every Job Application?",
      answer: "Yes! The best way to get your resume through an ATS is to customize it for every role you apply to.Study the job description to understand which skills are critical to that specific role and then update your resume accordingly, focusing on the professional summary or resume objective, the skills section and the bullet points in your work experience section. Customizing your resume doesn’t take long and can help set you apart from the competition, helping you land an interview."
    },
    {
      question: "How many jobs should you put on a resume?",
      answer: "You can add as many previous jobs to your resume as you’d like as long as they’re relevant to the target job and fit in one to two pages. A good rule of thumb is you should only go back about 10-15 years because your earlier experience may be out of date. For most job seekers, that amounts to including somewhere between three and seven jobs, but the exact number will differ depending on the person. By the way, if you’ve held many jobs, you should definitely use a chronological or a combination resume format. They both emphasize work history."
    },
    {
      question: "How long should my Resume be?",
      answer: "A resume should be no longer than two pages. If you’re new to the workforce or have only worked for a few years, the resume length shouldn’t exceed one page. A good rule of thumb is to write one page for every decade of experience you possess and to keep your document focused on the last 20 years of your professional experience. If you need more than two pages, you may want to look into writing a curriculum vitae (CV) instead."
    },
    {
      question: "Do Employers prefer Word or PDF resume?",
      answer: "While some employers accept both file formats, you may find PDF is the preferred type. Why? PDFs are better at retaining formatting. This makes it easier for the employer to open the file without worrying about issues like font style and bullet points.Ultimately, you’ll want to submit whichever file type the employer requests, so read the job listing closely. Either format can be downloaded from our Resume Builder."
    },
    {
      question: "What is a CPRW?",
      answer: "CPRW stands for Certified Professional Resume Writer. The CPRW credential is awarded by the Professional Association of Resume Writers & Career Coaches (PARWCC) to those who have passed a rigorous resume-writing exam. This credential is the global industry standard for professional resume writers and shows that the individual with the credential possesses the highest level of resume-writing knowledge and a commitment to excellence in the field."
    },
    {
      question: "Where can I get support from the Resume NOW Team?",
      answer: "Need help with your resume or cover letter? Have questions about billing or need technical support? Our customer service team is here for you seven days a week. Click here to contact us via telephone, chat or email today!"
    }
  ];

  return (
    <div id='faq' className=' bg-gray-100'>
    <div className=" max-w-4xl mt-2  mx-auto p-4" >
      <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default FAQ;
