<script lang="ts">
    export let data: any[] = [];
    let link = ""
    let hovered = false;
</script>

<div class="box-container" style="margin-bottom:40px;">
    {#each data as item}
        {#if ("redirect" in item)}
            <div onclick="window.location.href = '{item["redirect"] ? item["redirect"] : ''}'" onmouseover="this.style.backgroundColor = '{item["color"] ? item["color"] : ''}'" onmouseout="this.style.backgroundColor =''" class="box">
                
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
        <div onmouseover="this.style.backgroundColor = '{item["color"] ? item["color"] : ''}'" onmouseout="this.style.backgroundColor =''" class="box">

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
    
    border: 3px solid #4A4A4A; 
    border-radius: 10px ;
    padding: 20px;
    font-size: 1.5vh;
    cursor: default;

}

.box-image {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('https://cdn.nextgov.com/media/img/cd/2017/05/03/050317sharkNG/860x394.jpg') no-repeat center center/cover;
    opacity: 0.3;
}

@media (max-width: 768px) {
    .box {
        flex-basis: calc(100% - 20px); /* Two elements per row for smaller screens */
    }
}

.box:hover {
    cursor: pointer;
}


</style>