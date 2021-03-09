// Morris.Bar({
//     element: 'graph-bar',
//     data: [
//         {x: '2011 Q1', y: 3, z: 2, a: 3},
//         {x: '2011 Q2', y: 2, z: null, a: 1},
//         {x: '2011 Q3', y: 0, z: 2, a: 4},
//         {x: '2011 Q4', y: 2, z: 4, a: 3}
//     ],
//     xkey: 'x',
//     ykeys: ['y', 'z', 'a'],
//     labels: ['Y', 'Z', 'A'],
//     barColors:['#414e62','#788ba0','#6dc5a3']


// });



var day_data = [
    { y: '2021', a: 0, b: 0 },
    { y: 'Apr', a: 15, b: 20 },
    { y: 'Jul', a: 35, b: 25 },
    { y: 'Oct', a: 50, b: 40 },
    { y: '2022', a: 65, b: 50 },
    { y: 'Apr', a: 80, b: 75 },
    { y: 'Jul', a: 85, b: 80 },
    { y: 'Oct', a: 90, b: 85 }
];
Morris.Line({
    element: 'graph-line',
    data: day_data,
    xkey: 'y',
    ykeys: ['a','b'],
    labels: ['Plan Progress','Actual progress'],
    lineColors:['#1FB5AD','#188ae2'],
    parseTime: false
});




// Use Morris.Area instead of Morris.Line
Morris.Area({
    element: 'graph-area-line',
    behaveLikeLine: false,
    data: [
        {x: '2021 Q1', y: 100, z: 88},
        {x: '2021 Q2', y: 120, z: 100},
        {x: '2021 Q3', y: 140, z: 110},
        {x: '2021 Q4', y: 130, z: 89},
        {x: '2022 Q1', y: 110, z: 100},
        {x: '2022 Q2', y: 150, z: 135},
        {x: '2022 Q3', y: 125, z: 121},
        {x: '2022 Q4', y: 133, z: 130}
    ],
    xkey: 'x',
    ykeys: ['y', 'z'],
    labels: ['Finished parts', 'Qualified quality'],
    lineColors:['#414e62','#6dc5a3']



});
// Use Morris.Area instead of Morris.Line
Morris.Donut({
    element: 'graph-donut-passingRate',
    data: [
        {value: 90, label: '90%', formatted: 'Passed' },
        {value: 5, label: '5%', formatted: 'Pending' },
        {value: 5, label: '5%', formatted: 'Error' }
    ],
    backgroundColor: '#fff',
    labelColor: '#6dc5a3',
    colors: [
        "#6dc5a3", "#CCCCCC", "#414e62"
    ],
    formatter: function (x, data) { return data.formatted; }
});



// Use Morris.Area instead of Morris.Line
Morris.Donut({
    element: 'graph-donut',
    data: [
        {value: 70, label: '70%', formatted: 'Latest Completion Rate' },
        {value: 15, label: '15%', formatted: 'Pending verification' },
        {value: 10, label: '10%', formatted: 'Construction in progress' },
        {value: 5, label: '5%', formatted: 'Waiting to be completed' }
    ],
    backgroundColor: '#fff',
    labelColor: '#1fb5ac',
    colors: [
        '#414e62','#788ba0','#6dc5a3','#95D7BB'
    ],
    formatter: function (x, data) { return data.formatted; }
});



// Use Morris.Area instead of Morris.Line
Morris.Area({
    element: 'graph-area',
    behaveLikeLine: true,
    gridEnabled: false,
    gridLineColor: '#dddddd',
    axes: true,
    fillOpacity:.7,
    data: [
        {period: '2010 Q1', iphone: 10, ipad: 10, itouch: 10},
        {period: '2010 Q2', iphone: 1778, ipad: 7294, itouch: 18441},
        {period: '2010 Q3', iphone: 4912, ipad: 12969, itouch: 3501},
        {period: '2010 Q4', iphone: 3767, ipad: 3597, itouch: 5689},
        {period: '2011 Q1', iphone: 6810, ipad: 1914, itouch: 2293},
        {period: '2011 Q2', iphone: 5670, ipad: 4293, itouch: 1881},
        {period: '2011 Q3', iphone: 4820, ipad: 3795, itouch: 1588},
        {period: '2011 Q4', iphone: 25073, ipad: 5967, itouch: 5175},
        {period: '2012 Q1', iphone: 10687, ipad: 34460, itouch: 22028},
        {period: '2012 Q2', iphone: 1000, ipad: 5713, itouch: 1791}


    ],
    lineColors:['#414e62','#788ba0','#6dc5a3'],
    xkey: 'period',
    ykeys: ['iphone', 'ipad', 'itouch'],
    labels: ['iPhone', 'iPad', 'iPod Touch'],
    pointSize: 0,
    lineWidth: 0,
    hideHover: 'auto'

});







