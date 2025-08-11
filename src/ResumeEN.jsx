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
            title="Henry Samueli School of Engineering"
            extra="Master of Engineering in Data Science"
            gpa="GPA: 3.77/4.0"
            time="Sept 2024 - expected Dec 2025"
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
            time="Sept 2020 - Jun 2024"
          />
          <ExperienceItem
            logo="/lse.png"
            name="The London School of Economics and Political Science"
            title="Summer Session"
            extra="Business Analysis and Valuation"
            gpa="Level-A"
            time="Jul 2023"
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
              "Extracted and processed MES log data (>2m records) using Python and SQL; performed feature engineering and anomaly detection to identify frequent failure patterns and bottlenecks",
              "Assisted in building models using rule-based logic, Logistic Regression, Survival Analysis, and Anomaly Detection to predict crashes; achieved an F-1 score of 0.76, covered 38% of production lines",
              "Built interactive dashboards in Tableau/Power BI to visualize 16 preset KPIs and prediction results; delivered weekly analysis reports and recommendations to the project team"
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
              <strong key="first">Participated in the ISG finance team's data management, analysis and application project</strong>,
              "Extracted and analyzed monthly sales, cost, and related metrics from the database; updated results into the team’s system with 100% accuracy and responded to ad-hoc data requests",
              "Integrated 7 years of historical data and added 4 new predictors to the existing five-year planning model, producing updated forecasts for 10+ business units’ cost projections and pricing strategies",
              "Created static and dynamic visualizations in Python and VBA to present results clearly"
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
              <strong key="first">Participated in a financial risk management advisory project, aiming to build quantitative models from client database records to support investment and credit risk identification and assessment</strong>,
              "Extracted, cleaned, and integrated 500k+ records from 4,000+ entities across multiple financial databases; performed descriptive statistics to assist in identifying potential risk features",
              "Participated in developing financial risk models, including multi-scenario VaR models, using Python and SQL for data modeling and model validation",
              "Performed sensitivity analysis and scenario simulations based on model outputs to provide quantitative input for credit risk optimization",
              "Contributed to building a reusable risk assessment and monitoring framework; delivered 11 structured analysis reports to support clients in designing risk mitigation plans and risk control systems"
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
              <strong key="first">Participated in asset allocation and FOF investment management, covering market research, data analysis, and investment evaluation</strong>,
              "Assisted in asset timing research and strategy backtesting; used Python and Wind data to identify highly correlated factors and analyze historical performance over the past 5 years",
              "Maintained and updated the FOF asset database; tracked and summarized the performance of 40+ invested financial products; produced weekly comparative analysis reports",
              "Coordinated with underlying asset management teams to verify and update asset information during the internship, ensuring accuracy and timeliness of portfolio data",
              "Participated in due diligence and roadshows; independently prepared 20+ due diligence reports with recommendations, 3 of which were approved and implemented"
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
              <strong key="first">Participated in industry research and team data analysis, responsible for acquiring, processing, and visualizing research data to support client reports and team decisions</strong>,
              "Collected and consolidated 400+ records from the client's industry; participated in gathering, organizing, and analyzing research data to support client strategic assessment",
              "Cleaned and structured both internal and external research datasets; created 10+ visualizations using Python and Excel to improve data interpretation efficiency",
              "Prepared weekly client reports based on KOR metrics, clearly presenting data processing logic, methods, and analysis results; ensured timely updates with team members"
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
              <strong key="first">Participated in global transaction data analysis to support TikTok's overseas business strategy and risk control</strong>,
              "Built 9 SQL-based automated analysis templates and developed settlement logic for selected channels; maintained all 47 templates for accuracy and stability",
              "Analyzed transaction data and contributed to designing 14 anomaly detection rules based on transaction frequency and amount fluctuations to identify potential risk behaviors",
              "Maintained the global transaction database and responded to ad-hoc data requests from 30+ global teams"
            ]}
          />
          <ExperienceItem
            logo="/chipone.png"
            name="Chipone"
            title="Finance Team"
            extra="Project Assistance Intern"
            gpa="Beijing"
            time="Jul 2021 - Aug 2021"
            details={[
              <strong key="first">Assisted the accounts payable team in IPO audit procedures and supported the finance department’s routine data and operational requests</strong>,
              "Developed a C++ program to batch-process customs declaration forms and other large datasets, increasing cross-department verification efficiency",
              "Participated in testing the newly launched SAP accounts payable module; documented and reported 20+ test results, and represented the team in communicating requirements with the technical department",
              "Assisted in IPO audit procedures by reviewing subsidiary tripartite confirmation letters, reconciling discrepancies between supplier records and the accounting system, and analyzing their causes",
              "Supported on-site research at Shenzhen branches and warehouse logistics; participated in defective inventory checks across 4 business lines, and contributed to internal control improvement proposals to address process gaps"
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
              "Performed data preparation using SQL and cleaned 400,000 historical A-share market records with Python to analyze the effectiveness of 6 quantitative stock selection factors",
              "Participated in developing a market-timing radar chart, integrating indicators across six dimensions—liquidity, macroeconomics, market valuation, capital flows, technical indicators, and market sentiment—to help propose timing strategies",
              "Assisted in developing quantitative investment strategies, including statistical arbitrage and stock trading, achieving a backtested Sharpe ratio improvement to 1.31",
              "Maintained trading system data and reproduced 7 quantitative trading research papers to support strategy development"
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
            title="Second Prize(top 15%)"
            extra="Captain"
            gpa=""
            time="May 2022"
            details={[
              "Cleaned and analyzed data provided by the Carbon Emission Accounting Database(CEADs), and developed the carbon BI platform; created an original enterprise carbon trading coordination platform",
              "Collaborated on web development for the platform, completed mobile adaptation for the project"
            ]}
          /> 
          <ExperienceItem
            logo="/zuel.png"
            name="The 31th 'Bowen Cup' 100 Empirical Innovation Fund Projects"
            title="Third Prize"
            extra="Team Member"
            gpa=""
            time="Nov 2020 - Dec 2020"
            details={[
              "Conducted research on the urban business environment in the post-epidemic era; Analyzed the impact of public health emergencies on urban business situations with the team members",
              "Used Python to collect financial information such as receivables collection period of enterprises in Hubei Province required by the subject over the years; conducted cooperative analysis of the crawled data, and utilized a variety of models for data modeling"
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
            time="Apr 2021 - Jul 2023"
            details={[
              "Organized and hosted the 2021 Huawei Financial Elite Challenge; responsible for preliminary round promotion and coordinating club member assignments",
              "Led the organization of Huawei's campus recruitment events including info sessions and roundtable discussions; handled promotion, staffing, and on-site logistics"
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
            name="Travel"
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