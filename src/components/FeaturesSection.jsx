import React from "react";
import { FeaturesStyle } from "../styles/FeaturesStyle";

function FeaturesSection() {
  return (
    <section className={FeaturesStyle.section}>
      <div className={FeaturesStyle.container}>
        <div className={FeaturesStyle.videoWrapper}>
          {/* Light Mode Video */}
          <video
            className="block dark:hidden"
            autoPlay
            loop
            muted
            style={{
              maxWidth: "600px", // Limit the width for a balanced size
              width: "100%", // Responsive width
              height: "auto",
            }}
          >
            <source src="/300-platforms-light.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Dark Mode Video */}
          <video
            className="hidden dark:block"
            autoPlay
            loop
            muted
            style={{
              maxWidth: "600px", // Limit the width for a balanced size
              width: "100%", // Responsive width
              height: "auto",
            }}
          >
            <source src="/300-platforms-dark.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
