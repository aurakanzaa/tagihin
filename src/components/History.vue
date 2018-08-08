<template>
    <div class="container-fluid top">
        <div class="col-lg-4 col-centered"></div>
        <div class="col-lg-4 col-centered">
            <ul>
                <li><a class="active" href="#paid">Paid</a></li>
                <li><a href="#overdue">Overdue</a></li>
                <li><a href="#open">Open</a></li>
            </ul>
        </div>
        <div class="col-lg-4 col-centered"></div>
    </div>
</template>

<script>
</script>

<style>
    ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    border: 1px solid #e7e7e7;
    background-color: #f3f3f3;
}

li {
    float: left;
}

li a {
    display: block;
    color: #666;
    text-align: center;
    padding: 14px 53px;
    text-decoration: none;
}

li a:hover:not(.active) {
    background-color: #ddd;
}

li a.active {
    color: white;
    background-color: #4CAF50;
}
</style>