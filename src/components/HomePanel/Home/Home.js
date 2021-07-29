import React, { useCallback, useEffect } from "react";
import HomeHeader from "../HomeHeader/HomeHeader";
import "./Home.css";
import HomeFooter from "../HomeFooter/HomeFooter";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Places from "../../Places/Places";
import { useResizeDetector } from "react-resize-detector";
import SchdedulePanel from "../../SchedulePanel/SchdedulePanel";
import ReactHtmlParser from "react-html-parser";

const Home = ({ setDisplayNone }) => {
  const onResize = useCallback(() => {}, []);

  const { height, ref } = useResizeDetector({
    refreshRate: 1000,
    onResize,
  });
  useEffect(() => {
    // if (height > 550) {
    //   setDisplayNone(true);
    // } else {
    //   setDisplayNone(false);
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [height]);
  console.log(height);

  let html =
    "<body>" +
    "    <style>" +
    "    .center-cropped {" +
    "      float:left;" +
    "      text-align:center;" +
    "      vertical-align: text-bottom;" +
    "      color:white;" +
    "      font-size: 42px;" +
    "      margin:10px;" +
    "      background-position: center center;" +
    "      background-repeat: no-repeat;" +
    "      border-radius:9%" +
    "    }" +
    "    .center-div {" +
    "      text-align:center;" +
    "      vertical-align: text-bottom;" +
    "      color:white;" +
    "      font-size: 52px;" +
    "      margin:5px;" +
    "      background-position: center center;" +
    "      background-repeat: no-repeat;" +
    "      border-radius:10%" +
    "    }" +
    "    div.scrollmenu {" +
    "      overflow-y: hidden; /* Hide vertical scrollbar */" +
    "      white-space: nowrap;" +
    "    }" +
    "    div.scrollmenu a {" +
    "      display: inline-block;" +
    "      color: white;" +
    "      text-align: center;" +
    "      padding: 14px;" +
    "      text-decoration: none;" +
    "    }" +
    "    .button1 {" +
    "      background-color: white;" +
    "      color: #3598DB;" +
    "      border: 2px solid #3598DB;" +
    "    }" +
    "  </style>" +
    "    <center>" +
    '      <div class="center-div" style="width:700px; height:200px; background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0)), url(\'https://cdn.pixabay.com/photo/2017/05/29/11/45/florence-2353567_960_720.jpg\');">Florence</div>' +
    "    </center>" +
    "    <p></p>" +
    '    <br style="clear:both;">' +
    '    <div><a href="placemoreinfolink:409806995">Introduction</a></div>' +
    "    <div><br>" +
    "    </div>" +
    "    <div><b>Neighborhoods</b></div>" +
    '    <div class="scrollmenu"> <a href="maplink:%7C17%7C">' +
    '        <div class="center-cropped" style="width:300px; height:200px; background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0)), url(\'https://p0.pikist.com/photos/74/730/firenze-il-duomo-cathedral-cityscape-italy-rooftops-city-building-architecture-thumbnail.jpg\');">Duomo</div>' +
    '      </a> <a href="maplink:%7C26%7C">' +
    '        <div class="center-cropped" style="width:300px; height:200px; background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0)), url(\'https://p0.pikist.com/photos/450/665/santa-croce-basilica-florence-italy-cathedral-architecture-church-religion-thumbnail.jpg\');">Santa' +
    "          Croce</div>" +
    '      </a> <a href="maplink:%7C24%7C">' +
    '        <div class="center-cropped" style="width: 300px; height:200px; background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)), url(\'https://live.staticflickr.com/2286/5791152626_539e08e1a2_n.jpg\');">San' +
    "          Lorenzo</div>" +
    '      </a> <a href="maplink:%7C22%7C">' +
    '        <div class="center-cropped" style="width: 300px; height:200px; background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0)), url(\'https://live.staticflickr.com/3269/2618027979_6f557b472e_n.jpg\');">Oltrarno</div>' +
    "      </a> </div>" +
    '    <br style="clear:both;">' +
    "    <div>" +
    "      <div><b>Must See Places</b></div>" +
    '      <div class="scrollmenu"> <a href="maplink:%7C%7C%7CMustSee" style=""><button' +
    "" +
    '            style="border: none;  padding:18px; margin:10px; width:150px; color:white; border-radius:20%; font-size:30px; background-color: #64DB65;">All</button></a>' +
    '        <a href="maplink:%7C%7C%7CVisited%7CMustSee"><button style="border: none;  padding:18px; margin:10px; color:white; border-radius:20%; font-size:30px; background-color: #FEC02D;">Visited</button></a>' +
    '        <a href="maplink:%7C%7C%7CNotVisited%7CMustSee"><button style="border: none;  padding:18px; margin:10px; color:white; border-radius:20%; font-size:30px; background-color: #36D1E5;">Not' +
    "            Visited</button></a> </div>" +
    "      <b>Places</b>" +
    '      <div class="scrollmenu"> <a href="maplink:%7C%7C%7CVisited"><button style="border: none;  padding:18px; margin:10px; color:white; border-radius:20%; font-size:30px; background-color: #64DB65;">Visited</button></a>' +
    '        <a href="maplink:%7C%7C%7CFavorites"><button style="border: none;  padding:18px; margin:10px; color:white; border-radius:20%; font-size:30px; background-color: #FEC02D;">Favorites</button></a>' +
    "      </div>" +
    "      <div><b>Full Day Tours</b></div>" +
    '      <div class="scrollmenu"> <a href="schedulelink:One%20Day%20Tour"><button' +
    "" +
    '            class="button1" style="padding:10px; margin:10px; border-radius:10%; font-size:30px; ">One' +
    '            Day Tour</button></a> <a href="schedulelink:Two%20Day%20Tour"><button' +
    "" +
    '            class="button1" style="padding:10px; margin:10px; border-radius:10%; font-size:30px; ">Two' +
    '            Day Tour</button></a> <a href="schedulelink:Three%20Day%20Tour"><button' +
    "" +
    '            class="button1" style="  padding:10px; margin:10px; border-radius:10%; font-size:30px; ">Three' +
    "            Day Tour</button></a> </div>" +
    "      <div><b>Walks, Biking, etc<br>" +
    "        </b></div>" +
    "      <div>" +
    "        <ul>" +
    '          <li><a href="sectionlink:156333784">Duomo, Short Walk</a></li>' +
    '          <li><a href="sectionlink:768314902">San Lorenzo, Short Walk</a></li>' +
    '          <li><a href="https://www.alltrails.com/">AllTrails</a></li>' +
    '          <li><a href="https://www.komoot.com/discover">Biking (Komoot)</a></li>' +
    "        </ul>" +
    "        <div><b>Restaurants</b></div>" +
    "      </div>" +
    "      <div>" +
    "        <ul>" +
    '          <li><a href="maplink:%7C13%7C">All</a></li>' +
    '          <li><a href="maplink:%7C%7C30">Chinese</a></li>' +
    '          <li><a href="maplink:%7C%7C31">Fast Food</a></li>' +
    '          <li><a href="maplink:%7C%7C32">French</a></li>' +
    '          <li><a href="maplink:%7C%7C52">Gelato</a></li>' +
    '          <li><a href="maplink:%7C%7C33">Indian</a></li>' +
    '          <li><a href="maplink:%7C%7C34">Italian</a></li>' +
    '          <li><a href="maplink:%7C%7C35">Japanese</a></li>' +
    '          <li><a href="maplink:%7C%7C37">Pizza</a></li>' +
    '          <li><a href="maplink:%7C%7C39">Thai</a></li>' +
    '          <li><a href="maplink:%7C%7C38">Seafood</a></li>' +
    '          <li><a href="maplink:%7C%7C40">Vegan</a></li>' +
    '          <li><a href="https://www.happycow.net/searchmap?s=3&location=Florence%2C+Italy&metric=mi&limit=81&order=default&lat=43.7696&lng=11.2558&zoom=11&page=1">Happy' +
    "              Cow (Vegan)</a></li>" +
    '          <li><a href="maplink:%7C%7C41">Vegetarian</a></li>' +
    "        </ul>" +
    '        <div><a href="sectionlink:709250642"><b>Transportation</b></a></div>' +
    "      </div>" +
    "      <div><b><br>" +
    "        </b></div>" +
    "      <div><b>Videos</b></div>" +
    "      <div>" +
    "        <ul>" +
    '          <li><a href="videolink:https://youtu.be/6y_eL_0sQQw">History of' +
    "              Florence</a></li>" +
    '          <li><a href="videolink:https://youtu.be/3KQ-gIdJmF4">Top 10 Things To' +
    "              Do</a></li>" +
    '          <li><a href="videolink:https://youtu.be/q51Atktm244">13 Tips</a></li>' +
    "        </ul>" +
    '        <div><a href="sectionlink:510942802"><b>Journal</b></a></div>' +
    "      </div>" +
    "      <div><br>" +
    "      </div>" +
    '      <div><a href="sectionlink:769773062"><b>Credits</b></a></div>' +
    "      <div><br>" +
    "      </div>" +
    "      <div><br>" +
    "      </div>" +
    "      <div><br>" +
    "      </div>" +
    "      <p></p>" +
    '      <ol style="font-size:130%">' +
    "      </ol>" +
    "      <!---STYLESTART-->" +
    '      <style type="text/css"> body { background-color: #ffffff; color: black; } body, td { font:normal normal georgia, times new roman, verdana; } a {color: #1913AB; text-decoration: none !important;} a:visited {color: #661099;} a:active {color: red;}' +
    "    a:hover {color: purple; background: #AFB; } .redtext {color: red;}</style><!---STYLEEND-->" +
    "  </body>";

  return (
    <Router>
      <div className="home">
        <HomeHeader />
        <Switch>
          <Route exact path="/">
            <div className="home-panel" ref={ref}>
              {ReactHtmlParser(html)}
            </div>
            <div className="map-panel none">
              <h1>Map Panel</h1>
            </div>
          </Route>
          <Route path="/places">
            <Places />
          </Route>
          <Route path="/schedule">
            <SchdedulePanel />
          </Route>
        </Switch>
        <HomeFooter />
      </div>
    </Router>
  );
};

export default Home;
