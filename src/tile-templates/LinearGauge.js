export const template = `
<div style="width: 100%; padding: 0 1rem;">
	<div class="flex-row">
		<h4>Sales: <span>{{lastItem.sales:c}}</span></h4>
        <wj-linear-gauge
            index='0',
			props='{ "min": 0, "max": 1000, "thumbSize": 9, "thickness": 0.15, "value": "{{lastItem.sales}}" }'
		>
		</wj-linear-gauge>
	</div>

	<div class="flex-row">
		<h4>Expenses: <span>{{lastItem.expenses:c}}</span></h4>
        <wj-linear-gauge
            index='1',
			props='{ "min": 0, "max": 1000, "thumbSize": 9, "thickness": 0.15, "value": "{{lastItem.expenses}}" }'
		>
		</wj-linear-gauge>
	</div>

	<div class="flex-row">
		<h4>Profit: <span>{{lastItem.profit:c}}</span></h4>
        <wj-linear-gauge
            index='2',
			props='{ "min": 0, "max": 1000, "thumbSize": 9, "thickness": 0.15, "value": "{{lastItem.profit}}" }'
		>
		</wj-linear-gauge>
	</div>

	<h3>KPIs for <span>{{lastItem.date:MMMMyyyy}}</span></h3>
</div>`;
