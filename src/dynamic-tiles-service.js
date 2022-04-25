import * as core from '@grapecity/wijmo';
import * as chart from '@grapecity/wijmo.chart';
import * as grid from '@grapecity/wijmo.grid';
import * as gauge from '@grapecity/wijmo.gauge';
import { palette } from '.';
import { template as tileTemplate } from './tile-templates/tile';
import { template as menuItemTemplate } from './tile-templates/menuItem';
import { getData } from './data';
const tiles = {};
// Create tile's HTML and save it to the tiles store
export function registerTile(widget) {
    const widgetName = widget.name;
    let htmlTile = tileTemplate;
    // initialize tile header and content
    htmlTile = htmlTile.replace('{{header}}', widgetName);
    htmlTile = htmlTile.replace('{{content}}', widget.template);
    tiles[widgetName] = htmlTile;
}
// Create menu item element
export function createMenuItemElement(widget) {
    let htmlMenuItem = menuItemTemplate;
    // initialize menu title and content
    htmlMenuItem = htmlMenuItem.replace(new RegExp('{{title}}', 'g'), widget.name);
    htmlMenuItem = htmlMenuItem.replace(new RegExp('{{icon}}', 'g'), widget.icon);
    // identify color palette
    palette.forEach((color, index) => {
        htmlMenuItem = htmlMenuItem.replace(new RegExp(`{{palette-${index}}}`, 'g'), color);
    });
    const menuItem = core.createElement(htmlMenuItem);
    return menuItem;
}
// Create tile element from the stored html
export function createTileElement(widgetName) {
    const htmlTile = tiles[widgetName];
    // create tile element
    var tile = core.createElement(htmlTile);
    var data = new core.CollectionView(getData());
    var lastItem = data.items[data.items.length - 1];
    var ctx = { data, lastItem };
    compile(tile, ctx);
    return tile;
}
function compile(element, ctx) {
    compileCtrls(element, ctx);
    compileProps(element, ctx);
    compileInterpolations(element, ctx);
}
function compileCtrls(element, ctx) {
    // very simple DOM builder with a lot of restrictions but here is appropriate.
    var ctrlElements = element.querySelectorAll('[ctrls]');
    for (var i = 0; i < ctrlElements.length; i++) {
        var ctrlElement = ctrlElements[i], ctrls = JSON.parse(ctrlElement.getAttribute('ctrls'));
        if (ctrls.compiled) {
            continue;
        }
        for (var k in ctrls) {
            var val = ctrls[k];
            switch (k) {
                case 'lteq':
                    var val1 = getOperandValue(val.op1, ctx);
                    var val2 = getOperandValue(val.op2, ctx);
                    compileLteqCtrl(ctrlElement, val1, val2);
                    break;
                case 'foreach':
                    var items = getPropValue(val, ctx);
                    compileForeachCtrl(ctrlElement, items, ctx);
                    break;
            }
        }
        ctrls = JSON.parse(ctrlElement.getAttribute('ctrls'));
        ctrls.compiled = true;
        ctrlElement.setAttribute('ctrls', JSON.stringify(ctrls));
    }
}
function compileLteqCtrl(element, val1, val2) {
    if (val1 > val2) {
        element.style.display = 'none';
    }
}
function compileForeachCtrl(element, items, ctx) {
    var parent = element.parentElement;
    for (var i = 0; i < items.length; i++) {
        var clone = element.cloneNode(true);
        clone.removeAttribute('ctrls');
        ctx.item = items[i];
        compile(clone, ctx);
        parent.appendChild(clone);
    }
    element.style.display = 'none';
}
// create controls within the tile
// (normally done with a framework/template tool, but we want plain JS here)
function compileProps(element, ctx) {
    var hosts = element.querySelectorAll('[props]');
    for (var i = 0; i < hosts.length; i++) {
        // get host element and initial properties
        var host = hosts[i];
        var props = JSON.parse(host.getAttribute('props'));
        var index = host.getAttribute('index') || 0;
        if (props.compiled)
            continue;
        // replace templates
        for (var k in props) {
            var val = props[k];
            if (core.isString(val) && val.match(/^\{\{.*?\}\}$/)) {
                var name = val.substr(2, val.length - 4);
                props[k] = getPropValue(name, ctx);
            }
        }
        // set display style since we're using custom tags
        host.style.display = 'block';
        // create and initialize the control
        switch (host.tagName) {
            case 'WJ-FLEX-GRID':
                new grid.FlexGrid(host, props);
                break;
            case 'WJ-FLEX-CHART':
                new chart.FlexChart(host, Object.assign({}, props, { palette }));
                break;
            case 'WJ-LINEAR-GAUGE':
                new gauge.LinearGauge(host, Object.assign({}, props, { pointer: { color: palette[index] } }));
                break;
            case 'WJ-RADIAL-GAUGE':
                new gauge.RadialGauge(host, props);
                break;
            case 'WJ-BULLET-GRAPH':
                new gauge.BulletGraph(host, props);
                break;
        }
        props = JSON.parse(host.getAttribute('props'));
        props.compiled = true;
        host.setAttribute('props', JSON.stringify(props));
    }
}
function compileInterpolations(element, ctx) {
    var spanElements = element.getElementsByTagName('span');
    for (var i = 0; i < spanElements.length; i++) {
        var spanElement = spanElements[i];
        var content = spanElement.textContent;
        if (content.match(/^\{\{.*?\}\}$/)) {
            var name = content.substr(2, content.length - 4);
            spanElement.textContent = getPropValue(name, ctx);
        }
    }
}
function getOperandValue(operand, ctx) {
    if (core.isNumber(operand)) {
        return operand;
    }
    return getPropValue(operand, ctx);
}
function getPropValue(name, ctx) {
    switch (name) {
        case 'data':
            return ctx.data;
        case 'lastItem.profit':
            return ctx.lastItem.profit;
        case 'lastItem.profit:c':
            return core.Globalize.format(ctx.lastItem.profit, 'c');
        case 'lastItem.sales':
            return ctx.lastItem.sales;
        case 'lastItem.sales:c':
            return core.Globalize.format(ctx.lastItem.sales, 'c');
        case 'lastItem.expenses':
            return ctx.lastItem.expenses;
        case 'lastItem.expenses:c':
            return core.Globalize.format(ctx.lastItem.expenses, 'c');
        case 'lastItem.date:MMMMyyyy':
            return core.Globalize.format(ctx.lastItem.date, 'MMMM yyyy');
        case 'data.items':
            return ctx.data.items;
        case 'item.profit':
            return ctx.item.profit;
        case 'item.date:MMMyyyy':
            return core.Globalize.format(ctx.item.date, 'MMM yyyy');
        default:
            alert('oops?');
            return '';
    }
}
