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
        <h1 className="text-3xl font-bold text-center">韩义｜个人简历</h1>
        <button
          className="text-sm text-blue-600 hover:underline mt-2"
          onClick={() => navigate("/cn")}
        >
         切换为中文简历
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
            time="2024.09 - 2025.12"
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
            time="2023.7"
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
            extra="数据分析实习生"
            gpa="圣何塞，美国"
            time="2025年7月 – 至今"
            details={[
              "参与强生团队的制造技术系统可靠性提升项目，以减少系统故障导致的生产中断为目标，降低系统崩溃造成的经济损失搭建数据处理管道，整合多个部门数据源",
              "使用Python和SQL对MES系统及其日志数据进行批量处理与特征提取，协助识别影响制造可靠性的高频故障模式和系统流程瓶颈",
              "协助搭建基于规则和统计建模的预测性维护模型，提前预警潜在系统中断，提升生产连续性",
              "使用Tableau和Power BI参与构建可交互面板，展示关键KPI指标，向团队提汇报分析成果与策略建议"
            ]}
          />
          <ExperienceItem
            logo="/lenovo.png"
            name="联想"
            title="ISG团队"
            extra="财务数据分析实习生"
            gpa="北京"
            time="2023年12月 – 2024年5月"
            details={[
              "负责处理并初步分析原始财务数据，支持财务规划、报告与管理工作",
              "优化原有的综合性数据模型，整合历史数据和各渠道信息，使用历史销售与成本数据构建统计模型进行场景推演和敏感性分析",
              "利用Python、VBA等工具完成静态与动态图表展示，支持战略制定及产品定价预测"
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
              "参与定量研究，构建包括VaR在内的多种金融模型，优化信用与投资风险管理决策",
              "运用Python，SQL,R进行数据分析与模型验证，协助制定风险缓释策略",
              "参与搭建风险评估模型，整理并汇报团队研究成果，支持客户方案制定与内部风控体系建设"
            ]}
          />
          <ExperienceItem
            logo="/hicend.png"
            name="海证期货"
            title="资产管理部门"
            extra="市场投资辅助实习生"
            gpa="上海"
            time="2022年12月 – 2023年7月"
            details={[
              "协助部门完成大类资产的择时研究、因子挖掘与策略回测",
              "负责FOF资产数据维护，辅助完成每周资产比较分析工作",
              "参与尽职调查及路演工作，撰写尽调报告并提交评估建议"
            ]}
          />
          <ExperienceItem
            logo="/ey.png"
            name="安永"
            title="人力咨询"
            extra="数据分析实习生"
            gpa="宁波"
            time="2022年12月 – 2023年7月"
            details={[
              "收集并整合客户行业信息，参与调研数据的搜集与整理",
              "对内外部调研数据进行清洗与可视化处理",
              "基于不同KOR维度撰写每周客户报告，清晰呈现数据处理的逻辑、方法与分析结果，确保与团队成员同步更新"
            ]}
          />
          <ExperienceItem
            logo="/bytedance.png"
            name="字节跳动"
            title="国际支付部门"
            extra="资金数据分析实习生"
            gpa="北京"
            time="2022年1月 – 2022年7月"
            details={[
              "基于SQL逻辑协助完成资金数据的自动化分析模板，独立完成部分渠道的跨境结算逻辑搭建",
              "负责数据处理模板的后续跟进与维护，为TikTok海外业务的战略和决策提供数据支持",
              "参与分析全球支付数据，基于交易频率与金额波动协助设计异常交易检测规则，识别潜在风险行为；优化资金流报告频率，向多个业务线团队同步关键指标与趋势解读",
              "负责跨境交易数据库的配置与维护，响应团队的数据分析需求"
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
              "使用C++编写程序，批量处理报关单等繁琐数据，提高跨部门核对效率",
              "参与新上线 SAP 系统的应付账款模块测试，及时整理反馈测试结果，并代表团队与技术部门沟通需求细节",
              "协助上市审计工作，查验子公司三方询证函，对比供应商与账务系统间的明细差异并分析成因",
              "实地调研深圳分公司及仓库物流流程，参与不良品库存盘点，提出内控改进建议以规避流程漏洞"
            ]}
          />
        </>
      )}

      {/* 其他模块占位 */}
      <h2 className="text-xl font-semibold flex items-center mt-6 mb-2 cursor-pointer" onClick={() => setShowProject(!showProject)}>
        <span role="img" aria-label="project" className="mr-2">📌</span> 项目经历
        <span className={`ml-2 transform transition-transform ${showProject ? "rotate-90" : "rotate-0"}`}>▶</span>
      </h2>
      {showProject && <p className="text-sm text-gray-500">（此处待填写项目经历）</p>}

      <h2 className="text-xl font-semibold flex items-center mt-6 mb-2 cursor-pointer" onClick={() => setShowStudent(!showStudent)}>
        <span role="img" aria-label="student" className="mr-2">🏫</span> 学生工作
        <span className={`ml-2 transform transition-transform ${showStudent ? "rotate-90" : "rotate-0"}`}>▶</span>
      </h2>
      {showStudent && <p className="text-sm text-gray-500">（此处待填写学生工作）</p>}

      <h2 className="text-xl font-semibold flex items-center mt-6 mb-2 cursor-pointer" onClick={() => setShowSkills(!showSkills)}>
        <span role="img" aria-label="skills" className="mr-2">🧠</span> 专业技能
        <span className={`ml-2 transform transition-transform ${showSkills ? "rotate-90" : "rotate-0"}`}>▶</span>
      </h2>
      {showSkills && <p className="text-sm text-gray-500">（此处待填写技能内容）</p>}

      <h2 className="text-xl font-semibold flex items-center mt-6 mb-2 cursor-pointer" onClick={() => setShowHobbies(!showHobbies)}>
        <span role="img" aria-label="hobby" className="mr-2">🎨</span> 个人爱好
        <span className={`ml-2 transform transition-transform ${showHobbies ? "rotate-90" : "rotate-0"}`}>▶</span>
      </h2>
      {showHobbies && <p className="text-sm text-gray-500">（此处待填写个人兴趣）</p>}

      <h2 className="text-xl font-semibold flex items-center mt-6 mb-2 cursor-pointer" onClick={() => setShowContact(!showContact)}>
        <span role="img" aria-label="contact" className="mr-2">📞</span> 联系方式
        <span className={`ml-2 transform transition-transform ${showContact ? "rotate-90" : "rotate-0"}`}>▶</span>
      </h2>
      {showContact && <p className="text-sm text-gray-500">（此处待填写联系方式）</p>}
    </div>
  );
}
