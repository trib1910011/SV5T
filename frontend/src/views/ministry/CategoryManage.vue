<template>
    <div>
        <div class="animate__animated animate__fadeIn">
            <TitleStructure :title="`Quản lý loại tiêu chí`"></TitleStructure>
            <div class="mt-5 table-wrapper-scroll-y my-custom-scrollbar">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th class="text-center" scope="col">#</th>
                            <th class="text-center" scope="col">Mã tiêu chí</th>
                            <th class="text-center" scope="col">
                                Tên tiêu chí
                            </th>
                            <th class="text-center" scope="col">
                                Tùy chọn
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in category" :key="index">
                            <th class="text-center" scope="row">
                                {{ item.stt }}
                            </th>
                            <td class="text-center">{{ item.categoryCode }}</td>
                            <td class="text-center">{{ item.categoryName }}</td>
                            <td class="text-center">
                                <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#editInforCategory">
                                    <i class="bi bi-pencil-square text-warning fs-5" 
                                    @click="handleSetUpdate(item)"></i>
                                </button>
                                <button type="button" class="btn">
                                    <i class="bi bi-archive-fill text-danger fs-5"
                                        @click="handleDeleteCategory(item.id)"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="d-flex justify-content-center mt-3">
            <button type="button" class="btn btn-success mb-3" data-bs-toggle="modal" data-bs-target="#createCategory">
                <i class="bi bi-plus-circle-fill"></i> &nbsp; Thêm tiêu chí
            </button>
        </div>
    </div>
    <CreateCategory></CreateCategory>
    <EditCategory></EditCategory>
</template>

<script>
import axios from "axios";
import config from "@/config/index.js";
import TitleStructure from "../../components/GlobalComponent/TitleStructure.vue";
import CreateCategory from "../../components/Ministry/ManageForm/CreateCategory.vue";
import EditCategory from "../../components/Ministry/ManageForm/EditCategory.vue";

export default {
    name: "CategoryManage",
    components: { TitleStructure, CreateCategory, EditCategory },
    data() {
        return {
            category: [],
            spellUpdate: {},
        };
    },
    created() {
        this.showCategory()
    },
    methods: {
        async showCategory() {
            const token = localStorage.getItem("token");
            const data = await axios.get("http://localhost:3000/ministry/get-all-category",
                {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                }
            )


            const arr_data = data.data.findCategory;

            const arr_result = arr_data.map((item, index) => {

                return {
                    id: item._id,
                    stt: index + 1,
                    categoryCode: item.categoryCode,
                    categoryName: item.categoryName,
                }


            })
            this.category = arr_result;

        },
        async handleDeleteCategory(categoryId) {
            const token = localStorage.getItem("token");
            const res = await axios.delete(
                `${config.domain}/ministry/delete-category`,
                {
                    headers: { Authorization: "Bearer " + token },

                    data: {
                        categoryId,
                    },
                }


            );

            this.$store.commit("SET_TOAST", {
                message: res.data.message,
                isSuccess: res.data.status,
            });

            if (res.data.status) {
                this.$store.commit("DELETE_CATEGORY_CURRENT", categoryId);
                this.showCategory()
            }
        },
        handleSetUpdate(category) {
            this.$store.commit("SET_CATEGORY_UPDATE", category);
        },
    }
};
</script>

<style scoped>
.type__item {
    padding: 5px 10px;
    font-size: 16px;
    cursor: pointer;
    border-bottom: 2px solid rgba(64, 68, 162, 0.25);
}

.type__item.active {
    transition: border-bottom 0.5s linear;
    border-bottom-color: #2f2fe6;
}

.my-custom-scrollbar {
    position: relative;
    height: 400px;
    overflow: auto;
}

.table-wrapper-scroll-y {
    display: block;
}
</style>
                        
