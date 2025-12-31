import React from "react";

const Container = ({ children }) => {
  return (
    <section className="max-w-360 mx-auto sm:px-2 px-4">
      {children}
    </section>
  );
};

export default Container;
