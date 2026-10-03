"use client";

import { useState } from "react";

const navItems = [["Overview","#home"],["Experience","#experience"],["Projects","#projects"],["Expertise","#expertise"],["Education","#education"],["Contact","#contact"]];

const experiences = [
{company:"Comprehensive Cloud Technologies Pvt. Ltd.",role:"Software Developer",period:"May 2022 — Present",status:"CURRENT",description:"Designing and delivering Zoho CRM, ERP and business automation solutions across discovery, solution design, implementation, integration, training and support.",impact:"Translate business requirements into practical low-code architecture, automate repetitive operations and connect business applications into dependable workflows.",tags:["Zoho CRM","Creator","Deluge","SAP CPI"]},
{company:"WHOR Parking System Pvt. Ltd.",role:"Business Automation Consultant · Contract",period:"Current",status:"ACTIVE",description:"Building a connected Zoho environment across CRM, Creator and Procurement for parking-infrastructure operations, including custom modules, forms, approvals, integrations and reporting.",impact:"Digitizing operational processes from data capture and validation through approvals, cross-application automation and management visibility.",tags:["CRM","Creator","Procurement","Automation"]},
{company:"Spazio Interior · Panchshil Group",role:"CRM & Integration Project",period:"Client Project",status:"DELIVERED",description:"Implemented and customized Zoho CRM with SAP CPI integration, product master synchronization, store-level access, lead automation, quotation controls and opportunity follow-up.",impact:"Connected CRM and SAP processes while creating a more structured operating model for multi-store sales teams.",tags:["Zoho CRM","SAP CPI","Product Master"]},
{company:"Fineshift",role:"CRM Implementation & Integration Project",period:"Client Project",status:"DELIVERED",description:"Delivered Zoho CRM implementation and CRM → Zoho Books integration to connect customer management, sales activity and finance operations.",impact:"Established a connected CRM-to-books workflow and supported configuration, integration and user adoption.",tags:["Zoho CRM","Zoho Books","Integration"]},
{company:"Catalyst Support Services Pvt. Ltd.",role:"Zoho Business Applications Project",period:"Client Project",status:"DELIVERED",description:"Developed a custom Zoho Creator ERP for end-to-end catering operations and workforce processes, supported by CRM, Zoho Books and Inventory.",impact:"Digitized operational workflows and connected customer, workforce, inventory and finance processes within a unified application landscape.",tags:["Creator ERP","CRM","Books","Inventory"]},
{company:"Rurban India Pvt. Ltd.",role:"Zoho Books & Inventory Project",period:"Client Project",status:"DELIVERED",description:"Configured Zoho Books and Inventory with tailored roles, workflows and industry-specific reporting, including daily operational dashboards in Zoho Analytics.",impact:"Improved operational visibility through structured workflows, role-based access and business-focused analytics.",tags:["Books","Inventory","Analytics"]}
];

const projects = [
{number:"01",title:"Spazio CRM Transformation",type:"CRM + SAP INTEGRATION",description:"A multi-store CRM transformation covering lead management, store-wise data access, product master synchronization, quotation and discount controls, approvals and overdue opportunity monitoring.",metrics:[["09","Core deliverables"],["CRM","Primary platform"],["SAP","CPI connected"]]},
{number:"02",title:"Catering Operations ERP",type:"ZOHO CREATOR ERP",description:"A custom operational ERP for catering and workforce processes, with CRM, Books and Inventory supporting customer, commercial and operational workflows.",metrics:[["ERP","Custom built"],["CRM","Connected"],["3","Zoho apps"]]},
{number:"03",title:"Fineshift CRM + Books",type:"CRM + FINANCE INTEGRATION",description:"CRM implementation integrated with Zoho Books to connect customer records and sales activity with downstream finance processes.",metrics:[["CRM","Implemented"],["Books","Integrated"],["E2E","Connected flow"]]},
{number:"04",title:"Parking Operations Platform",type:"CRM + CREATOR + PROCUREMENT",description:"A multi-application automation environment for parking operations, combining CRM, Creator and Procurement with forms, approvals, integrations, reports and dashboards.",metrics:[["10","Delivery areas"],["3","Zoho apps"],["BI","Reporting"]]}
];

const services = [
["01","CRM Implementation","Architecture, module design, fields, layouts, roles, sharing, workflows and user journeys aligned to the business process."],
["02","Business Process Automation","Replace repetitive manual work with workflow rules, approvals, alerts, scheduled actions and exception handling."],
["03","Zoho Creator Development","Build custom applications, modules, forms, pages and operational tools when standard CRM configuration is not enough."],
["04","Integration Architecture","Connect Zoho applications, SAP CPI and REST APIs with structured data mapping and controlled system-to-system flows."],
["05","Deluge & Client Scripts","Extend platform behavior with custom functions, validations, field logic, automation and guided user experiences."],
["06","Reporting & Analytics","Turn operational data into practical reports, dashboards and management views using Zoho Analytics and Power BI."]
];

const deliveryFocus = [
["01","DISCOVER","Understand users, bottlenecks, approvals, data and business rules before choosing the solution."],
["02","DESIGN","Map modules, relationships, permissions, automation and integrations into a scalable process."],
["03","BUILD","Configure Zoho, develop Deluge and Client Scripts, create custom applications and connect systems."],
["04","VALIDATE","Test business scenarios, exceptions, data movement and role-based user journeys."],
["05","ENABLE","Train users, document processes and support adoption so the solution works beyond go-live."]
];

const spazio=["Zoho CRM implementation & customization","Zoho CRM → SAP CPI integration","Product master integration with SAP","Lead management automation","Store-wise CRM data access","Quotation & discount automation","Opportunity overdue alert system","Client Scripts & Deluge automation","CRM workflow & approval automation"];
const whor=["Zoho CRM implementation & business process automation","Zoho Creator application development","Zoho Procurement configuration & automation","CRM–Creator data integration","Custom business modules & forms","CRM Client Scripts & Deluge customization","Procurement workflow & approval automation","Custom reports & dashboards","Cross-application Zoho automation","Business process digitization"];
const stack=["Zoho CRM","Zoho Creator","Zoho Books","Zoho Inventory","Zoho Procurement","Zoho Analytics","Zoho Desk","Zoho Flow","Deluge","JavaScript","HTML","CSS","REST APIs","SAP CPI","Power BI"];

export default function Home(){
 const [menu,setMenu]=useState(false);
 return <main className="dashboard">
  <aside className={menu?"sidebar mobileOpen":"sidebar"}>
   <a className="brand" href="#home" onClick={()=>setMenu(false)}><span className="brandMark">EP</span><span className="brandText">Eknath Patil<small>ZOHO DEVELOPER</small></span></a>
   <div className="sideProfile"><div className="avatar">EP</div><div><strong>Zoho Developer</strong><span>Business Automation</span></div><i/></div>
   <nav className="sideNav"><small className="navCaption">WORKSPACE</small>{navItems.map(([label,href],i)=><a key={label} href={href} onClick={()=>setMenu(false)} className={i===0?"active":""}><span>{["⌂","◫","◆","▦","◎","↗"][i]}</span>{label}</a>)}</nav>
   <div className="sideBottom"><div className="availability"><i/><div><strong>Available for projects</strong><span>India · IST</span></div></div><a className="sideMail" href="mailto:Patileknath406@gmail.com">Patileknath406@gmail.com</a></div>
  </aside>
  {menu&&<button className="mobileBackdrop" onClick={()=>setMenu(false)} aria-label="Close menu"/>}
  <section className="mainArea">
   <header className="topbar"><button className="menuBtn" onClick={()=>setMenu(!menu)} aria-label="Toggle navigation">☰</button><div className="crumb"><span>Portfolio</span><b>/</b><strong>Overview</strong></div><div className="topActions"><a href="mailto:Patileknath406@gmail.com">Email me <span>↗</span></a><a href="#contact" className="topContact">Let&apos;s talk</a></div></header>
   <div className="content">
    <section id="home" className="welcome panel">
      <div className="welcomeCopy"><div className="eyebrow"><i/> ZOHO CERTIFIED SOFTWARE DEVELOPER</div><h1>CRM systems.<br/><em>Built around business.</em></h1><p>I design and automate CRM, ERP and connected business systems — turning real operational requirements into structured workflows, integrations and applications teams can use every day.</p><div className="welcomeActions"><a href="#projects" className="dashBtn primary">Explore my work <span>↗</span></a><a href="#contact" className="dashBtn">Start a conversation</a></div><div className="heroTrust"><span>FOCUS</span><b>CRM</b><i/> <b>Automation</b><i/> <b>Integration</b><i/> <b>Analytics</b></div></div>
      <div className="welcomeVisual"><div className="visualGrid"/><div className="orbit orbitOne"/><div className="orbit orbitTwo"/><div className="core"><span>EP</span><small>SYSTEMS<br/>DESIGN</small></div><div className="flowLabel labelA">CRM <small>DATA</small></div><div className="flowLabel labelB">AUTOMATION <small>LOGIC</small></div><div className="flowLabel labelC">INTEGRATION <small>CONNECT</small></div><div className="visualFooter"><span>DELIVERY MODEL</span><strong><i/> PROCESS • BUILD • CONNECT</strong></div></div>
    </section>

    <section className="statsRow"><div className="statCard"><span>01</span><strong>3+</strong><small>Years experience</small><em>↗</em></div><div className="statCard"><span>02</span><strong>15+</strong><small>Platforms & tools</small><em>↗</em></div><div className="statCard"><span>03</span><strong>6</strong><small>Business environments</small><em>↗</em></div><div className="statCard accent"><span>04</span><strong>Zoho</strong><small>Certified developer</small><em>✓</em></div></section>

    <section id="experience" className="dashboardSection"><div className="sectionToolbar"><div><span className="sectionKicker">01 / EXPERIENCE</span><h2>Professional journey</h2><p className="sectionIntro">From implementation and integration to business-process automation, each engagement starts with the operating problem — not just the software.</p></div><span className="sectionHint">DISCOVER · DESIGN · DELIVER</span></div><div className="experienceList">{experiences.map((x,i)=><article className="experienceItem" key={x.company}><div className="expIndex">{String(i+1).padStart(2,"0")}</div><div className="expMain"><div className="expMeta"><span>{x.period}</span><i>{x.status}</i></div><h3>{x.company}</h3><h4>{x.role}</h4><p>{x.description}</p><div className="impactLine"><b>VALUE</b><span>{x.impact}</span></div><div className="tagList">{x.tags.map(t=><span key={t}>{t}</span>)}</div></div><span className="expArrow">↗</span></article>)}</div></section>

    <section id="projects" className="dashboardSection"><div className="sectionToolbar"><div><span className="sectionKicker">02 / FEATURED WORK</span><h2>Selected solutions</h2><p className="sectionIntro">A portfolio of CRM, ERP, integration and automation work across different operating environments.</p></div><span className="sectionHint">REAL REQUIREMENTS · CONNECTED SYSTEMS</span></div><div className="projectGrid">{projects.map(p=><article className="dashProject" key={p.number}><div className="projectTop"><span>{p.number}</span><small>{p.type}</small></div><h3>{p.title}</h3><p>{p.description}</p><div className="metricStrip">{p.metrics.map(([v,l])=><div key={l}><b>{v}</b><span>{l}</span></div>)}</div></article>)}</div>
      <div className="deliveryPanel"><div className="deliveryHeader"><div><span className="sectionKicker">SPAZIO INTERIOR · PANCHSHIL GROUP</span><h3>CRM transformation delivery</h3><p>Implementation, integration and automation across the sales and product lifecycle.</p></div><span>09 DELIVERABLES</span></div><div className="deliveryGrid">{spazio.map((x,i)=><div key={x}><strong>{String(i+1).padStart(2,"0")}</strong><span>{x}</span></div>)}</div></div>
      <div className="deliveryPanel whorPanel"><div className="deliveryHeader"><div><span className="sectionKicker">CURRENT ENGAGEMENT</span><h3>WHOR Parking System</h3><p>Connected CRM, Creator and Procurement workflow for operational digitization.</p></div><span>10 DELIVERABLES</span></div><div className="deliveryGrid">{whor.map((x,i)=><div key={x}><strong>{String(i+1).padStart(2,"0")}</strong><span>{x}</span></div>)}</div></div>
    </section>


    <section id="expertise" className="dashboardSection"><div className="sectionToolbar"><div><span className="sectionKicker">05 / EXPERTISE</span><h2>What I build</h2><p className="sectionIntro">Hands-on delivery across Zoho configuration, custom development, integration and analytics.</p></div><span className="sectionHint">CONFIGURE · CUSTOMIZE · CONNECT</span></div><div className="serviceGrid">{services.map(([n,t,d])=><article className="serviceCard" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p><b>Explore capability ↗</b></article>)}</div><div className="skillsPanel">{stack.map((x,i)=><div className="skillItem" key={x}><small>{String(i+1).padStart(2,"0")}</small><strong>{x}</strong><span>+</span></div>)}</div><div className="certRow"><div><span>01</span><strong>Zoho Creator</strong><small>Certified</small></div><div><span>02</span><strong>Microsoft Power BI</strong><small>Certification</small></div><div><span>03</span><strong>Cybersecurity by Google</strong><small>Certification</small></div></div></section>

    <section id="education" className="dashboardSection educationSection"><div className="sectionToolbar"><div><span className="sectionKicker">06 / EDUCATION</span><h2>Education & certifications</h2><p className="sectionIntro">An engineering foundation complemented by practical platform certifications and continuous technical learning.</p></div><span className="sectionHint">FOUNDATION · LEARNING</span></div><div className="educationGrid"><article><span>01</span><div><small>Diploma</small><h3>Electronics & Communication Engineering</h3><p>Jawaharlal Nehru Polytechnic, T. Kushanoor</p></div></article><article><span>02</span><div><small>PUC</small><h3>Pre-University Course</h3><p>Shivaji College, Bhalki</p></div></article><article><span>03</span><div><small>SSLC</small><h3>Secondary School</h3><p>Jyoti High School, T. Kushanoor</p></div></article></div></section>

    <section className="dashboardSection aboutDash"><div className="sectionToolbar"><div><span className="sectionKicker">07 / PROFILE</span><h2>Business-first technology</h2></div></div><div className="aboutGrid"><div><span className="aboutLead">I bridge business requirements and practical technology.</span><p>My work spans catering, supply chain, interior design and parking-infrastructure environments, where every implementation has different users, rules, data and operating constraints.</p></div><div><span className="aboutLead">The outcome I design for is clarity.</span><p>Clear data ownership, predictable workflows, connected applications, useful reporting and interfaces that help teams complete work with less friction.</p></div></div></section>

    <section id="contact" className="contactDash"><div><span className="sectionKicker">08 / CONTACT</span><h2>Have a process<br/><em>worth automating?</em></h2><p>CRM implementation, Zoho automation, Creator apps, integrations or business workflow optimization.</p></div><div className="contactButtons"><a href="mailto:Patileknath406@gmail.com"><span>Email</span>Patileknath406@gmail.com <b>↗</b></a><a href="tel:+917338255474"><span>Phone</span>+91 73382 55474 <b>↗</b></a></div></section>
    <footer className="dashFooter"><span>EP<span>.</span> · ZOHO DEVELOPER · BUSINESS AUTOMATION</span><small>© {new Date().getFullYear()} Eknath Patil</small></footer>
   </div>
  </section>
 </main>;
}
