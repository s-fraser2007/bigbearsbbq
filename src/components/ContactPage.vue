<template>
  <section class="max-w-4xl mx-auto px-4 py-10">
    <BaseHeader>Contact Us</BaseHeader>
    <p class="mb-2 text-gray-700">
      If you have any questions or enquiries, please do not hesitate to contact us. You can fill out
      the form below, or you can
      <a href="mailto:bigbear@bigbearsbbq.co.uk" class="text-red-600 underline">email us</a>
      directly.
    </p>
    <p class="mb-1 text-gray-700">Our team will come back to you as soon as possible.</p>
    <p class="mb-6 text-gray-700">
      Fields marked with a <span class="text-red-500 font-semibold">*</span> are required.
    </p>

    <form class="space-y-6" method="POST" action="">
      <!-- Row 1 -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label for="name" class="block font-medium text-sm text-gray-700">
            Name <span class="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-red-600 focus:border-red-600"
            required
          />
        </div>
        <div>
          <label for="address" class="block font-medium text-sm text-gray-700">
            Address <span class="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="address"
            name="address"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-red-600 focus:border-red-600"
            required
          />
        </div>
        <div>
          <label for="phone" class="block font-medium text-sm text-gray-700">
            Phone <span class="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-red-600 focus:border-red-600"
            required
          />
        </div>
      </div>

      <!-- Row 2 -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label for="email" class="block font-medium text-sm text-gray-700">
            Email <span class="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-red-600 focus:border-red-600"
            required
          />
        </div>
        <div>
          <label for="date" class="block font-medium text-sm text-gray-700">Event Date</label>
          <input
            type="date"
            id="date"
            name="date"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-red-600 focus:border-red-600"
          />
        </div>
        <div>
          <label for="venue" class="block font-medium text-sm text-gray-700">Venue Name</label>
          <input
            type="text"
            id="venue"
            name="venue"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-red-600 focus:border-red-600"
          />
        </div>
      </div>

      <!-- Row 3 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label for="catering" class="block font-medium text-sm text-gray-700"
            >Type of Catering</label
          >
          <select
            id="catering"
            name="catering"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-red-600 focus:border-red-600"
          >
            <option value="">Please Select...</option>
            <option value="pizza">Pizza</option>
            <option value="bbq">BBQ</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label for="guests" class="block font-medium text-sm text-gray-700"
            >Number of Guests</label
          >
          <input
            type="number"
            id="guests"
            name="guests"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-red-600 focus:border-red-600"
          />
        </div>
      </div>

      <!-- Message -->
      <div>
        <label for="message" class="block font-medium">Message</label>
        <small class="text-gray-500 block mb-1"
          >Use this box to tell us a bit more about your event</small
        >
        <textarea
          id="message"
          name="message"
          rows="4"
          class="w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:ring-red-600 focus:border-red-600"
        ></textarea>
      </div>

      <!-- Submit Button -->
      <div class="md:col-span-3 text-center">
        <button type="submit" class="big-bear-button px-6 py-2 rounded-md">Submit</button>
      </div>
    </form>
  </section>
</template>

<script>
import BaseHeader from '@/components/Base/BaseHeader.vue'

export default {
  name: 'ContactUs',
  components: {
    BaseHeader,
  },
}
</script>

<style>
.required {
  color: #cd214f;
}

label {
  margin: 0 5px;
}

.flex-container {
  display: inline-flex;
  flex-flow: row wrap;
  gap: 30px 40px;
}

.flex-row {
  flex: 100%;
}

.flex-item {
  display: inline-flex;
  flex: 50%;
}

textarea {
  width: 80%;
}
</style>
