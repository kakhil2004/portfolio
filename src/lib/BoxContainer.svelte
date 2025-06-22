<script lang="ts">
    export let data: any[] = [];
    let link = ""
    let hoveredIndex = -1;
    
    function handleClick(redirect: string) {
        if (redirect) {
            window.location.href = redirect;
        }
    }
    
    function handleMouseEnter(index: number) {
        hoveredIndex = index;
    }
    
    function handleMouseLeave() {
        hoveredIndex = -1;
    }
</script>

<div class="box-container" style="margin-bottom:40px;">
    {#each data as item, index}
        {#if ("redirect" in item)}
            <div 
                on:click={() => handleClick(item["redirect"])}
                on:mouseenter={() => handleMouseEnter(index)}
                on:mouseleave={handleMouseLeave}
                class="box"
                style="background-color: {hoveredIndex === index && item['color'] ? item['color'] : ''}"
            >
                {#if ("onlyH2" in item)} 
                <h4 style="margin:0px;">{item["header"]}</h4>
                {:else}
                <h2>{item["header"]}</h2>
                {/if}
                <img src={item["sImgSrc"]} alt="small image desc" class="smallimagedesc">
                {#if ("smallHead" in item)}
                    <p style="margin:0px;"><b>{item["smallHead"]}</b></p>
                {/if}
                {#if ("para" in item)}
                    <p>{item["para"]}</p>
                {/if}
            </div>
        {:else}
        <div 
            on:mouseenter={() => handleMouseEnter(index)}
            on:mouseleave={handleMouseLeave}
            class="box"
            style="background-color: {hoveredIndex === index && item['color'] ? item['color'] : ''}"
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
    gap: 20px;
    max-height: 80%;
    padding: 20px;
    overflow: auto;
}

.box {
    flex: 0 0 calc(32% - 20px);
    min-height: 280px;
    background: #ffffff;
    border: 2px solid #e0e0e0;
    border-radius: 16px;
    padding: 20px;
    font-size: 1.3vh;
    cursor: default;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    position: relative;
    overflow: hidden;
}

.box::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #4A90E2, #7B68EE);
    transform: scaleX(0);
    transition: transform 0.3s ease;
}

.box:hover::before {
    transform: scaleX(1);
}

.box:hover {
    cursor: pointer;
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
    border-color: #4A90E2;
}

.box h2 {
    margin: 0 0 12px 0;
    font-size: 1.5em;
    font-weight: 600;
    color: #2c3e50;
    line-height: 1.3;
}

.box h4 {
    margin: 0 0 12px 0;
    font-size: 1.3em;
    font-weight: 600;
    color: #2c3e50;
    line-height: 1.3;
}

.box p {
    margin: 6px 0;
    line-height: 1.5;
    color: #555;
}

.box p:first-of-type {
    font-weight: 500;
    color: #666;
    font-size: 0.9em;
    margin-bottom: 10px;
}

.smallimagedesc {
    width: 100%;
    height: 140px;
    border-radius: 12px;
    object-fit: cover;
    margin-bottom: 12px;
    transition: transform 0.3s ease;
}

.box:hover .smallimagedesc {
    transform: scale(1.02);
}

@media (max-width: 600px) {
    .box {
        flex-basis: calc(100% - 20px);
        min-height: auto;
    }
    
    .box-container {
        gap: 15px;
        padding: 15px;
    }
}

@media (max-width: 480px) {
    .box {
        padding: 15px;
        font-size: 1.1vh;
    }
    
    .box h2 {
        font-size: 1.3em;
    }
    
    .smallimagedesc {
        height: 120px;
    }
}
</style>