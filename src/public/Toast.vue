<!-- 
/**
 * Toast 提示框
 * @author YuFy
 * @return oToastOptions
 * @param {Boolean} isShow 是否显示
 * @param {String} title 标题
 * @param {String} text 提示说明
 * @param {Boolean} isCancelButton 是否显示取消按钮
 * @param {String} submitText 确定按钮文字
 * @param {String} cancelText 取消按钮文字
 * emit方法:
 *     submitToast 确定
 *     cancelToast 取消
 * @version 1.0.0
 */
 -->
<template>
    <transition name="fade"
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut">
        <div id="Toast" v-if="toast.isShow">
            <div class="uniqueUI-popup uniqueUI-popup-in" style="display: block;">
                <div class="uniqueUI-popup-inner">
                    <div class="uniqueUI-popup-title">{{ toast.title }}</div>
                    <div class="uniqueUI-popup-text">{{ toast.text }}</div>
                </div>
                <div class="uniqueUI-popup-buttons">
                    <span class="uniqueUI-popup-button uniqueUI-popup-button-bold" @click="submitToast">
                        {{ toast.submitText }}
                    </span>
                    <span class="uniqueUI-popup-button uniqueUI-popup-button-bold" @click="cancelToast" v-if="toast.isCancelButton">
                        {{ toast.cancelText }}
                    </span>
                </div>
            </div>
            <div class="uniqueUI-popup-backdrop uniqueUI-active" style="display: block;"></div>
        </div>
    </transition>    
</template>

<script>
export default {
    name: 'Toast',
    props: {
        oToastOptions: Object
    },
    data () {
        return {
        }
    },
    computed: {
        toast(){
            let oToastOptions = this.oToastOptions || {};
            let toast = {
                isShow: typeof(oToastOptions.isShow) === 'undefined' ? false : oToastOptions.isShow,
                title: oToastOptions.title ? oToastOptions.title : '温馨提示',
                text: oToastOptions.text ? oToastOptions.text : '欢迎使用uniqueUI',
                isCancelButton: typeof(oToastOptions.isCancelButton) === 'undefined' ? false : oToastOptions.isCancelButton,
                submitText: oToastOptions.submitText ? oToastOptions.submitText : '确定',
                cancelText: oToastOptions.cancelText ? oToastOptions.cancelText : '取消'
            };
            return toast;
        }
    },
    methods: {
        submitToast(){
            this.$emit('submitToast');
        },
        cancelToast(){
            this.$emit('cancelToast');
        }
    }
}
</script>

<style scoped>
.animated{
    -webkit-animation-duration: 0.3s;
    animation-duration: 0.3s;
}
</style>
