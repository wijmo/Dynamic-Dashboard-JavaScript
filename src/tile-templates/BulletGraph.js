export const template = `
<div style="width: 100%; padding: 0 1rem; overflow: hidden;">
    <table class="table">
        <tr ctrls='{ "foreach": "data.items" }'>
            <td>
                <span>{{item.date:MMMyyyy}}</span>
            </td>
            <td>
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="orange"
                    ctrls=' { "lteq": { "op1": "item.profit", "op2": 400 } }'
                >
                    <path d="M12,2L1,21H23M12,6L19.53,19H4.47M11,10V14H13V10M11,16V18H13V16" />
                </svg>
            </td>
            <td>
                <wj-bullet-graph 
                    props='{ "min": 0, "max": 1000, "bad": 400, "target": 600, "good": 600, "value": "{{item.profit}}" }'>
                </wj-bullet-graph>
            </td>
        </tr>
    </table>
</div>`;
