<template>
    <header class="bg-white w-screen">
      <nav class="mx-auto flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex flex-1">
          <div class="hidden lg:flex lg:gap-x-12">
            <router-link to="/" class="text-sm font-semibold leading-6 text-gray-900">Home</router-link>
            <router-link to="/history" class="text-sm font-semibold leading-6 text-gray-900">Histórico</router-link>
          </div>
          <div class="flex lg:hidden">
            <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
              <span class="sr-only">Open main menu</span>
              <Bars3Icon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
        <router-link to="/" class="-m-1.5 p-1.5">
          <span class="sr-only">Price Observer</span>
          <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
        </router-link>
        <div class="flex flex-1 justify-end">
          <router-link to="/login" class="text-sm font-semibold leading-6 text-gray-900">Log in</router-link>
          <a href="#" class="text-sm font-semibold leading-6 text-gray-900"> / </a>
          <router-link to="/register" class="text-sm font-semibold leading-6 text-gray-900">Register</router-link>
        </div>
      </nav>
      <!-- Mobile Menu Below -->
      <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-10" />
        <DialogPanel class="fixed inset-y-0 left-0 z-10 w-full overflow-y-auto bg-white px-6 py-6">
          <div class="flex items-center justify-between">
            <div class="flex flex-1">
              <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
                <span class="sr-only">Close menu</span>
                <XMarkIcon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <router-link to="/" class="-m-1.5 p-1.5">
              <span class="sr-only">Price Observer</span>
              <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
            </router-link>
            <div class="flex flex-1 justify-end">
              <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
              <a href="#" class="text-sm font-semibold leading-6 text-gray-900">register</a>
            </div>
          </div>
          <div class="mt-6 space-y-2">
            <router-link to="/History" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Historico</router-link>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  </template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Home', to: '/' },
  { name: 'Historico', to: '/history' },
  { name: 'Login', to: '/login' },
  { name: 'Registro', to: '/register' }
]

const mobileMenuOpen = ref(false)
</script>