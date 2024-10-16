import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { BigLogo } from "@/components/Home";
import Banner from "@/components/Banner";
import { Button, H1, H2, H3, P } from "@/components/Global";

const useConvertInfo = (info) => {
  const navigate = useNavigate();
  const [convertedInfo, setConvertedInfo] = useState();

  useEffect(() => {
    let listComponents = [];
    info.map((item, index) => {
      switch (item.type) {
        case "bigLogo":
          listComponents.push(
            <BigLogo key={"big-logo" + index} src={item.data} alt="Big Logo" />
          );

          break;
        case "h1":
          listComponents.push(<H1 key={"h1" + index}>{item.data}</H1>);
          break;
        case "h2":
          listComponents.push(<H2 key={"h2" + index}>{item.data}</H2>);
          break;
        case "h3":
          listComponents.push(<H3 key={"h3" + index}>{item.data}</H3>);
          break;
        case "p":
          listComponents.push(<P key={"p" + index}>{item.data}</P>);
          break;
        case "button":
          listComponents.push(
            <Button key={"button" + index} onClick={() => navigate(item.link)}>
              {item.text}
            </Button>
          );
          break;
        case "banner":
          listComponents.push(
            <Banner key={"banner" + index} img={item.data} />
          );
          break;
        case "br":
          listComponents.push(<br key={"br" + index} />);
          break;
        case "custom":
          listComponents.push(item.data);
          break;
        default:
          break;
      }
      return null;
    });
    setConvertedInfo(listComponents);
  }, [info, navigate]);
  return convertedInfo;
};
export default useConvertInfo;
