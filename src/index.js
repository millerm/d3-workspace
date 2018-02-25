import * as d3 from 'd3';

const data = ['Hello D3 Workspace'];

const container = d3.select('body')
    .append('svg')
    .attr('width', 500)
    .attr('height',250);

container.selectAll('text')
    .data(data)
    .enter()
    .append('text')
    .attr('x', 200)
    .attr('y', 125)
    .text((d) => d)
