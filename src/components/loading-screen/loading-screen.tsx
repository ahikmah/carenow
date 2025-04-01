import { AnimateLogo } from "../logo";

export const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-15rem)]">
      <AnimateLogo />
    </div>
  );
};
