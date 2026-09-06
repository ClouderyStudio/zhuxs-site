<template>
	<button class="icon-btn" @click="onClick">
		<mdicon :name="icon" />
	</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
	props: {
		icon: { type: String, default: "" },
		href: { type: String, default: "" },
	},
	methods: {
		onClick() {
			if (this.href) {
				window.open(this.href, "_blank", "noopener");
			}
		},
	},
});
</script>

<style lang="less" scoped>
.icon-btn {
	border-radius: 100%;
	outline: none;
	width: 32px;
	height: 32px;
    text-align: center;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .2s ease;

	&.dark {
		background: #414141;
		color: white;

        &:hover {
            background: @primary;
        }

		svg {
			fill: white !important;
		}
	}
}
</style>
