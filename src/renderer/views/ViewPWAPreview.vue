<template>
    <div class="view">
        <div class="area-settings">
            <div class="header"><span><i class="mdi mdi-settings"></i> EINSTELLUNGEN</span></div>

            <div class="box">Test</div>
        </div>
        <div class="area-preview">
            <div class="header"><span><i class="mdi mdi-cellphone-iphone"></i> PREVIEW</span></div>

            <div class="preview">
                <div class="box">Preview</div>
            </div>
        </div>
    </div>
</template>

<script>
    import { remote } from 'electron';

    export default {
        name: 'view-pwapreview',
        data: function() {
            return {
            }
        },
        mounted: function() {
        },
        methods: {
        }
    }
</script>

<style scoped>
    .view {
        padding: 25px;
        display: grid;
        grid-template-columns: 300px 1fr;
        grid-gap: 25px;
    }
    .box .noText {
        padding: 25px 0px;
        text-align: center;
        line-height: 1.15;
    }
    .box .noText .icon i {
        font-size: 32px;
        transition: 0.2s ease all;
        color: var(--colorPrimary);
    }
    .box .noText .icon {
        margin-bottom: 15px;
    }
    .box .noText span {
        font-weight: bold;
        font-size: 12px;
        text-transform: uppercase;
    }
    .box input:focus, .box textarea:focus {
        transition: 0.2s ease all;
        border-color: var(--colorPrimary);
        outline: 0;
    }
    .box .text textarea {
        width: 100%;
        height: 350px;
        line-height: 1.5;
    }
    .box .setting {
        display: grid;
        grid-template-columns: auto 1fr;
        grid-gap: 10px;
        align-items: center;
    }
    .box .setting .text {
        font-weight: bold;
        font-size: 12px;
        text-transform: uppercase;
    }
    .box .setting .settingCheckbox span {
        width: 22px;
        height: 22px;
        display: block;
        border-radius: 6px;
        background: var(--colorShade);
        border: 2px solid var(--colorInputOutlineGrey);
        cursor: pointer;
        color: transparent;
        transition: 0.2s ease all;
    }
    .box .setting .settingCheckbox input[type="checkbox"] {
        display: none;
    }
    .box .setting .settingCheckbox input[type="checkbox"]:checked + span {
        transition: 0.2s ease all;
        border-color: var(--colorPrimary);
        color: var(--colorBoxFont);
    }
    .box .setting input[type="number"] {
        padding-top: 5px;
        padding-bottom: 5px;
        width: 90px;
    }
    .box .generate {
        margin-top: 15px;
        display: grid;
        grid-gap: 10px;
    }
    .box .generate button {
        width: 100%;
        text-transform: uppercase;
        background: var(--colorPrimary);
        border: 2px solid transparent;
        color: var(--colorPrimaryText);
        font-size: 12px;
        border-radius: 6px;
        padding: 10px 0px;
        text-align: center;
        font-weight: bold;
        transition: 0.2s ease all;
        margin-right: 10px;
    }
    .box .generate button:hover {
        background: var(--colorPrimaryText);
        color: var(--colorPrimary);
        border-color: var(--colorPrimary);
        cursor: pointer;
    }
    .box .generate button:active {
        background: var(--colorPrimary);
        color: var(--colorPrimaryText);
    }
    .box .generate button:focus {
        outline: 0;
    }
    .area-preview {
        display: grid;
        grid-template-rows: auto 1fr;
    }
    .area-preview .preview {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .area-preview .preview .box {
        width: 200px;
        height: 300px;
    }
</style>
