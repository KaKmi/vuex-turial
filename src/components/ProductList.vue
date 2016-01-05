<template>
    <ul>
        <li v-for="p in products">
            {{p.title}} -{{p.price |currency}}
            <br>
            <button
                :disabled ="!p.inventory"
                @click="addToCart(p)">
                Add to cart
            </button>
        </li>
    </ul>
</template>

<script type="text/ecmascript-6">

</script>