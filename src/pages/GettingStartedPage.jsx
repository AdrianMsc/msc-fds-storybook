import {
  faArrowRight,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const GettingStartedPage = () => {
  return (
    <>
      <h1 class="font-bold text-3xl mb-3">
        <small class="text-sm text-primary-blue">How to use</small> <br />
        Get started with MSC Design System
      </h1>
      <p>
        The MSC design system is built on a tailwind css base in its version
        0.0.0, therefore the components are highly customizable although it is
        not recommended to leave the design system guidelines.
      </p>

      <h2 class="font-bold text-xl mt-5">Config File</h2>
      <p>
        in the configuration file we can find defined the following styles of
        the MSC corporate identity
      </p>

      <ul class="list-disc mt-3 pl-10">
        <li>Colors</li>
        <li>Fonts*</li>
        <li>Customized Components</li>
      </ul>

      <h2 class="font-bold text-xl mt-5">How to Setup</h2>
      <p class="mb-2">Here you can see the steps to setup the CDN</p>
      <a
        target="_blank"
        class="flex items-center text-primary-blue w-fit"
        href="https://mscdirectjira.atlassian.net/wiki/spaces/PD/pages/2251456570/How+to+get+setup"
      >
        Learn More
        <FontAwesomeIcon
          icon={faArrowUpRightFromSquare}
          className="ml-1 size-3"
        />
      </a>
      <h2 class="font-bold text-xl mt-5">Batch Release Notes #001</h2>
      <p class="mb-2">
        Here you can see all the components are included and ready to use in
        this release
      </p>
      <a
        target="_blank"
        class="flex items-center text-primary-blue w-fit"
        href="https://mscdirectjira.atlassian.net/wiki/spaces/PD/pages/2251784264/Batch+Release+Notes"
      >
        See Notes
        <FontAwesomeIcon
          icon={faArrowUpRightFromSquare}
          className="ml-1 size-3"
        />
      </a>
    </>
  );
};

export default GettingStartedPage;
