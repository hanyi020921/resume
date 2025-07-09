import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ExperienceItem = ({ logo, name, title, extra, gpa, time, details = [] }) => {
  return (
    <div className="flex items-start gap-4 mb-6">
      <img
        src={logo}
        alt={`${name} Logo`}
        className="w-20 h-20 object-contain mt-1"
      />
      <div className="text-sm leading-snug">
        <div className="text-base font-semibold">{name}</div>
        <div className="text-gray-700">{title}</div>
        {extra && <div className="text-gray-600">{extra}</div>}
        {gpa && <div className="text-gray-600">{gpa}</div>}
        <div className="text-gray-500">{time}</div>

        {details.length > 0 && (
          <ul className="list-disc ml-5 mt-1 text-gray-700 space-y-1">
            {details.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};


export default function ResumeEN() {
  const [showEdu, setShowEdu] = useState(false);
  const [showIntern, setShowIntern] = useState(false);
  const [showProject, setShowProject] = useState(false);
  const [showStudent, setShowStudent] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showHobbies, setShowHobbies] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-xl rounded-lg border border-gray-300 max-w-3xl mx-auto p-6">
      <div className="flex flex-col items-center mb-4">
        <h1 className="text-3xl font-bold text-center">Yi Han｜Portfolio</h1>
        <button
          className="text-sm text-blue-600 hover:underline mt-2"
          onClick={() => navigate("/cn")}
        >
         切换为中文简历
        </button>
        <p className="text-gray-400 text-sm mt-1">Tap title to expend</p>
      </div>

      {/* Education */}
      <h2
        className="text-xl font-semibold flex items-center mb-2 cursor-pointer"
        onClick={() => setShowEdu(!showEdu)}
      >
        <span role="img" aria-label="education" className="mr-2">🎓</span> Education
        <span className={`ml-2 transform transition-transform ${showEdu ? "rotate-90" : "rotate-0"}`}>▶</span>
      </h2>
      {showEdu && (
        <>
          <ExperienceItem
            logo="/ucla.png"
            name="University of Clifornia, Los Angeles（UCLA）"
            title="Samueli School of Engineering"
            extra="Master of Engineering in Data Science"
            gpa="GPA：3.77/4.0"
            time="2024.09 - 2025.12"
          />
          <ExperienceItem
            logo="/zuel.png"
            name="Zhongnan University of Economics and Law"
            title="School of Information and Engineering"
            details={[
              "Bachelor’s Degree of Management in Big Data Management and Application",
              "Bachelor’s Degree of Economics in Financial Engineering"
            ]}
            gpa="GPA：88.7%"
            time="2020.09 - 2024.06"
          />
          <ExperienceItem
            logo="/lse.png"
            name="The London School of Economics and Political Science"
            title="Summer Session"
            extra="Business Analysis and Valuation"
            gpa="Level-A"
            time="2023.07"
          />
        </>
      )}

      {/* Internship */}
      <h2
        className="text-xl font-semibold flex items-center mt-6 mb-2 cursor-pointer"
        onClick={() => setShowIntern(!showIntern)}
      >
        <span role="img" aria-label="intern" className="mr-2">💼</span> Internship
        <span className={`ml-2 transform transition-transform ${showIntern ? "rotate-90" : "rotate-0"}`}>▶</span>
      </h2>
      {showIntern && (
        <>
          <ExperienceItem
            logo="/jnj.png"
            name="Johnson & Johnson"
            title="Medtech - CSS Division"
            extra="Data Analysis Assistant"
            gpa="San Jose, U.S."
            time="Jul 2025 – present"
            details={[
              "Collaborated with Johnson & Johnson’s Cardiovascular & Specialty Solutions (CSS) MedTech division to enhance proactive reliability in manufacturing technology systems",
              "Supported for data analysis on MES and labeling system logs to identify failure patterns and process inefficiencies",
              "Assisted to build predictive model in Python to forecast downtime and optimize maintenance schedule",
              "Built performance dashboards to track improvements in operational reliability, presented recommendations to J&J team with measurable KPIs for tracking manufacturing performance"
            ]}
          />
          <ExperienceItem
            logo="/lenovo.png"
            name="Lenovo"
            title="ISG Team"
            extra="Financial Data Analysis Intern"
            gpa="Beijing"
            time="Dec 2023 – May 2024"
            details={[
              "Processed raw financial data, including data acquisition, definition, cleansing, and rule setting; Supported the ISG team in financial planning, reporting, measurement and management",
              "Improved a comprehensive long-term financial model for a new product, integrating historical data and other information, identifying trends and opportunities, supporting strategy making",
              "Developed both static and dynamic visualizations to support strategic planning and product pricing"
            ]}
          />
          <ExperienceItem
            logo="/deloitte.png"
            name="Deloitte"
            title="Deloitte IBond - Risk Advisory"
            extra="Data Analysis Intern"
            gpa="Shenzhen"
            time="Oct 2023 – Dec 2023"
            details={[
              "Conducted quantitative research and developed models like VaR to optimize decision-making in credit and investment risk management",
              "Performed data analysis and model validation by Python, SQL, R to devise risk mitigation strategies",
              "Participated in establishing risk assessment models, presented team insights for clients, supported the formation of internal risk control strategies"
            ]}
          />
          <ExperienceItem
            logo="/hicend.png"
            name="Hicend"
            title="Asset Management Team"
            extra="Market Investment Intern"
            gpa="Shanghai"
            time="Dec 2022 – Jul 2023"
            details={[
              "Assisted the department in timing, factor mining and strategy back test of major assets",
              "Completed data maintenance of the assets of FOF, assisted in weekly asset comparative analysis",
              "Participated in the due diligence work and roadshows, complete the due diligence report"
            ]}
          />
          <ExperienceItem
            logo="/ey.png"
            name="EY"
            title="Advisory"
            extra="Data Analysis Intern"
            gpa="Ningbo"
            time="Nov 2022 – Dec 2022"
            details={[
              "Collected and integrated customer industry information, participated in data collection",
              "Conducted data cleaning and visualization of the internal and external survey data",
              "Reported to clients weekly based on different KORs, clearly presented the logic, methods, and analysis results of data processing to synchronize updates with other colleagues"
            ]}
          />
          <ExperienceItem
            logo="/bytedance.png"
            name="ByteDance"
            title="Global Payment Team"
            extra="Fund Data Analysis Intern"
            gpa="Beijing"
            time="Jan 2022 – Jul 2022"
            details={[
              "Participated in monthly bill settlement code template using MySQL, improved the automation of transaction data monthly settlement, supported the strategy and decision-making of TikTok",
              "Analyzed global payment data and designed detection rules to identify potential risks; communicated key insights across business lines",
              "Performed the configuration and maintenance of transaction database"
            ]}
          />
          <ExperienceItem
            logo="/chipone.png"
            name="Chipone"
            title="Finance Team"
            extra="Data Analysis Intern"
            gpa="Beijing"
            time="Jul 2021 – Aug 2021"
            details={[
              "Developed programs in C++ to batch process customs declarations and other repetitive data, improving cross-departmental reconciliation efficiency",
              "Participated in testing the newly launched SAP Accounts Payable module; documented and reported test results promptly, and communicated requirements with the tech team on behalf of the department",
              "Assisted with public company audits by verifying third-party confirmation letters from subsidiaries and analyzing discrepancies between vendor records and internal accounting systems",
              "Conducted on-site research at the Shenzhen branch and warehouse logistics operations; participated in defective inventory counts and proposed internal control improvements to address process loopholes"
            ]}
          />
        </>
      )}

      {/* Project Experience */}
      <h2 className="text-xl font-semibold flex items-center mt-6 mb-2 cursor-pointer" onClick={() => setShowProject(!showProject)}>
        <span role="img" aria-label="project" className="mr-2">📌</span> Project
        <span className={`ml-2 transform transition-transform ${showProject ? "rotate-90" : "rotate-0"}`}>▶</span>
      </h2>
      {showProject && (
        <> 
          <ExperienceItem
            logo="/cicc.png"
            name="China International Capital"
            title="Quantitative Research Team"
            extra="Project PTA"
            gpa="Remote"
            time="Jul 2023 - Oct 2023"
            details={[
              "Performed data preparation using SQL and data cleaning via Python to facilitate coding analysis, to identify quantitative stock selection factors of A-share stock market",
              "Participated in developing timing radar charts, synthesizing multiple indicators under six dimensions including liquidity, macroeconomics, market valuation, capital flows, technical indicators, and market sentiment, to propose timing strategies for the equity market",
              "Supported in development of quantitative investment strategies (statistical arbitrage and stock trading)",
              "Conducted data maintenance for trading system data; reproduced papers in quantitative trading"
            ]}
          />     
          <ExperienceItem
            logo="/mcm.png"
            name="Mathematical Contest in Modeling (MCM) 2023"
            title="Finalist（top 0.5%-3%）"
            extra="Captain"
            gpa=""
            time="Feb 2023 - May 2023"
            details={[
              "Led the team as captain, was responsible for the model design and algorithm selection",
              "Led model training and validation, and completed all visual elements in the submission"
            ]}
          /> 
          <ExperienceItem
            logo="/js.png"
            name="The 15th National College Student Computer Design Competition"
            title="Second Price（top 15%）"
            extra="Captain"
            gpa=""
            time="May 2022"
            details={[
              "Cleaned and analyzed data provided by the China Carbon Accounting Database, and developed the dual-carbon BI platform; created an original enterprise carbon trading coordination platform",
              "Collaborated on web development for the platform, completed mobile adaptation for the project",
              "Link：www.bi-carbon.com.cn"
            ]}
          /> 
          <ExperienceItem
            logo="/zuel.png"
            name="The 31th 'Bowen Cup' 100 Empirical Innovation Fund Projects"
            title="Third Price"
            extra="Team Member"
            gpa=""
            time="Nov 2020 - Dec 2020"
            details={[
              "Conducted research on the urban business environment in the post-epidemic era; Analyzed the impact of public health emergencies on urban business situations with the team members",
              "Used Python to collect financial information such as receivables collection period of state-owned holding enterprises and private enterprises in Hubei Province required by the subject over the years; conducted cooperative analysis of the crawled data, and utilized a variety of models for data modeling"
            ]}
          /> 
        </>
      )}

      <h2 className="text-xl font-semibold flex items-center mt-6 mb-2 cursor-pointer" onClick={() => setShowStudent(!showStudent)}>
        <span role="img" aria-label="student" className="mr-2">🏫</span> Extracurricular Experience
        <span className={`ml-2 transform transition-transform ${showStudent ? "rotate-90" : "rotate-0"}`}>▶</span>
      </h2>
      {showStudent && (
        <>
          <ExperienceItem
            logo="/hwfc.png"
            name="ZUEL-Huawei Finance Club"
            title="Executive Committee Member"
            extra=""
            gpa=""
            time="2021年4月 - 2023年7月"
            details={[
              "Organized and hosted the 2021 Huawei Financial Elite Challenge; responsible for preliminary round promotion and coordinating club member assignments.",
              "Led the organization of Huawei’s campus recruitment events including info sessions and roundtable discussions; handled promotion, staffing, and on-site logistics."
            ]}
          /> 
        </>
      )}

      <h2 className="text-xl font-semibold flex items-center mt-6 mb-2 cursor-pointer" onClick={() => setShowSkills(!showSkills)}>
        <span role="img" aria-label="skills" className="mr-2">🧠</span> Skills
        <span className={`ml-2 transform transition-transform ${showSkills ? "rotate-90" : "rotate-0"}`}>▶</span>
      </h2>
      {showSkills && (
        <>
          <ExperienceItem
            logo="/coding.png"
            name="Coding"
            details={[
              "SQL, Python, R, C++, Java",
              "Tableau, SPSS，Excel, E-charts"
            ]}
          /> 
          <ExperienceItem
            logo="/language.png"
            name="Language"
            details={[
              "Chinese：Native",
              "English：IELTS 7.5，GRE 331，CET-6",
              "French：Basic"
            ]}
          /> 
          <ExperienceItem
            logo="/certificate.png"
            name="Professional Certifcate"
            details={[
              "ACCA（9/13）"
            ]}
          /> 
        </>
      )}

      <h2 className="text-xl font-semibold flex items-center mt-6 mb-2 cursor-pointer" onClick={() => setShowHobbies(!showHobbies)}>
        <span role="img" aria-label="hobby" className="mr-2">🎨</span> Hobby
        <span className={`ml-2 transform transition-transform ${showHobbies ? "rotate-90" : "rotate-0"}`}>▶</span>
      </h2>
      {showHobbies && (
        <>
          <ExperienceItem
            logo="/trip.png"
            name="Trips"
            details={[
              <div key="hobby-photos" className="grid grid-cols-3 gap-4 mt-2">
                <img src="/hobby1.png" alt="hobby1" className="w-48 h-48 object-cover rounded-xl shadow-md" />
                <img src="/hobby2.png" alt="hobby2" className="w-48 h-48 object-cover rounded-xl shadow-md" />
                <img src="/hobby3.png" alt="hobby3" className="w-48 h-48 object-cover rounded-xl shadow-md" />
              </div>
            ]}
          /> 
          <ExperienceItem
            logo="/photography.png"
            name="Photography"
            details={[
              <div key="hobby-photos" className="grid grid-cols-3 gap-4 mt-2">
                <img src="/hobby4.png" alt="hobby4" className="w-48 h-48 object-cover rounded-xl shadow-md" />
                <img src="/hobby5.png" alt="hobby5" className="w-48 h-48 object-cover rounded-xl shadow-md" />
                <img src="/hobby6.png" alt="hobby6" className="w-48 h-48 object-cover rounded-xl shadow-md" />
              </div>
            ]}
          /> 
        </>
      )}

      <h2 className="text-xl font-semibold flex items-center mt-6 mb-2 cursor-pointer" onClick={() => setShowContact(!showContact)}>
        <span role="img" aria-label="contact" className="mr-2">📞</span> Contact
        <span className={`ml-2 transform transition-transform ${showContact ? "rotate-90" : "rotate-0"}`}>▶</span>
      </h2>
      {showContact && (
        <>
          <ExperienceItem
            logo="/contact.png"
            details={[
              "Tele：（86）157-3572-3594; (1)310-905-1122",
              "e-mail：hanyi-job@outlook.com",
              "LinkedIn：www.linkedin.com/in/hanyi-resume"
            ]}
          /> 
        </>
      )}
    </div>
  );
}