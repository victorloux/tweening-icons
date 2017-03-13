/**
 * This array contains all the social media icons (rendered with the tween effect)
 * @type {Array}
 *
 * The format is as follow:
 * [
 *     0: id of the button (must match the HTML id of the SVG element in the web page)
 *     1: array of paths during normal state
 *     2: array of paths during hovered state
 *  ]
 *
 *  Keys 1 and 2 must be arrays (even if there's only one value inside) and MUST have the same length / number of paths.
 *  The paths are defined in the SVG mini-language for paths, which must be extracted by hand from an SVG exported by
 *  Illustrator or other source, it is what's into the "d" attribute of a <path> element. If an element is exported
 *  as a polygon instead of a path, you need to convert its points into the SVG path format first using the tool
 *  poly2path: http://semisignal.com/?p=3042
 *
 *  Each item of the first array will be rendered as a path inside the SVG, and be tweened to the matching path
 *  in the second array (same index) when the icon is hovered. So make sure big shapes match with big shapes, and
 *  smaller 'holes' are turned into other shapes.
 *
 *  If the number of shapes/paths do not match between the two states then try to copy the origin point of either
 *  (first two numbers separated by a comma after M, then add a Z in the end to copy the path, e.g. M3,5z)
 *  This is better than an empty path, because when an empty path gets tweened in or out it will just weirdly come
 *  from the top-left corner with no real animation.
 *
 */
var iconPaths = [
    [ // facebook
        "fb_button",
        [
            "M94.82 162.05V89.48h24.36l3.65-28.28H94.82V43.14c0-8.19 2.27-13.77 14.02-13.77l14.98-.01V4.06c-2.59-.34-11.48-1.11-21.82-1.11-21.59 0-36.38 13.18-36.38 37.39V61.2H41.19v28.28h24.42v72.57h29.21z"
        ],
        [
            "M158.02,84.71c0-6.12-4.08-10.2-16.33-10.2c-28.57,0-40.82,0-36.74-8.16c4.49-8.98,12.25-28.57,12.25-44.9 c0-8.16-1.84-12.25-8.16-12.25c-8.16,0-12.25,20.41-24.49,36.74C77,56.35,67.81,65.12,57.2,72.06l-1.22,0.61v63.081h-8.83V72.019 H10.41v81.296h36.74v-4.01l9.157,1.405l0.002-0.003c17.248,4.217,35.093,4.827,52.741,5.433c0,0,16.33,0,24.49,0 c8.16,0,12.25-4.08,12.25-10.2s-4.08-6.12-4.08-10.2s8.16-4.08,8.16-10.2s-4.08-6.12-4.08-10.2c0-4.08,8.16-4.08,8.16-10.2 s-4.08-6.12-4.08-10.2C149.87,90.86,158.02,90.84,158.02,84.71z"
        ]
    ],
    [ // Twitter
        "twitter_button",
        [
            "M139.51,53.27c0.07,1.26,0.09,2.53,0.09,3.8c0,38.87-29.59,83.69-83.69,83.69c-16.61,0-32.07-4.87-45.09-13.21 c2.29,0.25,4.64,0.41,7.02,0.41c13.78,0,26.46-4.71,36.53-12.6c-12.89-0.23-23.74-8.74-27.49-20.42c1.8,0.34,3.64,0.53,5.52,0.53 c2.69,0,5.29-0.37,7.75-1.03c-13.46-2.72-23.6-14.59-23.6-28.85c0-0.13,0-0.24,0-0.37c3.97,2.2,8.51,3.52,13.33,3.67 C22,63.61,16.81,54.6,16.81,44.4c0-5.39,1.45-10.43,3.98-14.78c14.5,17.79,36.18,29.5,60.62,30.72c-0.51-2.14-0.75-4.4-0.75-6.71 c0-16.23,13.17-29.4,29.4-29.4c8.47,0,16.11,3.57,21.48,9.28c6.69-1.31,12.99-3.76,18.68-7.13c-2.2,6.86-6.87,12.63-12.93,16.27 c5.94-0.7,11.6-2.28,16.89-4.63C150.24,43.95,145.26,49.12,139.51,53.27z", // twitter bird
            "M99.33 63.38z" // <- invisible point that will expand into the central hole of the hashtag
        ],
        [
            "M137.8,63.38c5.79,0,10.51-4.71,10.52-10.51c0-5.8-4.72-10.52-10.52-10.52h-12.6l2.75-13.21c0.57-2.75,0.04-5.56-1.5-7.91 s-3.9-3.96-6.65-4.53c-0.71-0.14-1.43-0.22-2.15-0.22c-4.95,0-9.27,3.52-10.29,8.37l-3.64,17.49l-23.37,0.01L83.11,29 c0.58-2.75,0.04-5.56-1.5-7.91s-3.91-3.96-6.65-4.53c-0.71-0.15-1.43-0.23-2.15-0.23c-4.95,0-9.28,3.52-10.29,8.38l-3.67,17.65 H37.02c-5.79,0-10.51,4.71-10.51,10.52c0,5.79,4.72,10.51,10.52,10.51h17.44l-7.02,33.76H29.2c-5.79,0-10.51,4.71-10.51,10.52 c0,5.79,4.72,10.51,10.52,10.51h13.88l-3.48,16.69c-1.18,5.67,2.48,11.25,8.16,12.44c0.71,0.14,1.43,0.22,2.15,0.22 c4.95,0,9.28-3.52,10.29-8.37l4.36-20.98h23.38l-3.5,16.84c-0.57,2.75-0.04,5.56,1.5,7.9c1.54,2.35,3.91,3.96,6.66,4.53 c0.71,0.15,1.43,0.22,2.14,0.22c4.96,0,9.28-3.52,10.29-8.37l4.39-21.12h20.54c5.79,0,10.51-4.71,10.52-10.51 c0-5.8-4.72-10.52-10.52-10.52H113.8l7.02-33.75L137.8,63.38L137.8,63.38z", // outside of hashtag
            "M99.33 63.38L92.31 97.13 68.93 97.14 75.95 63.38z" // centre of hashtag
        ]
    ],
    [ // Instagram
        "insta_button",
        [
            "M126.51,19.07H38.49c-10.68,0-19.42,8.73-19.42,19.42v88.02c0,10.68,8.74,19.42,19.42,19.42h88.01 c10.69,0,19.42-8.74,19.42-19.42h0.01V38.49C145.93,27.8,137.19,19.07,126.51,19.07z", // outer shape / rounded corner rectangle
            "M130.04,114.27c0,8-6.55,14.55-14.55,14.55 H49.51c-8.01,0-14.55-6.55-14.55-14.55V67.93h16.53c-1.25,3.55-1.96,7.36-1.96,11.33c0,18.88,15.31,34.19,34.19,34.19 s34.19-15.31,34.19-34.19c0-10.36-4.63-19.62-11.9-25.9h24.04v60.91H130.04z", // inner lower shape of the IG logo
            "M120.62,27.68c5.15,0,9.31,4.16,9.31,9.31c0,5.14-4.16,9.31-9.31,9.31c-5.14,0-9.3-4.17-9.3-9.31 C111.32,31.84,115.48,27.68,120.62,27.68z", // flash
            "M83.71,62.17c9.43,0,17.09,7.66,17.09,17.09s-7.66,17.09-17.09,17.09c-9.44,0-17.09-7.66-17.09-17.09 C66.62,69.83,74.27,62.17,83.71,62.17z" // lens
        ],
        [
            "M49,38.88v103.5h86.25V38.88H49z", // outer front frame
            "M57.62 47.5L126.62 47.5 126.62 125.12 57.62 125.12z", // inner front frame
            "M120.62,27.68z", // empty point for hiding the flash
            "M118 21.62L31.75 21.62 31.75 125.12 40.38 125.12 40.38 30.25 118 30.25z", // back frame
        ]
    ]
];

var slowDownAnimation = false;

/**
 * This is pretty much directly copied from the tweening example of d3
 * It is what does the job of translating a path into a polyline for tweening
 * what I've added is mostly multiple paths, hovers etc
 * https://gist.github.com/mbostock/3916621
 *
 * @param  {SVGPath} d1         path
 * @param  {int} precision      Precision sampling
 * @return {function}           d3 interpolator
 */
function pathTween(d1, precision) {
  return function() {
    var path0 = this,
        path1 = path0.cloneNode(),
        n0 = path0.getTotalLength(),
        n1 = (path1.setAttribute("d", d1), path1).getTotalLength();

    // Uniform sampling of distance based on specified precision.
    var distances = [0], i = 0, dt = precision / Math.max(n0, n1);
    while ((i += dt) < 1) distances.push(i);
    distances.push(1);

    // Compute point-interpolators at each distance.
    var points = distances.map(function(t) {
      var p0 = path0.getPointAtLength(t * n0),
          p1 = path1.getPointAtLength(t * n1);
      return d3.interpolate([p0.x, p0.y], [p1.x, p1.y]);
    });

    return function(t) {
      return t < 1 ? "M" + points.map(function(p) { return p(t); }).join("L") : d1;
      // return "M" + points.map(function(p) { return p(t); }).join("L"); //debug
    };
  };
}


function transition(path, from, to) {
  path.transition()
      .duration(slowDownAnimation ? 1800 : 350) // if Shift pressed make it longer, else 350ms
      .attrTween("d", pathTween(to, 3)); // 3 = precision of the polyline during the tween, in pixels
}

document.addEventListener("DOMContentLoaded", function() {
    // if the Shift key is pressed then change the value of this flag variable
    // if it's true then we can slow down animations (useful for debug, and an easter egg)
    var keyPressCallback = function() {
        console.log("yo");
        slowDownAnimation = !!d3.event.shiftKey;
    };

    d3.select("body").on("keydown", keyPressCallback);
    d3.select("body").on("keyup", keyPressCallback);
    // (for some obscure reason doing .on("keyup keydown") does not work so have to do it twice)


    // For every social icon (first dimension of the array)
    iconPaths.forEach(function(icon) {
        // select the corresponding existing svg element
        var svg = d3.select("#" + icon[0]);

        // make a group for it (used to centre the icon)
        var g = svg.append("g").attr("class", "icon-paths");

        // Add every <path>s inside the group,
        // and for each one set the default "d" attribute to the initial value
        // (i.e. each value of the array at key 1 of each icon)
        icon[1].forEach(function(path) {
            g.append("path")
                .attr("d", path);
        });

       // Add a rectangle at the front of the SVG
       // This rectangle takes the full width/height and is transparent
       // So we'll use it to add our event handlers (hover and click)
       svg.append("rect")
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", 165)
        .attr("height", 165)
        .attr("class", "hoverzone")
        .on("mouseenter", function() {
            // Select every path, and for each, call the Transition function
            // to its corresponding key in the second array (hovered state)
            g.selectAll("path").each(function(p, i) {
                d3.select(this).call(transition, icon[1][i], icon[2][i]);
            });
        }).on("mouseleave", function() {
            // inverse
            g.selectAll("path").each(function(p, i) {
                d3.select(this).call(transition, icon[2][i], icon[1][i]);
            });
        }).on("click", function(e) {
            // go to location on click
            window.location = svg.attr("data-link");
            e.preventDefault();
        });
    });
});
