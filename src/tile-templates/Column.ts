export const template = `
<wj-flex-chart
    props='{ "chartType": "Column", "itemsSource": "{{data}}", "bindingX": "date", "axisX": { "format": "MMM yy" }, "series": [ { "name": "Sales", "binding": "sales" }, { "name": "Expenses", "binding": "expenses" }, { "name": "Profit", "binding": "profit", "chartType": "LineSymbols" }]}'>
</wj-flex-chart>`;
