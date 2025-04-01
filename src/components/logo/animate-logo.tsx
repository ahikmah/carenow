import { Logo } from "./logo";

export function AnimateLogo({ logo }: { logo?: React.ReactNode }) {
  return (
    <div className="relative flex items-center justify-center w-32 h-32">
      <div className="animate-zoomInOut">
        {logo ?? <Logo width="64px" height="64px" />}
      </div>

      <div className="absolute w-[70%] h-[70%] border-4 border-primary opacity-50 rounded-[25%] animate-spinFastReverse" />

      <div className="absolute w-[85%] h-[85%] border-2 border-primary opacity-25 rounded-[25%] animate-spinFast" />
    </div>
  );
}
