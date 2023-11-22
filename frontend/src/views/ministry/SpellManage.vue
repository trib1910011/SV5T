<template>
    <div>
        <div class="admin-manage animate__animated animate__fadeIn">
            <TitleStructure :title="`Danh sách đợt đăng ký sinh viên 5 tốt`"></TitleStructure>
            <div class="list-account mt-5 table-wrapper-scroll-y my-custom-scrollbar fixTableHead">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th class="text-center" scope="col">#</th>
                            <th class="text-center" scope="col">Mã đợt</th>
                            <th class="text-center" scope="col">
                                Tên đợt
                            </th>
                            <th class="text-center" scope="col">Ngày bắt đầu </th>
                            <th class="text-center" scope="col">
                                Ngày kết thúc
                            </th>
                            <th class="text-center" scope="col">
                                Tỉ lệ đạt
                            </th>
                            <th class="text-center" scope="col">
                                Phân công xét duyệt
                            </th>
                            <th class="text-center" scope="col">
                                Cấu trúc đơn
                            </th>
                            <th class="text-center" scope="col">
                                Trạng thái
                            </th>
                            <th class="text-center" scope="col">
                                Thao tác
                            </th>
                            <th class="text-center" scope="col">
                                Tùy chọn
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in spell" :key="index">
                            <th class="text-center" scope="row">
                                {{ item.stt }}
                            </th>
                            <td class="text-center">{{ item.spellname }}</td>
                            <td class="text-center">{{ item.name }}</td>
                            <td class="text-center">{{ item.start }}</td>
                            <td class="text-center">{{ item.end }}</td>
                            <td class="text-center">{{ item.ratio }} %</td>
                            <td class="text-center">
                                <template v-for="allocateItem in item.allocate" :key="allocateItem.id">
                                    <template v-if="allocateItem.length > 0">
                               
                                            {{ allocateItem  }} <br>
                                             
                                     
                                    </template>

                                </template>
                            </td>
                            <td class="text-center"><button type="button" class="btn btn-outline-primary p-2" data-bs-toggle="modal" data-bs-target="#ViewStructure" @click="viewDetail(item.id)"><i class="bi bi-eye-fill"></i> Xem</button></td>
                            <td class="text-center">{{ item.status }}</td>
                            <td class="text-center">
                                <button type="button" class="btn" data-bs-toggle="modal"
                                    data-bs-target="#editInforSpellStatus"
                                    @click="handleupdateStatus(item.id, item.status)">
                                    <i class="bi bi-arrow-left-right text-success fs-5"> </i>
                                </button>

                            </td>
                            <td class="text-center">
                                <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#editInforSpell"
                                    @click="handleSetUpdate(item)">
                                    <i class="bi bi-pencil-square text-warning fs-5"></i>
                                </button>
                                <button type="button" class="btn" @click="handleDeleteSpell(item.id)">
                                    <i class="bi bi-archive-fill text-danger fs-5"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="d-flex justify-content-center mt-3">
            <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#createSpell">
                <i class="bi bi-plus-circle-fill"></i> &nbsp; Thêm đợt
            </button>
        </div>
        <CreateSpell></CreateSpell>
        <EditSpell></EditSpell>
        <ViewStructure v-bind:dataParent="passData"></ViewStructure>
    </div>
</template>

<script>
import axios from "axios";
import config from "@/config/index.js";
import TitleStructure from "../../components/GlobalComponent/TitleStructure.vue";
import CreateSpell from "../../components/Ministry/ManageSpell/CreateSpell.vue";
import EditSpell from "@/components/Ministry/ManageSpell/EditSpell.vue";
import ViewStructure from "@/components/Ministry/ManageSpell/ViewStructure.vue";

export default {
    name: "SpellManage",
    components: { TitleStructure, CreateSpell, EditSpell, ViewStructure },
    data() {
        return {
            spell: [],
            spellUpdate: {},
            passData: {}
        };
    },
    created() {
        this.showSpell()
    },
    methods: {
        async showSpell() {
            const data = await axios.get("http://localhost:3000/spell/get-all-spell")

            const arr_data = data.data.findSpell;

            const arr_result = arr_data.map((item, index) => {

                return {
                    id: item._id,
                    stt: index + 1,
                    spellname: item.spellname,
                    name: item.name,
                    start: item.start,
                    end: item.end,
                    ratio: item.ratio,
                    status: item.status ? 'Bắt đầu' : 'Kết thúc',
                    allocate: item.allocate,
                    structure: item.structure
                }


            })

            this.spell = arr_result;

        },
        async handleupdateStatus(id_input, status_input) {
            let status_get = false
            if (status_input === 'Bắt đầu') {
                status_get = true
            }
            try {
                const check_update = await axios.patch(`http://localhost:3000/spell/updateOneSpell/${id_input}`, { status: !status_get })
                if (check_update) {
                    this.$store.commit("SET_TOAST", {
                        message: check_update.data.message,
                        isSuccess: check_update.data.status,
                    });
                    this.showSpell()
                }
            } catch (e) {
                console.log(e)
            }

        },
        async handleDeleteSpell(spellId) {
            const res = await axios.delete(
                `${config.domain}/spell/delete-spell`,
                {

                    data: {
                        spellId,
                    },
                }
            );

            this.$store.commit("SET_TOAST", {
                message: res.data.message,
                isSuccess: res.data.status,
            });

            if (res.data.status) {
                this.$store.commit("DELETE_SPELL_CURRENT", spellId);
                this.showSpell()
            }
        },
        handleSetUpdate(spell) {
            this.$store.commit("SET_SPELL_UPDATE", spell);
        },
        async viewDetail(id_input) {
            await axios.get(`http://localhost:3000/spell/get-spell-id/${id_input}`, {
            }).then((data) => {
                const ob = {
                    data: data.data.findSpell
                }
                localStorage.setItem('view_detail_form', JSON.stringify(ob))
                this.passData = data.data.findSpell
            }).catch((e) => {
                console.log(e)
            })
            
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
}    
</style>
                        
