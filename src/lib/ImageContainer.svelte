<script lang="ts">
    let { data = [] }: { data: any[] } = $props();
    let hoveredItem = $state<any>(null);
</script>

<div class="box-container" style="margin-bottom:40px;">
    {#each data as item}
        {#if ("redirect" in item)}
            <div
                onclick={() => item.redirect && (window.location.href = item.redirect)}
                onkeydown={e => (e.key === 'Enter' || e.key === ' ') && item.redirect && (window.location.href = item.redirect)}
                onmouseover={() => hoveredItem = item}
                onmouseout={() => hoveredItem = null}
                onfocus={() => hoveredItem = item}
                onblur={() => hoveredItem = null}
                class="box"
                class:hovered-green={hoveredItem === item && item.color === 'lightgreen'}
                class:hovered-blue={hoveredItem === item && item.color === 'lightblue'}
                role="button"
                tabindex="0"
            >
                <div class="box-image"></div>

                <div>
                    {#if ("onlyH2" in item)}
                    <h4 style="margin:0px;">{item["header"]}</h4>
                    {:else}
                    <h2>{item["header"]}</h2>
                    {/if}

                    {#if ("smallHead" in item)}
                        <p style="margin:0px;"><b>{item["smallHead"]}</b></p>
                    {/if}
                    {#if ("para" in item)}
                        <p>{item["para"]}</p>
                    {/if}
                </div>
            </div>
        {:else}
        <div
            onmouseover={() => hoveredItem = item}
            onmouseout={() => hoveredItem = null}
            onfocus={() => hoveredItem = item}
            onblur={() => hoveredItem = null}
            class="box"
            class:hovered-green={hoveredItem === item && item.color === 'lightgreen'}
            class:hovered-blue={hoveredItem === item && item.color === 'lightblue'}
            role="region"
        >
            {#if ("onlyH2" in item)}
            <h4 style="margin:0px;">{item["header"]}</h4>
            {:else}
            <h2>{item["header"]}</h2>
            {/if}

            {#if ("smallHead" in item)}
                <p style="margin:0px;"><b>{item["smallHead"]}</b></p>
            {/if}
            {#if ("para" in item)}
                <p>{item["para"]}</p>
            {/if}
        </div>
        {/if}
    {/each}
</div>


<style>
.box-container {
    display: flex;
    margin-bottom: 50px auto;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    max-height: 80%;
    padding: 30px;
    overflow: auto;
}

.box {
    flex: 0 0 calc(90% - 20px);
    border: 3px solid var(--border-box);
    border-radius: 10px;
    padding: 20px;
    font-size: 1.5vh;
    cursor: default;
}

.box-image {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.3;
}

@media (max-width: 768px) {
    .box {
        flex-basis: calc(100% - 20px);
    }
}

.box:hover {
    cursor: pointer;
}

.box.hovered-green {
    background-color: var(--hover-green);
}

.box.hovered-blue {
    background-color: var(--hover-blue);
}
</style>
