import React, { Fragment, useState } from "react";

import Accordion from "./Accordion";
const Faqs = () => {
  return (
    <div className="d-flex flex-column  align-items-center mb-4" id="faqs">
      <h2 className="text-center mb-3 pb-4">Frequently Asked Questions</h2>

      <div className="mt-14 w-full md:w-1/2">
        <Accordion question="How long does the program run?">
          <p>
            Yes, you can try us for free for 30 days. If you want, we’ll provide
            you with a free, personalized 30-minute onboarding call to get you
            up and running as soon as possible..
          </p>
        </Accordion>
        <Accordion question="Can I change my plan later?">
          <p>
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Accordion>
        <Accordion question="What is your cancellation policy?">
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </Accordion>
        <Accordion question="Can other info be added to an invoice?">
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </Accordion>
        <Accordion question="How does billing work?">
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </Accordion>
        <Accordion question="How do I change my account email?">
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </Accordion>
      </div>
    </div>
  );
};

export default Faqs;
