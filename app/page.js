"use client";

import { useState } from "react";

const navItems = [
  ["Overview", "#home"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Skills", "#skills"],
  ["Contact", "#contact"]
];

const experiences = [
  {
    company: "Comprehensive Cloud Technologies Pvt. Ltd.",
    role: "Software Developer",
    period: "May 2022 — Present",
    status: "CURRENT",
    description: "Designing and delivering Zoho CRM, ERP and business automation solutions from requirements through implementation, integration, training and support.",
    tags: ["Zoho CRM", "Creator", "Deluge", "SAP CPI"]
  },
  {
    company: "WHOR Parking System Pvt. Ltd.",
    role: "Contract Engagement",
    period: "Current",
    status: "ACTIVE",
    description: "Building a connected automation platform across Zoho CRM, Creator and Procurement with custom modules, workflows, approvals, integrations and reporting.",
    tags: ["CRM", "Creator", "Procurement", "Automation"]
  },
  {
    company: "Spazio Interior · Panchshil Group",
    role: "CRM & Integration Project",
    period: "Client Project",
    status: "DELIVERED",
    description: "Implemented and customized Zoho CRM with SAP CPI integration, store-level access, quotation automation and opportunity follow-up controls.",
    tags: ["Zoho CRM", "SAP CPI", "Product Master"]
  }
];

const projects = [
  {
    number: "01",
    title: "Spazio CRM Transformation",
    type: "CRM + SAP INTEGRATION",
    description: "A connected CRM ecosystem for store operations, SAP product data, quotation processes, lead automation and opportunity follow-up.",
    metrics: [["09", "Key deliveries"], ["CRM", "Core platform"], ["SAP", "Connected"]]
  },
  {
    number: "02",
    title: "Catering Operations ERP",
    type: "ZOHO CREATOR ERP",
    description: "Custom ERP covering end-to-end catering operations and workforce processes, supported by CRM, Books and Inventory.",
    metrics: [["ERP", "Custom built"], ["CRM", "Connected"], ["Books", "Integrated"]]
  },
  {
    number: "03",
    title: "Operational Visibility",
    type: "ANALYTICS + AUTOMATION",
    description: "Industry-specific reports, dashboards and workflows moving teams from manual tracking to structured operational visibility.",
    metrics: [["15+", "Capabilities"], ["BI", "Reporting"], ["Flow", "Automation"]]
  }
];

const spazio = [
  "Zoho CRM implementation & customization",
  "Zoho CRM → SAP CPI integration",
  "Product master integration with SAP",
  "Lead management automation",
  "Store-wise CRM data access",
  "Quotation & discount automation",
  "Opportunity overdue alert system",
  "Client Scripts & Deluge automation",
  "CRM workflow & approval automation"
];

const whor = [
  "Zoho CRM implementation & business process automation",
  "Zoho Creator application development",
  "Zoho Procurement configuration & automation",
  "CRM–Creator data integration",
  "Custom business modules & forms",
  "CRM Client Scripts & Deluge customization",
  "Procurement workflow & approval automation",
  "Custom reports & dashboards",
  "Cross-application Zoho automation",
  "Business process digitization"
];

const stack = [
  "Zoho CRM", "Zoho Creator", "Zoho Books", "Zoho Inventory", "Zoho Procurement",
  "Zoho Analytics", "Zoho Desk", "Zoho Flow", "Deluge", "JavaScript",
  "HTML", "CSS", "REST APIs", "SAP CPI", "Power BI"
];

export default function Home() {
  const [menu, setMenu] = useState(false);

  return (
    <main className="dashboard">
      <aside className={menu ? "sidebar mobileOpen" : "sidebar"}>
        <a className="brand" href="#home" onClick={() => setMenu(false)}>
          <span className="brandMark">EP</span>
          <span className="brandText">Eknath Patil<small>ZOHO DEVELOPER</small></span>
        </a>

        <div className="sideProfile">
          <div className="avatar">EP</div>
          <div><strong>Software Developer</strong><span>CRM & Automation</span></div>
          <i></i>
        </div>

        <nav className="sideNav">
          <small className="navCaption">WORKSPACE</small>
          {navItems.map(([label, href], index) => (
            <a key={label} href={href} onClick={() => setMenu(false)} className={index === 0 ? "active" : ""}>
              <span>{["⌂", "◫", "◆", "▦", "↗"][index]}</span>{label}
            </a>
          ))}
        </nav>

        <div className="sideBottom">
          <div className="availability"><i></i><div><strong>Available for projects</strong><span>India · IST</span></div></div>
          <a className="sideMail" href="mailto:Patileknath406@gmail.com">Patileknath406@gmail.com</a>
        </div>
      </aside>

      {menu && <button className="mobileBackdrop" onClick={() => setMenu(false)} aria-label="Close menu" />}

      <section className="mainArea">
        <header className="topbar">
          <button className="menuBtn" onClick={() => setMenu(!menu)} aria-label="Toggle navigation">☰</button>
          <div className="crumb"><span>Portfolio</span><b>/</b><strong>Overview</strong></div>
          <div className="topActions">
            <a href="mailto:Patileknath406@gmail.com">Email me <span>↗</span></a>
            <a href="#contact" className="topContact">Let&apos;s talk</a>
          </div>
        </header>

        <div className="content">
          <section id="home" className="welcome panel">
            <div className="welcomeCopy">
              <div className="eyebrow"><i></i> ZOHO CERTIFIED SOFTWARE DEVELOPER</div>
              <h1>CRM systems.<br /><em>Automated.</em></h1>
              <p>I design practical CRM, ERP and integration solutions that turn complex business processes into connected, automated workflows.</p>
              <div className="welcomeActions">
                <a href="#projects" className="dashBtn primary">View my work <span>↗</span></a>
                <a href="#experience" className="dashBtn">My experience</a>
              </div>
            </div>
            <div className="welcomeVisual">
              <div className="visualGlow"></div>
              <div className="miniFlow">
                <div><span>CRM</span><small>Business data</small></div><b>→</b>
                <div><span>Automation</span><small>Deluge + Flow</small></div><b>→</b>
                <div><span>SAP</span><small>Connected</small></div>
              </div>
              <div className="visualFooter"><span>PROCESS STATUS</span><strong><i></i> ALL SYSTEMS CONNECTED</strong></div>
            </div>
          </section>

          <section className="statsRow">
            <div className="statCard"><span>01</span><strong>3+</strong><small>Years experience</small><em>↗</em></div>
            <div className="statCard"><span>02</span><strong>15+</strong><small>Zoho capabilities</small><em>↗</em></div>
            <div className="statCard"><span>03</span><strong>4+</strong><small>Industry domains</small><em>↗</em></div>
            <div className="statCard accent"><span>04</span><strong>Zoho</strong><small>Certified developer</small><em>✓</em></div>
          </section>

          <section id="experience" className="dashboardSection">
            <div className="sectionToolbar"><div><span className="sectionKicker">01 / EXPERIENCE</span><h2>Professional journey</h2></div><span className="sectionHint">Implementation · Integration · Automation</span></div>
            <div className="experienceList">
              {experiences.map((item) => (
                <article className="experienceItem" key={item.company}>
                  <div className="expIndex">0{experiences.indexOf(item) + 1}</div>
                  <div className="expMain"><div className="expMeta"><span>{item.period}</span><i>{item.status}</i></div><h3>{item.company}</h3><h4>{item.role}</h4><p>{item.description}</p><div className="tagList">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
                  <span className="expArrow">↗</span>
                </article>
              ))}
            </div>
          </section>

          <section id="projects" className="dashboardSection">
            <div className="sectionToolbar"><div><span className="sectionKicker">02 / FEATURED WORK</span><h2>Selected projects</h2></div><span className="sectionHint">Real business problems · Practical solutions</span></div>
            <div className="projectGrid">
              {projects.map(project => (
                <article className="dashProject" key={project.number}>
                  <div className="projectTop"><span>{project.number}</span><small>{project.type}</small></div>
                  <h3>{project.title}</h3><p>{project.description}</p>
                  <div className="metricStrip">{project.metrics.map(([value, label]) => <div key={label}><b>{value}</b><span>{label}</span></div>)}</div>
                </article>
              ))}
            </div>

            <div className="deliveryPanel">
              <div className="deliveryHeader"><div><span className="sectionKicker">SPAZIO INTERIOR</span><h3>Delivery map</h3></div><span>09 DELIVERABLES</span></div>
              <div className="deliveryGrid">{spazio.map((x, i) => <div key={x}><strong>{String(i + 1).padStart(2, "0")}</strong><span>{x}</span></div>)}</div>
            </div>

            <div className="deliveryPanel whorPanel">
              <div className="deliveryHeader"><div><span className="sectionKicker">CURRENT ENGAGEMENT</span><h3>WHOR Parking System</h3></div><span>10 DELIVERABLES</span></div>
              <div className="deliveryGrid">{whor.map((x, i) => <div key={x}><strong>{String(i + 1).padStart(2, "0")}</strong><span>{x}</span></div>)}</div>
            </div>
          </section>

          <section id="skills" className="dashboardSection">
            <div className="sectionToolbar"><div><span className="sectionKicker">03 / TECHNICAL TOOLKIT</span><h2>Tools I work with</h2></div><span className="sectionHint">Low-code · APIs · Integration</span></div>
            <div className="skillsPanel">
              {stack.map((item, i) => <div className="skillItem" key={item}><small>{String(i + 1).padStart(2, "0")}</small><strong>{item}</strong><span>+</span></div>)}
            </div>
            <div className="certRow">
              <div><span>01</span><strong>Zoho Creator</strong><small>Certified</small></div>
              <div><span>02</span><strong>Microsoft Power BI</strong><small>Certification</small></div>
              <div><span>03</span><strong>Cybersecurity by Google</strong><small>Certification</small></div>
            </div>
          </section>

          <section className="dashboardSection aboutDash">
            <div className="sectionToolbar"><div><span className="sectionKicker">04 / ABOUT</span><h2>Business-first technology</h2></div></div>
            <div className="aboutGrid">
              <p>I&apos;m a Zoho Certified Software Developer with 3+ years of experience designing, implementing and integrating CRM and ERP systems across catering, supply chain, interior design and parking-infrastructure environments.</p>
              <p>My focus is connecting business requirements with low-code solutions using Zoho CRM, Creator, Books, Inventory, Procurement, Deluge, Client Scripts, workflows and SAP CPI integrations.</p>
            </div>
          </section>

          <section id="contact" className="contactDash">
            <div><span className="sectionKicker">05 / CONTACT</span><h2>Have a process<br /><em>worth automating?</em></h2><p>Let&apos;s discuss CRM, ERP, integrations or a workflow that can be made simpler.</p></div>
            <div className="contactButtons"><a href="mailto:Patileknath406@gmail.com">Patileknath406@gmail.com <span>↗</span></a><a href="tel:+917338255474">+91 73382 55474 <span>↗</span></a></div>
          </section>

          <footer className="dashFooter"><span>EP<span>.</span> · CRM · AUTOMATION · INTEGRATION</span><small>© {new Date().getFullYear()} Eknath Patil</small></footer>
        </div>
      </section>
    </main>
  );
}
