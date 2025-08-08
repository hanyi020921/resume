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
            name="University of Clifornia, Los Angeles(UCLA)"
            title="Samueli School of Engineering"
            extra="Master of Engineering in Data Science"
            gpa="GPA: 3.77/4.0"
            time="2024.09 - present"
          />
          <ExperienceItem
            logo="/zuel.png"
            name="Zhongnan University of Economics and Law"
            title="School of Information and Engineering"
            details={[
              "Bachelor's Degree of Management in Big Data Management and Application",
              "Bachelor's Degree of Economics in Financial Engineering"
            ]}
            gpa="GPA: 88.7%"
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
            extra="Data Science Intern"
            gpa="San Jose, U.S."
            time="Jul 2025 - present"
            details={[
              <strong key="first">Participated in a manufacturing system reliability improvement project aimed at reducing production downtime and economic losses caused by system failures</strong>,
              "Extracted and preprocessed manufacturing system log data; performed data cleaning, feature extraction, and anomaly pattern detection using Python and SQL; assisted in identifying high-frequency failure patterns and process bottlenecks affecting system reliability",
              "Contributed to model development based on historical crash data, combining rule-based methods with Logistic Regression to predict failure probability, applying Survival Analysis to estimate system uptime, and using anomaly detection algorithms to capture early warning signals, thereby improving production continuity",
              "Assisted in building interactive dashboards in Tableau and Power BI to display predefined KPIs and prediction results on demand, and regularly presented analysis outcomes and recommendations to the project team"
            ]}
          />
          <ExperienceItem
            logo="/lenovo.png"
            name="Lenovo"
            title="ISG Team"
            extra="Data Analysis Intern"
            gpa="Beijing"
            time="Dec 2023 - May 2024"
            details={[
              <strong key="first">Participated in the ISG finance team’s data management and analysis project, leveraging historical data to support financial planning, product pricing, and strategic management</strong>,
              "Extracted monthly data from the database, contributed to the analysis of sales, cost, and other metrics for financial planning and reporting; responded to ad-hoc data requests; maintained and synchronized team data outputs into the database",
              "Identified relevant fields and historical data from the database, coordinated with other teams to gather required information, and improved and reconstructed the existing five-year planning model; generated a new five-year plan to support cost forecasting, product pricing, and other strategic decisions",
              "Created static and dynamic visualizations using Python and VBA to present analytical results in a clear and intuitive way"
            ]}
          />
          <ExperienceItem
            logo="/deloitte.png"
            name="Deloitte"
            title="Deloitte IBond - Risk Advisory"
            extra="Data Analysis Intern"
            gpa="Shenzhen"
            time="Oct 2023 - Dec 2023"
            details={[
              <strong key="first">Participated in a financial risk management consulting project, building quantitative models from client transaction and account data to monitor, assess, and mitigate investment and credit risks</strong>,
              "Extracted, cleaned, and integrated multi-source financial datasets; conducted descriptive analysis and trend identification",
              "Developed financial risk models, including VaR and other quantitative approaches, using Python, SQL, and R for feature engineering and model validation",
              "Performed sensitivity analysis and scenario simulations to support credit and portfolio risk optimization",
              "Contributed to a reusable risk assessment framework and delivered structured reports and visualizations to support client strategy and internal control design"
            ]}
          />
          <ExperienceItem
            logo="/hicend.png"
            name="Hicend"
            title="Asset Management Team"
            extra="Market Investment Intern"
            gpa="Shanghai"
            time="Dec 2022 - Jul 2023"
            details={[
              <strong key="first">Supported asset allocation and FOF investment management through market research, data analysis, and investment evaluation</strong>,
              "Assisted in asset timing research and strategy backtesting, including factor analysis",
              "Maintained and updated the FOF asset database; tracked and summarized returns of invested financial products",
              "Coordinated with underlying asset management teams to verify and obtain data; produced weekly comparative asset analysis reports",
              "Participated in due diligence and roadshows, preparing evaluation reports with recommendations"
            ]}
          />
          <ExperienceItem
            logo="/ey.png"
            name="EY"
            title="Advisory"
            extra="Data Analysis Intern"
            gpa="Ningbo"
            time="Nov 2022 - Dec 2022"
            details={[
              <strong key="first">Contributed to industry research and data analysis projects by acquiring, processing, and visualizing research data for client reporting and team decision-making</strong>,
              "Collected and consolidated client industry information; participated in research data gathering and organization",
              "Cleaned, structured, and visualized both internal and external research data",
              "Prepared weekly client reports based on KOR metrics, detailing data processing logic, analysis methods, and results; ensured timely updates with the team"
            ]}
          />
          <ExperienceItem
            logo="/bytedance.png"
            name="ByteDance"
            title="Global Payment Team"
            extra="Data Analysis Intern"
            gpa="Beijing"
            time="Jan 2022 - Jul 2022"
            details={[
              <strong key="first">Participated in cross-border transaction data analysis to support TikTok’s overseas business strategy and risk control</strong>,
              "Assisted in building automated financial data analysis templates based on SQL logic, independently developed settlement logic for selected cross-border channels, and maintained data processing templates to ensure workflow stability and output accuracy",
              "Analyzed transaction data and contributed to designing anomaly detection rules based on transaction frequency and amount fluctuations to identify potential risk behaviors",
              "Configured and maintained the cross-border transaction database, fulfilling the team’s data extraction and analysis needs"
            ]}
          />
          <ExperienceItem
            logo="/chipone.png"
            name="Chipone"
            title="Finance Team"
            extra="Data Analysis Intern"
            gpa="Beijing"
            time="Jul 2021 - Aug 2021"
            details={[
              <strong key="first">Supported cross-department business data processing and workflow optimization to enhance finance and supply chain efficiency</strong>,
              "Programmed in C++ to batch-process customs declaration and related datasets, improving cross-department data verification and processing speed",
              "Participated in testing the newly launched SAP accounts payable module; documented and communicated test feedback to technical teams",
              "Assisted in audit procedures, reconciling tripartite records and analyzing discrepancies between supplier and accounting system data",
              "Conducted on-site research at Shenzhen branches and warehouse logistics; participated in defective inventory checks and proposed process improvements"
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
            name="Mathematical Contest in Modeling(MCM) 2023"
            title="Finalist(top 0.5%-3%)"
            extra="Captain"
            gpa=""
            time="Feb 2023 - May 2023"
            details={[
              "Led paper strategy and structure design; coordinated team assignments and oversaw model development",
              "Designed and evaluated models using IP model, two-stage heuristic algorithm, and RSG algorithm; conducted sensitivity analysis to rank resource priorities and built prediction models to assess long-term impacts on GDP, population, and other KPIs"
            ]}
          /> 
          <ExperienceItem
            logo="/js.png"
            name="The 15th National College Student Computer Design Competition"
            title="Second Price(top 15%)"
            extra="Captain"
            gpa=""
            time="May 2022"
            details={[
              "Cleaned and analyzed data provided by the China Carbon Accounting Database, and developed the dual-carbon BI platform; created an original enterprise carbon trading coordination platform",
              "Collaborated on web development for the platform, completed mobile adaptation for the project"
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
              "Led the organization of Huawei's campus recruitment events including info sessions and roundtable discussions; handled promotion, staffing, and on-site logistics."
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
              "Tableau, SPSS, Excel, E-charts"
            ]}
          /> 
          <ExperienceItem
            logo="/language.png"
            name="Language"
            details={[
              "Chinese: Native",
              "English: IELTS 7.5, GRE 331, CET-6",
              "French: Basic"
            ]}
          /> 
          <ExperienceItem
            logo="/certificate.png"
            name="Professional Certifcate"
            details={[
              "ACCA(9/13)"
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
              "Tele: (86)157-3572-3594; (1)310-905-1122",
              "e-mail: hanyi-job@outlook.com",
              "LinkedIn: www.linkedin.com/in/hanyi-resume"
            ]}
          /> 
        </>
      )}
    </div>
  );
}