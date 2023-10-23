<template>
    <div class="object-infor col-6 d-flex p-3 border rounded-4">
        <template v-for="(item, index) in student" :key="index">
        <AvatarComponent :urlAvatar="item.urlAvatar" class="col-5 me-4" />
        <div class="col-7 row flex-grow-1">
            
                <div class="col-8 my-1">
                    <strong>MSSV: </strong> {{ item.username }}
                </div>
                <div class="col-12 my-1">
                    <strong>Họ và tên: </strong> {{ item.name }}
                </div>
                <div class="col-12 my-1">
                    <strong>Ngành: </strong> {{ item.major }}
                </div>
                <div class="col-5 my-1">
                    <strong>Khóa: </strong> {{ item.course }}
                </div>
        </div>
    </template>
    </div>
</template>

<script>
import AvatarComponent from "./AvatarComponent.vue";
import axios from "axios";
export default {
    name: "InforStudent",
    data() {
        return {
            student: [],
        };
    },
    components: { AvatarComponent },
    created() {
        this.showInforStudent()
    },
    methods: {
        async showInforStudent() {
            const token = localStorage.getItem("token");
            const data = await axios.post("http://localhost:3000/student/get-student-infor",
            {
                token
            },
                {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                }
            )

            const arr_data = data.data.result;
           
            const arr_result = [arr_data].map((item, index) => {

                return {
                    id: item.studentId,
                    urlAvatar: item.urlAvatar,
                    stt: index + 1,
                    username: item.username,
                    name: item.name,
                    major: item.major,
                    course: item.course
                }

            })
            this.student = arr_result;
            
        },
    }
};

</script>

<style scoped>
.object-infor {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    max-width: 49%;
}
</style>
