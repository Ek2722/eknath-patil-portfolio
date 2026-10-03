"use client";

import { useState } from "react";

const experiences = [
  {
    company: "Comprehensive Cloud Technologies Pvt. Ltd.",
    role: "Software Developer",
    period: "May 2022 — Present",
    current: true,
    text: "Designing and delivering Zoho-based CRM, ERP and business automation solutions, from requirements gathering through implementation, integration, training and support.",
    tags: ["Zoho CRM", "Zoho Creator", "Deluge", "SAP CPI", "Automation"]
  },
  {
    company: "WHOR Parking System Pvt. Ltd.",
    role: "Contract Engagement",
    period: "Current",
    current: true,
    text: "Building a multi-application Zoho automation platform across CRM, Creator and Procurement with custom modules, workflows, approvals, integrations and reporting.",
    tags: ["CRM", "Creator", "Procurement", "Workflows", "Dashboards"]
  },
  {
    company: "Spazio Interior · Panchshil Group",
    role: "CRM & Integration Project",
    period: "Client Project",
    text: "Implemented and customized Zoho CRM with SAP CPI integration, store-level access, quotation automation and opportunity follow-up controls.",
    tags: ["Zoho CRM", "SAP CPI", "Product Master", "Retail CRM"]
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
  "Zoho CRM", "Zoho Creator", "Zoho Books", "Zoho Inventory",
  "Zoho Procurement", "Zoho Analytics", "Zoho Desk", "Zoho Flow",
  "Deluge", "JavaScript", "HTML", "CSS", "REST APIs", "SAP CPI", "Power BI"
];

export default function Home() {
  const [menu, setMenu] = useState(false);

  return (
    <main>
      <header className="nav">
        <a className="brand" href="#home">EP<span>.</span></a>
        <button className="menuBtn" onClick={() => setMenu(!menu)} aria-label="Toggle navigation">☰</button>
        <nav className={menu ? "navLinks open" : "navLinks"}>
          <a href="#about" onClick={() => setMenu(false)}>About</a>
          <a href="#experience" onClick={() => setMenu(false)}>Experience</a>
          <a href="#projects" onClick={() => setMenu(false)}>Projects</a>
          <a href="#skills" onClick={() => setMenu(false)}>Skills</a>
          <a href="#contact" className="navCta" onClick={() => setMenu(false)}>Contact</a>
        </nav>
      </header>

      <section id="home" className="hero section">
        <div className="heroGrid">
          <div className="heroCopy">
            <div className="eyebrow"><span className="pulse"></span> ZOHO CERTIFIED SOFTWARE DEVELOPER</div>
            <h1>Eknath<br /><em>Patil.</em></h1>
            <p className="heroLead">CRM &amp; Business Process Automation Specialist</p>
            <p className="heroText">
              I design practical CRM and ERP solutions that turn complex business processes
              into connected, automated workflows.
            </p>
            <div className="actions">
              <a href="#projects" className="btn primary">Explore my work <span>↗</span></a>
              <a href="#contact" className="btn secondary">Let&apos;s connect</a>
            </div>
            <div className="heroTags">
              <span>Zoho CRM</span><span>Deluge</span><span>SAP CPI</span><span>Automation</span>
            </div>
          </div>

          <div className="heroVisual">
            <div className="orbit orbit1"></div>
            <div className="orbit orbit2"></div>
            <div className="codeCard">
              <div className="codeTop"><span></span><span></span><span></span><small>automation.deluge</small></div>
              <pre>{`function automateProcess(record)
{
    crm = zoho.crm;
    data = crm.getRecordById(
        "Deals", record
    );

    if(data.get("Closing_Date")
       < zoho.currentdate)
    {
        // automate follow-up
        // notify owner
    }

    return "Process automated";
}`}</pre>
              <div className="codeStatus"><i></i> workflow executed successfully</div>
            </div>
            <div className="floatCard topCard"><b>3+</b><span>Years experience</span></div>
            <div className="floatCard bottomCard"><b>Zoho</b><span>CRM · Creator · Books</span></div>
          </div>
        </div>
      </section>

      <section id="about" className="section about">
        <div className="sectionLabel">01 / ABOUT</div>
        <div className="twoCol">
          <div>
            <h2>Technology should<br /><span>solve the business.</span></h2>
          </div>
          <div className="aboutText">
            <p>
              I&apos;m a Zoho Certified Software Developer with 3+ years of experience
              designing, implementing and integrating CRM and ERP systems across catering,
              supply chain, interior design and parking-infrastructure environments.
            </p>
            <p>
              My strength is connecting business requirements with low-code solutions —
              using Zoho CRM, Creator, Books, Inventory, Procurement, Deluge, Client Scripts,
              workflows and SAP CPI integrations.
            </p>
            <div className="stats">
              <div><b>3+</b><span>Years experience</span></div>
              <div><b>15+</b><span>Zoho capabilities</span></div>
              <div><b>4+</b><span>Industry domains</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="section">
        <div className="sectionLabel">02 / EXPERIENCE</div>
        <div className="sectionHead">
          <h2>Building systems<br /><span>that work together.</span></h2>
          <p>From implementation and customization to integrations, automation and post-launch support.</p>
        </div>
        <div className="experienceGrid">
          {experiences.map((item) => (
            <article className="expCard" key={item.company}>
              <div className="cardMeta"><span>{item.period}</span>{item.current && <i>● Current</i>}</div>
              <h3>{item.company}</h3>
              <h4>{item.role}</h4>
              <p>{item.text}</p>
              <div className="tagList">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section projects">
        <div className="sectionLabel">03 / FEATURED WORK</div>
        <div className="projectHero">
          <div>
            <span className="projectNumber">01</span>
            <h2>Spazio CRM<br /><em>Transformation</em></h2>
            <p>
              A connected CRM ecosystem integrating store operations, SAP product data,
              quotation processes, lead automation and opportunity follow-up.
            </p>
          </div>
          <div className="projectVisual">
            <div className="flow"><span>CRM</span><b>→</b><span>SAP CPI</span><b>→</b><span>SAP</span></div>
            <div className="flow second"><span>Leads</span><b>→</b><span>Automation</span><b>→</b><span>Deals</span></div>
          </div>
        </div>

        <div className="deliveryBlock">
          <h3>Spazio delivery map</h3>
          <div className="deliveryGrid">
            {spazio.map((x, i) => <div key={x}><strong>{String(i + 1).padStart(2, "0")}</strong><span>{x}</span></div>)}
          </div>
        </div>

        <div className="projectCards">
          <article className="projectCard">
            <span className="projectNumber">02</span>
            <h3>Catering Operations ERP</h3>
            <p>Custom Zoho Creator ERP covering end-to-end catering operations and workforce processes, supported by CRM, Books and Inventory.</p>
            <div className="tagList"><span>Zoho Creator</span><span>ERP</span><span>Zoho Books</span></div>
          </article>
          <article className="projectCard">
            <span className="projectNumber">03</span>
            <h3>Operational Visibility</h3>
            <p>Industry-specific reports, dashboards and business workflows that help teams move from manual tracking to structured operational visibility.</p>
            <div className="tagList"><span>Analytics</span><span>Dashboards</span><span>Automation</span></div>
          </article>
        </div>

        <div className="deliveryBlock whorBlock">
          <h3>Current engagement · WHOR Parking System</h3>
          <p className="blockIntro">A cross-application Zoho automation platform spanning CRM, Creator and Procurement.</p>
          <div className="deliveryGrid">
            {whor.map((x, i) => <div key={x}><strong>{String(i + 1).padStart(2, "0")}</strong><span>{x}</span></div>)}
          </div>
        </div>
      </section>

      <section id="skills" className="section skills">
        <div className="sectionLabel">04 / TOOLKIT</div>
        <div className="sectionHead">
          <h2>My technical<br /><span>toolkit.</span></h2>
        </div>
        <div className="stackGrid">
          {stack.map((item, i) => <div className="stackItem" key={item}><small>{String(i + 1).padStart(2, "0")}</small><b>{item}</b></div>)}
        </div>
        <div className="certGrid">
          <div className="cert"><span>01</span><div><b>Zoho Creator</b><small>Certified</small></div></div>
          <div className="cert"><span>02</span><div><b>Microsoft Power BI</b><small>Certification</small></div></div>
          <div className="cert"><span>03</span><div><b>Cybersecurity by Google</b><small>Certification</small></div></div>
        </div>
      </section>

      <section className="section education">
        <div className="sectionLabel">05 / EDUCATION</div>
        <div className="educationRow">
          <div><span>Diploma</span><h3>Electronics &amp; Communication Engineering</h3><p>Jawaharlal Nehru Polytechnic, T. Kushanoor</p></div>
          <div><span>PUC</span><h3>Pre-University Course</h3><p>Shivaji College, Bhalki</p></div>
          <div><span>SSLC</span><h3>Secondary School</h3><p>Jyoti High School, T. Kushanoor</p></div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <div className="contactBox">
          <div className="sectionLabel">06 / CONTACT</div>
          <h2>Have a process<br /><em>worth automating?</em></h2>
          <p>Let&apos;s discuss CRM, ERP, integrations or a business workflow that can be made simpler.</p>
          <div className="contactLinks">
            <a href="mailto:Patileknath406@gmail.com">Patileknath406@gmail.com ↗</a>
            <a href="tel:+917338255474">+91 73382 55474 ↗</a>
          </div>
        </div>
      </section>

      <footer>
        <div><b>EP<span>.</span></b><small>CRM · AUTOMATION · INTEGRATION</small></div>
        <p>© {new Date().getFullYear()} Eknath Patil. Built with purpose.</p>
      </footer>
    </main>
  );
}
