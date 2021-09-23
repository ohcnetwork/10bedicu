import React from "react";
import { parametreize, statesStaticPaths, humanize } from "/lib/utils";
import { useRouter } from "next/router";

export default function State({ state }) {
  const { query } = useRouter();
  const resourceType = query.resource;

  return (
    <div>
      <h1>{humanize(state)}</h1>
      {/* <DetailedHome key={state} state={humanize(state)} type={resourceType} /> */}
    </div>
  );
}

export async function getStaticProps({ params }) {
  return {
    props: {
      state: parametreize(params.state),
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: statesStaticPaths(),
    fallback: false,
  };
}
