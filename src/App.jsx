// Haris Portfolio — safe build
// Tailwind must be configured; content should render even without Tailwind.

const projects = [
  {
    title: "Cloud-Based ETL & Reporting System",
    blurb: "Python + FastAPI validation → PostgreSQL & Snowflake; BI-ready outputs.",
    stack: ["Python", "FastAPI", "PostgreSQL", "Snowflake"],
    link: "https://github.com/Haris294",
  },
  {
    title: "Azure Data Pipelines & Migration",
    blurb: "ADF pipelines to Data Lake; SSIS → ADF/Databricks migration.",
    stack: ["Azure ADF", "Databricks", "Azure Data Lake", "SSIS"],
    link: "https://github.com/Haris294",
  },
  {
    title: "Django REST Integrations for Finance",
    blurb: "DRF APIs, Pytest coverage, PowerShell deployment automation.",
    stack: ["Django REST", "PostgreSQL", "Pytest", "PowerShell"],
    link: "https://github.com/Haris294",
  },
  {
    title: "Telecom Analytics ETL (High-Volume)",
    blurb: "SQL/Python ETL, validation/profiling, marts with tuned indexes/partitioning.",
    stack: ["SQL", "Python", "Data Marts", "Optimization"],
    link: "https://github.com/Haris294",
  },
];

const skills = [
  "Python","SQL","PySpark","Shell Scripting","C++ (familiar)",".NET (familiar)",
  "Azure Data Factory (ADF)","Azure Databricks","SSIS","Snowflake","ETL/ELT",
  "Data Modeling (Star/Snowflake)","Data Quality & Profiling","Metadata & Lineage",
  "Data Governance & Compliance","MS SQL Server","PostgreSQL","MySQL","MongoDB",
  "Redis","Azure SQL","Snowflake","Azure (ADF,Synapse,Data Lake,App Services)",
  "AWS (Lambda,ECS,S3,RDS)","Docker","Kubernetes","Helm","Terraform",
  "CI/CD (GitHub Actions, Jenkins, Azure DevOps)","Linux/Unix","Power BI",
  "Tableau (basic)","Streamlit","Jupyter Dashboards","SSRS","Pytest",
  "Unit/Integration Testing","SQL Performance Optimization","Prometheus","Grafana",
  "ELK","CloudWatch","Logging & Auditing","RBAC","OAuth2","JWT","Data Encryption",
  "Agile/Scrum","Jira","Confluence","Cross-Functional Teamwork","Peer Code Reviews",
  "Technical Mentorship",
];

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <header className="sticky top-0 z-40 backdrop-blur bg-neutral-950/70 border-b border-neutral-800">
        <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-bold tracking-tight text-lg">Haris Khan</a>
          <div className="hidden sm:flex gap-6 text-sm text-neutral-300">
            <a className="hover:text-white" href="#projects">Projects</a>
            <a className="hover:text-white" href="#skills">Skills</a>
            <a className="hover:text-white" href="#experience">Experience</a>
            <a className="hover:text-white" href="#writing">Writing</a>
            <a className="hover:text-white" href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <section id="home" className="mx-auto max-w-6xl px-4 pt-16 pb-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Data Engineer & Full-Stack Developer (Azure • ETL • Cloud Migration)
            </h1>
            <p className="mt-4 text-neutral-300">
              I build reliable data platforms and pragmatic services: ADF/Databricks pipelines,
              SQL optimization, and Python APIs — with governance, lineage, and docs that teams can trust.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#projects" className="px-5 py-2 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20">See projects</a>
              <a href="#contact" className="px-5 py-2 rounded-2xl bg-indigo-500 hover:bg-indigo-600">Contact</a>
            </div>
            <div className="mt-6 text-xs text-neutral-400">
              Toronto · Open to Data/Platform/Backend roles · Work permit active
            </div>
          </div>
          <div className="md:justify-self-end">
            <div className="aspect-square w-full max-w-sm rounded-3xl bg-gradient-to-br from-indigo-500/30 via-sky-500/20 to-fuchsia-500/20 p-[1px]">
              <div className="h-full w-full rounded-3xl bg-neutral-950 grid place-items-center">
                <span className="text-8xl">👾</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold">Featured Projects</h2>
        <p className="text-neutral-300 mt-2">Hand-picked to show breadth (data, backend, analytics).</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a key={p.title} href={p.link} target="_blank" rel="noreferrer"
               className="group rounded-3xl border border-neutral-800 hover:border-neutral-700 bg-neutral-900/40 p-5">
              <h3 className="font-semibold group-hover:text-white">{p.title}</h3>
              <p className="text-sm text-neutral-300 mt-2">{p.blurb}</p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-neutral-300">
                {p.stack.map((s) => (
                  <span key={s} className="px-2 py-1 rounded-full border border-neutral-700">{s}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold">Skills</h2>
        <p className="text-neutral-300 mt-2">Stack highlights I use to ship production systems.</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {skills.map((s) => (
            <span key={s} className="px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/60 text-sm">{s}</span>
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold">Experience</h2>
        <div className="mt-6 space-y-6">
          <Exp title="Full Stack Developer (Data Engineering) — ZINIT Consultancy" dates="May 2024 – Current"
               bullets={[
                 "Designed ADF pipelines to ingest on-prem/API data into Azure Data Lake.",
                 "Built SQL views/SPs for analytics; optimized slow queries (~40% faster).",
                 "Defined data lineage & metadata capture; assisted SSIS → ADF/Databricks migration.",
               ]}/>
          <Exp title="Deputy Manager (Data Engineering & Analytics) — Jio" dates="Oct 2022 – Apr 2024"
               bullets={[
                 "Built SQL/Python ETL for high-volume telecom data; validation & profiling.",
                 "Designed data marts; tuned indexes/partitioning & query plans.",
                 "Partnered with QA/BI to resolve discrepancies across testing & deployment.",
               ]}/>
          <Exp title="Software Engineer — RightRev" dates="Jan 2022 – Oct 2022"
               bullets={[
                 "Developed DRF APIs & PostgreSQL integrations; improved Pytest coverage.",
                 "Wrote PowerShell automation for log parsing & deployments.",
               ]}/>
          <Exp title="Software Engineer — Coforge" dates="Aug 2021 – Jan 2022"
               bullets={[
                 "Worked on IBM TPF for high-volume, low-latency airline transactions.",
                 "Supported trading data ingestion; optimized SQL for reporting; Agile contributor.",
               ]}/>
        </div>
      </section>

      <section id="writing" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold">Writing & Talks</h2>
        <p className="text-neutral-300 mt-2">Poetry by night, pipelines by day. Selected links:</p>
        <ul className="mt-4 space-y-3 text-neutral-300 text-sm">
          <li>• LinkedIn posts on data engineering, ETL design, and cloud migration.</li>
          <li>• GitHub READMEs with architecture notes, lineage, and testing strategies.</li>
          <li>• Urdu poetry series (anonymous to the world, luminous to one). ✨</li>
        </ul>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-3xl border border-neutral-800 bg-neutral-900/40 p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold">Contact</h2>
          <p className="text-neutral-300 mt-2">Open to roles, collabs, and coffee.</p>
          <div className="mt-6 grid sm:grid-cols-2 gap-4 text-sm">
            <a className="px-4 py-3 rounded-2xl border border-neutral-700 hover:border-neutral-600" href="mailto:haris294@gmail.com">haris294@gmail.com</a>
            <a className="px-4 py-3 rounded-2xl border border-neutral-700 hover:border-neutral-600" href="https://github.com/Haris294" target="_blank" rel="noreferrer">github.com/Haris294</a>
            <a className="px-4 py-3 rounded-2xl border border-neutral-700 hover:border-neutral-600" href="https://www.linkedin.com/in/haris-khan294/" target="_blank" rel="noreferrer">linkedin.com/in/haris-khan294</a>
          </div>
        </div>
        <footer className="py-10 text-center text-xs text-neutral-500">© {new Date().getFullYear()} Haris Khan · Built with React and stubborn optimism.</footer>
      </section>
    </div>
  );
}

function Exp({ title, dates, bullets }) {
  return (
    <div className="rounded-2xl border border-neutral-800 p-5 bg-neutral-900/40">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">{title}</h3>
        <span className="text-xs text-neutral-400">{dates}</span>
      </div>
      <ul className="list-disc pl-5 mt-2 text-neutral-300 text-sm space-y-1">
        {bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
    </div>
  );
}
