import { useRouter } from "next/router";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

const Footer = () => {
  const router = useRouter();
  return (
    <div className='w-full h-20 flex flex-col justify-center items-center p-20'>
      <p className='text-white'>This is a self-study mock up project</p>
      <div className='flex gap-4 pt-8'>
        <AiOutlineLinkedin
          className='text-white cursor-pointer'
          size={40}
          onClick={() => {
            router.push("https://www.linkedin.com/in/xuefeng-gu-leslie/");
          }}
        />
        <AiOutlineGithub
          className='text-white cursor-pointer'
          size={40}
          onClick={() => {
            router.push("https://github.com/leslieGuDev");
          }}
        />
      </div>
    </div>
  );
};

export default Footer;
