import React, { useEffect } from 'react';

const Title = ({ children }) => {
  // Save the current title to restore it on unmount
  const previousTitle = document.title;

  useEffect(() => {
    // Set the new title when the component mounts
    document.title = children || 'Default page title';

    // Clean up by restoring the previous title on unmount
    return () => {
      document.title = previousTitle;
    };
  }, [children, previousTitle]);

  return null;
};

export default Title;
