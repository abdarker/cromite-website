import Image from "next/image";
import DownloadSelector from "./download-selector";

export default function Home() {
  return (
    <div className="m-auto flex min-h-screen w-full max-w-4xl flex-col p-4 font-[family-name:var(--font-geist-sans)] lg:px-20">
      <header className="">
        <h1 className="mb-4 text-5xl font-black leading-9">Cromite</h1>
        <h2 className="text-2xl leading-7 text-neutral-400">
          Cromite is a Bromite fork with ad blocking and enhanced privacy; take
          back your browser
        </h2>
        <div className="flex w-2/3 flex-col gap-4 py-10 md:flex-row">
          <a
            className="flex cursor-pointer items-center rounded-lg bg-neutral-950 px-4 py-2 text-white transition-colors duration-200 hover:bg-neutral-800"
            href="https://github.com/uazo/cromite"
          >
            <svg
              viewBox="0 0 438.549 438.549"
              className="mr-2 size-6"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z" />
            </svg>
            View on GitHub
          </a>
          <a
            className="flex cursor-pointer items-center rounded-lg bg-neutral-950 px-4 py-2 text-white transition-colors duration-200 hover:bg-neutral-800"
            href="https://github.com/uazo/cromite/discussions"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mr-2 size-6"
            >
              <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 0 0-1.032-.211 50.89 50.89 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48.527 48.527 0 0 1-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979Z" />
              <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0 0 15.75 7.5Z" />
            </svg>
            Discuss on GitHub
          </a>
        </div>
      </header>
      <div className="h-[1px] bg-neutral-300"></div>
      <main className="flex-1 pb-4 pt-8">
        <section className="mb-4">
          <h1 className="mb-4 text-3xl font-semibold">
            Take back your browser
          </h1>

          <p className="mb-6 text-lg">
            Cromite is a Chromium fork with ad blocking and privacy
            enhancements; take back your browser!
          </p>

          <div className="mb-6 flex justify-center">
            <Image
              title="Cromite - Take back your browser!"
              src="https://www.bromite.org/bromite.png"
              width={96}
              height={96}
              alt="Cromite"
              className="rounded shadow-lg"
            />
          </div>

          <p className="mb-4 text-lg">
            The main goal is to provide a no-clutter browsing experience without
            privacy-invasive features and with the addition of a fast
            ad-blocking engine.
          </p>

          <p className="mb-4 text-lg">
            Minimal UI changes are applied to help curb the idea of “browser as
            an advertisement platform.”
          </p>

          <p className="mb-4 text-lg">
            All patches are published under{" "}
            <a
              href="https://github.com/bromite/bromite/blob/master/LICENSE"
              className="text-blue-600 hover:underline"
            >
              GNU/GPL v3
            </a>{" "}
            to enable other open source projects’ usage.
          </p>

          <p className="mb-4 text-lg">
            Cromite is only available for Android Marshmallow (v6.0, API level
            23) and above.
          </p>

          <div className="flex justify-center">
            <Image
              style={{ border: "2px solid navy" }}
              title="New Tab Page"
              alt="New Tab Page"
              src="https://www.bromite.org/assets/screenshots/ntp_home.png"
              width={500}
              height={300}
              className="border-navy rounded-lg border-2 shadow-lg"
            />
          </div>
          <p className="mt-2 text-center text-neutral-600">New tab page</p>
        </section>
        <section className="mb-4">
          <h2 className="mb-2 text-2xl font-semibold">Resources</h2>
          <ul className="list-inside list-disc">
            <li>
              <a href="screenshots" className="text-blue-600 hover:underline">
                Screenshots
              </a>
            </li>
            <li>
              <a
                href="https://github.com/cromite/cromite/wiki"
                className="text-blue-600 hover:underline"
              >
                → View the Cromite Wiki
              </a>
            </li>
            <li>
              <a href="detect" className="text-blue-600 hover:underline">
                Cromite fingerprinting mitigations test page
              </a>
            </li>
            <li>
              <a
                href="custom-filters"
                className="text-blue-600 hover:underline"
              >
                Custom Ad Block filters
              </a>
            </li>
          </ul>
        </section>

        <section className="mb-4">
          <h2 className="mb-2 text-2xl font-semibold">Features</h2>
          <p>
            See the complete features list here:
            <a
              href="https://github.com/cromite/cromite/blob/master/README.md#features"
              className="text-blue-600 hover:underline"
            >
              {" "}
              → README
            </a>
            .
          </p>
        </section>

        <DownloadSelector />

        <section>
          <h2 className="mb-2 text-2xl font-semibold">Other downloads</h2>
          <ul className="list-inside list-disc">
            <li>
              <a
                href="https://github.com/cromite/cromite/releases"
                className="text-blue-600 hover:underline"
              >
                → All Cromite releases
              </a>
            </li>
            <li>
              <a
                href="/system_web_view"
                className="text-blue-600 hover:underline"
              >
                Cromite SystemWebView
              </a>
            </li>
            <li>
              <a href="/chromium" className="text-blue-600 hover:underline">
                Chromium releases
              </a>
            </li>
          </ul>
        </section>
      </main>
      <footer className="bg-gray-200">Footer</footer>
    </div>
  );
}
