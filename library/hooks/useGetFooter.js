import { useEffect, useState } from "react";
import fetchTool from "../contentful/fetchTool";
import { footerQuery } from "../contentful/querys";

const useGetFooter = () => {
  const [footer, setFooter] = useState([]);
  useEffect(() => {
    async function getFooter() {
      const { footherCollection } = await fetchTool(footerQuery);
      setFooter(
        footherCollection.items.map((item) => {
          return {
            params: {
              slug: item.slug,
              content: item.content,
              bottomImage: item.bottomImage.url
            },
          };
        })
      );
    }

    getFooter();
  }, []);
  return footer;
};

export default useGetFooter;
