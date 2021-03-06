export const template = `
<div class="tile" draggable="true">
    <div class="tile-container">
        <!-- caption -->
        <div class="tile-header">{{header}}</div>
        <div class="buttons">
            <div class="button" title="Close Tile" data-on-click="remove-tile">
                <!-- close icon -->
                <svg width="24" height="24" viewBox="0 0 24 24">
                    <path d="M12.71,12l4.64-4.65a.49.49,0,1,0-.7-.7L12,11.29,7.35,6.65a.49.49,0,0,0-.7.7L11.29,12,6.65,16.65a.48.48,0,0,0,0,.7.48.48,0,0,0,.7,0L12,12.71l4.65,4.64a.48.48,0,0,0,.7,0,.48.48,0,0,0,0-.7Z" />
                </svg>
            </div>
        </div>
    </div>
    <!-- content -->
    <div class="tile-content">{{content}}</div>
</div>`;
