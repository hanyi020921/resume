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


export default function ResumeCN() {
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
        <h1 className="text-3xl font-bold text-center">韩义｜个人简历</h1>
        <button
          className="text-sm text-blue-600 hover:underline mt-2"
          onClick={() => navigate("/en")}
        >
          Switch to English Resume
        </button>
        <p className="text-gray-400 text-sm mt-1">点击每个模块标题可展开详情</p>
      </div>

      {/* 教育经历 */}
      <h2
        className="text-xl font-semibold flex items-center mb-2 cursor-pointer"
        onClick={() => setShowEdu(!showEdu)}
      >
        <span role="img" aria-label="education" className="mr-2">🎓</span> 教育经历
        <span className={`ml-2 transform transition-transform ${showEdu ? "rotate-90" : "rotate-0"}`}>▶</span>
      </h2>
      {showEdu && (
        <>
          <ExperienceItem
            logo="/ucla.png"
            name="加州大学洛杉矶分校（UCLA）"
            title="萨缪尔理工程学院"
            extra="数据科学 · 工程学硕士"
            gpa="成绩：3.77/4.0"
            time="2024.09 - 至今"
          />
          <ExperienceItem
            logo="/zuel.png"
            name="中南财经政法大学"
            title="信息工程学院"
            extra="大数据管理与应用+金融工程（双学士学位）"
            gpa="成绩：88.7%"
            time="2020.09 - 2024.06"
          />
          <ExperienceItem
            logo="/lse.png"
            name="伦敦政治经济学院"
            title="暑期科研项目"
            extra="商业分析与估值"
            gpa="成绩：A"
            time="2023.07"
          />
        </>
      )}

      {/* 实习经历 */}
      <h2
        className="text-xl font-semibold flex items-center mt-6 mb-2 cursor-pointer"
        onClick={() => setShowIntern(!showIntern)}
      >
        <span role="img" aria-label="intern" className="mr-2">💼</span> 实习经历
        <span className={`ml-2 transform transition-transform ${showIntern ? "rotate-90" : "rotate-0"}`}>▶</span>
      </h2>
      {showIntern && (
        <>
          <ExperienceItem
            logo="/jnj.png"
            name="强生"
            title="医药科技团队"
            extra="数据科学实习生"
            gpa="圣何塞，美国"
            time="2025年7月 – 至今"
            details={[
              <strong key="first">参与制造系统可靠性提升项目，提高生产连续性，减少系统故障导致的生产中断及经济损失</strong>,
              "负责制造系统日志数据的提取和预处理，使用Python与SQL对超2,000,000条数据完成数据清洗、特征与异常模式提取，协助识别影响制造可靠性的高频故障模式和系统流程瓶颈",
              "参与建模工作，结合规则与逻辑回归训练模型预测系统崩溃概率、运用生存分析方法估计系统稳定运行的时间、结合异常检测算法提前捕捉异常信号；模型F-1得分为0.76，覆盖业务38%的生产线",
              "协助构建基于Tableau和Power BI的交互式可视化面板，实现按需展示预设的16个KPI指标与预测结果，每周向项目团队汇报分析成果与建议"
            ]}
          />
          <ExperienceItem
            logo="/lenovo.png"
            name="联想"
            title="ISG团队"
            extra="数据分析实习生"
            gpa="北京"
            time="2023年12月 – 2024年5月"
            details={[
              <strong key="first">参与ISG财务团队数据管理与分析项目，基于历史数据帮助财务规划、产品定价及战略管理</strong>,
              "每月从数据库提取所需数据，参与完成销售、成本等数据指标的分析，支持财务规划、财务报告与相关数据分析；响应团队临时数据需求；负责将团队数据成果同步入库，数据准确率100%",
              "负责从数据库中挖掘字段和近7年历史数据，在原有五年规划模型的基础上新增4个自变量，生成新财年的五年规划方案，为业务部门10+个小组的成本预测、产品定价等战略决策提供数据参考",
              "利用Python和VBA完成数据分析结果的静态与动态图表展示，直观呈现分析结果"
            ]}
          />
          <ExperienceItem
            logo="/deloitte.png"
            name="德勤"
            title="德勤风驭智慧债券-金融风险咨询"
            extra="数据分析实习生"
            gpa="深圳"
            time="2023年10月 – 2023年12月"
            details={[
              <strong key="first">参与金融风险管理项目，旨在基于客户数据库数据构建量化模型，支持投资与信用风险的识别与评估</strong>,
              "从多源数据库中提取、清洗与整合与项目相关的4000+实体超50万条数据，进行统计性描述，协助识别潜在风险特征",
              "参与构建覆盖多种场景的VaR等金融风险模型，运用 Python、SQL协助数据建模及模型验证工作",
              "基于数据输出参与敏感性分析与情景推演，为信用风险优化提供量化依据",
              "协助搭建可复用的风险评估与监测框架，完成11份结构化分析报告，支持客户制定风险缓释方案与内部风控体系建设"
            ]}
          />
          <ExperienceItem
            logo="/hicend.png"
            name="海证期货"
            title="资产管理部门"
            extra="市场投资实习生"
            gpa="上海"
            time="2022年12月 – 2023年7月"
            details={[
              <strong key="first">参与大类资产配置与FOF投资管理，参与市场研究、数据分析及投资评估</strong>,
              "协助完成大类资产的择时研究与策略回测，基于Python和Wind数据协助挖掘高相关性因子，完成近5年历史表现分析",
              "负责FOF资产数据维护，跟进并汇总40+金融产品的收益表现，完成每周资产比较分析报告",
              "与FOF底层资产管理团队沟通，核实并更新在职期间的资产信息，确保投资组合信息的准确性与时效性",
              "参与尽职调查及路演工作，独立撰写20+份尽调报告并提交评估建议，其中3份投资获批落地"
            ]}
          />
          <ExperienceItem
            logo="/ey.png"
            name="安永"
            title="人力咨询"
            extra="数据分析实习生"
            gpa="宁波"
            time="2022年11月 – 2022年12月"
            details={[
              <strong key="first">参与客户行业研究与团队数据分析，负责调研数据的获取、处理与可视化，为客户报告和团队决策提供支持</strong>,
              "收集并整合400+条客户行业信息，参与调研数据的搜集、整理与分析，为客户战略评估提供基础数据",
              "对内外部调研数据进行清洗与结构化处理，基于Python与Excel制作10+份可视化图表，提升数据解读效率",
              "基于不同KOR维度撰写每周客户报告，清晰呈现数据处理的逻辑、方法与分析结果，确保与团队成员信息同步"
            ]}
          />
          <ExperienceItem
            logo="/bytedance.png"
            name="字节跳动"
            title="国际支付部门"
            extra="数据分析实习生"
            gpa="北京"
            time="2022年1月 – 2022年7月"
            details={[
              <strong key="first">参与跨境交易数据分析，为 TikTok 海外业务的战略制定与风险控制提供数据支持</strong>,
              "参与完成资金数据的SQL自动化分析模板，独立完成9个渠道的跨境结算逻辑设计与实现，负责全部47个数据处理模板的后续跟进与代码维护，确保分析流程的稳定运行与结果的准确性",
              "参与分析交易数据，基于交易频率与交易金额协助制定14条异常交易检测规则，识别潜在风险行为",
              "负责北美和东亚等地区交易数据库的维护，响应全球30+个团队的临时数据需求"
            ]}
          />
          <ExperienceItem
            logo="/chipone.png"
            name="集创北方"
            title="财务"
            extra="数据分析实习生"
            gpa="北京"
            time="2021年7月 – 2021年8月"
            details={[
              <strong key="first">参与跨部门业务数据处理与流程优化项目，以提高财务及供应链运营效率为目标</strong>,
              "使用C++编写程序，批量处理海关报税单等繁琐数据，提高跨部门核对效率",
              "参与新上线 SAP 系统的应付账款模块测试，整理并反馈20+项测试结果，代表团队与技术部门沟通需求细节",
              "协助上市审计工作，查验子公司三方询证函，对比供应商与账务系统间的明细差异并分析成因",
              "实地调研深圳分公司及仓库物流流程，参与4条业务线的不良品库存盘点，协助提出内控改进建议以规避流程漏洞"
            ]}
          />
        </>
      )}

      {/* 项目经历 */}
      <h2 className="text-xl font-semibold flex items-center mt-6 mb-2 cursor-pointer" onClick={() => setShowProject(!showProject)}>
        <span role="img" aria-label="project" className="mr-2">📌</span> 项目经历
        <span className={`ml-2 transform transition-transform ${showProject ? "rotate-90" : "rotate-0"}`}>▶</span>
      </h2>
      {showProject && (
        <> 
          <ExperienceItem
            logo="/cicc.png"
            name="中金"
            title="量化研究团队"
            extra="量化研究助理-项目PTA"
            gpa="远程"
            time="2023年7月 - 2023年10月"
            details={[
              "使用SQL进行数据准备，结合Python清洗并处理400,000条A股市场历史数据，协助分析6个量化选股因子的有效性",
              "参与构建择时雷达图，从流动性、宏观经济、市场估值、资金流向、技术指标与市场情绪6大维度整合指标，协助提出市场择时策略",
              "协助开发量化投资策略，包括统计套利与股票交易策略，在回测中实现夏普比率提升至1.31",
              "负责交易系统数据的日常维护，复现7篇量化交易相关文献以支持策略研究"
            ]}
          />     
          <ExperienceItem
            logo="/mcm.png"
            name="美国大学生数学建模竞赛（MCM）2023"
            title="特等奖提名（前0.5%-3%）"
            extra="队长"
            gpa=""
            time="2023年2月 - 2023年5月"
            details={[
              "作为队长参赛，负责整体论文的策略制定与结构设计，主导完成模型训练，组织团队成员分工协作",
              "参与算法设计与模型评估，使用IP模型、两阶段启发式算法及RSG算法，通过对不同参数进行敏感性分析，确定资源优先级顺序；构建预测模型，评估论文策略在GDP、人口等关键指标上的长期影响"
            ]}
          /> 
          <ExperienceItem
            logo="/js.png"
            name="第十五届中国大学生计算机设计大赛"
            title="中南赛区一等奖超项（前15%）"
            extra="队长"
            gpa=""
            time="2022年5月"
            details={[
              "负责对中国碳核算数据库（CEADs）提供的数据进行清洗及分析，负责相关数据的可视化处理",
              "参与搭建双碳BI平台和企业碳交易统筹平台，协作完成平台网页开发，完成项目移动端适配"
            ]}
          /> 
          <ExperienceItem
            logo="/zuel.png"
            name="第三十一届博文杯大学生百项实证创新基金项目"
            title="三等奖结项"
            extra="队员"
            gpa=""
            time="2020年11月 - 2020年12月"
            details={[
              "围绕后疫情时代城市营商环境开展调研，与团队合作分析突发公共卫生事件对城市营商环境的影响",
              "使用 Python 爬取湖北省国有控股企业与民营企业历年应收账款回收期等财务信息，开展数据协同分析，并结合统计模型进行数据建模与处理"
            ]}
          /> 
        </>
      )}

      <h2 className="text-xl font-semibold flex items-center mt-6 mb-2 cursor-pointer" onClick={() => setShowStudent(!showStudent)}>
        <span role="img" aria-label="student" className="mr-2">🏫</span> 学生工作
        <span className={`ml-2 transform transition-transform ${showStudent ? "rotate-90" : "rotate-0"}`}>▶</span>
      </h2>
      {showStudent && (
        <>
          <ExperienceItem
            logo="/hwfc.png"
            name="中南财大华为财经校企俱乐部"
            title="主席团成员"
            extra=""
            gpa=""
            time="2021年4月 - 2023年7月"
            details={[
              "组织承办2021华为财务精英挑战赛，负责大赛初赛的宣传推广工作与俱乐部成员的分工调配",
              "组织承办华为秋招宣讲会、圆桌会议等各项活动，进行宣发、人员调配等等工作"
            ]}
          /> 
        </>
      )}

      <h2 className="text-xl font-semibold flex items-center mt-6 mb-2 cursor-pointer" onClick={() => setShowSkills(!showSkills)}>
        <span role="img" aria-label="skills" className="mr-2">🧠</span> 专业技能
        <span className={`ml-2 transform transition-transform ${showSkills ? "rotate-90" : "rotate-0"}`}>▶</span>
      </h2>
      {showSkills && (
        <>
          <ExperienceItem
            logo="/coding.png"
            name="编程语言&工具"
            details={[
              "SQL, Python, R, C++, Java",
              "Tableau, SPSS, Excel, E-charts"
            ]}
          /> 
          <ExperienceItem
            logo="/language.png"
            name="语言能力"
            details={[
              "英语：雅思 7.5, GRE 331, CET-6",
              "法语：日常沟通"
            ]}
          /> 
          <ExperienceItem
            logo="/certificate.png"
            name="专业证书"
            details={[
              "BEC商务英语中级",
              "ACCA国际特许公认会计师（9/13）"
            ]}
          /> 
        </>
      )}

      <h2 className="text-xl font-semibold flex items-center mt-6 mb-2 cursor-pointer" onClick={() => setShowHobbies(!showHobbies)}>
        <span role="img" aria-label="hobby" className="mr-2">🎨</span> 个人爱好
        <span className={`ml-2 transform transition-transform ${showHobbies ? "rotate-90" : "rotate-0"}`}>▶</span>
      </h2>
      {showHobbies && (
        <>
          <ExperienceItem
            logo="/trip.png"
            name="旅行"
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
            name="摄影"
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
        <span role="img" aria-label="contact" className="mr-2">📞</span> 联系方式
        <span className={`ml-2 transform transition-transform ${showContact ? "rotate-90" : "rotate-0"}`}>▶</span>
      </h2>
      {showContact && (
        <>
          <ExperienceItem
            logo="/contact.png"
            details={[
              "电话：（86）157-3572-3594",
              "邮箱：hanyi-job@outlook.com",
              "领英：www.linkedin.com/in/hanyi-resume"
            ]}
          /> 
        </>
      )}
    </div>
  );
}
