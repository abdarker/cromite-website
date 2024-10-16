"use client";
import { useEffect, useState } from "react";

const releases = {
  android: {
    arm64:
      "https://github.com/uazo/cromite/releases/latest/download/arm64_ChromePublic.apk",
    arm: "https://github.com/uazo/cromite/releases/latest/download/arm_ChromePublic.apk",
    x64: "https://github.com/uazo/cromite/releases/latest/download/x64_ChromePublic.apk",
  },
  systemWebView: {
    arm64:
      "https://github.com/uazo/cromite/releases/latest/download/arm64_SystemWebView64.apk",
    x64: "https://github.com/uazo/cromite/releases/latest/download/x64_SystemWebView64.apk",
  },
  linux:
    "https://github.com/uazo/cromite/releases/latest/download/chrome-lin64.tar.gz",
  windows:
    "https://github.com/uazo/cromite/releases/latest/download/chrome-win.zip",
};

const platforms = [
  { name: "Android", key: "android", archs: ["arm64", "arm", "x64"] },
  { name: "System WebView", key: "systemWebView", archs: ["arm64", "x64"] },
  { name: "Linux", key: "linux", archs: [] },
  { name: "Windows", key: "windows", archs: [] },
];

const DownloadSelector = () => {
  // Set default values for selectedPlatform and selectedArch
  const [selectedPlatform, setSelectedPlatform] = useState<string>("android");
  const [selectedArch, setSelectedArch] = useState<string>("arm64");

  useEffect(() => {
    // Reset selectedArch if platform changes
    const platform = platforms.find((p) => p.key === selectedPlatform);
    if (platform && platform.archs.length > 0) {
      setSelectedArch(platform.archs[0]); // Default to the first architecture
    }
  }, [selectedPlatform]);

  const handlePlatformChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPlatform(event.target.value);
  };

  const handleArchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedArch(event.target.value);
  };

  const getDownloadLink = () => {
    if (!selectedPlatform) return "";
    if (selectedArch) {
      return releases[selectedPlatform][selectedArch] || "";
    }
    return releases[selectedPlatform] || "";
  };

  return (
    <section className="mb-4">
      <h2 className="text-2xl font-semibold">Download Cromite</h2>
      <p className="mb-2 text-sm text-neutral-400">
        Current Bromite stable version:{" "}
        <span className="font-semibold text-neutral-900">108.0.5359.156</span>
      </p>
      <p className="text-lg font-semibold">Platform</p>
      <div className="mb-4 flex flex-wrap items-center gap-x-4">
        {platforms.map((platform) => (
          <div key={platform.key} className="flex items-center">
            <input
              type="radio"
              name="platform"
              className="mr-1 cursor-pointer"
              value={platform.key}
              checked={selectedPlatform === platform.key}
              onChange={handlePlatformChange}
            />
            <label>{platform.name}</label>
          </div>
        ))}
      </div>

      {/* Architecture Selection */}
      {selectedPlatform !== "windows" && selectedPlatform !== "linux" && (
        <div className="mb-4">
          <p className="text-lg font-semibold">Architecture</p>
          {platforms
            .find((p) => p.key === selectedPlatform)
            ?.archs.map((arch) => (
              <div key={arch} className="flex items-center">
                <input
                  className="mr-1 cursor-pointer"
                  type="radio"
                  name="arch"
                  value={arch}
                  checked={selectedArch === arch}
                  onChange={handleArchChange}
                />
                <label>{arch}</label>
              </div>
            ))}
        </div>
      )}

      <a
        href={getDownloadLink()}
        className={`flex md:w-1/3 cursor-pointer items-center rounded-lg bg-neutral-950 px-4 py-2 text-white transition-colors duration-200 hover:bg-neutral-800 ${!selectedArch ? "cursor-not-allowed opacity-50" : ""}`}
        download
        style={{ pointerEvents: selectedArch ? "auto" : "none" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mr-2 size-6"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z"
            clipRule="evenodd"
          />
        </svg>
        Download Cromite 
      </a>
    </section>
  );
};

export default DownloadSelector;
