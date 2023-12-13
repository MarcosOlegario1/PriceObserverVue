<template>
    <div class="px-4 sm:px-6 lg:px-8 w-screen h-screen">
      <div class="sm:flex sm:items-center">
        <div class="sm:flex-auto text-center">
          <h4 class="text-base font-semibold leading-6 text-gray-900">Histórico</h4>
          <p class="mt-2 text-sm text-gray-700">Aqui você pode pegar e conferir as antigas informações, mas não reativar os itens.</p>
        </div>
      </div>
      <div class="mt-8 flow-root">
        <div class="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 align-middle">
            <table class="min-w-full border-separate border-spacing-0">
              <thead>
                <tr>
                  <th scope="col" class="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8">Descrição</th>
                  <th scope="col" class="sticky top-0 z-10 hidden border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell">Ultimo Preço</th>
                  <th scope="col" class="sticky top-0 z-10 hidden border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell">Criado Em</th>
                  <th scope="col" class="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter">Desativado em</th>
                  <th scope="col" class="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-3 pr-4 backdrop-blur backdrop-filter sm:pr-6 lg:pr-8">
                    <span class="sr-only">Reativar</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(disabledItems, oldItemsIdx) in disabledItems" :key="disabledItems.id">
                  <td :class="[oldItemsIdx !== disabledItems.length - 1 ? 'border-b border-gray-200' : '', 'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8']">{{ disabledItems.description }}</td>
                  <td :class="[oldItemsIdx !== disabledItems.length - 1 ? 'border-b border-gray-200' : '', 'whitespace-nowrap hidden px-3 py-4 text-sm text-gray-500 sm:table-cell']">{{ disabledItems.actualPrice }}</td>
                  <td :class="[oldItemsIdx !== disabledItems.length - 1 ? 'border-b border-gray-200' : '', 'whitespace-nowrap hidden px-3 py-4 text-sm text-gray-500 lg:table-cell']">{{ disabledItems.createdAt }}</td>
                  <td :class="[oldItemsIdx !== disabledItems.length - 1 ? 'border-b border-gray-200' : '', 'whitespace-nowrap px-3 py-4 text-sm text-gray-500']">{{ disabledItems.lastUpdate }}</td>
                  <td :class="[oldItemsIdx !== disabledItems.length - 1 ? 'border-b border-gray-200' : '', 'relative whitespace-nowrap py-4 pr-4 pl-3 text-center text-sm font-medium sm:pr-8 lg:pr-8']">
                    <button @click="reactiveItem(disabledItems.id)" type="button" class="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Reativar</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </template>

<script setup>
import axios from 'axios';
import { ref, onBeforeMount } from 'vue'
import { formatISO } from 'date-fns'

const disabledItems = ref([]);

function reactiveItem(id)
{
  try{
    axios({
        method: 'PUT',
        url: 'http://127.0.0.1:8000/api/objects/' + id,
        headers: {"Content-Type": 'application/json'},
        responseType: "json",
        data: {
            status: 1, 
        }
    }).then(function (response){
      disabledItems.value = [];
        let indexItems = response.data;
        indexItems.data.forEach(responseItem => {
          disabledItems.value.push({
            id:          responseItem.id,
            description: responseItem.description,
            actualPrice: responseItem.price ?? 'Sem histórico',
            createdAt:   formatISO(new Date(responseItem.created_at), { representation: 'date' }),
            lastUpdate:  formatISO(new Date(responseItem.updated_at), { representation: 'date' })
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

function listDisabledItems()
{
  axios({
    method: 'get',
    url: 'http://127.0.0.1:8000/api/objects/history',
    responseType: 'application/json'
  }).then(function (response) {
    response = JSON.parse(response.data);
    response.data.forEach(element => {
      disabledItems.value.push({
        id:          element.id,
        description: element.description,
        actualPrice: element.price ?? 'Sem histórico',
        createdAt:   formatISO(new Date(element.created_at), { representation: 'date' }),
        lastUpdate:  formatISO(new Date(element.updated_at), { representation: 'date' })
      })
    });
  }).catch((e)=>{
      console.log("Erro ao pegar os itens desativados:");
      console.log(e);
  });
}

onBeforeMount(() => {
  listDisabledItems()
})

</script>