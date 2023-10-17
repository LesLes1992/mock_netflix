import useInfoModal from "@/hooks/useInfoModal";
import useMovie from "@/hooks/useMovie";
import { useCallback, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import PlayButton from "./playButton";

type InfoModalProps = {
  visible?: boolean;
  onClose: any;
};

const InfoModal = ({ visible, onClose }: InfoModalProps) => {
  const [isVisible, setIsVisible] = useState(!!visible);

  const { movieId } = useInfoModal();
  const { data = {} } = useMovie(movieId);

  useEffect(() => {
    setIsVisible(!!visible);
  }, [visible]);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, []);

  if (!visible) return null;

  return (
    <div className='z-50 transition duration-300 bg-black bg-opacity-80 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0'>
      <div className='relative w-auto mx-auto max-w-3xl rounded-md overflow-hidden'>
        <div
          className={`${
            isVisible ? "scale-100" : "scale-0"
          } transform duration-300 relative flex-auto bg-zinc-900 drop-shadow-md`}
        >
          <div className='relative h-96'>
            <video
              className='w-full brightness-[60%] object-cover h-full'
              autoPlay
              muted
              loop
              src={data?.videoUrl}
              poster={data?.thumbnailUrl}
            ></video>
            <div
              onClick={handleClose}
              className='cursor-pointer absolute top-3 right-3 h-10 w-10 rounded-full bg-black bg-opacity-70 flex items-center justify-center hover:bg-white hover:opacity-70 hover:text-black text-white'
            >
              <AiOutlineClose size={20} />
            </div>

            <div
              className='
            absolute bottom-[10%] left-10'
            >
              <p className='text-white text-3xl md:text-4xl h-full lg:text-5xl mb-8 font-bold'>
                {data?.title}
              </p>
              <div className='flex flex-row gap-4 items-center'>
                <PlayButton movieId={data?.id} />
              </div>
            </div>
          </div>
          <div className='px-12 py-8'>
            <p className='text-green-400 font-semibold text-lg'>New</p>
            <p className='text-white text-lg'>{data?.duration}</p>
            <p className='text-white text-lg'>{data?.genre}</p>
            <p className='text-white text-lg'>{data?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
