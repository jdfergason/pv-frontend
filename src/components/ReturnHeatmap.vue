<template>
  <highcharts width="100%" height="300" :options="chartOptions"></highcharts>
</template>

<script>
import Highcharts from "highcharts";
import hcHeatmap from "highcharts/modules/heatmap";

hcHeatmap(Highcharts);

export default {
  name: 'ReturnHeatmap',
  props: {
    measurements: {
      type: Array,
      default: function () {
          return []
      }
    }
  },
  watch: {
    measurements: async function (n) {
      this.updateData(n)
    }
  },
  mounted: async function () {
    this.updateData(this.measurements)
  },
  methods: {
    updateData: async function (m) {
        var rets = []
        var years = new Set()
        var col = 0;
        var row = 0;
        var annual = {}

        var currYear = new Date(m[0].time * 1000).getFullYear()
        var total = 1.0
        m.forEach(elem => {
          var yr = new Date(elem.time * 1000).getFullYear()
          if (yr != currYear) {
            annual[currYear] = (total - 1) * 100
            total = 1.0
            currYear = yr
          }
          total = total * (1 + elem.percentReturn)
        })

        annual[currYear] = (total - 1) * 100

        rets.push([0, row, annual[new Date(m[0].time * 1000).getFullYear()]])
        row += 1

        var first = new Date(m[0].time * 1000).getMonth()
        for (var ii=0; ii < (first); ii++) {
          rets.push([col, row, 0])
          row += 1
        }

        m.forEach(elem => {
          rets.push([col, row, elem.percentReturn * 100])
          row += 1
          var yr = new Date(elem.time * 1000).getFullYear()
          if (row == 13) {
            col += 1
            row = 1
            rets.push([col, 0, annual[yr+1]])
          }
          years.add(String(yr))
        })

        this.chartOptions.xAxis.categories = Array.from(years)
        this.chartOptions.series = [{
          name: "Strategy",
          borderWidth: 1,
          data: rets,
          dataLabels: {
            enabled: false,
            color: "#000000"
          }
        }]
    }
  },
  data() {
    return {
      chartOptions: {
        chart: {
          type: "heatmap",
          marginTop: 40,
          marginBottom: 80,
          plotBorderWidth: 1
        },
        title: {
            text: 'Monthly Returns'
        },
        xAxis: {
            categories: []
        },
        yAxis: {
          categories: [
              "Total", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
          ],
          title: null
        },
        colorAxis: {
          ceiling: 10,
          floor: -10,
          reversed: false,
          stops: [
            [0.075, "#d43d51"],
            [0.15, "#e0636b"],
            [0.225, "#eb8387"],
            [0.3, "#f3a3a4"],
            [0.375, "#f9c2c1"],

            [0.45, "#fde0e0"],
            [0.5, "#ffffff"],
            [0.55, "#e3ecfa"],

            [0.625, "#c5d9f5"],
            [0.7, "#a7c7ef"],
            [0.775, "#87b5ea"],
            [0.85, "#61a3e4"],
            [1.0, "#2892de"]
          ]
        },
        legend: {
          align: "right",
          layout: "vertical",
          margin: 0,
          verticalAlign: "top",
          y: 25,
          symbolHeight: 280
        },

        credits: {
          enabled: false
        },
        lang: {
          thousandsSep: ','
        },
        tooltip: {
            enabled: true,
          formatter: function() {
              return (
                  "<b>" +
                  this.series.yAxis.categories[this.point.y] + " " + this.series.xAxis.categories[this.point.x] +
                  "</b>: " + this.point.value.toFixed(2) + "%"
              )
          }
        },
        series: [{name: 'strategy', data: []}],
      }
    }
  }
}
</script>

<style scoped>
</style>
