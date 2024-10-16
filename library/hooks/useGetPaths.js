import { useEffect, useState } from "react";
import fetchTool from "../contentful/fetchTool";
import { slugQuery } from "../contentful/querys";

const useGetPaths = () => {
  const [paths, setPaths] = useState([]);
  useEffect(() => {
    async function getPaths() {
      const { pageCollection } = await fetchTool(slugQuery);
      setPaths(
        pageCollection.items.map((item) => {
          return {
            params: {
              slug: item.slug,
              name: item.name,
              shouldBeOnMenu: item.shouldBeOnMenu,
            },
          };
        })
      );
    }

    getPaths();
  }, []);
  return paths;
};

export default useGetPaths;
