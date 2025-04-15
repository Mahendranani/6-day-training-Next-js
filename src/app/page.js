export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gray-100 text-gray-800 font-sans">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-3xl font-bold">Mahendra kumar</h1>
          <p className="text-gray-500">Full Stack Developer</p>
          <p>Email: Mahendra@example.com | Phone: 947xxxxxxxxx</p>
        </header>

        {/* About */}
        <section className="mt-6">
          <h2 className="text-xl font-semibold border-b pb-1 mb-2">About Me</h2>
          <p>
            Passionate developer with 3+ years of experience building web applications.
            Skilled in React, python, and modern web tools.
          </p>
        </section>

        {/* Skills */}
        <section className="mt-6">
          <h2 className="text-xl font-semibold border-b pb-1 mb-2">Skills</h2>
          <ul className="list-disc list-inside grid grid-cols-2 gap-x-4">
            <li>MYSQL</li>
            <li>Python</li>
            <li>Powerbi</li>
            <li>Excel</li>
            <li>Tableau</li>
            
          </ul>
        </section>

        {/* Experience */}
        <section className="mt-6">
          <h2 className="text-xl font-semibold border-b pb-1 mb-2">Experience</h2>
          <div>
            <h3 className="font-semibold">Web Developer at XYZ Corp</h3>
            <p className="text-sm text-gray-500">Jan 2022 - Present</p>
            </div>
        </section>

        {/* Projects */}
        <section className="mt-6">
          <h2 className="text-xl font-semibold border-b pb-1 mb-2">Projects</h2>
          <ul className="list-disc list-inside">
            <li>
             
<p>Developed human resource management system using html css and php </p>
<p>Developed prototype giving alerting systems to you the drivers potholes,speed breakers and curves using gps module and esp32 module using C++</p>
            </li>
           
          </ul>
        </section>

          {/* Education */}
          <section className="mt-6">
          <h2 className="text-xl font-semibold border-b pb-1 mb-2">Education</h2>
          <ul className="space-y-2">
            <li>
              <strong>Sahyadri College of Engineering and Mangaement</strong> – B.Tech in AIML<span className="block text-sm text-gray-500">Bengaluru, India | 2022–2026</span>
            </li>
            <li>
              <strong>SRI VIDYANIKETAN PU COLLEGE</strong> – XII  <span className="block text-sm text-gray-500">Koppal, India | 2020–2022</span>
            </li>
            <li>
              <strong>SMIT, DONEPOODI SAROJINI DEVI ENG. MEDIUM HIGH SCHOOL</strong> – X <span className="block text-sm text-gray-500">Koppal, India | 2020</span>
            </li>
          </ul>
        </section>
        </div>
        </main>
  );
}
