import { useRouter } from "next/router";
import { type } from "os";
import { BsFillPlayFill } from "react-icons/bs";

type playButtonProps = {
  movieId: string;
};

const PlayButton = ({ movieId }: playButtonProps) => {
  const router = useRouter();

  return (
    <button
      className='
      bg-white
      rounded-md 
      py-1 md:py-2 
      px-2 md:px-4 
      w-auto 
      text-xs lg:text-lg font-semibold 
      flex 
      flex-row 
      hover:bg-neutral-300
      transition 
      items-center'
      onClick={() => router.push(`/watch/${movieId}`)}
    >
      <BsFillPlayFill className='mr-1' size={25} />
      Play
    </button>
  );
};

export default PlayButton;
