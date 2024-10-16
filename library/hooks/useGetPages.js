import { useEffect, useState } from "react";
import fetchTool from "../contentful/fetchTool";
import { findBySlugQuery } from "../contentful/querys";

const useGetPages = (slug) => {
  const [page, setPage] = useState({});
  useEffect(() => {
    if (!slug) return;
    async function getPaths() {
      const {
        pageCollection: { items: pages },
      } = await fetchTool(findBySlugQuery(slug));

      const blocks = pages[0].blocksCollection.items;

      setPage({
        slug,
        title: pages[0].title,
        pageTitle: pages[0].pageTitle,
        generalPage: pages[0],
        blocks,
      });
    }
    getPaths();
  }, []);
  return page;
};

export default useGetPages;
