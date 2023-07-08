import Logo from "../Logo/Logo";

const PageLoading = () => {
  return (
    <div className="flex h-screen animate-pulse items-center justify-center">
      <Logo className="w-[50%] sm:w-[25%] lg:w-[15%]" />
    </div>
  );
};

export default PageLoading;
