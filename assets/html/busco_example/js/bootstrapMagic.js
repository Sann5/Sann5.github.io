function removeBS3refs(){let e=document.getElementsByTagName("head")[0],t=e.getElementsByTagName("link");for(let e=0;e<t.length;e++)t[e].href.includes("q2templateassets/css/bootstrap")&&t[e].remove();let s=e.getElementsByTagName("script");for(let e=0;e<s.length;e++)s[e].src.includes("q2templateassets/js/bootstrap")&&s[e].remove()}function adjustTagsToBS3(){let e=document.getElementsByClassName("nav nav-tabs")[0].children;for(let t=0;t<e.length;t++){let s=e[t].className.includes("active");e[t].className="nav-item";let a=e[t].getElementsByTagName("a")[0];s&&a.classList.add("active"),a.classList.add("nav-link")}}