import React, { Component } from 'react'
import './App.css'
import { scaleLinear } from "d3-scale"
import { max, min } from 'd3-array'
import { select } from 'd3-selection'
class BarChart extends Component {
    constructor(props) {
        super(props)
        this.createBarChart = this.createBarChart.bind(this)
    }
    componentDidMount() {
        this.createBarChart()
    }
    componentDidUpdate() {
        this.createBarChart()
    }
    createBarChart() {
        const node = this.node
        const dataMax = max(this.props.data)
        const dataMin = min(this.props.data);
        // const yScale = scaleLinear()
        //   .domain([dataMin, dataMax])
        //     .range([this.props.size[0], this.props.size[1]]);
        //my try
        console.log(this.props.data);
        let mn = Math.min(...this.props.data);
        let mx = Math.max(...this.props.data);
        let total = this.props.data.length;
        let neededCutter = (total - 1) * 5;
        let barWidth = (800 - neededCutter) / (total)
        console.log(barWidth)
        let pd = 0
        select(node)
            .selectAll('rect')
            .data(this.props.data)
            .enter()
            .append('rect')
            

        select(node)
            .selectAll('rect')
            .data(this.props.data)
            .exit()
            .remove()

        select(node)
          .selectAll("rect")
          // .data(this.props.data)
          .attr("width", barWidth + "px")
          .attr("height", d => d * (400 / mx) + "px")
          .attr("y", d => 400 - d * (400 / mx))
          .attr("x", (d, i) => {
            if (i == 0) {
              return 0;
            }
            pd += barWidth + 5;
            return pd + "px";
          })
          .style("fill", d => (d > 30 ? "red" : "blue"));
          //
        pd = 5
        select(node).selectAll('text')
            .data(this.props.data)
            .enter()
            .append('text')
            .text(d => d)
            .attr("y", d => 400 - d * (400 / mx) + 20 )
            .attr("x", (d, i) => {
                if (i == 0) {
                    return 5
                }
                pd += barWidth + 5;
                return pd
            })
            .attr("font-size", "16px")
            .attr("fill", "white")
    }
    render() {
        return <svg ref={node => this.node = node}
            width={400} height={800}>
        </svg>
    }
}
export default BarChart