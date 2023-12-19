import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div>
      <Skeleton className="h-[380px] w-full" />
      <div className="mt-8 grid grid-cols-4 gap-4 px-5">
        <Skeleton className="h-[100px] w-full rounded-lg" />
        <Skeleton className="h-[100px] w-full rounded-lg" />
        <Skeleton className="h-[100px] w-full rounded-lg" />
        <Skeleton className="h-[100px] w-full rounded-lg" />
      </div>

      {/* Product info */}
      <div>
        <div className="mt-8 flex flex-col gap-2 px-5">
          <Skeleton className="h-4 w-[200px]" />
          <Skeleton className="h-3 w-[160px]" />
          <Skeleton className="h-2 w-[60px]" />
        </div>
        <div className="mt-4 flex items-center gap-2 px-5">
          <Skeleton className="h-6 w-[120px]" />
        </div>
        <div className="mt-8 flex flex-col gap-3 px-5">
          <Skeleton className="h-3 w-[80px]" />
          <Skeleton className="h-40 w-full" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
