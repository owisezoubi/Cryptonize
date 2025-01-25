import { TableStyle } from '../styles/CryptoTableStyle';

// Utility function to dynamically adjust table styles for responsiveness
export const adjustTableStyles = (width) => {
    if (width < 640) {
        return { cellPadding: "px-2 py-1", fontSize: "text-xs" }; // For small screens
    } else if (width < 1024) {
        return { cellPadding: "px-3 py-2", fontSize: "text-sm" }; // For medium screens
    }
    return { cellPadding: "px-4 py-2", fontSize: "text-base" }; // For large screens
};
