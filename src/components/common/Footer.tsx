import { githubUrl, linkedinUrl, transitionStyle } from '@/constants/common';
import { Toolbar } from 'primereact/toolbar';

export function Footer() {
  return (
    <Toolbar
      className="!bg-violet-600 !border-none !rounded-none px-8 py-4 !text-violet-200"
      start={
        <div className="flex items-center gap-2">
          <i className="pi pi-face-smile text-2xl" />
          <span className="font-semibold">EH.NA_V</span>
          <div className="flex gap-4 ml-6">
            <a
              href={githubUrl}
              className={`hover:text-white ${transitionStyle}`}
            >
              <i className="pi pi-github text-xl" />
            </a>
            <a
              href={linkedinUrl}
              className={`hover:text-white ${transitionStyle}`}
            >
              <i className="pi pi-linkedin text-xl" />
            </a>
          </div>
        </div>
      }
      end={
        <p className="text-sm text-violet-200">
          © 2025 EH.NA_V. All rights reserved.
        </p>
      }
    />
  );
}
