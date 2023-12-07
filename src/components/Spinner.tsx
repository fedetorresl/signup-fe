import { SpinnerImg } from "../assets";

export const Spinner = () => (
  <div className="w-full h-full lg:w-2/5 flex justify-center items-center">
    <img className="animate-spin" src={SpinnerImg} alt="spinner" />
  </div>
);
