(function() // Code in a function to create an isolate scope

  {
    let speed = 500;
    let moving_frequency = 15; // Affects performance !
    let links = document.getElementsByTagName('a');
    let href;
    for (let i = 0; i < links.length; i++) {
      href = (links[i].attributes.href === undefined) ? null : links[i].attributes.href.nodeValue.toString();
      if (href !== null && href.length > 1 && href.substr(0, 1) == '#') {
        links[i].onclick = function() {
          let element;
          let href = this.attributes.href.nodeValue.toString();
          if (element = document.getElementById(href.substr(1))) {
            let hop_count = speed / moving_frequency
            let getScrollTopDocumentAtBegin = getScrollTopDocument();
            let gap = (getScrollTopElement(element) - getScrollTopDocumentAtBegin) / hop_count;

            for (let i = 1; i <= hop_count; i++) {
              (function() {
                let hop_top_position = gap * i;
                setTimeout(function() {
                  window.scrollTo(0, hop_top_position + getScrollTopDocumentAtBegin);
                }, moving_frequency * i);
              })();
            }
          }

          return false;
        };
      }
    }

    let getScrollTopElement = function(e) {
      let top = -220;

      while (e.offsetParent != undefined && e.offsetParent != null) {
        top += e.offsetTop + (e.clientTop != null ? e.clientTop : 0);
        e = e.offsetParent;
      }

      return top;
    };

    let getScrollTopDocument = function() {
      return document.documentElement.scrollTop + document.body.scrollTop;
    };
  })();
