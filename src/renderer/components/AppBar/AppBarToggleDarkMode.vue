<template>
    <div class="appbar-icon" @click="clickToggle()">
        <div class="tooltip">{{ tooltip }}</div>
        <i :class="'mdi mdi-' + icon"></i>
        <div class="activeIndicator" :class="{ isActive: isDarkMode == true }"></div>
    </div>
</template>

<script>
    import { remote } from 'electron';
    const htmlParent = document.querySelector("html");

    export default {
        name: 'appbar-icon',
        data: function() {
            return {
                isDarkMode: false
            }
        },
        mounted: function() {
            if(localStorage.isDarkMode == "true") {
                this.isDarkMode = true;
            } else {
                this.isDarkMode = false;
            }
            this.updateSetting();
        },
        methods: {
            clickToggle: function() {
                this.isDarkMode = !this.isDarkMode;
                localStorage.isDarkMode = this.isDarkMode;
                this.updateSetting();
            },
            updateSetting: function() {
                if(this.isDarkMode) {
                    htmlParent.setAttribute("darkmode", "");
                } else {
                    htmlParent.removeAttribute("darkmode");
                }
            }
        },
        props: ['icon', 'tooltip', 'method']
    }
</script>
