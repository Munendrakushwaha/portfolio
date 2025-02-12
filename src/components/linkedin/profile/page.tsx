"use client";

import Image from "next/image";
import { FC } from "react";

interface ProfileData {
  name: string;
  title: string;
  location: string;
  connections: string;
  education: Array<{
    school: string;
    degree: string;
    duration: string;
    gpa?: string;
    skills?: string;
  }>;
  experience: Array<{
    role: string;
    company: string;
    type: string;
    duration: string;
    location: string;
  }>;
  certifications: Array<{
    name: string;
    logo: string;
    issuer: string;
    issueDate: string;
    credentialId?: string;
    skills?: string[];
    certificateUrl?:string;
  }>;
  skills: string[];
  about: string;
}

const ProfilePage: FC = () => {
  const profileData: ProfileData = {
    name: "Munendra (Monu) Kushwaha",
    title: "Software Engineer @Successive Technologies || MERN Developer",
    location: "Noida, Uttar Pradesh, India",
    connections: "500+ connections",
    education: [
      {
        school: "GLA University",
        degree: "Master of Computer Applications - MCA, Computer Science",
        duration: "Sep 2022 - Jul 2024",
        skills: "NumPy, HTML and +4 skills"
      },
      {
        school: "GLA University",
        degree: "Master's Degree",
        duration: "Sep 2022 - May 2024",
        gpa: "8.6/10.0"
      }
    ],
    experience: [
      {
        role: "Associate Software Engineer",
        company: "Successive Digital",
        type: "Full-time",
        duration: "Sep 2023 - Present · 1 yr 6 mos",
        location: "Noida, Uttar Pradesh, India"
      }
    ],
    certifications: [
      {
        name: "MongoDB Certified Developer, Associate (C100DEV)",
        issuer: "MongoDB",
        logo: "/mongodb.jpeg",
        issueDate: "Jan 2025",
        certificateUrl:"https://www.credly.com/badges/0d9a431a-8008-4a8f-ae1b-99fd2d4c67b2/public_url",
        credentialId: "0d9a431a-8008-4a8f-ae1b-99fd2d4c67b2"
      },
      {
        name: "Graph Developer - Associate",
        issuer: "Apollo GraphQL",
        logo: "/graphql.jpeg",
        issueDate: "Feb 2024",
        certificateUrl:"https://www.apollographql.com/tutorials/certifications/1b2a9772-99f8-4272-8908-4941231f8fa2",
        credentialId: "1b2a9772-99f8-4272-8908-4941231f8fa2"
      }
    ],
    skills: [
      "Deep Learning",
      "Programming Languages",
      "Database Design",
      "TypeScript",
      "Image Generation",
      "Test Coverage"
    ],
    about: "Thesis involved studying several technology companies and optimizing their product design process."
  };

  return (
    <div className="max-w-[1128px] mx-auto px-4 sm:px-6">
      {/* Profile Header */}
      <div className="bg-white rounded-xl shadow mb-2">
        {/* Banner */}
        <div className="relative h-[140px] sm:h-[200px] rounded-t-xl overflow-hidden">
          <Image
            src="/banner.jpeg"
            alt="Profile Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-0 left-0 w-full h-[80px] bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>

        {/* Profile Info */}
        <div className="px-4 sm:px-6 pt-4 pb-4">
          {/* Profile Image */}
          <div className="relative -mt-[100px] sm:-mt-[130px] mb-4">
            <div className="inline-block">
              <Image
                src="/profile.jpeg"
                alt={profileData.name}
                width={120}
                height={120}
                className="sm:w-[160px] sm:h-[160px] rounded-full border-4 border-white"
              />
            </div>
            <button className="absolute bottom-2 right-2 p-1 rounded-full bg-white hover:bg-gray-100">
              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 6v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </button>
          </div>

          {/* Profile Details */}
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
            <div className="flex-1">
              <h1 className="text-xl sm:text-2xl font-semibold mb-1">{profileData.name}</h1>
              <p className="text-[14px] sm:text-[16px] mb-1">{profileData.title}</p>
              <p className="text-[14px] text-gray-600 mb-1">{profileData.location} · <span className="text-blue-600 font-semibold cursor-pointer hover:underline">Contact info</span></p>
              <p className="text-[14px] text-blue-600 font-semibold cursor-pointer hover:underline">{profileData.connections}</p>
            </div>
            <div className="flex flex-col items-start gap-2">
              <div className="flex items-center gap-2">
                <Image
                  src="/successive.jpeg"
                  alt="Successive Digital"
                  width={32}
                  height={32}
                  className="rounded"
                />
                <span className="text-[14px] font-semibold text-gray-600">Successive Digital</span>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/gla.jpeg"
                  alt="GLA University"
                  width={32}
                  height={32}
                  className="rounded"
                />
                <span className="text-[14px] font-semibold text-gray-600">GLA University</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white rounded-xl shadow p-4 sm:p-6 mb-2">
        <h2 className="text-xl font-semibold">About</h2>
        <p className="text-[14px]">{profileData.about}</p>
      </div>

      {/* Experience Section */}
      <div className="bg-white rounded-xl shadow p-4 sm:p-6 mb-2">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Experience</h2>
          <div className="flex gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </button>
          </div>
        </div>
        {profileData.experience.map((exp, index) => (
          <div key={index} className="flex gap-4 mb-4">
            <Image
              src="/successive.jpeg"
              alt={exp.company}
              width={100}
              height={28}
              className="rounded"
            />
            <div>
              <h3 className="font-semibold text-[16px]">{exp.role}</h3>
              <p className="text-[14px]">{exp.company} · {exp.type}</p>
              <p className="text-[14px] text-gray-600">{exp.duration}</p>
              <p className="text-[14px] text-gray-600">{exp.location}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Education Section */}
      <div className="bg-white rounded-xl shadow p-4 sm:p-6 mb-2">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Education</h2>
          <div className="flex gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </button>
          </div>
        </div>
        {profileData.education.map((edu, index) => (
          <div key={index} className="flex gap-4 mb-4">
            <Image
              src="/gla.jpeg"
              alt={edu.school}
              width={100}
              height={28}
              className="rounded"
            />
            <div>
              <h3 className="font-semibold text-[16px]">{edu.school}</h3>
              <p className="text-[14px]">{edu.degree}</p>
              <p className="text-[14px] text-gray-600">{edu.duration}</p>
              {edu.gpa && <p className="text-[14px]">Cumulative GPA: {edu.gpa}</p>}
              {edu.skills && <p className="text-[14px] text-gray-600">{edu.skills}</p>}
            </div>

          </div>
        ))}
      </div>

      {/* Certifications Section */}
      <div className="bg-white rounded-xl shadow p-4 sm:p-6 mb-2">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Licenses & certifications</h2>
          <div className="flex gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </button>
          </div>
        </div>
        {profileData.certifications.map((cert, index) => (
          <div key={index} className="flex gap-4 mb-6">
            <Image
              src={cert.logo}
              alt={cert.issuer}
              width={120}
              height={20}
              className="rounded"
            />
            <div>
              <h3 className="font-semibold text-[16px]">{cert.name}</h3>
              <p className="text-[14px]">{cert.issuer}</p>
              <p className="text-[14px] text-gray-600">Issued {cert.issueDate}</p>
              {cert.credentialId && (
                <p className="text-[14px] text-gray-600">
                  Credential ID {cert.credentialId}
                </p>
              )}
              {cert.skills && (
                <p className="text-[14px] text-gray-600 mt-1">
                  Skills: {cert.skills.join(', ')}
                </p>
              )}
              <button onClick={() => window.open(`${cert.certificateUrl}`, '_blank')} className="mt-2 text-[14px] text-blue-600 hover:text-blue-700 flex items-center gap-1">
                Show credential
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Skills Section */}
      <div className="bg-white rounded-xl shadow p-4 sm:p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Skills</h2>
          <div className="flex gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {profileData.skills.map((skill, index) => (
            <div key={index} className="flex justify-between items-center hover:bg-gray-50 -mx-4 sm:-mx-6 px-4 sm:px-6 py-2">
              <span className="text-[16px]">{skill}</span>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
