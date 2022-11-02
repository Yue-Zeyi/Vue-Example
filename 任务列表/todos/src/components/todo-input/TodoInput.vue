<template>
    <form class="from-inline" @submit.prevent="onFormSubmit">
        <div class="form-row align-items-center">
            <div class="col-auto">
                <div class="input-group mb-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text">任务</div>
                    </div>
                    <input type="text" class="form-control" placeholder="请输入任务信息" style="width:356px;"
                        v-model.trim="taskname">
                </div>
            </div>

            <div class="col-auto">
                <button type="submit" class="btn btn-primary mb-2">添加新任务</button>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    name: 'TodoInput',
    emits: ['add'],
    data() {
        return {
            taskname: ''
        }
    },
    methods: {
        //表单提交事件处理函数
        onFormSubmit() {
            if (!this.taskname) return alert('任务名称不能为空')
            this.$emit('add', this.taskname)
            this.taskname = ''
        }
    },
}
</script>

<style lang="less" scoped>

</style>