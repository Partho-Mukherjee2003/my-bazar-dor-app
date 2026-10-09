import React from 'react';

const loading = () => {
  return (
    <div className="flex w-full items-center justify-center border-t border-gray-200 py-3">
      <span className="loading loading-spinner text-success"></span>
    </div>
  );
};

export default loading;
