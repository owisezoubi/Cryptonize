import React from "react";
import { LoadingSpinnerStyle } from "../styles/LoadingSpinnerStyle";

/**
 * LoadingSpinner component provides a customizable loading spinner.
 * @param {Object} props - Component props.
 * @param {string} [props.size] - Size of the spinner (e.g., "h-16 w-16").
 * @param {string} [props.border] - Border style for the spinner.
 * @param {string} [props.color] - Color of the spinner.
 * @returns {JSX.Element} The rendered LoadingSpinner component.
 */
const LoadingSpinner = ({ size, border, color }) => {
  // Use defaults from the style file if not provided as props.
  const spinnerSize = size || LoadingSpinnerStyle.defaultSize;
  const spinnerBorder = border || LoadingSpinnerStyle.defaultBorder;
  const spinnerColor = color || LoadingSpinnerStyle.defaultColor;

  return (
    <div className={LoadingSpinnerStyle.container}>
      <div className={`animate-spin rounded-full ${spinnerSize} ${spinnerBorder} ${spinnerColor}`} />
    </div>
  );
};

export default LoadingSpinner;
