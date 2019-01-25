import * as React from "react";

import { ICurry } from "../models/Curry";
import { CurryList } from "../components/CurryList";
import { MainContent, MainTitle } from "../styled/Page";
// import fetch from "isomorphic-unfetch";

interface IProps {
  curries: ICurry[];
}

export default class BlogsPage extends React.Component<IProps> {
  static async getInitialProps(ctx: any) {
    try {
      // const response = await fetch('https://??????.???/curries/thailand');
      // const json = await response.json();

      // 通常では上記のように外部APIサーバーに対してデータを取得しにいきますが、今回は簡潔に済ますために
      // static async getInitialProps() で直接データを returnする とにします。
      // 下記のデータがAPIサーバーから返ってくると想定して、進めます。

      const json: ICurry[] = [
        {
          id: 7,
          name: "Curry7",
          imageUrl: "/static/curry7.jpg"
        },
        {
          id: 8,
          name: "Curry8",
          imageUrl: "/static/curry8.jpg"
        },
        {
          id: 9,
          name: "Curry9",
          imageUrl: "/static/curry9.jpg"
        },
        {
          id: 10,
          name: "Curry10",
          imageUrl: "/static/curry10.jpg"
        },
        {
          id: 11,
          name: "Curry11",
          imageUrl: "/static/curry11.jpg"
        },
        {
          id: 12,
          name: "Curry12",
          imageUrl: "/static/curry12.jpg"
        }
      ];

      return {
        curries: json
      };
    } catch (e) {
      console.error(e);
      return {
        curries: []
      };
    }
  }

  public render() {
    return (
      <MainContent>
        <MainTitle>Thailand Curries</MainTitle>
        <CurryList curries={this.props.curries} />
      </MainContent>
    );
  }
}
