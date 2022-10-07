const labels = ['0', '0.1', '0.2', '0.3', '0.4', '0.5', '0.6', '0.7', '0.8', '0.9',
    '1', '1.1', '1.2', '1.3', '1.4', '1.5', '1.6', '1.7', '1.8', '1.9',
    '2', '2.1', '2.2', '2.3', '2.4', '2.5', '2.6', '2.7', '2.8', '2.9',
    '3', '3.1', '3.2', '3.3', '3.4', '3.5', '3.6', '3.7', '3.8', '3.9',
    '4', '4.1', '4.2', '4.3', '4.4', '4.5', '4.6', '4.7', '4.8', '4.9',
    '5', '5.1', '5.2', '5.3', '5.4', '5.5', '5.6', '5.7', '5.8', '5.9',
    '6', '6.1', '6.2', '6.3', '6.4', '6.5', '6.6', '6.7', '6.8', '6.9',
    '7', '7.1', '7.2', '7.3', '7.4', '7.5', '7.6', '7.7', '7.8', '7.9',
    '8', '8.1', '8.2', '8.3', '8.4', '8.5', '8.6', '8.7', '8.8', '8.9',
    '9', '9.1', '9.2', '9.3', '9.4', '9.5', '9.6', '9.7', '9.8', '9.9',
    '10']

const data = {
    labels: labels,
    datasets: [{
        label: 'Mag',
        backgroundColor: '#7d56ed',
        borderColor: '#7d56e9',
        data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
            10.75, 11.2, 11.6, 11.8, 11.9, 12, 11.9, 11.8, 11.6, 11.2,
            10.75, 10.10, 9.5, 9, 8.5, 8.2, 7.8, 7.6, 7.4, 7.2,
            7, 6.9, 6.8, 6.7, 6.6, 6.5, 6.4, 6.3, 6.2, 6.1,
            6, 5.9, 5.8, 5.7, 5.6, 5.5, 5.4, 5.3, 5.2, 5, 4.8, 4.5,
            4.2, 3.7, 3.3, 2.9, 2.6, 2.4, 2.3, 2.3, 2.2, 2.1,
            2.1, 2.1, 2.2, 2.2, 2.3, 2.4, 2.5, 2.7, 2.8, 2.9,
            3.2, 3.4, 3.8, 4.2, 4.6, 5, 5.4, 5.6, 5.8, 5.9,
            6, 5.9, 5.8, 5.6, 5.4, 5, 4.6, 4.2, 3.8, 3.4,
            3.3, 3.5, 4, 4.7, 5, 2.5, 1, 0],
        fill: 'start',
        pointRadius: 1,
        pointBackgroundColor: '#7d56e9',
    },
    {
        label: 'false',
        backgroundColor: '#579dd9',
        borderColor: '#579dd9',
        data: [0, 3, 5.2, 7.5, 10, 12, 14, 15.5, 17.3, 19,
            20.8, 22.5, 24, 25.2, 26.3, 27.3, 28.2, 28.8, 29, 28.8,
            28.2, 27.3, 26.3, 25.2, 24, 22.5, 20.8, 19, 17.3, 16,
            14.9, 14.4, 14, 13.8, 13.6, 13.4, 13.2, 12.5, 12.1, 11.8,
            11.6, 11.4, 11.2, 11, 10.8, 10.6, 10.4, 10, 9.5, 9,
            8.5, 8, 7.5, 6.7, 6.3, 5.9, 5.6, 5.3, 5.1, 5,
            5, 5.1, 5.3, 5.6, 5.9, 6.3, 6.7, 7.5, 8, 8.5,
            9, 9.7, 10.4, 11.3, 12, 12.7, 13.3, 13.8, 14, 13.8,
            13.3, 12.7, 12, 11.3, 10.4, 9.7, 9, 8.3, 7.8, 7.6,
            7.3, 7.4, 7.7, 8.5, 9.4, 10.2, 10.8, 11, 7, 3, 0],
        fill: 'start',
        pointRadius: 1,
        pointBackgroundColor: '#579dd9',
    },
    {
        label: 'TV',
        backgroundColor: '#33b1de',
        borderColor: '#33b1de',
        data: [0, 0.5, 1, 2, 3, 4, 6, 8, 12, 14,
            16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
            26, 27, 28, 29, 30, 31, 32, 33, 33.7, 33.99,
            34.2, 33.99, 33.7, 33, 32, 31, 29.5, 27.5, 25.3, 23,
            21, 19, 17.5, 16.5, 15.6, 15, 14.5, 14.2, 14.1, 14.1,
            14, 14, 14, 13, 11, 9.7, 8.9, 8.2, 7.8, 7.6,
            7.5, 7.6, 7.8, 8.2, 8.7, 9.5, 10.5, 11.5, 12.5, 13.7,
            15, 16, 17.2, 18.2, 19.4, 20.5, 21.5, 22, 21.5, 20.5,
            19.4, 18.2, 17.2, 16, 15, 14, 13, 12, 10.7, 9.3,
            8, 7, 6, 5, 4, 3, 2.5, 2, 1.5, 1, 0],
        fill: 'start',
        pointRadius: 1,
        pointBackgroundColor: '#33b1de',
    }
    ]
};

const config = {
    type: 'line',
    data: data,
    options: {
        plugins: {
            tooltip: {
                yAlign: 'bottom',
                xAlign: 'left',
                titleFont: {
                    size: '0',
                },
                cornerRadius: '0',
                padding: '5',
                caretSize: '0',
                displayColors: false,
                bodyColor: "#d5d4d4",
                backgroundColor: "#222222",
                callbacks: {
                    label: function (context) {
                        return "Views of " + Number(context.label) + " is " + Number(context.parsed.y);
                    },
                }
            },
            legend: {
                position: 'right',
                align: 'start',
                labels: {
                    textAlign: 'center',
                    filter: function (label) {
                        if (label.text != 'false') return true; 
                    },
                    color: '#d5d4d4',
                    font: {
                        family: "Poppins",
                    },
                    padding: 15,
                    boxWidth: '6',
                    boxHeight: '6',
                    usePointStyle: true,
                }
            }
        },
        tension: 0.5,
        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    stepSize: 1,
                    color: '#777777',
                    font: {
                        size: '13',
                    },
                    callback: function (val, index) {
                        return index % 2 === 0 ? this.getLabelForValue(val) : '';
                    },
                }
            },
            y: {
                grid: {
                    color: '#f1f1f1',
                    borderColor: "#ffffff",
                },
                ticks: {
                    font: {
                        size: '12',
                    },
                    color: '#777777',
                    padding: 20,
                    callback: function (val, index) {
                        return index != 0 ? this.getLabelForValue(val) : '';
                    }
                }
            },
        }
    },
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);


/*$(function () {
    const json_url = "./data.json";

    const ndata = {
       labels: [],
       datasets: [
          {
             label: 'Blue',
             backgroundColor: '#33b1de',
             borderColor: '#33b1de',
             data: [],
             pointRadius: 1,
             pointBackgroundColor: 'transparent',
          },
          {
             label: 'Grey',
             backgroundColor: '#d8d8d8',
             borderColor: '#d8d8d8',
             data: [],
             pointRadius: 1,
             pointBackgroundColor: 'transparent',
             pointBorderColor: 'transparent'
          }],
    };

    const nconfig = {
       type: 'line',
       data: ndata,
       options: {
          tension: 0.4,
          scales: {
             x: {
                grid: {
                   display: false,
                },
                ticks: {
                   padding: 20,
                   font: {
                      size: '12',
                   },
                   color: '#777777',
                   callback: function (val, index) {
                      return index % 2 === 0 ? this.getLabelForValue(val) : '';
                   }
                }
             },
             y: {
                beginAtZero: true,
                grid: {
                   color: '#f1f1f1',
                   borderColor: "#ffffff",
                },
                ticks: {
                   stepSize: 2,
                   padding: 20,
                   font: {
                      size: '12',
                   },
                   color: '#777777',
                   callback: function (val, index) {
                      return index % 2 === 0 ? this.getLabelForValue(val) : '';
                   }
                }
             }
          },
          plugins: {
             legend: {
                display: false,
             },
             tooltip: {
                yAlign: 'bottom',
                titleFont: {
                   size: '0',
                },
                padding: '5',
                bodyFont: {
                   size: '10',
                },
                displayColors: false,
                bodyColor: "black",
                backgroundColor: "transparent",
                callbacks: {
                   label: function (context) {
                      return "+ " + Number(context.parsed.y) + "00$";
                   },
                }
             },
          }
       }
    };

    const newChart = new Chart(
       document.getElementById('newChart'),
       nconfig
    );

    ajax_chart(newChart, json_url);

    function ajax_chart(chart, json_url, data) {

       $.getJSON(json_url).success(function (response) {
          chart.data.labels = response.labels;
          chart.data.datasets[0].data = response.data.quantity1;
          chart.data.datasets[1].data = response.data.quantity2;
          chart.update();
       });
    }
 });*/


const nlabels = ['0', '0.5', '1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5', '5.5'];

const ndata = {
    labels: nlabels,
    datasets: [
        {
            label: 'Blue',
            backgroundColor: '#33b1de',
            borderColor: '#33b1de',
            data: [4.2, 6.4, 7.7, 6.4, 6.9, 9.8, 6.7, 4.4, 7.5, 5.3, 5.3, 6.5, 12],
            pointRadius: 1,
            pointBackgroundColor: 'transparent',
        },
        {
        label: 'Grey',
        backgroundColor: '#d8d8d8',
        borderColor: '#d8d8d8',
        data: [4.0, 5.7, 6.5, 5.6, 5.8, 7.9, 6.1, 4.1, 6.2, 4.7, 5.1, 6.1, 12],
        pointRadius: 1,
        pointBackgroundColor: 'transparent',
        pointBorderColor: 'transparent'
    }],
};

const nconfig = {
    type: 'line',
    data: ndata,
    options: {
        tension: 0.4,
        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    padding: 20,
                    font: {
                        size: '12',
                    },
                    color: '#777777',
                    callback: function (val, index) {
                        return index % 2 === 0 ? this.getLabelForValue(val) : '';
                    }
                }
            },
            y: {
                beginAtZero: true,
                grid: {
                    color: '#f1f1f1',
                    borderColor: "#ffffff",
                },
                ticks: {
                    stepSize: 2,
                    padding: 20,
                    font: {
                        size: '12',
                    },
                    color: '#777777',
                    callback: function (val, index) {
                        return index % 2 === 0 ? this.getLabelForValue(val) : '';
                    }
                }
            }
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                yAlign: 'bottom',
                titleFont: {
                    size: '0',
                },
                padding: '5',
                bodyFont: {
                    size: '10',
                },
                displayColors: false,
                bodyColor: "black",
                backgroundColor: "transparent",
                callbacks: {
                    label: function (context) {
                        return "+ " + Number(context.parsed.y) + "00$";
                    },
                }
            },
        }
    }
};

const newChart = new Chart(
    document.getElementById('newChart'),
    nconfig
);



(async () => {

    const topology = await fetch(
       'https://code.highcharts.com/mapdata/custom/world.topo.json'
    ).then(response => response.json());

    Highcharts.getJSON('https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/world-population-density.json', function (data) {

       data.forEach(function (p) {
          p.value = (p.value < 1 ? 1 : p.value);
       });

       Highcharts.mapChart('container', {
          chart: {
             map: topology,
             backgroundColor: '#ffffff',
          },

          title: {
             text: " ",
          },

          legend: {
             enabled: false,
          },

          tooltip: {
             backgroundColor: '#222222',
             color: 'red',
             padding: 8,
             borderRadius: 0,
             borderWidth: 0,
             headerFormat: '',
             pointFormat: '<span style="color: #ffffff">{point.name}</span>'/*'{point.name}'*/,
          },

          exporting: {
             buttons: {
                contextButton: {
                   enabled: false,
                }
             }
          },

          mapNavigation: {
             enabled: true,
             enableDoubleClickZoomTo: true,
             buttons: {
                zoomIn: {
                   x: 60,
                   y: 28,
                }
             },
             buttonOptions: {
                verticalAlign: 'bottom',
                alignTo: 'spacingBox',
                padding: 5,
                x: 20,
                theme: {
                   fill: '#f4f4f4',
                   'stroke-width': 3,
                   stroke:'#f4f4f4',
                   r: 2
                }
             }
          },

          series: [{
             data: data,
             joinBy: ['iso-a2', 'code'],
             //name: 'Population density',
             nullColor: '#c6c6c6',
             color: '#c6c6c6',
             showInLegend: true,
             states: {
                color: 'green',
                hover: {
                   color: '#33b1de',
                }
             }
          }]
       });
    });

 })();



$(document).ready(function () {
    setTimeout(function () {
        $(document).ready(function () {
            $('.svg-inline').each(function () {
                var $img = $(this),
                    imgURL = $img.attr('src');
                $.get(imgURL, function (data) {
                    var $svg = $(data).find('svg');
                    $svg = $svg.removeAttr('xmlns:a');
                    $img.replaceWith($svg);
                }, 'xml');
            });
        });
    }, 1500);

});

$(window).on('resize', function () {

    if ($(this).width() < 760) {
        $('tr td:first-child').click(function () {

            $(this).siblings().css({ 'display': 'inline-block' });

            var $this = $(this);
            setTimeout(function () {
                $this.siblings().css('transform', 'translateY(0)');
            }, 0);

            $('tr td:first-child').not($(this)).siblings().css({ 'display': 'none', 'transform': 'translateY(-9999px)' });
        });
    } else if ($(this).width() > 760) {
        //unbind click : name is not clickable when screen is > 700px
        $("tr td:first-child").unbind("click");
        //remove with jquery added styles
        $('tr td:first-child').siblings().css({ 'display': '', 'transform': '' });
    }

}).resize();
$(function () {
    // Sidebar toggle behavior
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar, #content').toggleClass('active');
        $(this).toggleClass('rotate');
    });
    $('.nav-item').on('click', function () {
        $('.nav-item').removeClass('active');
        $(this).addClass('active');
    });
});

$(function () {
    // Sidebar toggle behavior
    $('#sidebarCollapse1').on('click', function () {
        $('#sidebar, #content').toggleClass('active');
        $(this).toggleClass('rotate');
    });
    $('.nav-item').on('click', function () {
        $('.nav-item').removeClass('active');
        $(this).addClass('active');
    });
});

(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date(); a = s.createElement(o),
        m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-83834093-1', 'auto');
ga('send', 'pageview');




