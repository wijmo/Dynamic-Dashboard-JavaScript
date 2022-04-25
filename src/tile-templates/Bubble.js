export const template = `
<wj-flex-chart
    props='{ "chartType": "Bubble", "itemsSource": "{{data}}", "bindingX": "date", "axisX": { "format": "MMM yy" } , "series": [ { "name": "Sales/Profit", "binding": "sales,profit" } ]}'>
</wj-flex-chart>`;
