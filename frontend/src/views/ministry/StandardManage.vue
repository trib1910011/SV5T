<template>
    <div class="animate__animated animate__fadeIn">
        <TitleStructure :title="`Quản lý tiêu chí`"></TitleStructure>
        <div class="type-account col-12 d-flex justify-content-center">
            <div class="type__item" @click="handleFilter($event)" style="font-weight: bold;">Tất cả</div>
            <div class="type__item" @click="handleFilter($event)" style="font-weight: bold;">Đạo đức tốt</div>
            <div class="type__item" @click="handleFilter($event)" style="font-weight: bold;">Học tập tốt</div>
            <div class="type__item" @click="handleFilter($event)" style="font-weight: bold;">Thể lực tốt</div>
            <div class="type__item" @click="handleFilter($event)" style="font-weight: bold;">Tình nguyện tốt</div>
            <div class="type__item" @click="handleFilter($event)" style="font-weight: bold;">Hội nhập tốt</div>
            <!-- <div v-for="(item) in categories" :key="item" class="type__item" @click="handleFilter($event)">
                {{ item.categoryName }}
            </div> -->
        </div>
        <div class="mt-5 table-wrapper-scroll-y my-custom-scrollbar fixTableHead">
            <table class="table table-striped">
                <thead>
                    <th class="text-center">#</th>
                    <th class="text-center">Mã</th>
                    <th class="text-center">
                        Thuộc tiêu chí
                    </th>
                    <th class="text-center" style="width: 50%;">
                        Nội dung tiêu chí
                    </th>
                    <th class="text-center">
                        Trạng thái
                    </th>
                    <th class="text-center">
                        Thao tác
                    </th>
                    <th class="text-center">
                        Tùy chọn
                    </th>

                </thead>
                <tbody>
                    <tr v-for="(item, index) in standard" :key="index">
                        <template v-if="item.categoryName == this.click">
                            <td class="text-center" scope="row">
                                {{ item.stt }}
                            </td>

                            <td class="text-center">{{ item.codeStandard }}</td>
                            <td class="text-center">{{ item.categoryName }}</td>
                            <td>{{ item.contentStandard }}</td>
                            <td class="text-center">{{ item.status }}</td>
                            <td class="text-center">
                                <button type="button" class="btn" data-bs-toggle="modal"
                                    data-bs-target="#editInforStandardStatus"
                                    @click="handleupdateStatus(item.id, item.status)">
                                    <i class="bi bi-arrow-left-right text-success fs-5"> </i>
                                </button>

                            </td>
                            <td class="text-center">
                                <button type="button" class="btn" data-bs-toggle="modal"
                                    data-bs-target="#editInforStandard">
                                    <i class="bi bi-pencil-square text-warning fs-5" @click="handleSetUpdate(item)"></i>
                                </button>
                                <button type="button" class="btn">
                                    <i class="bi bi-archive-fill text-danger fs-5"
                                        @click="handleDeleteStandard(item.id)"></i>
                                </button>
                            </td>
                        </template>
                        <template v-else-if="this.click == 'Tất cả'">
                            <td class="text-center" scope="row">
                                {{ item.stt }}
                            </td>

                            <td class="text-center">{{ item.codeStandard }}</td>
                            <td class="text-center">{{ item.categoryName }}</td>
                            <td>{{ item.contentStandard }}</td>
                            <td class="text-center">{{ item.status }}</td>
                            <td class="text-center">
                                <button type="button" class="btn" data-bs-toggle="modal"
                                    data-bs-target="#editInforStandardStatus"
                                    @click="handleupdateStatus(item.id, item.status)">
                                    <i class="bi bi-arrow-left-right text-success fs-5"> </i>
                                </button>

                            </td>
                            <td class="text-center">
                                <button type="button" class="btn" data-bs-toggle="modal"
                                    data-bs-target="#editInforStandard">
                                    <i class="bi bi-pencil-square text-warning fs-5" @click="handleSetUpdate(item)"></i>
                                </button>
                                <button type="button" class="btn">
                                    <i class="bi bi-archive-fill text-danger fs-5"
                                        @click="handleDeleteStandard(item.id)"></i>
                                </button>
                            </td>
                        </template>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="d-flex justify-content-center mt-3">
            <button type="button" class="btn btn-success mb-3" data-bs-toggle="modal" data-bs-target="#createStandard">
                <i class="bi bi-plus-circle-fill"></i> &nbsp; Thêm chi tiết tiêu chí
            </button>
        </div>
    </div>
    <CreateStandard></CreateStandard>
    <EditStandard></EditStandard>
</template>

<script>
import axios from "axios";
import config from "@/config/index.js";
import TitleStructure from "../../components/GlobalComponent/TitleStructure.vue";
import CreateStandard from "@/components/Ministry/ManageForm/CreateStandard.vue";
import EditStandard from "@/components/Ministry/ManageForm/EditStandard.vue";


export default {
    name: "StandardManage",
    components: { TitleStructure, CreateStandard, EditStandard },
    data() {
        return {
            standard: [],
            standardUpdate: {},
            categories: [],
            click: 'Tất cả',
        };
    },
    created() {
        this.showStandard(),
            this.getCategory()
    },
    mounted() {
        document.querySelectorAll(".type__item")[0].classList.add("active");

        const typeItems = document.querySelectorAll(".type__item");

        [...typeItems].forEach(function (typeItem) {
            typeItem.addEventListener("click", handleBorderItem);
        });

        function handleBorderItem(event) {
            [...typeItems].forEach((typeItem) => {
                typeItem.classList.remove("active");
            });
            event.target.classList.add("active");
        }
    },
    methods: {
        async showStandard() {
            const token = localStorage.getItem("token");
            const data = await axios.get("http://localhost:3000/ministry/get-all-standard",
                {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                }
            )


            const arr_data = data.data.findStandard;

            const arr_result = arr_data.map((item, index) => {

                return {
                    id: item._id,
                    stt: index + 1,
                    codeStandard: item.codeStandard,
                    categoryName: item.categoryName,
                    contentStandard: item.contentStandard,
                    status: item.status ? 'Hiện' : 'Ẩn'
                }

            })
            this.standard = arr_result;

        },
        async handleupdateStatus(id_input, status_input) {
            let status_get = false
            if (status_input === 'Hiện') {
                status_get = true
            }
            try {
                const token = localStorage.getItem("token");
                const check_update = await axios.patch(`http://localhost:3000/ministry/updateOneStandard/${id_input}`,
                    {
                        status: !status_get
                    },
                    {
                        headers: { Authorization: "Bearer " + token },

                    },
                )

                if (check_update) {
                    this.$store.commit("SET_TOAST", {
                        message: check_update.data.message,
                        isSuccess: check_update.data.status,
                    });
                    this.showStandard()
                }
            } catch (e) {
                console.log(e)
            }

        },
        async handleDeleteStandard(standardId) {
            const token = localStorage.getItem("token");
            const res = await axios.delete(
                `${config.domain}/ministry/delete-standard`,
                {
                    headers: { Authorization: "Bearer " + token },

                    data: {
                        standardId,
                    },
                }


            );

            this.$store.commit("SET_TOAST", {
                message: res.data.message,
                isSuccess: res.data.status,
            });

            if (res.data.status) {
                this.$store.commit("DELETE_STANDARD_CURRENT", standardId);
                this.showStandard()
            }
        },
        handleSetUpdate(standard) {
            this.$store.commit("SET_STANDARD_UPDATE", standard);
        },
        async getCategory() {
            const token = localStorage.getItem("token");
            const data = await axios.get("http://localhost:3000/ministry/get-all-categories",
                {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                }
            )
            const arr_data = data.data.categories;

            const arr_result = arr_data.map((item) => {

                return {
                    categoryName: item.categoryName
                }


            })

            this.categories = arr_result;

        },
        handleFilter(event) {

            const filter = event.target.innerText;
            this.click = filter
            if (filter == "categoryName") {
                this.$store.commit(
                    "SET_STANDARD_CURRENT",
                    this.standards.filter((standard) => standard.categoryName),
                );

                this.showStandard()
            }





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

.fixTableHead {
    overflow-y: auto;
    height: 400px;
}

.fixTableHead thead th {
    position: sticky;
    top: 0;
    background-color: white;
}</style>
                        
