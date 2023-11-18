type Props = {
  title: string;
  content: string;
  className?: string;
  iconClassName?: string;
  titleClassName?: string;
  contentClassName?: string;
  icon: React.ReactElement;
  //   onClick: any;
};

export default function VisitorCard({
  title,
  icon,
  content,
  className = "",
  iconClassName = "",
  titleClassName = "",
  contentClassName = "",
}: //   onClick,
Props) {
  return (
    <div
      //   onClick={onClick}
      className={`w-full flex flex-col !items-center   rounded-[16px] py-5 !shadow-none border border-grey-300 ${className} `}
    >
      <div
        className={` text-center !items-center  bg-gray-100 !justify-center ${iconClassName} !rounded-xl p-1  `}
      >
        <div className="h-full !text-center !items-center   !justify-center !text-md px-1  py-0">
          {icon}
        </div>
      </div>
      <div className="flex  flex-col items-center">
        <h1
          className={`font-semibold text-xl ${contentClassName} !text-slate-700`}
        >
          {content}
        </h1>
        <h1
          className={`${titleClassName} !text-slate-700 text-lg font-semibold`}
        >
          {title}
        </h1>
      </div>
    </div>
  );
}
