<template>
    <div>
        <nav-bar></nav-bar>
        <div class="cm_content">
            <div class="cm_main">
                <book></book>
                <book></book>
                <book></book>
                <book></book>
                <book></book>
            </div>
        </div>
        <cm_footer></cm_footer>
    </div>
</template>

<script>
import navBar from 'components/NavBar';
import cm_footer from 'components/Footer';
import Book from 'components/Book2';
export default {
    name: 'Search',
    components: {
        navBar, cm_footer, Book
    }
};
</script>

<style scoped>

</style>
