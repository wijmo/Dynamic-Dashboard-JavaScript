export const template = `
<wj-flex-grid 
    props='{ "isReadOnly": true, "headersVisibility": "Column", "selectionMode": "ListBox", "itemsSource": "{{data}}", "columns": [ { "binding": "id", "header": "ID", "width": 40 }, { "binding": "date", "header": "Date", "format": "MMM-yyyy", "width": "*" }, { "binding": "sales", "header": "Sales", "format": "c" }, { "binding": "expenses", "header": "Expenses", "format": "c" }, { "binding": "profit", "header": "Profit", "format": "c" } ] }' >
</wj-flex-grid>`;
