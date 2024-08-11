
import React from "react";
import vpn from '../assets/vpn.png'
import copeople from '../assets/copeople.png'
import Footer from './Footer'

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" style={{"textAlign": "center"}}>
            {title==='Snap Shot' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={vpn} alt="" />
            </a>}
            {title==='Co People' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={copeople} alt="" />
            </a>}
            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between' style={{"margin": "0.5rem"}}>
                <div className='flex flex-wrap gap-2 pl-2' style={{"justifyContent": "center", "alignItems": "center"}} >
                    {technologies.map((tag, index) => (
                        <div key={`${index}-${tag}`} className='text-[14px] text-blue-500'>#{tag}</div>
                    ))}
                </div>
                <a href={git}  style={{"width": "183px"}} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">Project Link</a>
            </div>
        </div>
    );
};
  
const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        links={item.links}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer/>
        </div>
    );
}


export const project = [
    {
        title:'Multi-Page React Application with Routing',
        description: "I developed a multi-page website using React.js and TypeScript. The site includes pages such as Home, About, Contact, and various submenus. React Router manages navigation, and styled-components with a defined theme ensure a consistent and visually appealing design. The project demonstrates proficiency in responsive design and modern development practices, showcasing my skills in front-end web development.",
        image: {vpn},
        git:'https://main--kaleidoscopic-cranachan-31e5a3.netlify.app/',
        technologies:['ReactJS' , 'Type Script']
    },
    {
        title:'Tender Management System:',
        description:'The Tender Management System is a web application that streamlines tender and bidding processes for administrators and users. It features an Admin Panel for creating and managing tenders with details like name, description, and timings. Users can browse tenders, submit quotations, and receive notifications for new tenders. Built with React.js and Node.js, and a seamless user experience. Evaluation criteria include requirement adherence, code quality, UI design, error handling, and performance.',
        image: {copeople},
        git:"https://drive.google.com/file/d/1gn5uZdBIfaYRMr4mLdgkwfcNRJf1B7KK/view?usp=drive_link",
        technologies:[ 'React JS', 'tailwind CSS', 'NodeJs', 'MongoDb', 'Expressjs']
    },
    {
        title:'Student-Session-Management-System:',
        description:'Student-Session-Management-System: The Node.js application integrates Express, MongoDB, and JWT for seamless student registration, login, and session booking. It employs Bcrypt to securely hash passwords and validates emails using Validator. Session data is sourced from a JSON file. The app connects to MongoDB, establishing Mongoose schemas for sessions, students, and deans.',
        git:"https://github.com/rohansirsa052/Student-Session-Management-System-",
        technologies:[ 'NodeJs', 'MongoDb', 'Expressjs']
    },
    {
        title:'Responsive-food-delivery-website:',
        description:'This project is a single-page website for a food delivery service, designed using HTML and CSS. The main focus of the website is to serve as the home page for the food delivery platform. The website is also fully Responsive',
        git:"http://lettucerestaurant.kesug.com/?i=1",
        technologies:['HTML', 'CSS', 'JavaScript', 'PHP']
    },
    {
        title:'User Management Dashboard:',
        description:'This MERN application fetches user data from its backend and displays it in a user-friendly interface. Employing Axios for HTTP requests, the React frontend efficiently manages data retrieval and presentation, offering features such as pagination and search functionality.',
        git:"https://main--rohan-team-member.netlify.app/",
        technologies:[ 'React JS', 'tailwind CSS', 'NodeJs', 'MongoDb', 'Expressjs']
    },
    
    
]

export default Projects