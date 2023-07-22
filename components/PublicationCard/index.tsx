import {Publication} from '../../types/publication';
import Image from 'next/image';

type PublicationCardProps = Publication & {
  content: string;
  slug: string;
};

export const PublicationCard = (props: PublicationCardProps) => {
  const imageFile = `/images/${props.slug}/coverImage.png`
  return (
    <div className='flex xl:flex-row flex-col shadow-md mb-1 p-2'>
      <div className='flex xl:w-52 w-full items-center px-2 mr-1'>
        <Image
          className='w-full max-h-full m-auto'
          src={`${imageFile}`}
          width={1920}
          height={1080}
          alt={props.title}
        ></Image>
      </div>
      <div className='flex flex-col pt-2 xl:px-0 px-2'>
        <div className='font-bold mb-2'>{props.title}</div>
        <div className='flex flex-row mb-2'>
          {props.authorsPrev && props.authorsPost ? (
            <div className='text-sm pr-1'>
              {props.authorsPrev + ', '}
              <span className='font-bold'>{'Zhen Wen, '}</span>
              {props.authorsPost}
            </div>
          ) : props.authorsPost ? (
            <div className='text-sm pr-1'>
              <span className='font-bold'>{'Zhen Wen, '}</span>
              {props.authorsPost}
            </div>
          ) : props.authorsPrev ? (
            <div className='text-sm pr-1'>
              {props.authorsPrev + ', '}
              <span className='font-bold'>{'Zhen Wen'}</span>
            </div>
          ) : (
            <div className='text-sm pr-1'>
              <span className='font-bold'>{'Zhen Wen'}</span>
            </div>
          )}
        </div>
        <div className='flex flex-row items-center mb-2'>
          <span className='text-sm font-bold mr-2 border-solid border-gray-300 border-r-2 pr-2'>
            {props.venueAbbr}
          </span>
          {props.published ? (
            <>
              <span className='text-sm pr-1'>{`${props.venue}, ${props.year}`}</span>
            </>
          ) : (
            <>
              <span className='text-sm pr-1'>{props.venue}</span>
            </>
          )}
        </div>
        <div className='flex flex-row py-1'>
          <Button>PDF</Button>
          <Button>Cite</Button>
          <Button>Video</Button>
          <Button>Code</Button>
        </div>
      </div>
    </div>
  );
};

const Button = (props) => {
  return (
    <div className='text-sm border leading-6 px-2 mr-2 rounded-md hover:cursor-pointer  hover:shadow-md hover:bg-slate-500 hover:text-slate-100 transition-colors select-none'>
      {props.children}
    </div>
  );
};

export default PublicationCard;