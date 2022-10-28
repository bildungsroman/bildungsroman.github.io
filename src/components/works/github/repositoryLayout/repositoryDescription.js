import React from "react";
import { Text } from "../../../styled/repository";

export const RepositoryDescription = ({ repo }) => (
  <div>
    <Text>
      {repo.description || "This repo does not have a description"}

      {repo.homepageUrl && (
        <>
          {" -"} <a href={repo.homepageUrl}>{repo.homepageUrl}</a>
        </>
      )}
    </Text>
  </div>
);
