import './license';
// Wijmo and Material Design Lite
import '@grapecity/wijmo.styles/themes/material/wijmo.theme.material.indigo-amber.css';
import './index.css';
import * as core from '@grapecity/wijmo';
import { registerTile, createMenuItemElement, createTileElement } from './dynamic-tiles-service';
import { template as GridTemplate } from './tile-templates/Grid';
import { template as BarChartTemplate } from './tile-templates/Bar';
import { template as ColumnChartTemplate } from './tile-templates/Column';
import { template as BubbleChartTemplate } from './tile-templates/Bubble';
import { template as LineChartTemplate } from './tile-templates/Line';
import { template as RadialGaugeChartTemplate } from './tile-templates/RadialGauge';
import { template as LinearGaugeChartTemplate } from './tile-templates/LinearGauge';
import { template as BulletGraphChartTemplate } from './tile-templates/BulletGraph';
import { template as BlankTileChartTemplate } from './tile-templates/BlankTile';
// color palette
export const palette = ['#8e99f3', '#ffca28', '#5c6bc0', '#bbdefb'];
window.onload = function () {
    // Polyfill for HTMLCollection.forEach
    if ('NodeList' in window && !NodeList.prototype.forEach) {
        NodeList.prototype.forEach = function (callback, thisArg) {
            thisArg = thisArg || window;
            for (var i = 0; i < this.length; i++) {
                callback.call(thisArg, this[i], i, this);
            }
        };
    }
    // initialize widgets
    var widgets = [
        {
            name: 'Grid',
            icon: `
                <path fill={{palette-3}} d="M57,5H7A2,2,0,0,0,5,7v7H59V7A2,2,0,0,0,57,5Zm1,19V23H46V15H45v8H33V15H32v8H19V15H18v8H6v1H18v7H6v1H18v8H6v1H18v8H6v1H18v8h1V50H32v8h1V50H45v8h1V50H58V49H46V41H58V40H46V32H58V31H46V24ZM19,24H32v7H19Zm0,8H32v8H19Zm0,17V41H32v8Zm26,0H33V41H45Zm0-9H33V32H45Zm0-9H33V24H45Z"/>
                <path fill={{palette-0}} d="M57,5H7A2,2,0,0,0,5,7V57a2,2,0,0,0,2,2H57a2,2,0,0,0,2-2V7A2,2,0,0,0,57,5ZM7,6H57a1,1,0,0,1,1,1v7H6V7A1,1,0,0,1,7,6ZM57,58H7a1,1,0,0,1-1-1V15H58V57A1,1,0,0,1,57,58Z" />
            `,
            template: GridTemplate
        },
        {
            name: 'Bar Chart',
            icon: `
                <rect fill={{palette-1}} x="12" y="34" width="40" height="7" />
                <rect fill={{palette-2}} x="12" y="46" width="33" height="7" />
                <rect fill={{palette-3}} x="12" y="11" width="32" height="7" />
                <path fill={{palette-0}} d="M36,22v7H12V22ZM10,14H8v1h2Zm0,11H8v1h2Zm0,12H8v1h2Zm0,12H8v1h2Zm49,9H7a.94.94,0,0,1-1-1V5H5V57a2,2,0,0,0,2,2H59Z" />
            `,
            template: BarChartTemplate,
        },
        {
            name: 'Column Chart',
            icon: `
                <rect fill={{palette-1}} x="23" y="12.02" width="7" height="40" />
                <rect fill={{palette-2}} x="11" y="19.02" width="7" height="33" />
                <rect fill={{palette-3}} x="46" y="20.02" width="7" height="32" />
                <path fill={{palette-0}} d="M41,52H34V26h7Zm8,2v2h1V54ZM37,54v2h1V54ZM26,54v2h1V54ZM14,54v2h1V54ZM5,5V57a2,2,0,0,0,2,2H58V58H7a1,1,0,0,1-1-1V5Z" />
            `,
            template: ColumnChartTemplate,
        },
        {
            name: 'Bubble Chart',
            icon: `
                <path fill={{palette-0}} d="M59,58H7a.94.94,0,0,1-1-1V5H5V57a2,2,0,0,0,2,2H59Z" />
                <path fill={{palette-2}} d="M36,23a2,2,0,1,1,2,2A2,2,0,0,1,36,23ZM13.63,29.07a2,2,0,1,0-2-2A2,2,0,0,0,13.63,29.07Zm9,12a2,2,0,1,0-2-2A2,2,0,0,0,22.63,41.07Zm24-5a2,2,0,1,0-2-2A2,2,0,0,0,46.63,36.07Zm-2.5,17a1.5,1.5,0,1,0-1.5-1.5A1.5,1.5,0,0,0,44.13,53.07Z" />
                <path fill={{palette-3}} d="M19,12a4,4,0,1,1,4,4A4,4,0,0,1,19,12Zm6.63,16.07a3,3,0,1,0-3-3A3,3,0,0,0,25.63,28.07Zm11.5,8a3.5,3.5,0,1,0-3.5-3.5A3.5,3.5,0,0,0,37.13,36.07Zm-1,10a2.5,2.5,0,1,0-2.5-2.5A2.5,2.5,0,0,0,36.13,46.07Zm14,0a2.5,2.5,0,1,0-2.5-2.5A2.5,2.5,0,0,0,50.13,46.07Z" />
            `,
            template: BubbleChartTemplate,
        },
        {
            name: 'Line Chart',
            icon: `
                <path fill={{palette-0}} d="M6,5V57a1,1,0,0,0,1,1H58v1H7a2,2,0,0,1-2-2V5Z" />
                <polygon fill={{palette-3}} points="51 20.41 49.59 19 32.5 36.97 27.5 31.97 11 48.48 12.5 49.98 27.5 34.97 32.5 39.97 51 20.41" />
                <polygon fill={{palette-2}} points="34.92 30.42 27.5 23 11 39.51 12.5 41.01 27.5 26 33.42 31.92 34.92 30.42" />
                <polygon fill={{palette-2}} points="40.58 36.08 39.08 37.58 45.97 44.47 47.38 42.88 40.58 36.08" />
            `,
            template: LineChartTemplate,
        },
        {
            name: 'Radial Gauge',
            icon: `
                <circle fill={{palette-1}} cx="32" cy="32" r="4" />
                <path fill={{palette-0}} d="M32,6A26,26,0,1,1,6,32,26,26,0,0,1,32,6m0-1A27,27,0,1,0,59,32,27,27,0,0,0,32,5ZM43.37,20.63a1.49,1.49,0,0,0-2.12,0l-6.84,6.84a6.51,6.51,0,0,1,2.12,2.12l6.84-6.84A1.49,1.49,0,0,0,43.37,20.63Z" />
                <path fill={{palette-3}} d="M34,11a2,2,0,1,1-2-2A2,2,0,0,1,34,11ZM17,15a2,2,0,1,0,2,2A2,2,0,0,0,17,15Zm30,0a2,2,0,1,0,2,2A2,2,0,0,0,47,15ZM11,28a2,2,0,1,0,2,2A2,2,0,0,0,11,28Zm42,.91a2,2,0,1,0,2,2A2,2,0,0,0,53,28.91ZM32,40.76A25.87,25.87,0,0,0,14.09,48a23.95,23.95,0,0,0,35.83,0A25.88,25.88,0,0,0,32,40.76Z" />
            `,
            template: RadialGaugeChartTemplate,
        },
        {
            name: 'Linear Gauge',
            icon: `
                <path fill={{palette-2}} d="M29.5,19A4.5,4.5,0,1,1,34,23.5,4.49,4.49,0,0,1,29.5,19Zm-1.15-2H11a2,2,0,0,0-1.9,2.65,2,2,0,0,0,2,1.35H28.21A5.72,5.72,0,0,1,28,19.5c0-.08,0-.15,0-.23s0-.18,0-.27A6,6,0,0,1,28.35,17ZM54.9,18.35a2,2,0,0,0-2-1.35H39.65a5.89,5.89,0,0,1,0,4H53A2,2,0,0,0,54.9,18.35Z" />
                <path fill={{palette-3}} d="M53,36H29.05a6,6,0,0,0,.29-1.85,6.13,6.13,0,0,0-.4-2.15h24a2,2,0,0,1,2,1.35A2,2,0,0,1,53,36ZM17.74,32H11a2,2,0,0,0-1.9,2.65,2,2,0,0,0,2,1.35h6.55a6.28,6.28,0,0,1-.29-1.85A6.13,6.13,0,0,1,17.74,32Zm5.6,6.65a4.5,4.5,0,1,0-4.5-4.5A4.5,4.5,0,0,0,23.34,38.65Z" />
                <path fill={{palette-1}} d="M38.34,49.15A6.28,6.28,0,0,0,38.63,51H11.08a2,2,0,0,1-2-1.35A2,2,0,0,1,11,47H38.74A6.13,6.13,0,0,0,38.34,49.15Zm16.56-.8a2,2,0,0,0-2-1.35h-3a6.13,6.13,0,0,1,.4,2.15A6,6,0,0,1,50.05,51h3A2,2,0,0,0,54.9,48.35Zm-10.56,5.3a4.5,4.5,0,1,0-4.5-4.5A4.5,4.5,0,0,0,44.34,53.65Z" />
            `,
            template: LinearGaugeChartTemplate,
        },
        {
            name: 'Bullet Graph',
            icon: `
                <rect fill={{palette-2}} x="41" y="17" width="14" height="11" />
                <rect fill={{palette-2}} x="40.89" y="33.96" width="14" height="11" />
                <polygon fill={{palette-1}} points="25 17 25 19 34 19 34 26 25 26 25 28 39 28 39 17 25 17" />
                <polygon fill={{palette-1}} points="25 36 29 36 29 43 25 43 25 45 39 45 39 34 25 34 25 36" />
                <rect fill={{palette-3}} x="9" y="26" width="14" height="2" />
                <rect fill={{palette-3}} x="9" y="17" width="14" height="2" />
                <rect fill={{palette-3}} x="9" y="34" width="14" height="2" />
                <rect fill={{palette-3}} x="9" y="43" width="14" height="2" />
                <path fill={{palette-0}} d="M49,53v2h1V53ZM37,53v2h1V53ZM26,53v2h1V53ZM14,53v2h1V53ZM31,24H9V21H31ZM26,41H9V38H26ZM60,58H6V57H60Z" />
            `,
            template: BulletGraphChartTemplate,
        },
        {
            name: 'Blank Tile',
            icon: `
			    <path fill={{palette-0}} d="M40,5V6H33V5ZM24,6h7V5H24ZM15,6h7V5H15Zm7,53V58H15v1Zm9-1H24v1h7ZM6,49V42H5v7ZM5,22H6V15H5ZM51,6h6a1,1,0,0,1,1,1v6h1V7a2,2,0,0,0-2-2H51ZM6,31V24H5v7Zm0,9V33H5v7ZM58,15v7h1V15ZM6,13V7A1,1,0,0,1,7,6h6V5H7A2,2,0,0,0,5,7v6ZM58,51v6a1,1,0,0,1-1,1H51v1h6a2,2,0,0,0,2-2V51ZM13,58H7a1,1,0,0,1-1-1V51H5v6a2,2,0,0,0,2,2h6ZM58,24v7h1V24Zm1,18H58v7h1ZM49,58H42v1h7ZM42,5V6h7V5ZM40,58H33v1h7ZM58,33v7h1V33Z" />
            `,
            template: BlankTileChartTemplate,
        },
    ];
    // allow user to reorder items in the dashboard by dragging
    var dashboard = document.querySelector('.dashboard');
    enableItemReorder(dashboard);
    // Fill the tile store
    widgets.forEach(element => {
        registerTile(element);
    });
    // add some tiles to start with
    [0, 7, 4, 6, 5].forEach(element => {
        addTile(widgets[element].name);
    });
    // initialize menu
    widgets.forEach((element, index) => {
        addMenu(widgets[index]);
    });
    // add event listeners
    document.querySelectorAll('[data-on-click]').forEach((element) => {
        if (element.dataset.onClick !== 'toggle-menu-class')
            return;
        // handle toggle menu class
        document.querySelectorAll('[data-toggle-menu-class]').forEach((target) => {
            element.addEventListener('click', () => target.classList.toggle(target.dataset.toggleMenuClass));
        });
    });
    // add a menu item
    function addMenu(widget) {
        var menu = document.querySelector('.menu');
        const menuItem = createMenuItemElement(widget);
        menuItem.addEventListener('click', () => addTile(widget.name));
        menu.appendChild(menuItem);
    }
    // add a tile of a given type to the dashboard
    function addTile(widgetName) {
        const tile = createTileElement(widgetName);
        // add remove handler
        tile.querySelectorAll('[data-on-click="remove-tile"]').forEach((element) => {
            element.addEventListener('click', () => dashboard.removeChild(tile));
        }, false);
        // add the created tile to the dashboard
        dashboard.insertBefore(tile, dashboard.childNodes[0]);
        tile.focus();
    }
    // allow users to re-order elements within a panel element
    function enableItemReorder(panel) {
        var dragSource = null, dropTarget = null;
        // add drag/drop event listeners
        panel.addEventListener('dragstart', function (e) {
            var target = core.closest(e.target, '.tile');
            if (target && target.parentElement == panel) {
                dragSource = target;
                core.addClass(dragSource, 'drag-source');
                var dt = e.dataTransfer;
                dt.effectAllowed = 'move';
                dt.setData('text', dragSource.innerHTML);
            }
        });
        panel.addEventListener('dragover', function (e) {
            if (dragSource) {
                var tile = core.closest(e.target, '.tile');
                if (tile == dragSource) {
                    tile = null;
                }
                if (dragSource && tile && tile != dragSource) {
                    e.preventDefault();
                    e.dataTransfer.dropEffect = 'move';
                }
                if (dropTarget != tile) {
                    core.removeClass(dropTarget, 'drag-over');
                    dropTarget = tile;
                    core.addClass(dropTarget, 'drag-over');
                }
            }
        });
        panel.addEventListener('drop', function (e) {
            if (dragSource && dropTarget) {
                e.stopPropagation();
                e.stopImmediatePropagation();
                e.preventDefault();
                var srcIndex = getIndex(dragSource), dstIndex = getIndex(dropTarget), refChild = srcIndex > dstIndex ? dropTarget : dropTarget.nextElementSibling;
                dragSource.parentElement.insertBefore(dragSource, refChild);
                // focus and view on the tile that was dragged
                dragSource.focus();
                // invalidate Wijmo controls after layout updates
                core.Control.invalidateAll();
            }
        });
        panel.addEventListener('dragend', function (e) {
            core.removeClass(dragSource, 'drag-source');
            core.removeClass(dropTarget, 'drag-over');
            dragSource = dropTarget = null;
        });
        function getIndex(e) {
            var p = e.parentElement;
            for (var i = 0; i < p.children.length; i++) {
                if (p.children[i] == e)
                    return i;
            }
            return -1;
        }
    }
};
