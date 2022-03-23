import React from "react";
import { NextSeo } from "next-seo";
import { SITE_URL } from "../constants";

export const MetadataMeta = ({
  name,
  description,
  image,
  cardType = "summary",
  url,
}: {
  name: string;
  description: string;
  image: string;
  cardType?: string;
  url: string;
}) => {
  return (
    <NextSeo
      title={name}
      description={description}
      openGraph={{
        url: url,
        title: name,
        description: description,
        images: [{ url: image }],
        site_name: "StrataLaunchpad",
      }}
      twitter={{
        handle: "@StrataProtocol",
        site: SITE_URL,
        cardType: cardType,
      }}
    />
  );
};
