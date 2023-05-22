export const LatestComponent = ({ src }: { src: string }) => (
  <div className="flex justify-center mt-24">
    <div className="md:w-1/2 md:h-1/2 w-4/5 h-full">
      <div className="md:aspect-w-16 md:aspect-h-9 aspect-w-2 aspect-h-3">
        <iframe src={src} seamless allowFullScreen></iframe>
      </div>
    </div>
  </div>
);
