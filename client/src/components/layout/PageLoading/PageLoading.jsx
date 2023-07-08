import { LogoIcon } from "@cmp/common/icons/icons.js";

const PageLoading = () => {
  return (
    <div className="flex h-screen animate-pulse items-center justify-center">
      <LogoIcon className="w-[50%] sm:w-[25%] lg:w-[15%]" />
    </div>
  );
};

export default PageLoading;
