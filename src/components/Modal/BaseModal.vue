<template>
    <TransitionRoot as="template" :show="open">
      <Dialog as="div" class="relative z-10" @close="open = false">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>
  
        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl sm:p-6">
                <div>
                  <div class="mt-3 text-center sm:mt-5">
                    <!-- <DialogTitle as="h3" class="text-base font-semibold leading-6 text-gray-900">Cadastre o produto</DialogTitle> -->
                    <div class="mt-2">
                        <!-- Form -->
                        <div class="space-y-10 divide-y divide-gray-900/10">
                            <div class="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
                            <div class="px-4 sm:px-0">
                                <h2 class="text-base font-semibold leading-7 text-gray-900">Informações do produto</h2>
                                <p class="mt-1 text-sm leading-6 text-gray-600">Aqui você preenche as informações sobre o produto para que possamos te atualizar sobre o preço.</p>
                            </div>

                            <form class="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
                                <div class="px-4 py-6 sm:p-8">
                                <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <!-- Website -->
                                    <div class="col-span-full">
                                    <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Site</label>
                                    <div class="mt-2">
                                        <input type="text" name="street-address" id="street-address" autocomplete="street-address" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="https://www.google.com.br"/>
                                    </div>
                                    </div>
                                    <div class="col-span-full">
                                    <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Referência</label>
                                    <div class="mt-2">
                                        <input type="text" name="street-address" id="street-address" autocomplete="street-address" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="//*[@id='blocoValores']/div[2]/div[1]/div/h4" />
                                    </div>
                                    </div>
                                    <!-- Description -->
                                    <div class="col-span-full">
                                        <label for="about" class="block text-sm font-medium leading-6 text-gray-900">Descrição</label>
                                        <div class="mt-2">
                                            <textarea id="about" maxlength="50" name="about" rows="3" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Uma pequena descrição para você saber qual é o produto." />
                                        </div>
                                    </div>

                                </div>
                                </div>
                            </form>
                            </div>

                            <div class="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
                            <div class="px-4 sm:px-0">
                                <h2 class="text-base font-semibold leading-7 text-gray-900">Dados Pessoais</h2>
                                <p class="mt-1 text-sm leading-6 text-gray-600">Dados pessoas usados apenas para disparo de e-mail ou mensagem, ainda não funcional.</p>
                            </div>

                            <form class="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
                                <div class="px-4 py-6 sm:p-8">
                                <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                                    <div class="col-span-full">
                                    <label for="telephone" class="block text-sm font-medium leading-6 text-gray-900">Telefone</label>
                                    <div class="mt-2">
                                        <input type="text" name="telephone" id="telephone" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="+55 11 9 0123-4567"/>
                                    </div>
                                    </div>

                                    <div class="sm:col-span-full">
                                    <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Endereço de E-mail</label>
                                    <div class="mt-2">
                                        <input id="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="john@walker.com.br"/>
                                    </div>
                                    </div>

                                </div>
                                </div>
                            </form>
                            </div>

                            <div class="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
                            <div class="px-4 sm:px-0">
                                <h2 class="text-base font-semibold leading-7 text-gray-900">Notificações</h2>
                                <p class="mt-1 text-sm leading-6 text-gray-600">Diga que tipo de aviso você gostaria de receber.</p>
                            </div>

                            <form class="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
                                <div class="px-4 py-6 sm:p-8">
                                <div class="max-w-2xl space-y-10">
                                    <fieldset>
                                    <div class="mt-6 space-y-6">
                                        <div class="flex items-center gap-x-3">
                                        <input id="push-both" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                        <label for="push-both" class="block text-sm font-medium leading-6 text-gray-900">Ambos</label>
                                        </div>
                                        <div class="flex items-center gap-x-3">
                                        <input id="push-email" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                        <label for="push-email" class="block text-sm font-medium leading-6 text-gray-900">Somente E-mail</label>
                                        </div>
                                        <div class="flex items-center gap-x-3">
                                        <input id="push-mobile" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                        <label for="push-mobile" class="block text-sm font-medium leading-6 text-gray-900">Somente Celular</label>
                                        </div>
                                    </div>
                                    </fieldset>
                                </div>
                                </div>
                            </form>
                            </div>
                        </div>
                    </div>

                  </div>
                </div>
                <div class="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                    <button type="button" class="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-1" @click="open = false">Deactivate</button>
                    <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-2 sm:mt-0" @click="open = false" ref="cancelButtonRef">Cancel</button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </template>

<script setup>
import { createApp } from 'vue'
import { ref } from 'vue'
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'

const app = createApp({})
const open = ref(true)

</script>

<style scoped>
.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
}

.modal:focus-visible{
  display: block;
}
</style>