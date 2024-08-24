import React, { useEffect } from 'react'
import AppBorder from './appBorder'
import AOS from "aos";
import "aos/dist/aos.css";
const Skills = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in milliseconds
          once: false, // Ensure animations trigger on both scroll down and up
          offset: 120, // Offset to trigger the animation when elements come into view
          easing: "ease-in-out", // Easing function to smooth the animation
          mirror: true, // Repeat animations when scrolling back up
        });
      }, []);
    const skills = [
        {
            title: "MongoDB",
            description: "Proficient in designing and managing NoSQL databases, including data modeling and CRUD operations."
        },
        {
            title: "Express.js",
            description: "Experienced in building robust, RESTful APIs and server-side applications using Express.js."
        },
        {
            title: "React",
            description: "Skilled in creating dynamic and responsive user interfaces with React, including state management and component-based architecture."
        },
        {
            title: "Node.js",
            description: "Capable of developing server-side applications, real-time features, and backend services using Node.js."
        }
    ];
    const languages = [
        { name: "React.Js", percentage: 90 },
        { name: "Node - Express.Js", percentage: 80 },
        { name: "Mongo DB | SQL | Firebase", percentage: 80 },
        { name: "Next.Js", percentage: 80 },
        { name: "Javascript", percentage: 80 },
        { name: "Typescript", percentage: 60 },
        { name: "HTML | CSS | Bootstrap | Tailwind", percentage: 90 },
        { name: "Git | Github", percentage: 80 },
        { name: "AWS | Hostinger | Vercel", percentage: 70 },
        { name: "Payment Gateways", percentage: 70 }
    ];
    return (
        <div className='2xl:container grid mx-auto'>

            <div className=' md:px-36'>
                <div className='flex flex-col items-center justify-center'>
                    <h5 data-aos="fade-up" className='text-primary pt-6 plusJakara_medium text-4xl resume_ '>Skills</h5>
                    <AppBorder bgprimary='bg-primary' />

                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center  py-9'>
                    <div>
                        <div data-aos="fade-right" class="bg-gray-900 text-white p-8 rounded-lg shadow-lg">
                            <h1 class="lg:text-2xl text-xl font-bold mb-4">All the skills that I have in that field of work are mentioned.</h1>
                            <p class="mb-4 plusJakara_light">
                                I specialize in MERN Stack web development, encompassing the following technologies:
                            </p>
                            <ul class="list-disc p-0 space-y-2">
                                {skills.map((skill, index) => (
                                    <li key={index}>
                                        <strong>{skill.title}:</strong>
                                        <p className="plusJakara_light">
                                            {skill.description}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                            <p class="mt-4 plusJakara_light">

                                Additionally, I have a strong foundation in related web technologies, such as HTML, CSS, JavaScript and TypeScript, which complements my MERN Stack expertise. My experience in this stack enables me to deliver efficient and modern web applications.
                            </p>
                        </div>

                    </div>
                    <div>
                        <div data-aos="fade-left" className="bg-white text-primary p-8 rounded-lg shadow-lg">
                            {languages.map((skill, index) => (
                                <div key={index} className="mb-4">
                                    <div className="flex justify-between mb-1">
                                        <span>{skill.name}</span>
                                        <span>{skill.percentage}%</span>
                                    </div>
                                    <div className="w-full bg-gray-700 rounded-full h-1.5">
                                        <div
                                            className="bg-yellow-500 h-1.5 rounded-full"
                                            style={{ width: `${skill.percentage}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Skills
