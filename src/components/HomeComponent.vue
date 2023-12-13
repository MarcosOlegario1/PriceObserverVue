<template>
    <div class="w-screen h-screen">
        <div class="px-4 sm:px-6 lg:px-8">
            <div class="sm:flex sm:items-center">
                <div class="sm:flex-auto text-center pt-6">
                    <h1 class="text-base font-semibold leading-6 text-gray-900">Adicione seus interesses em compras e deixe o resto conosco!</h1>
                    <p class="mt-2 text-sm text-gray-700">A lista de itens será atualizada automaticamente, evite colocar links repetidos e confira que as informações estão de acordo.</p>
                </div>
                </div>
                <div class="mt-8 flow-root">
                <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <div class="relative">
                            <div v-if="itemsSelecteds.length > 0" class="absolute left-14 top-0 flex h-12 items-center space-x-3 bg-whitesmoke sm:left-12">
                                <button type="button" @click="disableItems(itemsSelecteds)" class="inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    <CheckCircleIcon class="-ml-0.5 h-5 w-5" aria-hidden="true" />
                                    Desativar
                                </button>        
                            </div>
                            <div  class="absolute z-1 right-2 top-0 flex h-12 items-center space-x-3 bg-whitesmoke sm:right-2">
                                <button @click="isOpenCreateModal = true" type="button" class="inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    Adicionar
                                    <PlusIcon class="-mr-0.5 h-5 w-5" aria-hidden="true" />
                                </button>
                            </div>
                            
                            <table class="min-w-full table-fixed divide-y divide-gray-300">
                                <thead>
                                    <tr>
                                    <th scope="col" class="relative px-7 sm:w-12 sm:px-6">
                                        <input type="checkbox" class="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" :checked="indeterminate || itemsSelecteds.length === item.length" :indeterminate="indeterminate" @change="itemsSelecteds = $event.target.checked ? item.map((i) => i.id) : []" />
                                    </th>
                                    <th scope="col" class="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900">Descrição</th>
                                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Preço Atual</th>
                                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Ultimo Preço</th>
                                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Ultima Atualização</th>
                                    <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-3">
                                        <div @click="isOpenCreateModal = !isOpenCreateModal" class="absolute z-1 right-2 top-0 flex h-12 items-center space-x-3 bg-whitesmoke sm:right-2">
                                            <button type="button" class="inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                                Adicionar
                                                <PlusIcon class="-mr-0.5 h-5 w-5" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-200 bg-white">
                                    <tr v-for="item in item" :key="item.id" :class="[itemsSelecteds.includes(item.id) && 'bg-gray-50', item.value]" >
                                        <td class="relative px-7 sm:w-12 sm:px-6">
                                            <div v-if="itemsSelecteds.includes(item.id)" class="absolute inset-y-0 left-0 w-0.5 bg-indigo-600"></div>
                                            <input type="checkbox" class="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" :value="item.id" v-model="itemsSelecteds" />
                                        </td>
                                        <td :class="['whitespace-nowrap py-4 pr-3 text-sm font-medium', itemsSelecteds.includes(item.id) ? 'text-indigo-600' : 'text-gray-900']">
                                            {{ item.description }}
                                        </td>
                                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            {{ item.actualPrice }}
                                        </td>
                                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            {{ item.oldPrice }}
                                        </td>
                                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            {{ item.lastUpdate }}
                                        </td>
                                        <td class="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3 text-start">
                                            <a href="#" @click="isOpenEditModal = !isOpenEditModal; openTheModal(item.id)" class="text-indigo-600 hover:text-indigo-900">
                                            Editar
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <div>
                                <div v-if="isOpenCreateModal">
                                    <CreateModal :open="isOpenCreateModal" @close="isOpenCreateModal = false"/>
                                </div>
                                <div v-if="isOpenEditModal">
                                    <EditModal :open="isOpenEditModal" :id="idItem" @close="isOpenEditModal = false"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onBeforeMount } from 'vue'
import axios from 'axios'
import CreateModal from './Modal/BaseModal.vue';
import EditModal from './Modal/EditModal.vue';
import { CheckCircleIcon, PlusIcon  } from '@heroicons/vue/20/solid'
import { formatISO } from 'date-fns'

let item = ref([]);
let isOpenCreateModal = ref(false);
let isOpenEditModal = ref(false);
let failUpdateItems = ref([]);

let idItem = ref(null)

function checkValue(newValue, oldValue)
{
    switch (newValue, oldValue){
        case(newValue < oldValue):
            return 'bg-green-50 ring-green-600/20';
            break;

        case(newValue > oldValue):
            return 'bg-red-50 ring-red-600/10';
            break;

        default:
            return ''
    }
}

function disableItems(itemsSelecteds)
{
    let items = itemsSelecteds;

    if(failUpdateItems.length > 0){
        items = itemsSelecteds.concat(failUpdateItems);
    }

    for(let i = 0; i < items.length; i++)
    {
        try{
            axios({
                method: 'PUT',
                url: 'http://127.0.0.1:8000/api/objects/' + items[i],
                headers: {"Content-Type": 'application/json'},
                responseType: "json",
                data: {
                    status: 0,
                }
            }).then(function (response){
                item.value = [];
                let indexItems = response.data;
                indexItems.data.forEach(responseItem => {
                    item.value.push({
                        id:          responseItem.id,
                        description: responseItem.description,
                        actualPrice: responseItem.price ?? 'Sem histórico',
                        oldPrice:    responseItem.old_price ?? 'Sem histórico',
                        lastUpdate:  formatISO(new Date(responseItem.updated_at), { representation: 'date' }),
                        value:       checkValue(responseItem.price, responseItem.old_price)
                    });
                });
            }).catch((e) => {
                console.log('axios' + e)
                
            });
        }catch(e){
            console.log('catch')
            console.log(e)
        }
    }

}

function listItems()
{
    axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/api/objects',
        responseType: 'application/json'
    })
    .then(function (response) {
        let items = JSON.parse(response.data);
        items.data.forEach(responseItem => {
            item.value.push({
                id:          responseItem.id,
                description: responseItem.description,
                actualPrice: responseItem.price ?? 'Sem histórico',
                oldPrice:    responseItem.old_price ?? 'Sem histórico',
                lastUpdate:  formatISO(new Date(responseItem.updated_at), { representation: 'date' }),
                value:       checkValue(responseItem.price, responseItem.old_price)
            });
        });
    }).catch((e) => {
        console.log("Erro ao pegar os itens:");
        console.log(e);
    });
}

function openTheModal(id)
{
    idItem.value = id;

}


onBeforeMount(() => {
    listItems();
})

const itemsSelecteds = ref([]);

const indeterminate = computed(() => itemsSelecteds.value.length > 0 && itemsSelecteds.value.length > item.length );
</script>   