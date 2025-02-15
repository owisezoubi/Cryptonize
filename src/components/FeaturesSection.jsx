import React from "react";
// Import styles from the separate design file
import { FeaturesStyle } from "../styles/FeaturesStyle";

/**
 * FeaturesSection component displays a section with light/dark mode videos.
 */
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
            style={FeaturesStyle.videoStyle}
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
            style={FeaturesStyle.videoStyle}
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
