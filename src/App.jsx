import "./App.css";
import { AiOutlineMenu, AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";
import { HiExternalLink, HiOutlineMail } from "react-icons/hi";
import { CgNotes } from "react-icons/cg";
import { BsClipboard } from "react-icons/bs";

function App() {
  return (
    <div className="flex justify-center items-center'">
      {/* Nav bar - Desktop*/}

      <div className="w-full h-20 bg-primary rounded-[30px] fixed z-10 justify-end items-center px-10 gap-10 hidden md:flex">
        <a
          href="#aboutMe"
          className="font-black text-secondary text-xl hover:scale-110 hover:drop-shadow-2xl"
        >
          ABOUT ME
        </a>
        <a
          href="#projects"
          className="font-black text-secondary text-xl hover:scale-110 hover:drop-shadow-2xl"
        >
          PROJECTS
        </a>
        <a
          href="#experience"
          className="font-black text-secondary text-xl hover:scale-110 hover:drop-shadow-2xl"
        >
          EXPERIENCE
        </a>
        <a
          href="#contact"
          className="font-black text-secondary text-xl hover:scale-110 hover:drop-shadow-2xl"
        >
          CONTACT
        </a>
      </div>

      {/* Nav bar - Mobile*/}

      <div className="navbar bg-primary rounded-[30px] fixed z-10 md:hidden">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <button>
                <AiOutlineMenu size={30} color="#FFF0D9" />
              </button>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-primary rounded-box w-52 text-secondary font-semibold"
            >
              <li>
                <a href="aboutMe">ABOUT ME</a>
              </li>
              <li>
                <a href="projects">PROJECTS</a>
              </li>
              <li>
                <a>EXPERIENCE</a>
              </li>
              <li>
                <a>CONTACT</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Body section */}
      <div className="bg-secondary w-11/12 min-h-screen rounded-[30px]">
        <div className="h-full w-auto shadow-2xl">
          {/* Aboutme section */}

          <section id="aboutMe">
            <div className="w-[90%] mx-auto">
              <div className="text-primary font-black text-xl pt-32 md:text-3xl">
                ABOUT ME
              </div>

              <hr className="bg-primary h-[3px]"></hr>
            </div>

            <div className="w-[90%] mx-auto">
              <div className="flex flex-col-reverse md:flex-row md:justify-around md:items-center">
                <div className="w-[100%] flex flex-col items-center">
                  <div className="text-primary font-black text-2xl lg:text-3xl">
                    Padtaraya Chudchawinpond
                  </div>
                  <div className="text-primary font-black text-xl lg:text-2xl opacity-80 text-center">
                    Junior Software Developer
                  </div>
                </div>

                <div className="w-[100%] flex justify-center">
                  <img src="./kontuemaew.png" className="w-[60%] lg:w-[80%]" />
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:justify-around md:items-center">
                <div className="text-primary text-justify py-3 text-sm md:text-lg">
                  As a self-starter who graduated from Generation Thailand's
                  Junior Software Developer (Fullstack) Bootcamp and has 2 years
                  of experience as a Business Analyst and Manual Tester, I am
                  making a transition into software development with a strong
                  passion for emerging technology, product management, and data
                  analysis. I thrive on challenges, enjoy problem-solving, and
                  possess a foundation in understanding user needs and ensuring
                  quality assurance. I am dedicated to delivering innovative
                  solutions and am enthusiastic about collaborating with a
                  dynamic team in a junior software developer role.
                </div>
              </div>

              <div className="flex flex-wrap justify-around md:justify-end gap-6">
                <img
                  src="./HTML_Icon.svg"
                  className="w-[40px] h-[40px] hover:scale-110 duration-150"
                />
                <img
                  src="./CSS_Icon.svg"
                  className="w-[40px] h-[40px] hover:scale-110 duration-150"
                />
                <img
                  src="./JS_Icon.svg"
                  className="w-[40px] h-[40px] hover:scale-110 duration-150"
                />
                <img
                  src="./React_Icon.png"
                  className="w-[40px] h-[40px] hover:scale-110 duration-150"
                />
                <img
                  src="./node_Icon.png"
                  className="w-[40px] h-[40px] hover:scale-110 duration-150"
                />
                <img
                  src="./express_icon.svg"
                  className="w-[40px] h-[40px] hover:scale-110 duration-150"
                />
                <img
                  src="./mongodb_icon.svg"
                  className="w-[40px] h-[40px] hover:scale-110 duration-150"
                />
                <img
                  src="./tailwind-css_icon.svg"
                  className="w-[40px] h-[40px] hover:scale-110 duration-150"
                />
                <img
                  src="./Git_Icon.svg"
                  className="w-[40px] h-[40px] hover:scale-110 duration-150"
                />
                <img
                  src="./github_icon.png"
                  className="w-[40px] h-[40px] hover:scale-110 duration-150"
                />
                <img
                  src="./VS_Icon.svg"
                  className="w-[40px] h-[40px] hover:scale-110 duration-150"
                />
              </div>
            </div>
          </section>

          {/* Project section */}

          <section id="projects">
            <div className="w-[90%] mx-auto">
              <div className="text-primary font-black text-xl pt-32 md:text-3xl">
                PROJECTS
              </div>
              <hr className="bg-primary h-[3px] mb-5"></hr>
            </div>

            {/* card  สีขาวอันแรก */}
            <div className="bg-white p-10 gap-7 rounded-[30px] min-h-[400px] w-[90%] mx-auto shadow-2xl flex flex-col md:flex-row justify-center mb-6">
              {/* ภาพ Colmar */}
              <div className="w-full">
                <img
                  src="./Colmar.jpeg"
                  className="w-full rounded-[10px] shadow-2xl"
                />
              </div>

              {/* div ครอบข้อความทั้งหมด */}

              <div className="flex flex-col justify-center gap-2 md:gap-4">
                {/* หัวข้อ */}
                <div className="w-full text-primary font-bold text-xl text-center md:text-2xl">
                  Colmar Academy
                </div>
                {/* รายละเอียดโปรเจค */}
                <div className="w-full text-primary mx-auto ">
                  Responsive landing page for school. Using HTML, CSS and GitHub
                  pages. Assessment Generation Thailand
                </div>

                {/* ปุ่มกดไป Git and Demo */}
                <div className="flex justify-end gap-4">
                  <a
                    className="text-primary font-semibold text-[15px] bg-secondary rounded-full px-4 p-1 border-primary border-2 flex items-center hover:bg-secondary-focus hover:scale-105 duration-150"
                    href="https://github.com/padtarayach/ColmarAcademy-Challenge"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    Git Repo <AiFillGithub className="ms-1" />
                  </a>
                  <a
                    className="text-primary font-semibold text-[15px] bg-secondary rounded-full px-4 p-1 border-primary border-2 flex items-center hover:bg-secondary-focus hover:scale-105 duration-150"
                    href="https://colmar-academy-challenge.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Demo <HiExternalLink className="ms-1" />
                  </a>
                </div>
              </div>
            </div>

            {/* card  สีขาวสอง */}
            <div className="bg-white p-10 gap-7 rounded-[30px] min-h-[400px] w-[90%] mx-auto shadow-2xl flex flex-col md:flex-row justify-center">
              {/* ภาพ Colmar */}
              <div className="w-full">
                <img
                  src="./KeepFit.png"
                  className="w-full rounded-[10px] shadow-2xl"
                />
              </div>

              {/* div ครอบข้อความทั้งหมด */}

              <div className="flex flex-col justify-center gap-2 md:gap-4">
                {/* หัวข้อ */}
                <div className="w-full text-primary font-bold text-xl text-center md:text-2xl">
                  KeepFit
                </div>
                {/* รายละเอียดโปรเจค */}
                <div className="w-full text-primary mx-auto ">
                  Tracking exercise web application, Using React, NodeJS and GitHub
                  pages. Final Project Generation Thailand 
                </div>

                {/* ปุ่มกดไป Git and Demo */}
                <div className="flex justify-end gap-4">
                  <a
                    className="text-primary font-semibold text-[15px] bg-secondary rounded-full px-4 p-1 border-primary border-2 flex items-center hover:bg-secondary-focus hover:scale-105 duration-150"
                    href="https://github.com/padtarayach/keepfit-react"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    Git Repo <AiFillGithub className="ms-1" />
                  </a>
                  <a
                    className="text-primary font-semibold text-[15px] bg-secondary rounded-full px-4 p-1 border-primary border-2 flex items-center hover:bg-secondary-focus hover:scale-105 duration-150"
                    href="https://keepfit-demo.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Demo <HiExternalLink className="ms-1" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section id="experience">
            <div className="w-[90%] mx-auto">
              <div className="text-primary font-black text-xl pt-32 md:text-3xl">
                Experience
              </div>
              <hr className="bg-primary h-[3px] mb-5"></hr>
            </div>

            <div className="w-[90%] mx-auto">
              <p className="text-2xl py-7 font-semibold text-primary">
                Work Experience
              </p>
            </div>

            {/* Card สีขาว CRMC */}
            <div className="bg-white p-10 gap-7 rounded-[30px] min-h-[400px] w-[90%] mx-auto shadow-2xl flex flex-col md:flex-row justify-center mb-11">
              {/* div ครอบชื่อบริษัทกับโลโก้ */}
              <div className="w-full md:w-[25%]">
                {/* ชื่อบริษัท*/}
                <div className="w-full text-primary font-bold text-xl text-center md:text-2xl pb-4">
                  CRM and Cloud Consulting
                </div>
                {/* ภาพ Logo CRMC */}
                <img
                  src="./CRMC-logo.png"
                  className="w-full rounded-[10px] shadow-2xl "
                />
              </div>

              {/* div ครอบข้อความทั้งหมด */}

              <div className="flex flex-col justify-center gap-2 md:gap-4">
                {/* ชื่อตำแหน่งงาน */}
                <p className="text-primary font-bold text-lg text-center md:text-left">
                  Operation Assistant Manager
                </p>
                {/* ระยะเวลา */}
                <p className="text-primary font-semibold pb-4 text-center md:text-left">
                  FEB 2023 - AUG 2023
                </p>
                {/* รายละเอียดการทำงาน */}
                <div className="w-full text-primary mx-auto ">
                  <ul className="list-disc ps-5">
                    <li>
                      Importing data such as sales department leads, contacts
                      and opportunity
                    </li>
                    <li>
                      Upgrading and configuring Salesforce systems for optimized
                      integration
                    </li>
                    <li>
                      Performing database maintenance tasks, including
                      diagnostic tests and duplicate entry cleansing
                    </li>
                    <li>
                      Manual testing web app, creating test case and coordinate
                      with developers
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Card สีขาว SELFIE */}
            <div className="bg-white p-10 gap-7 rounded-[30px] min-h-[400px] w-[90%] mx-auto shadow-2xl flex flex-col md:flex-row justify-center mb-11">
              {/* div ครอบชื่อบริษัทกับโลโก้ */}
              <div className="w-full md:w-[25%]">
                {/* ชื่อบริษัท*/}
                <div className="w-full text-primary font-bold text-xl text-center md:text-2xl pb-4">
                  SELFIE CARE
                </div>
                {/* ภาพ Logo SELFIE */}
                <img
                  src="./selfie_logo.png"
                  className="w-full rounded-[10px] shadow-2xl "
                />
              </div>

              {/* div ครอบข้อความทั้งหมด */}

              <div className="flex flex-col justify-center gap-2 md:gap-4">
                {/* ชื่อตำแหน่งงาน */}
                <p className="text-primary font-bold text-lg text-center md:text-left">
                  Business Analyst
                </p>
                {/* ระยะเวลา */}
                <p className="text-primary font-semibold pb-4 text-center md:text-left">
                  APR 2021 - JAN 2023
                </p>
                {/* รายละเอียดการทำงาน */}
                <div className="w-full text-primary mx-auto ">
                  <ul className="list-disc ps-5">
                    <li>
                      Worked with CEO to develop prototypes and eventually
                      commercialised offline and online products
                    </li>
                    <li>
                      Coordinate with developers, designers, and vendors to
                      design and produce final products
                    </li>
                    <li>
                      Work with digital marketing agency to develop SEO for
                      company's website
                    </li>
                    <li>Lead UAT testing for website and web app</li>
                    <li>A/B testing for offline product</li>
                    <li>Develop SOP for internal processes</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="w-[90%] mx-auto">
              <p className="text-2xl py-7 font-semibold text-primary">
                Education
              </p>
            </div>

            {/* Container Of Generation Thailand */}
            <div className="w-[90%] mx-auto flex flex-col md:flex-row gap-5 items-center mb-16">
              {/* Logo Generation Thailand */}
              <div className="w-[50%] md:w-[20%]">
                <img
                  src="./Generation-Thai-Logo.jpeg"
                  className="w-full rounded-[10px] shadow-2xl"
                />
              </div>

              <div className="text-primary flex flex-col md:w-[65%]">
                <p className="font-semibold text-[20px] text-center md:text-left">Generation Thailand</p>
                <p className="font-semibold pb-5 text-center md:text-left">JUL 2023 - OCT 2023</p>
                <ul className="list-disc ps-5 text-[15px]">
                  <li>
                    Junior Software Developer (Fullstack Web Developer), 16
                    Weeks (full-time)
                  </li>
                  <li>
                    Technical Skills: HTML, CSS, Javascript, React, Node JS,
                    Express, Relational databases, MongoDB and git version
                    control.
                  </li>
                  <li>
                    Behavior & Mindsets: Agile, Scrum process,Growth Mindset,
                    Problem solved, Communication, Team collaboration ,Time
                    management, Proactiveness, Future-orientation
                  </li>
                </ul>
              </div>
            </div>

            {/* Container Of Chulalongkorn University */}
            <div className="w-[90%] mx-auto flex flex-col md:flex-row gap-5 ">
              {/* Logo Chulalongkorn University */}
              <div className="w-[50%] md:w-[20%] mx-auto md:mx-0 ">
                <img
                  src="./cu-logo.png"
                  className="w-full rounded-[10px] shadow-2xl"
                />
              </div>

              <div className="text-primary flex flex-col justify-center md:w-[65%]">
                <p className="font-semibold text-[20px] text-center md:text-left">
                  Chulalongkorn University
                </p>
                <p className="font-semibold pb-5 text-center md:text-left">2016 - 2020</p>
                <ul className="list-disc ps-5 text-[15px]">
                  <li>Bachelor of Economics</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="contact">
            <div className="w-[90%] mx-auto">
              <div className="text-primary font-black text-xl pt-32 md:text-3xl">
                CONTACT
              </div>
              <hr className="bg-primary h-[3px] mb-5"></hr>
            </div>

            {/* รวมปุ่ม */}

            <div className="w-[90%] mx-auto flex gap-2 pb-32 flex-wrap md:gap-7">
              <a
                className="text-primary font-semibold text-[16px] bg-secondary rounded-full px-4 p-1 border-primary border-2 flex items-center hover:bg-secondary-focus hover:scale-105 duration-150 "
                href="https://drive.google.com/file/d/1hJ61H5uVIwCGPYECAX5Vet3dm_id68XI/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Resume <CgNotes className="ms-1" />
              </a>

              <button
                className="btn text-primary font-semibold text-[16px] bg-secondary rounded-full px-4 p-1 border-primary border-2 flex items-center hover:border-2 hover:border-primary hover:bg-secondary-focus hover:scale-105 duration-150"
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
              >
                Email <HiOutlineMail className="ms-1" />
              </button>

              
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box bg-white">
  <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <p className="py-4 text-black">padtaraya.c@gmail.com</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn bg-primary text-secondary border-none hover:bg-primary-focus" onClick={() =>
                        navigator.clipboard.writeText("padtaraya.c@gmail.com")}>COPY TO CLIPBOARD <BsClipboard/></button>
      </form>
    </div>
  </div>
</dialog>





              

              <a
                className="text-primary font-semibold text-[16px] bg-secondary rounded-full px-4 p-1 border-primary border-2 flex items-center hover:bg-secondary-focus hover:scale-105 duration-150"
                href="https://github.com/padtarayach/ColmarAcademy-Challenge"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Github <AiFillGithub className="ms-1" />
              </a>
              <a
                className="text-primary font-semibold text-[16px] bg-secondary rounded-full px-4 p-1 border-primary border-2 flex items-center hover:bg-secondary-focus hover:scale-105 duration-150"
                href="https://www.linkedin.com/in/padtaraya-chudchawinpond-4bb725227/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Linkedin <AiOutlineLinkedin className="ms-1" />
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
