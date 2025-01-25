import React from "react";
import { LoadingSpinnerStyle } from "../styles/LoadingSpinnerStyle";

/**
 * LoadingSpinner component provides a customizable loading spinner.
 * @param {Object} props - Component props.
 * @param {string} props.size - Size of the spinner (e.g., "h-16 w-16").
 * @param {string} props.border - Border style for the spinner.
 * @param {string} props.color - Color of the spinner.
 * @returns {JSX.Element} The rendered LoadingSpinner component.
 */
const LoadingSpinner = ({ size = "h-16 w-16", border = "border-t-4 border-b-4", color = "border-purple-700 dark:border-white" }) => {
  return (
    <div className={LoadingSpinnerStyle.container}>
      <div className={`animate-spin rounded-full ${size} ${border} ${color}`} />
    </div>
  );
};

export default LoadingSpinner;
