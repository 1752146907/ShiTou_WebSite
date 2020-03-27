<template>
	<div class="body">
		<router-view/>
	</div>
</template>

<style src="./main.css" scoped></style>

<script>
    import mixins from '../common/mixin';

    export default {
        components: {

        },
        mixins: [mixins],
        data: () => ({

        }),
        created () {
            this.handleLoad()
        },
        mounted () {

        },
        methods: {
			handleLoad: function () {
				this.request({
					url: '/api/category',
					method: 'POST',
					data: {

					},
					success: (response) => {
						localStorage.setItem('token_key', JSON.stringify(response));
					},
					error: (response) => {

					},
					complete: (response) => {

					}
				});
			},
        }
    }
</script>
