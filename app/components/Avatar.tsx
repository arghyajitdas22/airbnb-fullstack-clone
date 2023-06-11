import Image from 'next/image';
import * as React from 'react';

interface IAvatarProps {
  src: string | null | undefined
}

const Avatar: React.FunctionComponent<IAvatarProps> = ({
  src
}) => {
  {
    if (src!==null && src!==undefined) {
      return (
        <Image alt='avatar' src={src} width={30} height={30} className='rounded-full'/>
      )
    }
    else {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-[30px] h-[30px] rounded-full">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
      )
    }
  }
};

export default Avatar;
