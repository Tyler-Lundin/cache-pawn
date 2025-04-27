import Image from 'next/image';

export const Crown = () => {
    return (
      <div className="absolute top-0 right-20 w-64 h-64 z-30 rotate-15">
        <Image src="/images/crown.png" alt="Crown" width={192} height={192} className="w-64 h-64 z-50" />
      </div>
    );
  };

export const Cash = () => {
    return (
      <div className="absolute top-0 left-0 w-full h-full">
        <Image src="/images/cash.png" alt="Cash" width={192} height={192} className="w-48 h-48" />
      </div>
    );
  };


  export const Poster = () => {
    return (
      <div className="flex items-center justify-center">
      <div className="w-full max-w-[400px] aspect-[7/11] relative rounded-xl overflow-hidden shadow-lg">
        <Image
          src="/images/poster.png"
          alt="Fast Cache Pawn Poster"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
          className="object-cover"
          priority
        />
      </div>
    </div>    );
  };