import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import profileImage from "../assets/image/profile.jpg"; // update path if needed

const HeroCard = () => {
    return (
        <div id="main">
            <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 max-w-6xl mx-auto">
                {/* Text content */}
                <div className="flex-4 text-center md:text-left text-black">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                        Web & Mobile Developer 👋
                    </h1>
                    <p className="text-lg md:text-xl mb-6 max-w-xl mx-auto md:mx-0">
                        I’m a passionate developer focused on building responsive, user-friendly web and mobile applications. I thrive in creating efficient solutions that make a real impact for users and teams.
                    </p>

                    {/* Contact Icons */}
                    <div className="flex justify-center md:justify-start space-x-6 text-2xl">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="hover:text-blue-600 transition" />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="hover:text-gray-700 transition" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="hover:text-blue-700 transition" />
                        </a>
                    </div>
                    {/* tech stack icons */}
                    <div className="mt-8">
                        
                        <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
                        <div className="flex flex-row flex-wrap justify-center md:justify-start gap-4">
                            <img src="../../src/assets/icons/firebase.svg" alt="Firebase" className="w-8 h-8" />
                            <img src="../../src/assets/icons/mysql.svg" alt="MySQL" className="w-8 h-8" />
                            <img src="../../src/assets/icons/html.svg" alt="HTML5" className="w-8 h-8" />
                            <img src="../../src/assets/icons/css-3.svg" alt="CSS3" className="w-8 h-8" />
                            <img src="../../src/assets/icons/javascript.svg" alt="JavaScript" className="w-8 h-8" />
                            <img src="../../src/assets/icons/nodejs-icon.svg" alt="Node.js" className="w-8 h-8" />
                            <img src="../../src/assets/icons/flutter.svg" alt="Flutter" className="w-8 h-8" />
                            <img src="../../src/assets/icons/react-dark.svg" alt="React" className="w-8 h-8" />
                            <img src="../../src/assets/icons/vitejs.svg" alt="Vite.js" className="w-8 h-8" />
                            <img src="../../src/assets/icons/tailwindcss-dark.svg" alt="Tailwind CSS" className="w-8 h-8" />
                        </div>

                        
                    </div>
                    <div className="mt-8">
                        <h3 className="text-xl font-semibold mb-2">Tools</h3>
                        <div className="flex flex-row flex-wrap justify-center md:justify-start gap-4">
                            <img src="../../src/assets/icons/postman.svg" alt="Postman" className="w-8 h-8" />
                            <img src="../../src/assets/icons/git.svg" alt="Git" className="w-8 h-8" />
                            <img src="../../src/assets/icons/github.svg" alt="GitHub" className="w-8 h-8" />
                        </div>
                    </div>
                </div>

                {/* Profile Image */}
                <div className="flex-2 mt-10 md:mt-0 flex justify-center md:justify-end">
                    <img
                        src={profileImage}
                        alt="Profile"
                        className="w-48 h-48 object-cover rounded-full border-4 border-gray-200 shadow-md"
                    />
                </div>
            </section>
        </div>
    );
};

export default HeroCard;
