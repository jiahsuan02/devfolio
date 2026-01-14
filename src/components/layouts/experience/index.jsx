import styles from "./experience.module.css";
import Tag from "../../prototypes/tag";

const Experience = () => {
  const jobs = [
    {
      period: "2022 — 2025",
      title: "前端工程師",
      company: "ViewSonic",
      details: [
        "參與 ClassSwift 教學即時互動平台開發，負責學生端前端架構與實作。",
        "實作 WebSocket 即時通訊功能，支援搶答、隨機抽籤與白板同步互動。",
        "獨立完成產品初期前端 POC，並與後端及 PM 協作定義 API 規格。",
        "從 0 建立 UNIVERSE 官網，串接 AWS Cognito 與 Stripe 實現完整帳號訂閱流。",
      ],
      tags: [
        "React",
        "TypeScript",
        "Socket.io",
        "AWS",
        "MUI",
        "Stripe",
        "FastAPI",
      ],
    },
    {
      period: "2017 — 2022",
      title: "資訊助理",
      company: "中央研究院數學研究所",
      details: [
        "使用 Google Apps Script 開發自動化工具，協助資料整理與流程優化。",
        "維護與更新研究所及學術活動網站，進行版面與內容調整。",
        "協助編輯與排版 LaTeX 數學論文與學術文件。",
      ],
      tags: ["JavaScript", "Google Apps Script", "LaTeX", "Web Maintenance"],
    },
  ];

  return (
    <section id="experience" className={styles.container}>
      {jobs.map((job, index) => (
        <div key={index} className={styles.item}>
          <div className={styles.period}>{job.period}</div>
          <div className={styles.content}>
            <h3 className={styles.jobTitle}>
              {job.title} ·{" "}
              <span className={styles.company}>{job.company}</span>
            </h3>
            <ul className={styles.description}>
              {job.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
            <div className={styles.techTags}>
              {job.tags.map((tag, i) => (
                <Tag tag={tag} key={i} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience;
