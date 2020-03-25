(this.webpackJsonpmovie=this.webpackJsonpmovie||[]).push([[0],{26:function(e,t){e.exports={APIKey:"5926a6d9"}},38:function(e,t,a){e.exports=a.p+"static/media/spinner.e26d873e.gif"},40:function(e,t,a){e.exports=a(70)},45:function(e,t,a){},46:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),c=a.n(l),o=(a(45),a(6)),i=a(7),m=a(9),s=a(10),u=(a(46),a(8)),d=a(12),p=a(13),E=function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-light bg-dark mb-5"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navbar-header"},r.a.createElement(d.b,{className:"navbar-brand text-white text-lg brand-text",to:"/"},"Movie Info")),r.a.createElement("ul",{className:"navbar-nav ml-auto text-light d-inline-block"},r.a.createElement("li",{className:"nav-item d-inline-block mr-4"},r.a.createElement("i",{className:"fab fa-imdb fa-3x",id:"imdb-logo"}))))))},v=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"footer p-3 mt-4 text-center bg-dark text-light"},"Developed By:",r.a.createElement("span",{className:"text-warning font-weight-normal"}," Noah Perez "),", Using ",r.a.createElement("i",{className:"fab fa-react"})," React JS & Redux JS integrated with external movies data API",r.a.createElement("a",{href:"http://www.omdbapi.com/",target:"_blank",rel:"noopener noreferrer"}," OMDB")))))},b=a(38),g=a.n(b),h=function(){return r.a.createElement("div",null,r.a.createElement("img",{src:g.a,style:{width:"200px",margin:"auto",display:"block"},alt:"Loading..."}))},f=a(25),N=a.n(f),y=a(26),O=function(){return{type:"SET_LOADING"}},x=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).onChange=function(t){e.props.searchMovie(t.target.value)},e.onSubmit=function(t){t.preventDefault(),e.props.fetchMovies(e.props.text),e.props.setLoading()},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"jumbotron jumbotron-fluid mt-5 text-center"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"display-4 mb-3"},r.a.createElement("i",{className:"fa fa-search"})," Search for a movie ,TV series .."),r.a.createElement("form",{id:"searchForm",onSubmit:this.onSubmit},r.a.createElement("input",{type:"text",className:"form-control",name:"searchText",placeholder:"Search Movies, TV Series ...",onChange:this.onChange}),r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-bg mt-3"},"Search"))))}}]),a}(r.a.Component),j=Object(u.b)((function(e){return{text:e.movies.text}}),{searchMovie:function(e){return function(t){t({type:"SEARCH_MOVIE",payload:e})}},fetchMovies:function(e){return function(t){N.a.get("http://www.omdbapi.com/?apikey=".concat(y.APIKey,"&s=").concat(e)).then((function(e){return t({type:"FETCH_MOVIES",payload:e.data})})).catch((function(e){return console.log(e)}))}},setLoading:O})(x),w=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.movie;return r.a.createElement("div",{className:"col-xs-12 col-md-4 col-lg-3 mb-5"},r.a.createElement("div",{className:"card card-body bg-dark text-center h-100"},r.a.createElement("img",{className:"w-100 mb-2",src:e.Poster,alt:"Movie Cover"}),r.a.createElement("h5",{className:"text-light card-title"},e.Title," - ",e.Year),r.a.createElement(d.b,{className:"btn btn-primary",to:"/movie/"+e.imdbID},"Movie Details ",r.a.createElement("i",{className:"fas fa-chevron-right"}))))}}]),a}(r.a.Component),k=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e,t=this.props.movies;return e="True"===t.Response?t.Search.map((function(e,t){return r.a.createElement(w,{key:t,movie:e})})):null,r.a.createElement("div",{className:"row"},e)}}]),a}(r.a.Component),M=Object(u.b)((function(e){return{movies:e.movies.movies}}))(k),I=Object(u.b)((function(e){return{loading:e.movies.loading}}))((function(e){var t=e.loading;return r.a.createElement("div",{className:"container"},r.a.createElement(j,null),t?r.a.createElement(h,null):r.a.createElement(M,null))})),S=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchMovie(this.props.match.params.id),this.props.setLoading()}},{key:"render",value:function(){var e=this.props,t=e.loading,a=e.movie,n=r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-12 col-md-4 col-lg-12 card card-body "},r.a.createElement("img",{src:a.Poster,className:"thumbnail",alt:"Poster"}),r.a.createElement("hr",null),r.a.createElement("h3",null,"About "),a.Plot),r.a.createElement("div",{className:"col-xs-12 col-md-8 col-lg-12"},r.a.createElement("h2",{className:"mb-3"},a.Title),r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"Genre:")," ",a.Genre),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"Year:")," ",a.Year),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"Released:")," ",a.Released),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"Runtime:")," ",a.Runtime),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"Language:")," ",a.Language),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"Country:")," ",a.Country),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"Rated:")," ",a.Rated),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"IMDB Rating:")," ",a.imdbRating),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"Director:")," ",a.Director),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"Writer:")," ",a.Writer),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"Actors:")," ",a.Actors),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"Production:")," ",a.Production),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"BoxOffice:")," ",a.BoxOffice)))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"card card-body bg-dark my-5 text-light "},r.a.createElement("div",{className:"col-md-12 d-flex justify-content-center"},r.a.createElement("a",{href:"https://www.imdb.com/title/"+a.imdbID,target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary"},"View on IMDB"),r.a.createElement(d.b,{to:"/",className:"btn btn-default text-light"},"Go Back To Search"))))),l=t?r.a.createElement(h,null):n;return r.a.createElement("div",null,l)}}]),a}(r.a.Component),C=Object(u.b)((function(e){return{loading:e.movies.loading,movie:e.movies.movie}}),{fetchMovie:function(e){return function(t){N.a.get("http://www.omdbapi.com/?apikey=".concat(y.APIKey,"&i=").concat(e)).then((function(e){return t({type:"FETCH_MOVIE",payload:e.data})})).catch((function(e){return console.log(e)}))}},setLoading:O})(S),D=a(14),R=a(39),T=a(17),A={text:"",movies:[],loading:!1,movie:[]},P=Object(D.c)({movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH_MOVIE":return Object(T.a)({},e,{text:t.payload,loading:!1});case"FETCH_MOVIES":return Object(T.a)({},e,{movies:t.payload,loading:!1});case"FETCH_MOVIE":return Object(T.a)({},e,{movie:t.payload,loading:!1});case"SET_LOADING":return Object(T.a)({},e,{loading:!0});default:return e}}}),_=(a(69),[R.a]);var B=Object(D.d)(P,{},D.a.apply(void 0,_)),L=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(u.a,{store:B},r.a.createElement(d.a,null,r.a.createElement("div",null,r.a.createElement(E,null),r.a.createElement(p.a,{exact:!0,path:"/",component:I}),r.a.createElement(p.a,{exact:!0,path:"/movie/:id",component:C}),r.a.createElement(v,null))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.8444b128.chunk.js.map