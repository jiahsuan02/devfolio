import styles from "./projects.module.css";
import universeImg from "../../../assets/universe.png";
import classswiftImg from "../../../assets/classswift.png";
import viewarImg from "../../../assets/viewar.png";
import Tag from "../../prototypes/tag";

const Projects = () => {
  const projectList = [
    {
      title: "ClassSwift｜教學即時互動平台",
      description:
        "負責學生端前端實作，處理 WebSocket 即時資料同步。達成多人同時搶答、抽籤及白板互動功能，並在開發初期獨立完成前端 POC 驗證技術可行性。",
      tags: ["React", "Socket.io", "State Management", "MUI"],
      link: "https://www.classswift.viewsonic.io", // 如果有 Demo 網址可以放這
      img: classswiftImg,
    },
    {
      title: "UNIVERSE｜3D 虛擬教室產品官網",
      description:
        "從 0 建立產品官方網站與使用者流程。整合 AWS Cognito 進行會員身分驗證，並串接 Stripe 完成訂閱與付款自動化流程。",
      tags: ["React", "AWS Cognito", "Stripe API", "Responsive Design"],
      link: "https://stage.d1xm1p2z1hxogm.amplifyapp.com",
      img: universeImg,
    },
    {
      title: "AR 展示 POC 專案",
      description:
        "建立互動式前端畫面，結合 AR 技術將虛擬產品視覺疊加至實際場景，協助業務團隊在展覽中進行直觀的技術展示。",
      tags: ["React", "AR Integration"],
      link: "https://dev.d3mywq0hwdoc0n.amplifyapp.com",
      img: viewarImg,
    },
  ];

  return (
    <section id="projects" className={styles.container}>
      {projectList.map((project, index) => (
        <a
          key={index}
          href={project.link}
          className={styles.projectItem}
          target="_blank"
          rel="noreferrer"
        >
          <div className={styles.leftCol}>
            <img
              src={project.img}
              alt={project.title}
              className={styles.thumbnail}
            />
          </div>
          <div className={styles.rightCol}>
            <h3 className={styles.projectTitle}>{project.title} ↗</h3>
            <p className={styles.description}>{project.description}</p>
            <div className={styles.techTags}>
              {project.tags.map((tag, i) => (
                <Tag tag={tag} key={i} />
              ))}
            </div>
          </div>
        </a>
      ))}
    </section>
  );
};

export default Projects;
