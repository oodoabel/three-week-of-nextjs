import React from "react";

interface params {
  id: string;
}

const Page = ({ id }: params) => {
  return <div>User Profile: {id}</div>;
};

export default Page;
