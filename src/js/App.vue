<template>
    <main class="container">
        <nav>
            <div>
                <aside>
                    <ul class="nav nav-tabs justify-content-end">
                        <li class="nav-item"><router-link to="/" class="nav-link">Главная</router-link></li>
                    </ul>
                </aside>
            </div>
        </nav>
        <div>
            <router-view></router-view>
        </div>
    </main>
</template>

<script>
    export default {
        name: 'App'
    }
</script>