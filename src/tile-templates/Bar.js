export const template = `
<wj-flex-chart
    props='{ "chartType": "Bar", "itemsSource": "{{data}}", "bindingX": "date", "series": [ { "name": "Sales", "binding": "sales" }, { "name": "Expenses", "binding": "expenses" }, { "name": "Profit", "binding": "profit", "chartType": "LineSymbols" }]}'>
</wj-flex-chart>`;
