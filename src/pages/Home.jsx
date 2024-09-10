import React from "react";
import Lottie from "lottie-react";
import HomeLottie from "../assets/animation.json";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import MscSpinner from "../components/ds/MscSpinner";
import MscColors from "../components/ds/MscColors";

const Home = () => {
  return (
    <main className="max-w-[1000px] min-h-screen mx-auto flex items-center">
      {/* <section className="flex flex-col p-10 w-[50%] h-auto gap-6">
        <h1 className="font-semibold text-5xl text-pretty">
          Welcome to MSC Design System
        </h1>
        <p className="text-pretty text-xl ">
          Empowering Innovation Through Unified Design.
        </p>
        <div className="h-fit flex gap-2 mt-2">
          <Link
            to="/Docs"
            className="p-4 bg-blue-600 rounded-full text-white items-center flex gap-2 hover:bg-blue-800"
          >
            Go to Docs
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
          <a
            href="https://ds-blog-ten.vercel.app/"
            target="blank"
            className="p-4 bg-trasparent rounded-full text-black text-pretty items-center flex gap-2 hover:bg-slate-200"
          >
            Batch Release notes
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>
      </section>
      <section className=" w-[50%]">
        <Lottie animationData={HomeLottie} loop={true} />
      </section> */}
      <MscColors palette={"warning"} />
    </main>
  );
};

export default Home;
