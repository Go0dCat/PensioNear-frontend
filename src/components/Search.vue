<template>
    <div class="wrapper search_wrapper">
        <div class="search_box">
            <div class="search">
                <input  type="text" id="input" placeholder="Search here...">
                <img src="../assets/search.svg" id="input_img">
            </div>
            <div class="searchButton">
                <button  type="submit">Search</button>
            </div>
            
            
        </div>
        <div class="select_view">
            <select name="event_cat_sort" v-bind:value="value" v-on:input="$emit('input', $event.target.value)">
                <option value="online">Online event</option>
                <option value="offline">Offline event</option>
                <option value="near_by">Near by</option>
            </select>
            <button>Create event</button>
        </div>   
    </div>
</template>
<script>
export default {
    name: "Search",
    props:['value'],
    data: () => ({
    }),
};
</script>
<style lang="scss" scoped>

</style>
