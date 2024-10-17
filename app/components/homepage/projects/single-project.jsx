import Image from 'next/image';
import Link from 'next/link';
import { FaCode, FaPlay } from 'react-icons/fa';
import placeholder from '/public/png/placeholder.png';

const SingleProject = ({ project }) => {
  const { name, description, tags, code, demo, image } = project;

  return (
    <div className='group w-full h-fit flex flex-col items-center justify-center relative cursor-pointer overflow-hidden px-4 md:px-8 py-6 bg-[linear-gradient(90deg,#2b1f4d_0%,#201435_100%)] shadow-lg rounded-lg border border-[#1a1443] transition-transform transform hover:scale-105'
    >
      <div className="absolute left-0 top-0 flex justify-center opacity-30">
        <svg width="1170" height="403" viewBox="0 0 1170 403" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M1170 57.3509H0V56.5132H1170V57.3509Z" fill="white" fillOpacity="0.1"></path>
          {/* Other paths omitted for brevity */}
        </svg>
      </div>

      <div className='flex flex-col items-center justify-between w-full h-full'>
        <h2 className='text-[#EFF3F4] font-bold text-2xl leading-tight text-center capitalize mb-2'>
          {name}
        </h2>
        <div className="p-6">
          <Image
            src={image ? image?.src : placeholder}
            alt={name}
            width={1080}
            height={720}
            className="w-80 h-64 transition-opacity duration-300 rounded-lg group-hover:opacity-80"
          />
        </div>
        <div className="flex items-center justify-between w-full mt-4">
          <Link
            href={demo}
            target='_blank'
            className="flex justify-center items-center w-12 h-12 rounded-full border-2 border-[#EFF3F4] text-[#EFF3F4] transition-all duration-300 hover:bg-[#231d4b] hover:text-violet-600 hover:border-[#0F0C41] hover:scale-110 decoration-clone cursor-pointer no-underline">
            <FaPlay className='text-lg' />
          </Link>
          
          <Link
            href={code}
            target='_blank'
            className="flex justify-center items-center w-12 h-12 rounded-full border-2 border-[#EFF3F4] text-[#EFF3F4] transition-all duration-300 hover:bg-[#231d4b] hover:text-violet-600 hover:border-[#0F0C41] hover:scale-110 cursor-pointer no-underline">
            <FaCode className='text-lg' />
          </Link>
        </div>
      </div>
      <p className="absolute w-[90%] md:w-[85%] md:min-h-[150px] translate-x-[-110%] transition-transform duration-300 p-4 leading-relaxed rounded-[0_20px_20px_0] left-0 top-0 bg-[#0f0b24] text-[#EFF3F4] translate-y-[20%] md:translate-y-[40%] group-hover:translate-x-[-2%] text-sm">
        {description}
      </p>
      <div className='group-hover:translate-x-0 absolute w-[140px] text-[0.9rem] flex justify-center gap-2 flex-col translate-x-full transition-transform duration-300 p-[0.825rem] rounded-[10px_0_0_10px] right-0 bottom-4 bg-[#0f0b24] text-[#EFF3F4]'>
        {tags.map((tag, id) => (
          <span className='font-medium break-words text-xs' key={id}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SingleProject;