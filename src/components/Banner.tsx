import { useState } from "react";

type BannerProps = {
  close: () => void;
};

const Banner = ({ close }: BannerProps) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const myEmail = "mohammadsamimsu@gmail.com";

  return (
    <div
      id="sticky-banner"
      className="start-0 z-50 flex justify-between w-full p-2 border-b border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
    >
      <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-1 sm:space-y-0 items-center mx-auto">
        <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400 space-x-1">
          <span>
            I'm actively looking for work. If you have anything at all, consider
            reaching out. No work is too small. Thanks a lot!{" "}
          </span>
        </p>
        <div className="flex space-x-2">
          <a href={`mailto:${myEmail}`}>
            <button className="whitespace-nowrap rounded bg-blue-500 text-white dark:text-slate-900 px-1.5 py-1 hover:bg-blue-600">
              Email me
            </button>
          </a>
          <button
            className="whitespace-nowrap rounded border border-blue-500 text-blue-500 px-1.5 py-1 hover:border-blue-600"
            onClick={async () => {
              navigator.clipboard.writeText(myEmail);
              setCopiedEmail(true);
              setTimeout(() => {
                setCopiedEmail(false);
              }, 1500);
            }}
          >
            {copiedEmail ? "Copied" : "Copy email"}
          </button>
        </div>
      </div>
      <div className="flex items-center">
        <button
          data-dismiss-target="#sticky-banner"
          type="button"
          className="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white"
          onClick={close}
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close banner</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
