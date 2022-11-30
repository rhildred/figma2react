import React, { PureComponent } from 'react';
import { Cakariconschevrondown } from './components/Cakariconschevrondown';
import { CFrame2 } from './components/CFrame2';
import { CFrame3 } from './components/CFrame3';
import { CHome } from './components/CHome';
import { CGallery } from './components/CGallery';
import { CAbout } from './components/CAbout';
import { CFrame1 } from './components/CFrame1';

export class MasterHome extends PureComponent {
  render() {
    return <div className="master" style={{backgroundColor: "rgba(255, 255, 255, 1)"}}>
      <CHome {...this.props} nodeId="1:2" />
    </div>
  }
}

export class MasterGallery extends PureComponent {
  render() {
    return <div className="master" style={{backgroundColor: "rgba(255, 255, 255, 1)"}}>
      <CGallery {...this.props} nodeId="1:47" />
    </div>
  }
}

export class MasterAbout extends PureComponent {
  render() {
    return <div className="master" style={{backgroundColor: "rgba(255, 255, 255, 1)"}}>
      <CAbout {...this.props} nodeId="1:56" />
    </div>
  }
}

export class MasterFrame1 extends PureComponent {
  render() {
    return <div className="master" style={{backgroundColor: "rgba(255, 255, 255, 1)"}}>
      <CFrame1 {...this.props} nodeId="11:35" />
    </div>
  }
}

export function getComponentFromId(id) {
  if (id === "11:39") return Cakariconschevrondown11D39;
  if (id === "11:37") return CFrame211D37;
  if (id === "11:68") return CFrame311D68;
  if (id === "1:2") return CHome1D2;
  if (id === "1:47") return CGallery1D47;
  if (id === "1:56") return CAbout1D56;
  if (id === "11:35") return CFrame111D35;
  return null;
}

class Cakariconschevrondown11D39 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="11:40"
            style={{"width":"66.66666666666667%","marginLeft":"16.666666666666668%","height":"33.333333333333336%","top":"37.5%"}}
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

class CFrame211D37 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv">
          <div
            id="11:36"
            style={{"marginLeft":242.5,"width":120,"minWidth":120,"height":null,"marginTop":10,"marginBottom":40,"minHeight":29,"color":"rgba(255, 255, 255, 1)","fontSize":24,"fontWeight":200,"fontFamily":"Inter","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Read more</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv">
          <div
            id="11:39"
            style={{"marginLeft":283,"width":39,"minWidth":39,"height":null,"marginTop":-40,"marginBottom":10,"minHeight":30,"backgroundColor":"rgba(0, 0, 0, 0)","overflow":"hidden"}}
            className="innerDiv"
          >
            <Cakariconschevrondown {...this.props} nodeId="11:39" />
          </div>
        </div>
      </div>
    );
  }
}

class CFrame311D68 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv">
          <div
            id="11:67"
            style={{"marginLeft":0,"width":1440,"minWidth":1440,"height":null,"marginTop":0,"marginBottom":0,"minHeight":898,"backgroundColor":"rgba(42, 42, 42, 1)"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv">
          <div
            id="11:70"
            style={{"marginLeft":543,"width":181,"minWidth":181,"height":null,"marginTop":-777,"marginBottom":748,"minHeight":29,"color":"rgba(255, 255, 255, 1)","fontSize":24,"fontWeight":200,"fontFamily":"Inter","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">rgvegverbverver</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class CHome1D2 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv">
          <div
            id="1:6"
            style={{"marginLeft":618,"width":204,"minWidth":204,"height":null,"marginTop":38,"marginBottom":1760,"minHeight":140,"backgroundImage":"url(img/image+1.png)","backgroundSize":"cover"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv">
          <div
            id="1:22"
            style={{"marginLeft":561,"width":87,"minWidth":87,"height":null,"marginTop":-1736,"marginBottom":1687,"minHeight":49,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I1:22;1:9"
                  style={{"marginLeft":10,"marginRight":10,"flexGrow":1,"marginTop":10,"marginBottom":10,"color":"rgba(0, 0, 0, 1)","fontSize":24,"fontWeight":400,"fontFamily":"Inter","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">Home </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":2}} className="outerDiv">
          <div
            id="1:24"
            style={{"marginLeft":669,"width":100,"minWidth":100,"height":null,"marginTop":-1736,"marginBottom":1687,"minHeight":49,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I1:24;1:9"
                  style={{"marginLeft":10,"marginRight":10,"flexGrow":1,"marginTop":10,"marginBottom":10,"color":"rgba(0, 0, 0, 1)","fontSize":24,"fontWeight":400,"fontFamily":"Inter","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">Gallery </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":3}} className="outerDiv">
          <div
            id="1:26"
            style={{"marginLeft":790,"width":89,"minWidth":89,"height":null,"marginTop":-1736,"marginBottom":1687,"minHeight":49,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I1:26;1:9"
                  style={{"marginLeft":10,"marginRight":10,"flexGrow":1,"marginTop":10,"marginBottom":10,"color":"rgba(0, 0, 0, 1)","fontSize":24,"fontWeight":400,"fontFamily":"Inter","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">About </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":4}} className="outerDiv">
          <div
            id="1:8"
            style={{"marginLeft":0,"width":1440,"minWidth":1440,"height":null,"marginTop":-1635,"marginBottom":898,"minHeight":737}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":5}} className="outerDiv">
          <div
            id="6:24"
            style={{"marginLeft":462,"width":517,"minWidth":517,"height":null,"marginTop":-1519,"marginBottom":1442,"minHeight":77,"color":"rgba(255, 255, 255, 1)","fontSize":64,"fontWeight":700,"fontFamily":"Inter","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Open Happiness</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":6}} className="outerDiv">
          <div
            id="11:37"
            style={{"marginLeft":422,"width":605,"minWidth":605,"height":null,"marginTop":-1057,"marginBottom":978,"minHeight":79,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <CFrame2 {...this.props} nodeId="11:37" />
          </div>
        </div>
        <div style={{"zIndex":7}} className="outerDiv">
          <div
            id="11:68"
            style={{"marginLeft":0,"width":1440,"minWidth":1440,"height":null,"marginTop":-898,"marginBottom":0,"minHeight":898,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <CFrame3 {...this.props} nodeId="11:68" />
          </div>
        </div>
      </div>
    );
  }
}

class CGallery1D47 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv">
          <div
            id="1:48"
            style={{"marginLeft":618,"width":204,"minWidth":204,"height":null,"marginTop":38,"marginBottom":1368,"minHeight":140,"backgroundImage":"url(img/image+1.png)","backgroundSize":"cover"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv">
          <div
            id="1:49"
            style={{"marginLeft":561,"width":87,"minWidth":87,"height":null,"marginTop":-1344,"marginBottom":1295,"minHeight":49,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I1:49;1:9"
                  style={{"marginLeft":10,"marginRight":10,"flexGrow":1,"marginTop":10,"marginBottom":10,"color":"rgba(0, 0, 0, 1)","fontSize":24,"fontWeight":400,"fontFamily":"Inter","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">Home </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":2}} className="outerDiv">
          <div
            id="1:50"
            style={{"marginLeft":669,"width":100,"minWidth":100,"height":null,"marginTop":-1344,"marginBottom":1295,"minHeight":49,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I1:50;1:9"
                  style={{"marginLeft":10,"marginRight":10,"flexGrow":1,"marginTop":10,"marginBottom":10,"color":"rgba(0, 0, 0, 1)","fontSize":24,"fontWeight":400,"fontFamily":"Inter","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">Gallery </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":3}} className="outerDiv">
          <div
            id="1:51"
            style={{"marginLeft":790,"width":89,"minWidth":89,"height":null,"marginTop":-1344,"marginBottom":1295,"minHeight":49,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I1:51;1:9"
                  style={{"marginLeft":10,"marginRight":10,"flexGrow":1,"marginTop":10,"marginBottom":10,"color":"rgba(0, 0, 0, 1)","fontSize":24,"fontWeight":400,"fontFamily":"Inter","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">About </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":4}} className="outerDiv">
          <div
            id="6:15"
            style={{"marginLeft":74,"width":390,"minWidth":390,"height":null,"marginTop":-1254,"marginBottom":864,"minHeight":390,"backgroundImage":"url(img/image+2.png)","backgroundSize":"cover"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":5}} className="outerDiv">
          <div
            id="6:20"
            style={{"marginLeft":869,"width":427,"minWidth":427,"height":null,"marginTop":-1253,"marginBottom":864,"minHeight":389,"backgroundImage":"url(img/image+5.png)","backgroundSize":"cover"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":6}} className="outerDiv">
          <div
            id="6:17"
            style={{"marginLeft":493,"width":342,"minWidth":342,"height":null,"marginTop":-1248,"marginBottom":864,"minHeight":384,"backgroundImage":"url(img/image+3.png)","backgroundSize":"cover"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":7}} className="outerDiv">
          <div
            id="6:22"
            style={{"marginLeft":74,"width":1222,"minWidth":1222,"height":null,"marginTop":-840,"marginBottom":329,"minHeight":511,"backgroundImage":"url(img/image+6.png)","backgroundSize":"cover"}}
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

class CAbout1D56 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv">
          <div
            id="1:57"
            style={{"marginLeft":618,"width":204,"minWidth":204,"height":null,"marginTop":38,"marginBottom":1368,"minHeight":140,"backgroundImage":"url(img/image+1.png)","backgroundSize":"cover"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv">
          <div
            id="1:58"
            style={{"marginLeft":561,"width":87,"minWidth":87,"height":null,"marginTop":-1344,"marginBottom":1295,"minHeight":49,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I1:58;1:9"
                  style={{"marginLeft":10,"marginRight":10,"flexGrow":1,"marginTop":10,"marginBottom":10,"color":"rgba(0, 0, 0, 1)","fontSize":24,"fontWeight":400,"fontFamily":"Inter","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">Home </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":2}} className="outerDiv">
          <div
            id="1:59"
            style={{"marginLeft":669,"width":100,"minWidth":100,"height":null,"marginTop":-1344,"marginBottom":1295,"minHeight":49,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I1:59;1:9"
                  style={{"marginLeft":10,"marginRight":10,"flexGrow":1,"marginTop":10,"marginBottom":10,"color":"rgba(0, 0, 0, 1)","fontSize":24,"fontWeight":400,"fontFamily":"Inter","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">Gallery </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":3}} className="outerDiv">
          <div
            id="1:60"
            style={{"marginLeft":790,"width":89,"minWidth":89,"height":null,"marginTop":-1344,"marginBottom":1295,"minHeight":49,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="I1:60;1:9"
                  style={{"marginLeft":10,"marginRight":10,"flexGrow":1,"marginTop":10,"marginBottom":10,"color":"rgba(0, 0, 0, 1)","fontSize":24,"fontWeight":400,"fontFamily":"Inter","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">About </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":8}} className="outerDiv">
          <div
            id="1:66"
            style={{"marginLeft":419,"width":600,"minWidth":600,"height":null,"marginTop":-1271,"marginBottom":1006,"minHeight":265,"backgroundImage":"url(img/Screen+Shot+2022-11-12+at+11.20+1.png)","backgroundSize":"cover"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":4}} className="outerDiv">
          <div
            id="1:65"
            style={{"marginLeft":442,"width":557,"minWidth":557,"height":null,"marginTop":-968,"marginBottom":920,"minHeight":48,"color":"rgba(0, 0, 0, 1)","fontSize":40,"fontWeight":700,"fontFamily":"Inter","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">The Origin of Coca-Cola</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":6}} className="outerDiv">
          <div
            id="1:67"
            style={{"marginLeft":442,"width":557,"minWidth":557,"height":null,"marginTop":-906,"marginBottom":732,"minHeight":174,"color":"rgba(0, 0, 0, 1)","fontSize":24,"fontWeight":400,"fontFamily":"Inter","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">On May 8, 1886, Dr. John Pemberton sold the first glass of Coca-Cola at Jacobs' Pharmacy in downtown Atlanta. Serving nine drinks per day in its first year, Coca-Cola was new refreshment in its beginning. See the story here of how it all began.</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":9}} className="outerDiv">
          <div
            id="6:11"
            style={{"marginLeft":142,"width":527,"minWidth":527,"height":null,"marginTop":-682,"marginBottom":287,"minHeight":395,"backgroundImage":"url(img/Screen+Shot+2022-11-12+at+11.34+1.png)","backgroundSize":"cover"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":5}} className="outerDiv">
          <div
            id="6:12"
            style={{"marginLeft":719,"width":557,"minWidth":557,"height":null,"marginTop":-661,"marginBottom":517,"minHeight":144,"color":"rgba(0, 0, 0, 1)","fontSize":40,"fontWeight":700,"fontFamily":"Inter","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="34">Coca-Cola’s Sustainability History</span>
              <br key="br34" />
            </div>
          </div>
        </div>
        <div style={{"zIndex":7}} className="outerDiv">
          <div
            id="6:13"
            style={{"marginLeft":719,"width":557,"minWidth":557,"height":null,"marginTop":-540,"marginBottom":308,"minHeight":232,"color":"rgba(0, 0, 0, 1)","fontSize":24,"fontWeight":400,"fontFamily":"Inter","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="295">Sustainability is not something new at The Coca-Cola Company. Since 1917, our efforts have covered a wide range of topics including: water sustainability, women empowerment, community well-being, sustainable packaging, climate protection, human and workplace rights, and sustainable agriculture.</span>
              <br key="br295" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class CFrame111D35 extends PureComponent {
  render() {
    return (
      <div>
      </div>
    );
  }
}

