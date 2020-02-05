// Create our first trace
var trace1 = {
    y: [23.95, 22.28, 15.82, 16.65, 30.66, 22.96, 18.15, 19.51, 32.5, 26.06, 19.75, 23.68, 51.18, 40.28, 31.37, 32.21, 51.64, 32.86, 24.05, 28.16, 54.38, 33.25, 24.85, 28.85, 61.58, 37.56, 29.47, 37.19, 51.98, 31.05, 25.99, 33.36],
    x: ["1Q '12", "2Q '12", "3Q '12", "4Q '12", "1Q '13", "2Q '13", "3Q '13", "4Q '13", "1Q '14", "2Q '14", "3Q '14", "4Q '14", "1Q '15", "2Q '15", "3Q '15", "4Q '15", "1Q '16", "2Q '16", "3Q '16", "4Q '16", "1Q '17", "2Q '17", "3Q '17", "4Q '17", "1Q '18", "2Q '18", "3Q '18", "4Q '18", "1Q '19", "2Q '19", "3Q '19", "4Q '19"],
    type: "scatter",
    line: {
        color: 'rgb(253, 195, 51)',
        width:2
      }
  };
  

  // The data array consists of both traces
var data = [trace1];

// Apply the group barmode to the layout
var layout = {
  title: "iPhone Revenue by Quarter",
  xaxis: { title: "Quarter" },
  yaxis: { title: "Revenue in Billons"}
};


// Note that we omitted the layout object this time
// This will use default parameters for the layout
Plotly.newPlot("plot2", data, layout);


