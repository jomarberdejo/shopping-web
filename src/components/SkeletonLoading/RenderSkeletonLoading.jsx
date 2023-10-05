export const RenderSkeletonLoading = ({ count }) => {
  const skeletonElements = [];
  for (let i = 0; i < count; i++) {
    skeletonElements.push(
      <div
        key={`skeleton-${i}`}
        className="flex flex-col justify-center items-start gap-4 border border-gray-300 p-4"
      >
        <div className="w-60 h-60 bg-gray-300 animate-pulse self-center rounded-full"></div>
        <div className="h-4 bg-gray-300 w-full animate-pulse"></div>
        <div className="flex justify-between w-full">
          <div className="h-4 bg-gray-300 w-20 animate-pulse"></div>
          <div className="h-4 bg-gray-300 w-20 animate-pulse ml-2"></div>
        </div>
        <div className="h-4 bg-gray-300 w-full animate-pulse "></div>
      </div>
    );
  }
  return skeletonElements;
};
