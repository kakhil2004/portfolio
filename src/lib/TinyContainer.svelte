<script lang="ts">
    let { data = [] }: { data: any[] } = $props();

    function getColorClass(color: string) {
        if (color === "lightgreen") return "skill-recent";
        if (color === "yellow") return "skill-intermediate";
        return "skill-basic";
    }
</script>

<div class="skills-container">
    {#each data as item, index}
        <div class="skill-item {getColorClass(item.color)}">
            <span class="skill-name">{item.header}</span>
            <div class="skill-indicator"></div>
        </div>
    {/each}
</div>

<style>
.skills-container {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    padding: 20px 0;
    justify-content: flex-start;
}

.skill-item {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    border-radius: 25px;
    font-size: 0.95em;
    font-weight: 500;
    cursor: default;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.skill-item::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.1;
    transition: opacity 0.3s ease;
}

.skill-item:hover::before {
    opacity: 0.2;
}

.skill-item:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.skill-name {
    position: relative;
    z-index: 1;
}

.skill-indicator {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    position: relative;
    z-index: 1;
}

/* Recent skills (lightgreen) */
.skill-recent {
    background: var(--skill-recent-bg);
    border: 1px solid var(--skill-recent-border);
    color: var(--skill-recent-text);
}

.skill-recent::before {
    background: #4caf50;
}

.skill-recent .skill-indicator {
    background: #4caf50;
    box-shadow: 0 0 8px rgba(76, 175, 80, 0.4);
}

/* Intermediate skills (yellow) */
.skill-intermediate {
    background: var(--skill-intermediate-bg);
    border: 1px solid var(--skill-intermediate-border);
    color: var(--skill-intermediate-text);
}

.skill-intermediate::before {
    background: #ff9800;
}

.skill-intermediate .skill-indicator {
    background: #ff9800;
    box-shadow: 0 0 8px rgba(255, 152, 0, 0.4);
}

/* Basic skills (fallback) */
.skill-basic {
    background: var(--skill-basic-bg);
    border: 1px solid var(--skill-basic-border);
    color: var(--skill-basic-text);
}

.skill-basic::before {
    background: #9e9e9e;
}

.skill-basic .skill-indicator {
    background: #9e9e9e;
    box-shadow: 0 0 8px rgba(158, 158, 158, 0.4);
}

@media (max-width: 768px) {
    .skills-container {
        gap: 10px;
        padding: 15px 0;
    }
    
    .skill-item {
        padding: 6px 12px;
        font-size: 0.9em;
    }
}

@media (max-width: 480px) {
    .skills-container {
        gap: 8px;
    }
    
    .skill-item {
        padding: 5px 10px;
        font-size: 0.85em;
    }
    
    .skill-indicator {
        width: 6px;
        height: 6px;
    }
}
</style>