import { Button, Title } from "@/components/common";
import Link from "next/link";
import React from "react";

const HomeSection01 = () => {
  return (
    <div>
      Home Page
      <br />
      <Link href="/about">Go to About</Link>
      <Button />
      <Title />
    </div>
  );
};

export default HomeSection01;
