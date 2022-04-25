export const template = `
<wj-flex-chart
    props='{ "chartType": "Line", "itemsSource": "{{data}}", "bindingX": "date", "axisX": { "format": "MMM yy" }, "series": [ { "name": "Sales", "binding": "sales" }, { "name": "Profit", "binding": "profit", "chartType": "LineSymbols" } ]}'>
</wj-flex-chart>`;
