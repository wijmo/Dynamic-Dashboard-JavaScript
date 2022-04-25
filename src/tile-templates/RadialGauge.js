export const template = `
<wj-radial-gauge
    index='0'
    props='{"min": 0, "max": 1000, "format": "c0", "value": "{{lastItem.profit}}" }'
>
</wj-radial-gauge>
<h3>Profit for <span>{{lastItem.date:MMMMyyyy}}</span></h3>`;
