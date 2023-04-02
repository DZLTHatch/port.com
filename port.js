const plItems = document.querySelectorAll('.pl-item');
const plClickables = document.querySelectorAll('.pl-clickable');
const portImg = document.getElementById('port-img');

const element1 = document.querySelector('.a1');
const element2 = document.querySelector('.a2');
const element3 = document.querySelector('.a3');
const element4 = document.querySelector('.a4');
const element5 = document.querySelector('.a5');
const element6 = document.querySelector('.a6');

const midColImg = document.getElementById('mid-col');
let originalImg = midColImg.src;

const ciS = document.querySelectorAll('.ci');

let welcomeList1 = [];
let welcomeList2 = [];
let welcomeList3 = [];
let welcomeList4 = [];
let welcomeList5 = [];

let welcomeLists = [welcomeList1, welcomeList2, welcomeList3, welcomeList4, welcomeList5];

const change1 = document.querySelectorAll('.change1');
const change2 = document.querySelectorAll('.change2');
const change3 = document.querySelectorAll('.change3');
const change4 = document.querySelectorAll('.change4');
const change5 = document.querySelectorAll('.change5');

const mcTitle = document.getElementById('ct3');
const mcDesc = document.getElementById('cd3');

const message = document.querySelector('.w-mess.a6');
const lines = message.querySelectorAll('span');

const eNavBar = document.querySelectorAll('.e-ic');

const eResources = document.querySelectorAll('.e-resources');
const ees = document.querySelectorAll('.e-2');

const eNicons = [];

let rbDictionary= [];

const resBtns = document.querySelectorAll('.e-res-btn');

let matrix = [];

let shopCart = [];

function prepareShopcart() {
    // get all the items in the shopcart 
}

function changeImg(id) {
    if (id == "1") {
        portImg.src = "https://dzlthatch.github.io/port.com/T.Hatch_modern_blue_sapphire_house_design_ui_ux_floating_design_9ecc0f3f-779f-4107-99f8-d4168d0ba7a3.png";
    } else if (id == "2") {
        portImg.src = "https://dzlthatch.github.io/port.com/tinywow_teamtree_17225342.png";
    } else {
        portImg.src = "https://dzlthatch.github.io/port.com/tinywow_developers_17224854.png";
    }
}

function checkActivity() {
    plItems.forEach(function(item) {

        if (item.classList.contains('active')) {
            item.style = 'color: white;';
            item.isActive = true;

            for (let i = 0; i < plItems.length; i++) {

                if (matrix[i][0] == item.id) {
                    
                    document.getElementById(matrix[i][1]).style = 'background: white';

                    plItems[i].style = 'background: black; border-radius: 18px; margin-left: -24px;';



                    const lastLetter = item.id.slice(-1);
                    changeImg(lastLetter);

                }

                else {
                    document.getElementById(matrix[i][1]).style = 'background: rgba(124, 121, 121, 0.6)';
                    document.getElementById(matrix[i][0]).style = 'color: rgba(124, 121, 121, 0.6)';
                }

            }

            // call a function here to check the corresponding clickable element

        } else {
            item.style = 'color:rgba(124, 121, 121, 0.6)';
            item.isActive = false;

            for (let i = 0; i < plItems.length; i++) {

                if (matrix[i][0] == item.id) {
                    
                    document.getElementById(matrix[i][1]).style = 'background: rgba(124, 121, 121, 0.6)';

                }

            }

        }
    })
}

function clearActivity() {
    plItems.forEach(function (item) {
        item.classList.remove('active');
    })
}


function swapInfo(x, y) {
    welcomeLists.forEach(item => {
        if (document.getElementById(item[0]).src == x) {
            const orTitle = document.getElementById('ct3').innerText;
            const orDesc = document.getElementById('cd3').innerText;

            // allocate x in welcomeLists
            const title = document.getElementById(item[1]).innerText // title
            const description = document.getElementById(item[2]).innerText // description

            // find corresponding IDS and values
            document.getElementById('ct3').innerText = title;
            document.getElementById('cd3').innerText = description;

            // y.id is the id of the clicked-target


            welcomeLists.forEach(z => {
                
                if (z[0] == y.id) {
                    document.getElementById(z[1]).innerText = orTitle;
                    document.getElementById(z[2]).innerText = orDesc;
                }

            })

            // store those values in variables to switch out

            // assign those variables to midColImg

        }
    })
}

function clearCurENB() {
    eNavBar.forEach(navBar => {
        if (navBar.classList.contains('cur-enb')) {
            navBar.classList.remove('cur-enb');
        }
    })
}

function clearResources() {
    eResources.forEach(resource => {
        if (resource.classList.contains('hide')) {
            resource.classList.remove('hide');
        }
    })

    ees.forEach(e => {
        if (e.classList.contains('hide')) {
            e.classList.remove('hide');
        }
    })
}


function changeResources(e) {

    // check for corresponding e-resource
    // e.target.id => eNavBar.id   
    // find the id in eNicons and show corresponding eResource

    eNicons.forEach(function(icon) {
        if (e !== icon[1].id) {
            icon[0].classList.add('hide');
            icon[2].classList.add('hide');
        }
    })

}

function removeItem(item) {
    let i = 0;
    while (i < shopCart.length) {
        if (shopCart[i] == item) {
            shopCart.splice(i, 1);
        } else {
            ++i;
        }
    }
}

function clickedBtn(e) {
    rbDictionary.forEach(dict => {
        // checks the id equals the parameter
        if (dict.id == e) {
            // checks if the value equals to zero or not    
            if (dict.val != 0) {
                dict.val = 0;
                changeBtnColor(dict.id);
                removeItem(dict.id);
                console.log(shopCart);

            }
            else {
                dict.val = 1;
                changeBtnColor(dict.id);
                shopCart.push(dict.id);
                console.log(shopCart);

            }
        }
    })
}

function changeBtnColor(btnID) {
    rbDictionary.forEach(dict => {
        if (dict.id == btnID) {
            if (dict.val == 0) {

                document.getElementById(btnID).style = 'background: reset; color: reset; opacity: reset;'
            } else {
                document.getElementById(btnID).style = 'background: white; color: black; opacity: 0.8'

            }
        }
    })

}

let cartTotal = document.getElementById('cart');


function getOrders() {
    let sum = 0;

    if (shopCart.length == 0) {
        alert("Please select services to Order Services");
    }
    else {
        shopCart.forEach(item => {
            sum += parseInt(document.getElementById(item).value);
        })

        cartTotal.innerText = sum;
    }
}

// brain
for (let i = 0; i < plItems.length; i++) {

    matrix.push([plItems[i].id, plClickables[i].id])

}

plItems.forEach(function(clickable) {
    clickable.addEventListener('click', function() {
        if (!clickable.isActive) {
            clearActivity();
            clickable.classList.add('active');
            checkActivity();
        }


    })
})

checkActivity();

setTimeout(() => {
  element1.classList.add('show');
}, 1250);
setTimeout(() => {
  element2.classList.add('show');
}, 1750);
setTimeout(() => {
  element3.classList.add('show');
}, 2250);
setTimeout(() => {
  element4.classList.add('show');
}, 2750);
setTimeout(() => {
  element5.classList.add('show');
}, 3000);

ciS.forEach(function(item) {
    item.addEventListener('click', function(e) {
        let curPic = e.target.src;
        let cP = e.target;

        swapInfo(curPic, cP);
        
        midColImg.src = curPic;
        e.target.src = originalImg;
        originalImg = curPic;

    })
});

for (let i = 0; i < change1.length; i++) {
    welcomeList1.push(change1[i].id);
}
for (let i = 0; i < change2.length; i++) {
    welcomeList2.push(change2[i].id);
}
for (let i = 0; i < change3.length; i++) {
    welcomeList3.push(change3[i].id);
}
for (let i = 0; i < change4.length; i++) {
    welcomeList4.push(change4[i].id);
}
for (let i = 0; i < change5.length; i++) {
    welcomeList5.push(change5[i].id);
}

lines.forEach((line, index) => {
  if (index % 2 === 0) {
    line.classList.add('shift-left');
  } else {
    line.classList.add('shift-right');
  }
});

message.addEventListener('mouseenter', () => {
  lines.forEach((line) => {
    line.style.animationPlayState = 'paused';
  });
});

message.addEventListener('mouseleave', () => {
  lines.forEach((line) => {
    line.style.animationPlayState = 'running';
  });
});

eNavBar.forEach(item => {
    item.addEventListener('click', () => {
        if (!item.classList.contains('cur-enb')) {
            clearCurENB();
            item.classList.add('cur-enb');
            clearResources();
            changeResources(item.id);
        }
    })
})

// get all elements with .e-resources and store them in a list


for (let i = 0; i < eResources.length; i++) {
    eNicons.push([eResources[i], eNavBar[i], ees[i]]);
}

resBtns.forEach(btn => {
    // value indicates whether the button is clicked or not
    // 0 => not clicked
    // 1 => clicked
    rbDictionary.push({btn: btn, val: 0, id: btn.id}); 
})

resBtns.forEach(function(click) {
    click.addEventListener('click', function() {
        clickedBtn(click.id);
        changeBtnColor(click.id);
        getOrders();
    })
})


// scroll-out 
var ScrollOut = (function () {
  'use strict';

  function clamp(v, min, max) {
      return min > v ? min : max < v ? max : v;
  }
  function sign(x) {
      return (+(x > 0) - +(x < 0));
  }
  function round(n) {
      return Math.round(n * 10000) / 10000;
  }

  var cache = {};
  function replacer(match) {
      return '-' + match[0].toLowerCase();
  }
  function hyphenate(value) {
      return cache[value] || (cache[value] = value.replace(/([A-Z])/g, replacer));
  }

  /** find elements */
  function $(e, parent) {
      return !e || e.length === 0
          ? // null or empty string returns empty array
              []
          : e.nodeName
              ? // a single element is wrapped in an array
                  [e]
              : // selector and NodeList are converted to Element[]
                  [].slice.call(e[0].nodeName ? e : (parent || document.documentElement).querySelectorAll(e));
  }
  function setAttrs(el, attrs) {
      // tslint:disable-next-line:forin
      for (var key in attrs) {
          if (key.indexOf('_')) {
              el.setAttribute('data-' + hyphenate(key), attrs[key]);
          }
      }
  }
  function setProps(cssProps) {
      return function (el, props) {
          for (var key in props) {
              if (key.indexOf('_') && (cssProps === true || cssProps[key])) {
                  el.style.setProperty('--' + hyphenate(key), round(props[key]));
              }
          }
      };
  }

  var clearTask;
  var subscribers = [];
  function loop() {
      clearTask = 0;
      subscribers.slice().forEach(function (s2) { return s2(); });
      enqueue();
  }
  function enqueue() {
      if (!clearTask && subscribers.length) {
          clearTask = requestAnimationFrame(loop);
      }
  }
  function subscribe(fn) {
      subscribers.push(fn);
      enqueue();
      return function () {
          subscribers = subscribers.filter(function (s) { return s !== fn; });
          if (!subscribers.length && clearTask) {
              cancelAnimationFrame(clearTask);
              clearTask = 0;
          }
      };
  }

  function unwrap(value, el, ctx, doc) {
      return typeof value === 'function' ? value(el, ctx, doc) : value;
  }
  function noop() { }

  /**
   * Creates a new instance of ScrollOut that marks elements in the viewport with
   * an "in" class and marks elements outside of the viewport with an "out"
   */
  // tslint:disable-next-line:no-default-export
  function main (opts) {
      // Apply default options.
      opts = opts || {};
      // Debounce onChange/onHidden/onShown.
      var onChange = opts.onChange || noop;
      var onHidden = opts.onHidden || noop;
      var onShown = opts.onShown || noop;
      var onScroll = opts.onScroll || noop;
      var props = opts.cssProps ? setProps(opts.cssProps) : noop;
      var se = opts.scrollingElement;
      var container = se ? $(se)[0] : window;
      var doc = se ? $(se)[0] : document.documentElement;
      var rootChanged = false;
      var scrollingElementContext = {};
      var elementContextList = [];
      var clientOffsetX, clientOffsety;
      var sub;
      function index() {
          elementContextList = $(opts.targets || '[data-scroll]', $(opts.scope || doc)[0]).map(function (el) { return ({ element: el }); });
      }
      function update() {
          // Calculate position, direction and ratio.
          var clientWidth = doc.clientWidth;
          var clientHeight = doc.clientHeight;
          var scrollDirX = sign(-clientOffsetX + (clientOffsetX = doc.scrollLeft || window.pageXOffset));
          var scrollDirY = sign(-clientOffsety + (clientOffsety = doc.scrollTop || window.pageYOffset));
          var scrollPercentX = doc.scrollLeft / (doc.scrollWidth - clientWidth || 1);
          var scrollPercentY = doc.scrollTop / (doc.scrollHeight - clientHeight || 1);
          // Detect if the root context has changed.
          rootChanged =
              rootChanged ||
                  scrollingElementContext.scrollDirX !== scrollDirX ||
                  scrollingElementContext.scrollDirY !== scrollDirY ||
                  scrollingElementContext.scrollPercentX !== scrollPercentX ||
                  scrollingElementContext.scrollPercentY !== scrollPercentY;
          scrollingElementContext.scrollDirX = scrollDirX;
          scrollingElementContext.scrollDirY = scrollDirY;
          scrollingElementContext.scrollPercentX = scrollPercentX;
          scrollingElementContext.scrollPercentY = scrollPercentY;
          var childChanged = false;
          for (var index_1 = 0; index_1 < elementContextList.length; index_1++) {
              var ctx = elementContextList[index_1];
              var element = ctx.element;
              // find the distance from the element to the scrolling container
              var target = element;
              var offsetX = 0;
              var offsetY = 0;
              do {
                  offsetX += target.offsetLeft;
                  offsetY += target.offsetTop;
                  target = target.offsetParent;
              } while (target && target !== container);
              // Get element dimensions.
              var elementHeight = element.clientHeight || element.offsetHeight || 0;
              var elementWidth = element.clientWidth || element.offsetWidth || 0;
              // Find visible ratios for each element.
              var visibleX = (clamp(offsetX + elementWidth, clientOffsetX, clientOffsetX + clientWidth) -
                  clamp(offsetX, clientOffsetX, clientOffsetX + clientWidth)) /
                  elementWidth;
              var visibleY = (clamp(offsetY + elementHeight, clientOffsety, clientOffsety + clientHeight) -
                  clamp(offsetY, clientOffsety, clientOffsety + clientHeight)) /
                  elementHeight;
              var intersectX = visibleX === 1 ? 0 : sign(offsetX - clientOffsetX);
              var intersectY = visibleY === 1 ? 0 : sign(offsetY - clientOffsety);
              var viewportX = clamp((clientOffsetX - (elementWidth / 2 + offsetX - clientWidth / 2)) / (clientWidth / 2), -1, 1);
              var viewportY = clamp((clientOffsety - (elementHeight / 2 + offsetY - clientHeight / 2)) / (clientHeight / 2), -1, 1);
              var visible = void 0;
              if (opts.offset) {
                  visible = unwrap(opts.offset, element, ctx, doc) <= clientOffsety ? 1 : 0;
              }
              else if ((unwrap(opts.threshold, element, ctx, doc) || 0) < visibleX * visibleY) {
                  visible = 1;
              }
              else {
                  visible = 0;
              }
              var changedVisible = ctx.visible !== visible;
              var changed = ctx._changed ||
                  changedVisible ||
                  ctx.visibleX !== visibleX ||
                  ctx.visibleY !== visibleY ||
                  ctx.index !== index_1 ||
                  ctx.elementHeight !== elementHeight ||
                  ctx.elementWidth !== elementWidth ||
                  ctx.offsetX !== offsetX ||
                  ctx.offsetY !== offsetY ||
                  ctx.intersectX !== ctx.intersectX ||
                  ctx.intersectY !== ctx.intersectY ||
                  ctx.viewportX !== viewportX ||
                  ctx.viewportY !== viewportY;
              if (changed) {
                  childChanged = true;
                  ctx._changed = true;
                  ctx._visibleChanged = changedVisible;
                  ctx.visible = visible;
                  ctx.elementHeight = elementHeight;
                  ctx.elementWidth = elementWidth;
                  ctx.index = index_1;
                  ctx.offsetX = offsetX;
                  ctx.offsetY = offsetY;
                  ctx.visibleX = visibleX;
                  ctx.visibleY = visibleY;
                  ctx.intersectX = intersectX;
                  ctx.intersectY = intersectY;
                  ctx.viewportX = viewportX;
                  ctx.viewportY = viewportY;
                  ctx.visible = visible;
              }
          }
          if (!sub && (rootChanged || childChanged)) {
              sub = subscribe(render);
          }
      }
      function render() {
          maybeUnsubscribe();
          // Update root attributes if they have changed.
          if (rootChanged) {
              rootChanged = false;
              setAttrs(doc, {
                  scrollDirX: scrollingElementContext.scrollDirX,
                  scrollDirY: scrollingElementContext.scrollDirY
              });
              props(doc, scrollingElementContext);
              onScroll(doc, scrollingElementContext, elementContextList);
          }
          var len = elementContextList.length;
          for (var x = len - 1; x > -1; x--) {
              var ctx = elementContextList[x];
              var el = ctx.element;
              var visible = ctx.visible;
              var justOnce = el.hasAttribute('scrollout-once') || false; // Once
              if (ctx._changed) {
                  ctx._changed = false;
                  props(el, ctx);
              }
              if (ctx._visibleChanged) {
                  setAttrs(el, { scroll: visible ? 'in' : 'out' });
                  onChange(el, ctx, doc);
                  (visible ? onShown : onHidden)(el, ctx, doc);
              }
              // if this is shown multiple times, keep it in the list
              if (visible && (opts.once || justOnce)) { // or if this element just display it once
                  elementContextList.splice(x, 1);
              }
          }
      }
      function maybeUnsubscribe() {
          if (sub) {
              sub();
              sub = undefined;
          }
      }
      // Run initialize index.
      index();
      update();
      render();
      // Collapses sequential updates into a single update.
      var updateTaskId = 0;
      var onUpdate = function () {
          updateTaskId = updateTaskId || setTimeout(function () {
              updateTaskId = 0;
              update();
          }, 0);
      };
      // Hook up document listeners to automatically detect changes.
      window.addEventListener('resize', onUpdate);
      container.addEventListener('scroll', onUpdate);
      return {
          index: index,
          update: update,
          teardown: function () {
              maybeUnsubscribe();
              window.removeEventListener('resize', onUpdate);
              container.removeEventListener('scroll', onUpdate);
          }
      };
  }

  return main;

}());
