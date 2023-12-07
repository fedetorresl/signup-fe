import { useEffect, useState } from "react";
import { Spinner } from "../components";
import { Confetti } from "../assets";

interface RegistrationMessageProps {
  username: string | undefined;
}

export const RegistrationMessage = ({ username }: RegistrationMessageProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {!isLoading ? (
        <div className="w-full h-full lg:w-2/5 flex flex-col justify-center items-center gap-5">
          <img className="h-20 w-20" src={Confetti} alt="confetti" />
          <h2 className="text-error-100 font-ubuntu text-3xl font-medium leading-9 pb-4 text-center">
            Great! <br />
            You signed in <span className="font-bold">{username}</span>
          </h2>
        </div>
      ) : (
        <Spinner />
      )}
      ;
    </>
  );
};
