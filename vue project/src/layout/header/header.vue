<template>
    <header class="header">
        <div class="container">
            <div class="logo">MyShop</div>

            <nav class="nav">

                <!-- <a href="/">Главная</a>
                <a href="/catalog">Каталог</a>
                <a href="/about">О нас</a>
                <a href="/contact">Контакты</a> -->


                <router-link to="/">Главная</router-link>
                <router-link to="/catalog">Каталог</router-link>
                <router-link to="/about">О нас</router-link>
                <router-link to="/contact">Контакты</router-link>


            </nav>

            <div class="search">
                <input type="text" placeholder="Поиск...">
            </div>

            <div class="icons">
                <a href="#"><img src="" alt="Корзина" class="icon"></a>
                <a href="#"><img src="" alt="Профиль" class="icon"></a>
            </div>
        </div>
    </header>

</template>

<style src="./header.css"></style>