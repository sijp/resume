import React, { ReactElement } from "react";
import { Container } from "@material-ui/core";

export type PagesProps = {
  children: ReactElement[] | ReactElement;
  background: string[];
};

export default function ({ children, background }: PagesProps) {
  const pages = Array.isArray(children) ? children : [children];
  return (
    <>
      {pages.map((page, i) => (
        <Container
          key={`pages-${i}-${page.key}`}
          maxWidth="xl"
          style={{
            minHeight: "100vh",
            paddingTop: 100,
            paddingBottom: 50,
            background: background[i],
            backgroundSize: "cover"
          }}
        >
          {page}
        </Container>
      ))}
    </>
  );
}
