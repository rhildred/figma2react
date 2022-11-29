import React, { PureComponent } from 'react';
import { CHome } from './components/CHome';
import { CAbout } from './components/CAbout';
import { CGallery } from './components/CGallery';

export class MasterHome extends PureComponent {
  render() {
    return <div className="master" style={{backgroundColor: "rgba(255, 255, 255, 1)"}}>
      <CHome {...this.props} nodeId="1:3" />
    </div>
  }
}

export class MasterAbout extends PureComponent {
  render() {
    return <div className="master" style={{backgroundColor: "rgba(255, 255, 255, 1)"}}>
      <CAbout {...this.props} nodeId="1:84" />
    </div>
  }
}

export class MasterGallery extends PureComponent {
  render() {
    return <div className="master" style={{backgroundColor: "rgba(255, 255, 255, 1)"}}>
      <CGallery {...this.props} nodeId="1:76" />
    </div>
  }
}

export function getComponentFromId(id) {
  if (id === "1:3") return CHome1D3;
  if (id === "1:84") return CAbout1D84;
  if (id === "1:76") return CGallery1D76;
  return null;
}

class CHome1D3 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{"zIndex":4}} className="outerDiv">
          <div
            id="1:75"
            style={{"marginLeft":360,"width":0,"minWidth":0,"height":null,"marginTop":41,"marginBottom":787,"minHeight":4}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{}} className="outerDiv">
          <div
            id="1:69"
            style={{"marginLeft":657,"width":54,"minWidth":54,"height":null,"marginTop":-743,"marginBottom":708,"minHeight":35,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I1:69;1:56"
                  style={{"marginLeft":10,"marginRight":10,"flexGrow":1,"marginTop":10,"marginBottom":10,"color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":400,"fontFamily":"Inter","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">Home</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv">
          <div
            id="1:71"
            style={{"marginLeft":766,"width":60,"minWidth":60,"height":null,"marginTop":-743,"marginBottom":708,"minHeight":35,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I1:71;1:56"
                  style={{"marginLeft":10,"marginRight":10,"flexGrow":1,"marginTop":10,"marginBottom":10,"color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":400,"fontFamily":"Inter","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">Gallery</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":2}} className="outerDiv">
          <div
            id="1:73"
            style={{"marginLeft":875,"width":55,"minWidth":55,"height":null,"marginTop":-743,"marginBottom":708,"minHeight":35,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I1:73;1:56"
                  style={{"marginLeft":10,"marginRight":10,"flexGrow":1,"marginTop":10,"marginBottom":10,"color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":400,"fontFamily":"Inter","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">About</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":3}} className="outerDiv">
          <div
            id="1:93"
            style={{"marginLeft":240,"width":800,"minWidth":800,"height":null,"marginTop":-625,"marginBottom":93,"minHeight":532,"backgroundImage":"url(img/image+1.png)","backgroundSize":"cover"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class CAbout1D84 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{"zIndex":3}} className="outerDiv">
          <div
            id="1:88"
            style={{"marginLeft":360,"width":0,"minWidth":0,"height":null,"marginTop":41,"marginBottom":787,"minHeight":4}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{}} className="outerDiv">
          <div
            id="1:85"
            style={{"marginLeft":657,"width":54,"minWidth":54,"height":null,"marginTop":-743,"marginBottom":708,"minHeight":35,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I1:85;1:56"
                  style={{"marginLeft":10,"marginRight":10,"flexGrow":1,"marginTop":10,"marginBottom":10,"color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":400,"fontFamily":"Inter","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">Home</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv">
          <div
            id="1:86"
            style={{"marginLeft":766,"width":60,"minWidth":60,"height":null,"marginTop":-743,"marginBottom":708,"minHeight":35,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I1:86;1:56"
                  style={{"marginLeft":10,"marginRight":10,"flexGrow":1,"marginTop":10,"marginBottom":10,"color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":400,"fontFamily":"Inter","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">Gallery</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":2}} className="outerDiv">
          <div
            id="1:87"
            style={{"marginLeft":875,"width":55,"minWidth":55,"height":null,"marginTop":-743,"marginBottom":708,"minHeight":35,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I1:87;1:56"
                  style={{"marginLeft":10,"marginRight":10,"flexGrow":1,"marginTop":10,"marginBottom":10,"color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":400,"fontFamily":"Inter","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">About</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":4}} className="outerDiv">
          <div
            id="1:95"
            style={{"marginLeft":240,"width":800,"minWidth":800,"height":null,"marginTop":-664,"marginBottom":64,"minHeight":600,"backgroundImage":"url(img/image+2.png)","backgroundSize":"cover"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class CGallery1D76 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{"zIndex":3}} className="outerDiv">
          <div
            id="1:80"
            style={{"marginLeft":360,"width":0,"minWidth":0,"height":null,"marginTop":41,"marginBottom":787,"minHeight":4}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{}} className="outerDiv">
          <div
            id="1:77"
            style={{"marginLeft":657,"width":54,"minWidth":54,"height":null,"marginTop":-743,"marginBottom":708,"minHeight":35,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I1:77;1:56"
                  style={{"marginLeft":10,"marginRight":10,"flexGrow":1,"marginTop":10,"marginBottom":10,"color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":400,"fontFamily":"Inter","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">Home</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv">
          <div
            id="1:78"
            style={{"marginLeft":766,"width":60,"minWidth":60,"height":null,"marginTop":-743,"marginBottom":708,"minHeight":35,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I1:78;1:56"
                  style={{"marginLeft":10,"marginRight":10,"flexGrow":1,"marginTop":10,"marginBottom":10,"color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":400,"fontFamily":"Inter","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">Gallery</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":2}} className="outerDiv">
          <div
            id="1:79"
            style={{"marginLeft":875,"width":55,"minWidth":55,"height":null,"marginTop":-743,"marginBottom":708,"minHeight":35,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I1:79;1:56"
                  style={{"marginLeft":10,"marginRight":10,"flexGrow":1,"marginTop":10,"marginBottom":10,"color":"rgba(0, 0, 0, 1)","fontSize":12,"fontWeight":400,"fontFamily":"Inter","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">About</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":4}} className="outerDiv">
          <div
            id="1:97"
            style={{"marginLeft":171,"width":300,"minWidth":300,"height":null,"marginTop":-616,"marginBottom":216,"minHeight":400,"backgroundImage":"url(img/image+3.png)","backgroundSize":"cover"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":5}} className="outerDiv">
          <div
            id="1:98"
            style={{"marginLeft":527,"width":300,"minWidth":300,"height":null,"marginTop":-616,"marginBottom":216,"minHeight":400,"backgroundImage":"url(img/3563206511_cdc03603b3_w+1.jpeg)","backgroundSize":"cover"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":6}} className="outerDiv">
          <div
            id="1:99"
            style={{"marginLeft":883,"width":279,"minWidth":279,"height":null,"marginTop":-616,"marginBottom":217,"minHeight":399,"backgroundImage":"url(img/2989456835_233df7ed55_w+1.jpeg)","backgroundSize":"cover"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

