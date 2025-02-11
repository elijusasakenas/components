import { useEffect } from "react";
import { useSelector } from "react-redux";
import LogoIcon from '@/components/icons/logo'

const LoadingScreen = ({ ...props }) => {
  const loading = useSelector((state) => state.loading.loading);

  useEffect(() => {
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    loading &&
    <div className={`flex items-center justify-center align-middle w-full min-h-screen p-2 bg-base-50 min-w-screen fixed inset-0 z-50`}>
      <div className="p-6 py-10 lg:p-20 text-center headline-small uppercase">
        <LogoIcon mode="light" />

        <div className="flex space-x-2 justify-center pt-8">
          <div className="w-4 h-4 bg-orange-200 animate-pulse rounded-full"></div>
          <div className="w-4 h-4 bg-orange-200 animate-pulse animation-delay-200 rounded-full"></div>
          <div className="w-4 h-4 bg-orange-200 animate-pulse animation-delay-400 delay-700 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};
export default LoadingScreen;