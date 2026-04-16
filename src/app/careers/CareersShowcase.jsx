"use client";
import { useRef, useState } from "react";
import Link from "next/link";

export default function CareersShowcase() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  // Play / Pause
  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Progress update
  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;

    const percent = (video.currentTime / video.duration) * 100;
    setProgress(percent || 0);
  };

  // Seek
  const handleSeek = (e) => {
    const video = videoRef.current;
    if (!video) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;

    video.currentTime = percent * video.duration;
  };

  return (
    <div className="w-full">

      {/* ===================== 1. TOP SECTION ===================== */}
      {/* <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-start md:items-center">
        
        <div className="md:mt-auto md:mb-0 mt-auto">
          <h3 className="text-base md:text-lg text-primaryText font-medium mb-3">
            Great Creation
          </h3>
          <p className="text-base md:text-lg text-primaryText leading-relaxed">
            Praval fosters an inspiring atmosphere, providing ongoing opportunities
            for personal and professional development, fostering innovation, and
            promoting work-life balance.
          </p>
        </div>

        <div className="relative w-full overflow-hidden bg-black">
          
          <video
            ref={videoRef}
            src="images/videos/sample.mp4"
            className="w-full"
            onTimeUpdate={handleTimeUpdate}
          />

          <div className="absolute bottom-0 left-0 w-full bg-black/60 px-4 py-3">
            
            <div className="flex items-center gap-4">
              <div
                className="flex-1 h-1 bg-white/30 cursor-pointer"
                onClick={handleSeek}
              >
                <div
                  className="h-1 bg-gray-300 transition-all duration-200"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex items-center">
                <button
                  onClick={togglePlay}
                  className="text-white text-lg"
                >
                  {isPlaying ? "❚❚" : "▶"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* ===================== 2. TEXT SECTION ===================== */}
      <div className="max-w-7xl mx-auto px-6 py-12 text-left">
        <h2 className="text-xl md:text-3xl font-semibold mb-3">
          <span className="text-[#1072b1]">Join us</span> and make an impact!
        </h2>

        <h4 className="text-primaryText text-sm md:text-base font-medium mb-4">
          Be a part of a dynamic team that is pushing the boundaries of innovative thinking.
        </h4>

        <p className="text-primaryText leading-relaxed">
          We're always on the lookout for bright, innovative minds to join our family.
          We believe in fostering a work environment that's not only challenging and rewarding,
          but also fun and inclusive. If you have a passion for digital solutions and a drive
          to constantly learn, grow, and innovate, you might just be the perfect fit for our team.
        </p>
      </div>

      {/* ===================== 3. CTA SECTION ===================== */}
      <div className="flex flex-col items-center justify-center py-12 gap-4">
        
        {/* Dropbox Icon */}
        <img
          src="/images/dropbox-icon.png"
          alt="icon"
          className="w-12 h-12"
        />

        {/* Button */}
        <Link href="https://pravaltech.zohorecruit.in/jobs/Careers/" target="_blank">
          <button className="bg-[#1072b1] text-lg text-white font-bold px-8 py-3 rounded-2xl shadow-md hover:bg-[#398abd] hover:scale-102 cursor-pointer transition"> 
            View Open Positions
          </button>
        </Link>
      </div>

      {/* ===================== 4. IMAGE SECTION ===================== */}
      <div className="relative w-full h-[200px] md:h-[700px]">
        
        {/* Background Image */}
        <img
          src="/images/team.jpg"
          alt="team"
          className="w-full h-full object-cover md:object-contain"
        />

        {/* Badge */}
        {/* <img
          src="/images/great-place-badge.png"
          alt="badge"
          className="absolute bottom-1 left-0 w-20 md:w-28"
        /> */}
      </div>

    </div>
  );
}