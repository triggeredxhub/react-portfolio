import { FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ id, title, role, description, techStack, image, link }) => {
    return (
        <div className='shared-container' id='project'>
            <div className='flex flex-col md:flex-row gap-8'>
                <div className='flex-1 min-w-0'>
                    <h2 className='text-2xl font-bold mb-2'>{title}</h2>
                    <p className='text-gray-600 mb-1'>{role}</p>

                    <p className='text-gray-700 my-4'>
                        {description}
                    </p>

                    {/* Tech Tags */}
                    <div className='flex flex-wrap gap-3 my-4'>
                        {techStack.map((tag, i) => (
                            <span
                                key={i}
                                className='px-4 py-2 bg-white border rounded-lg shadow-sm text-sm font-medium hover:shadow-md transition'
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Live Demo */}
                    {link && (
                        <a
                            href={link}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='inline-flex items-center mt-4 font-semibold text-black hover:underline'
                        >
                            Live Demo <FaExternalLinkAlt className='ml-2' />
                        </a>
                    )}
                </div>

                <div className='flex-1 flex justify-center items-center'>
                    <div className='w-full max-w-md h-full max-h-96 overflow-hidden rounded-xl shadow-lg'>
                        <img
                            src={image}
                            alt={title}
                            className='w-full h-full object-cover'
                        />
                    </div>
                </div>

            </div>
        </div>

    );
};

export default ProjectCard;