import React, { useState } from 'react'
import { motion } from 'framer-motion'

// Single-file React component portfolio (Tailwind + Framer Motion)
// Usage: paste into a Create React App / Next.js page or use as App.jsx

export default function AnkushPortfolio() {
  const [filter, setFilter] = useState('All')
  const projects = [
    {
      id: 1,
      title: 'SpaceX Falcon 9 First-Stage Landing Prediction',
      date: 'May 2025 - July 2025',
      summary:
        'Predictive model on 90 historical Falcon 9 launches with an 83.3% test accuracy. Built a 83-feature Python pipeline and a Plotly Dash dashboard for visualization.',
      tags: ['ML', 'Python', 'Plotly', 'Data Science'],
      repo: 'https://github.com/codertoppo/Data-Science-Project'
    },
    {
      id: 2,
      title: 'Dynamic Parking Pricing System',
      date: 'June 2025 - July 2025',
      summary:
        'Designed dynamic pricing models using real-time occupancy and rerouting suggestions to improve utilization and projected revenue.',
      tags: ['Analytics', 'Optimization', 'Python'],
      repo: 'https://github.com/codertoppo/CapstoneProject'
    },
    {
      id: 3,
      title: 'YelpCamp — Full-Stack Campground Platform',
      date: 'Mar 2025 - Aug 2025',
      summary:
        'MEN stack full CRUD app with Passport.js auth, Mapbox integration and Cloudinary image hosting; deployed with secure middleware and validation.',
      tags: ['Full-Stack', 'Node.js', 'MongoDB'],
      repo: 'https://github.com/codertoppo/YelpCamp'
    },
    {
      id: 4,
      title: 'SQL-Powered Data Warehouse for Advanced Sales Analytics',
      date: 'Aug 2025',
      summary:
        'Built a 3-tier Medallion architecture, automated ETL and optimized star schema to reduce complex query time by 60%.',
      tags: ['Data Engineering', 'SQL Server', 'ETL'],
      repo: 'https://github.com/codertoppo/SQL-DataWarehouse'
    },
    {
      id: 5,
      title: 'HR Analytics Dashboard',
      date: 'July 2025',
      summary:
        'Designed and implemented an HR analytics dashboard providing attrition insights, retention patterns and workforce demographics to support data-driven HR decisions.',
      tags: ['Analytics', 'Tableau', 'HR'],
      repo: 'https://github.com/codertoppo/HR_Analytics_Dashboard'
    },
    {
      id: 6,
      title: 'Interactive Sales Dashboard',
      date: 'July 2025',
      summary:
        'Developed an interactive sales performance dashboard using Tableau, enabling drill-down by region and product category to uncover sales opportunities.',
      tags: ['Analytics', 'Tableau', 'Visualization'],
      repo: 'https://github.com/codertoppo/Sales_Dashboard_Project'
    }
  ]

  const skills = [
    'Python',
    'SQL (T-SQL)',
    'Node.js',
    'Express',
    'MongoDB',
    'Machine Learning',
    'Scikit-Learn',
    'Data Visualization'
  ]

  const contact = {
    name: 'Ankush Jaywant Toppo',
    phone: '+91-8018172447',
    email: 'ankush.toppo@iitg.ac.in',
    altEmail: 'ankushtoppo25@gmail.com',
    linkedin: 'https://www.linkedin.com/in/ankush-toppo25/',
    github: 'https://github.com/codertoppo'
  }

  const filtered = projects.filter(p => filter === 'All' || p.tags.includes(filter))

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-100 to-indigo-200 text-slate-900 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="flex flex-col lg:flex-row items-start lg:items-center justify-between py-6 gap-4">
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">{contact.name}</h1>
            <p className="mt-1 text-sm sm:text-base text-slate-600">B.Tech — Chemical Science & Technology | IIT Guwahati</p>
            <div className="mt-3 flex flex-wrap gap-4 text-xs sm:text-sm text-slate-700">
              <a href={contact.linkedin} target="_blank" rel="noreferrer" className="underline hover:text-sky-600 transition-colors">LinkedIn</a>
              <a href={contact.github} target="_blank" rel="noreferrer" className="underline hover:text-sky-600 transition-colors">GitHub</a>
              <a href={`mailto:${contact.altEmail}`} className="underline hover:text-sky-600 transition-colors">{contact.altEmail}</a>
            </div>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="rounded-2xl p-3 sm:p-4 bg-white/70 backdrop-blur-md shadow-lg flex-shrink-0"
          >
            <p className="text-sm sm:text-base">Roll No.: 220122009</p>
            <p className="text-sm sm:text-base">Phone: {contact.phone}</p>
          </motion.div>
        </header>

        {/* Intro Card */}
        <section className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-6">
          <motion.div
            whileHover={{ y: -6 }}
            className="lg:col-span-3 p-6 sm:p-8 rounded-2xl bg-white/80 shadow-xl backdrop-blur-sm"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold">About me</h2>
            <p className="mt-3 text-slate-700 leading-relaxed text-sm sm:text-base">
              I'm an aspiring data scientist and full-stack developer pursuing a B.Tech at IIT Guwahati. I focus on building
              production-ready data pipelines, predictive models, and interactive dashboards. I love clean interfaces,
              efficient systems and building tools that surface useful insights.
            </p>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {skills.map(s => (
                <motion.span
                  key={s}
                  whileHover={{ scale: 1.06 }}
                  className="text-xs sm:text-sm py-2 px-3 rounded-lg bg-gradient-to-r from-sky-100 to-indigo-100 border border-sky-200 text-center"
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.aside whileHover={{ scale: 1.04 }} className="lg:col-span-1 p-6 sm:p-8 rounded-2xl bg-white/80 shadow-xl backdrop-blur-sm">
            <h3 className="text-lg sm:text-xl font-medium">Quick Stats</h3>
            <ul className="mt-3 text-slate-700 text-sm sm:text-base space-y-3">
              <li><strong>Top Achievements:</strong> Summer Analytics Certificate of Merit (Top 25%).</li>
              <li><strong>Photography:</strong> Tasveer Exhibition selection (2023).</li>
            </ul>
          </motion.aside>
        </section>

        {/* Projects */}
        <section className="mt-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h2 className="text-2xl sm:text-3xl font-semibold">Projects</h2>
            <div className="flex gap-2 items-center">
              <label className="text-sm text-slate-600">Filter:</label>
              <select
                value={filter}
                onChange={e => setFilter(e.target.value)}
                className="text-sm p-2 rounded-lg border bg-white min-w-32"
              >
                <option>All</option>
                <option>ML</option>
                <option>Python</option>
                <option>Full-Stack</option>
                <option>Data Engineering</option>
                <option>Analytics</option>
              </select>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filtered.map(proj => (
              <motion.article
                key={proj.id}
                whileHover={{ translateY: -8, boxShadow: '0 20px 40px rgba(2,6,23,0.15)' }}
                className="p-5 sm:p-6 rounded-2xl bg-white/85 backdrop-blur-md border border-slate-100 h-full flex flex-col"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold pr-2">{proj.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">{proj.date}</p>
                  </div>
                  <div className="text-xs text-slate-400 flex-shrink-0">ID #{proj.id}</div>
                </div>

                <p className="mt-3 text-slate-700 text-sm sm:text-base leading-relaxed flex-grow">{proj.summary}</p>

                <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-2">
                    {proj.tags.map(tag => (
                      <motion.span whileHover={{ scale: 1.05 }} key={tag} className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-slate-100 to-sky-100">
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  <a href={proj.repo} target="_blank" rel="noreferrer" className="text-sm underline hover:text-sky-600 transition-colors flex-shrink-0">View Repo</a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Contact & CTA */}
        <section className="mt-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-white/70 to-sky-100 shadow-lg">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h2 className="text-xl sm:text-2xl font-semibold">Want to recruit or collaborate?</h2>
              <p className="text-sm sm:text-base mt-2 text-slate-700">Reach out for internships, roles or collaborations — I build end-to-end systems and polished dashboards.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href={`mailto:${contact.email}`} className="px-6 py-3 rounded-lg bg-gradient-to-r from-sky-600 to-indigo-600 !text-white font-medium text-sm sm:text-base shadow hover:shadow-lg transition-all hover:from-sky-700 hover:to-indigo-700 text-center no-underline" style={{ color: '#ffffff !important' }}>Email Me</a>
              <a href={contact.github} target="_blank" rel="noreferrer" className="px-6 py-3 rounded-lg border text-sm sm:text-base bg-white/70 hover:bg-white transition-colors text-center">GitHub</a>
            </div>
          </div>
        </section>

        <footer className="mt-8 text-center text-xs sm:text-sm text-slate-600">Built with ❤️ • Tailwind + Framer Motion</footer>
      </div>
    </div>
  )
}
