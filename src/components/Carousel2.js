import React, { Component } from "react";
import Cards from "./Cards";

export default class Carousel2 extends Component {
  articles = [
    {
      source: {
        id: "bbc-sport",
        name: "BBC Sport",
      },
      author: null,
      title: "Twenty years on - how Anderson was shaped for greatness",
      description:
        "From Burnley Cricket Club to becoming England's greatest fast bowler, James Anderson reflects on his career 20 years on from his Test debut.",
      url: "http://www.bbc.co.uk/sport/cricket/65656784",
      urlToImage:
        "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/18446/production/_129789399_microsoftteams-image-4.png",
      publishedAt: "2023-05-22T06:22:22.8642434Z",
      content:
        "In a career laced with records, landmarks and achievements, James Anderson has hit another milestone.\r\nMonday marks exactly 20 years since England's most prolific fast bowler made his Test debut.\r\nWh… [+6546 chars]",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: null,
      title:
        "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      description:
        "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      publishedAt: "2020-04-27T11:41:47Z",
      content:
        "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: null,
      title:
        "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      description:
        "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      publishedAt: "2020-03-30T15:26:05Z",
      content:
        "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
    },
    {
        source: {
          id: "bbc-sport",
          name: "BBC Sport",
        },
        author: null,
        title: "Twenty years on - how Anderson was shaped for greatness",
        description:
          "From Burnley Cricket Club to becoming England's greatest fast bowler, James Anderson reflects on his career 20 years on from his Test debut.",
        url: "http://www.bbc.co.uk/sport/cricket/65656784",
        urlToImage:
          "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/18446/production/_129789399_microsoftteams-image-4.png",
        publishedAt: "2023-05-22T06:22:22.8642434Z",
        content:
          "In a career laced with records, landmarks and achievements, James Anderson has hit another milestone.\r\nMonday marks exactly 20 years since England's most prolific fast bowler made his Test debut.\r\nWh… [+6546 chars]",
      },
      {
        source: {
          id: "espn-cric-info",
          name: "ESPN Cric Info",
        },
        author: null,
        title:
          "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
        description:
          "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
        url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
        urlToImage:
          "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
        publishedAt: "2020-04-27T11:41:47Z",
        content:
          "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
      },
      {
        source: {
          id: "espn-cric-info",
          name: "ESPN Cric Info",
        },
        author: null,
        title:
          "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
        description:
          "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
        url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
        urlToImage:
          "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
        publishedAt: "2020-03-30T15:26:05Z",
        content:
          "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
      },
      {
        source: {
          id: "bbc-sport",
          name: "BBC Sport",
        },
        author: null,
        title: "Twenty years on - how Anderson was shaped for greatness",
        description:
          "From Burnley Cricket Club to becoming England's greatest fast bowler, James Anderson reflects on his career 20 years on from his Test debut.",
        url: "http://www.bbc.co.uk/sport/cricket/65656784",
        urlToImage:
          "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/18446/production/_129789399_microsoftteams-image-4.png",
        publishedAt: "2023-05-22T06:22:22.8642434Z",
        content:
          "In a career laced with records, landmarks and achievements, James Anderson has hit another milestone.\r\nMonday marks exactly 20 years since England's most prolific fast bowler made his Test debut.\r\nWh… [+6546 chars]",
      },
      {
        source: {
          id: "espn-cric-info",
          name: "ESPN Cric Info",
        },
        author: null,
        title:
          "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
        description:
          "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
        url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
        urlToImage:
          "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
        publishedAt: "2020-04-27T11:41:47Z",
        content:
          "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
      },
      {
        source: {
          id: "espn-cric-info",
          name: "ESPN Cric Info",
        },
        author: null,
        title:
          "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
        description:
          "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
        url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
        urlToImage:
          "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
        publishedAt: "2020-03-30T15:26:05Z",
        content:
          "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
      },
      {
        source: {
          id: "bbc-sport",
          name: "BBC Sport",
        },
        author: null,
        title: "Twenty years on - how Anderson was shaped for greatness",
        description:
          "From Burnley Cricket Club to becoming England's greatest fast bowler, James Anderson reflects on his career 20 years on from his Test debut.",
        url: "http://www.bbc.co.uk/sport/cricket/65656784",
        urlToImage:
          "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/18446/production/_129789399_microsoftteams-image-4.png",
        publishedAt: "2023-05-22T06:22:22.8642434Z",
        content:
          "In a career laced with records, landmarks and achievements, James Anderson has hit another milestone.\r\nMonday marks exactly 20 years since England's most prolific fast bowler made his Test debut.\r\nWh… [+6546 chars]",
      },
      {
        source: {
          id: "espn-cric-info",
          name: "ESPN Cric Info",
        },
        author: null,
        title:
          "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
        description:
          "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
        url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
        urlToImage:
          "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
        publishedAt: "2020-04-27T11:41:47Z",
        content:
          "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
      },
      {
        source: {
          id: "espn-cric-info",
          name: "ESPN Cric Info",
        },
        author: null,
        title:
          "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
        description:
          "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
        url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
        urlToImage:
          "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
        publishedAt: "2020-03-30T15:26:05Z",
        content:
          "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
      },
  ];
  constructor() {
    super();
    // console.log("Hello, I am  a constructor from mnews component");
    this.state = {
      articles: this.articles,
      // loading: false,
    };
  }

  // async componentDidMount() {
  //   console.log("cdm");
  //   url =
  //     "https://newsapi.org/v2/top-headlines?country=in&apiKey=5f416e3816a44132a28a5a9ee5f993c4";
  //   let data = await fetch(url);
  //   console.log(data);
  // }

  render() {
    return (
      <>
        <div className="container1 my-3">
        <h3 className="head2">Premium Astrologers</h3>
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Cards
                    title={element.title.slice(0, 33)}
                    description={element.description.slice(0, 66)}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
