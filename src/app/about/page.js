"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AnnouncementBanner from "../../components/AnnouncementBanner";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <AnnouncementBanner
        message="Extended hours during finals week: Open until midnight December 10-16."
        link="/hours"
        linkText="View schedule"
      />
      <Header />

      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-xl"
        >
          <h1 className="text-4xl font-bold text-[#13294B] mb-6 text-center">
            About the Kean Library Project
          </h1>

          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            The Kean University Library Project is a modern redesign initiative aimed at improving access,
            usability, and the overall student experience on the library website. Our goal is to ensure that
            students, faculty, and visitors can find resources quickly, get the help they need, and feel supported
            in their academic journey.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#13294B] text-white rounded-xl p-6 my-8 shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
            <p className="text-base">
              We believe that access to knowledge should be seamless. Through design, accessibility, and technology,
              we aim to build a library website that empowers students every step of the way.
            </p>
          </motion.div>

          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Kean University, New Jersey's first urban research university, is committed to providing affordable,
            accessible, and world-class education to a diverse student population. The library plays a key role in
            supporting academic excellence by offering extensive digital and print resources, innovative learning
            environments, and professional guidance from dedicated librarians and staff.
          </p>

          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            The Nancy Thompson Learning Commons (NTLC) represents the heart of Kean’s academic support system,
            integrating library services, tutoring, writing support, and access to technology — all in a welcoming,
            student-centered space. This website redesign project is aligned with the NTLC’s mission to enhance
            student success and ensure equitable access to scholarly information.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-[#13294B] mb-2">Technologies Used</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>React + Next.js</li>
                <li>Tailwind CSS</li>
                <li>Framer Motion</li>
                <li>Modern UX Principles</li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-[#13294B] mb-2">Project Goals</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Enhance search & navigation</li>
                <li>Support students with tools & access</li>
                <li>Design with accessibility in mind</li>
                <li>Keep UI clean, modern, & responsive</li>
              </ul>
            </motion.div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed">
            Built with modern web technologies and a strong focus on UI/UX, this mockup was designed by students
            for students — with user feedback and visual consistency at the heart of every decision. We hope this
            inspires future digital experiences at Kean to keep evolving with student needs.
          </p>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
