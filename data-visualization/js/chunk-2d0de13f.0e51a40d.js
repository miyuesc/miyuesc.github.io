(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0de13f"],{"83b0":function(t,e,n){"use strict";n.r(e);var i=n("f2bf"),a={ref:"gaugeChartRef",class:"chart-canvas gauge-chart-canvas"};function o(t,e,n,o,r,c){var u=Object(i["N"])("ChartTitle");return Object(i["E"])(),Object(i["i"])("div",{class:"chart-component",style:t.backgroundStyle},[Object(i["m"])(u,{"title-config":t.info.titleConfig||{}},null,8,["title-config"]),Object(i["m"])("div",a,null,512)],4)}var r=n("313e"),c=n("a67f"),u=n("8178"),l=Object(i["o"])({name:"GaugeChart",props:{info:Object},setup:function(t){var e=Object(i["g"])((function(){return Object(u["a"])(t)})),n=Object(i["g"])((function(){var e;return null===(e=t.info)||void 0===e?void 0:e.size})),a=Object(i["J"])(null),o={tooltip:{formatter:"{a} <br/>{b} : {c}%"},grid:{left:20,top:20,right:20,bottom:20,containLabel:!0},series:[{name:"Pressure",type:"gauge",progress:{show:!0},detail:{valueAnimation:!0,formatter:"{value}"},data:[{value:50,name:"SCORE"}]}]},l=null,f=function(){a.value&&(l=r["a"](a.value),l.setOption(o))},b=Object(c["a"])((function(){l&&(l.dispose(),l=null),f()}),200);return Object(i["B"])((function(){return f()})),Object(i["cb"])(n,(function(t,e){t.width===e.width&&t.height===e.height||b()})),Object(i["cb"])((function(){var e,n;return null===(e=t.info)||void 0===e||null===(n=e.titleConfig)||void 0===n?void 0:n.visible}),(function(){return b()})),{gaugeChartRef:a,backgroundStyle:e}}});l.render=o;e["default"]=l}}]);