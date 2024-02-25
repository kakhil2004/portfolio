<script lang="ts">
    export let data: any[] = [];
    let link = ""
    let hovered = false;
</script>

<div class="tiny-box-container" style="margin-bottom:40px;">
    {#each data as item}
        
        <div onmouseover="this.style.backgroundColor = '{item["color"] ? item["color"] : ''}'" onmouseout="this.style.backgroundColor =''" class="tiny-box">

            
            <h5 style="margin: 0px;" >{item["header"]}</h5>
            
            
        </div>
  
    {/each}
</div>


<style>
.tiny-box-container {
    display: flex;
    margin-bottom: 50px auto;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    max-height: 80%;
    padding: 30px;
    overflow: auto;
}

.tiny-box {
    flex: 0 0 calc(15% - 20px);
    
    border: 3px solid #4A4A4A; 
    border-radius: 10px ;
    padding: 20px;
    font-size: 1.5vh;
    cursor: default;
}

@media (max-width: 768px) {
    .tiny-box {
        flex-basis: calc(100% - 20px); /* Two elements per row for smaller screens */
    }
}

.tiny-box:hover {
    cursor: pointer;
}


</style>