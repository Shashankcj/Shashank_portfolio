import React from 'react';
import {createRoot} from 'react-dom/client';
import {ArrowUpRight, Github, Linkedin, Mail, MapPin, Download, Code2, Server, Database, Cloud, Layers3, Workflow} from 'lucide-react';
import './styles.css';

const profile={email:'shashankcj7@gmail.com',github:'https://github.com/Shashankcj/',linkedin:'https://www.linkedin.com/in/shashank-c-j-313696270',resume:'/resume.pdf'};
const skills=[
['Languages',Code2,['Java','Python','JavaScript','TypeScript']],
['Backend',Server,['Spring Boot','Spring MVC','Django REST Framework','REST APIs','Microservices','gRPC']],
['Frontend',Layers3,['React','Next.js','Redux Toolkit','RTK Query','HTML5','CSS3','Tailwind CSS']],
['Databases & Messaging',Database,['PostgreSQL','MySQL','MongoDB','Redis','RabbitMQ','Kafka','NATS']],
['DevOps & Cloud Native',Cloud,['Docker','Docker Compose','Kubernetes','GitHub Actions','Argo CD','Terraform','Ansible','Linux']],
['Testing & Security',Workflow,['JUnit','Mockito','Pytest','Selenium','Postman','OAuth 2.0','OIDC','JWT']]
];

const projects = [
  {
    n: "01",
    type: "PROFESSIONAL PROJECT · MONITORING PLATFORM",
    title: "Genesis — Central Monitoring System",
    desc: "Developed a centralized monitoring platform that collects CPU, memory, disk, network, and hardware metrics from agents and delivers monitoring data to a React dashboard. Built Django REST APIs and asynchronous task processing with Celery and Celery Beat. Designed separate database paths for writing incoming agent metrics and serving UI read queries. Integrated WebSocket Secure (WSS) and Server-Sent Events (SSE) for real-time monitoring, with Docker, Kubernetes, and Argo CD for deployment and Selenium and unit testing for quality assurance.",
    tags: [
      "Python",
      "Django REST Framework",
      "Celery",
      "Celery Beat",
      "PostgreSQL",
      "React",
      "WebSocket (WSS)",
      "SSE",
      "Docker",
      "Kubernetes",
      "Argo CD",
      "Selenium",
      "Unit Testing"
    ],
    icon: "activity"
  },
  {
    n: "02",
    type: "LINUX SYSTEMS · MICROSERVICES",
    title: "Cross-Platform Linux Monitoring Collector",
    desc: "Developed a Linux monitoring collector package using Rust and Python, integrating psutil for system-level metric collection. Prepared packages for Ubuntu 22.04 and 24.04 and Red Hat Enterprise Linux (RHEL) 8, 9, and 10. Designed a microservices-based architecture using NATS for messaging and WSS for secure communication and monitoring data delivery.",
    tags: [
      "Rust",
      "Python",
      "PyO3",
      "psutil",
      "Linux",
      "Ubuntu 22.04/24.04",
      "RHEL 8/9/10",
      "Linux Packaging",
      "Microservices",
      "NATS",
      "WSS",
      "TLS"
    ],
    icon: "server"
  },
  {
    n: "03",
    type: "FULL-STACK · MICROSERVICES · PLATFORM ENGINEERING",
    title: "Full-Stack Microservices & Multi-Cluster Platform",
    desc: "Developed a full-stack application using Java Spring Boot and React with Redux Toolkit and RTK Query. Implemented REST APIs, frontend state management, and automated testing with JUnit and Selenium. Containerized applications using Docker and built Kubernetes clusters for deployment and multi-cluster management. Automated application delivery using Argo CD and GitOps, integrated CI/CD pipelines with GitHub Actions, and automated infrastructure provisioning and configuration using Terraform and Ansible.",
    tags: [
      "Java",
      "Spring Boot",
      "React",
      "Redux Toolkit",
      "RTK Query",
      "REST APIs",
      "JUnit",
      "Selenium",
      "Docker",
      "Kubernetes",
      "Multi-Cluster",
      "Argo CD",
      "GitOps",
      "GitHub Actions",
      "Terraform",
      "Ansible"
    ],
    icon: "layers"
  }
];

function App(){
 return <div className="app">
<header><a className="brand" href="#home"><img className="brand-photo" src="/profile.png" alt="Shashank C J" /><span>Shashank C J</span></a><nav><a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#experience">Experience</a><a href="#contact">Contact</a><a className="navbtn" href={profile.resume}><Download size={15}/> Resume</a></nav></header>
 <main>
 <section className="hero" id="home"><div className="intro"><div className="eyebrow">● SOFTWARE ENGINEER <i/></div><h1>Building reliable<br/><span>software that scales.</span></h1><p>I build full-stack applications and backend services using Java, Python, React, and cloud-native technologies. I enjoy solving practical engineering problems and turning complex workflows into maintainable software.</p><div className="actions"><a className="primary" href="#projects">Explore projects <ArrowUpRight size={17}/></a><a className="secondary" href="#contact">Let's connect</a></div><div className="meta"><span><MapPin size={15}/> Bengaluru, India</span><span>Full-stack · Backend · DevOps</span></div></div>
 <div className="visual"><div className="orb"></div><div className="window"><div className="bar"><span>● ● ●</span> application.java <em>● running</em></div><pre><b>01</b> <i>public class</i> <strong>Application</strong> {'{'}<br/><b>02</b>   <i>public static void</i> <mark>main</mark>() {'{'}<br/><b>03</b>     <u>build</u>("something useful");<br/><b>04</b>     <u>test</u>("every change");<br/><b>05</b>     <u>deploy</u>("with confidence");<br/><b>06</b>   {'}'}<br/><b>07</b> {'}'}<span className="cursor"> </span></pre><div className="status">● Build passing <span>UTF-8 · Java</span></div></div><div className="float f1"><Server size={18}/><div><b>REST APIs</b><small>Designed to scale</small></div></div><div className="float f2"><Cloud size={18}/><div><b>Cloud native</b><small>Build · Ship · Operate</small></div></div><div className="caption">IDEAS → CODE → IMPACT</div></div></section>
 <section id="about" className="section"><div className="heading"><div><small>ABOUT ME</small><h2>Engineer by craft.<br/><span>Curious by nature.</span></h2></div><p>I enjoy working across the stack—from API design and data flows to thoughtful user interfaces and deployment workflows.</p></div><div className="aboutgrid"><article className="panel"><div className="icon"><Code2/></div><h3>What I care about</h3><p>Readable code, useful tests, secure APIs, reliable systems, and continuous learning. I like understanding how components work together rather than treating them as black boxes.</p><div className="tags"><span>Problem solving</span><span>Clean code</span><span>Continuous learning</span></div></article><div className="stats"><article className="panel"><b>02+</b><span>Years in software development</span></article><article className="panel"><b>Full stack</b><span>Frontend to backend APIs</span></article><article className="panel"><b>Cloud native</b><span>Containers and automation</span></article><article className="panel"><b>Always learning</b><span>Systems, AI and engineering</span></article></div></div></section>
 <section id="skills" className="section"><div className="heading"><div><small>MY TOOLKIT</small><h2>Skills & <span>technologies.</span></h2></div><p>Technologies I've worked with or used in projects.</p></div><div className="skills">{skills.map(([title,Icon,items])=><article className="panel skill" key={title}><div className="skillhead"><div className="icon"><Icon/></div><h3>{title}</h3></div><div className="tags">{items.map(x=><span key={x}>{x}</span>)}</div></article>)}</div></section>
 <section id="projects" className="section"><div className="heading"><div><small>SELECTED WORK</small><h2>Projects with <span>purpose.</span></h2></div><p>A selection of projects from professional, academic, and internship experience.</p></div><div className="projects">{projects.map(p=><article className="project panel" key={p.n}><div className="projectart"><div className="arttop">PROJECT / {p.n}<span>↗</span></div><div className="mock"><aside><i/><i/><i/><i/></aside><div className="mockbody"><i/><div className="bars"><b/><b/><b/><b/><b/></div><div className="tiles"><b/><b/><b/></div></div></div></div><div className="projectbody"><small>{p.type}</small><h3>{p.title}</h3><p>{p.desc}</p><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div><div className="note">Add your public repository/demo link and screenshots before publishing.</div></div></article>)}</div></section>
 <section id="experience" className="section"><div className="heading"><div><small>THE JOURNEY</small><h2>Experience & <span>education.</span></h2></div><p>Professional software development experience with a computer science foundation.</p></div><div className="timeline"><article className="panel job"><small>FEB 2025 — PRESENT</small><h3>Junior Developer</h3><label>AaptTeknoUS Private Ltd · Bengaluru</label><ul><li>Develop frontend experiences with React, Redux Toolkit, and API integrations.</li><li>Build and maintain backend APIs using Java/Spring and Python/Django.</li><li>Work with real-time messaging, containers, Kubernetes, and CI/CD workflows.</li></ul></article><article className="panel job"><small>JUN 2024 — JAN 2025</small><h3>Java Full Stack Intern</h3><label>LDAPP Solutions Private Ltd · Bengaluru</label><ul><li>Worked on Java/Spring MVC REST APIs and React/Next.js interfaces.</li><li>Used testing tools including JUnit, Mockito, Selenium, and Pytest.</li></ul></article><article className="panel job"><small>2019 — 2023</small><h3>B.E. Computer Science & Engineering</h3><label>Bachelor of Engineering</label><p>Foundation in computer science and software development.</p></article></div></section>
 <section id="contact" className="contact"><small>HAVE A PROJECT OR OPPORTUNITY?</small><h2>Let's build something<br/><span>meaningful together.</span></h2><p>I'm open to connecting with engineers, recruiters, and teams building useful software.</p><div className="actions"><a className="primary" href={'mailto:'+profile.email}><Mail size={16}/> Email me</a><a className="secondary" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn</a><a className="secondary" href={profile.github} target="_blank" rel="noreferrer"><Github size={16}/> GitHub</a></div><div className="contactmeta"><MapPin size={15}/> Bengaluru, India · Open to relevant software engineering opportunities</div></section>
 </main><footer><a className="brand" href="#home">Shashank C J<span>.</span></a><p>Designed with care · Built with React</p><a href="#home">Back to top ↑</a></footer></div>
}
createRoot(document.getElementById('root')).render(<App/>);
