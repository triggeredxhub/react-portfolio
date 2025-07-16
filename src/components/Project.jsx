import { FaExternalLinkAlt } from 'react-icons/fa';

const Project = () => {
    return (
        <div className='shared-container'>
            <div className='flex flex-col md:flex-row gap-8'>
                <div className='flex-1 min-w-0'>
                    <h2 className='text-2xl font-bold mb-2'>Iconitrax</h2>
                    <p className='text-gray-600 mb-1'>Work Project | WordPress</p>

                    <p className='text-gray-700 my-4'>
                        CRESTICO, INC. offers autonomy and cutting-edge tools for independent professionals, fostering a supportive
                        community for collaborative success in deal closures.
                    </p>

                    {/* Tech Tags */}
                    <div className='flex flex-wrap gap-3 my-4'>
                        {['WordPress', 'CMS', 'Elementor/Divi', 'GHL', 'Funneling'].map((tag, i) => (
                            <span
                                key={i}
                                className='px-4 py-2 bg-white border rounded-lg shadow-sm text-sm font-medium hover:shadow-md transition'
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Live Demo */}
                    <a
                        href='#'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-center mt-4 font-semibold text-black hover:underline'
                    >
                        Live Demo <FaExternalLinkAlt className='ml-2' />
                    </a>
                </div>

                <div className='flex-1 flex justify-center items-center'>
                    <div className='w-full max-w-md h-full max-h-96 overflow-hidden rounded-xl shadow-lg'>
                        <img
                            src='../../src/assets/image/CV.png'
                            alt='Iconitrax Screenshot'
                            className='w-full h-full object-cover'
                        />
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Project;