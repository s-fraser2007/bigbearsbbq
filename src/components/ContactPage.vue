<template>
  <h1>Contact Us</h1>
  <p>
    If you have any questions or enquiries, please do not hesitate to contact us. You can fill out
    the form below, or you can <a href="mailto:bigbear@bigbearsbbq.co.uk">email us</a> directly.
  </p>
  <p>Our team will come back to you as soon as possible.</p>
  <p>Fields marked with a <span class="required">*</span> are required.</p>
  <form id="contact-form" class="contact-form" name="contact-form" method="POST" action="">
    <div class="flex-container">
      <div class="flex-row">
        <div class="flex-item">
          <label for="name" class="mb-0 mt-1">Name <span class="required">*</span></label>
          <input type="text" id="name" name="name" class="form-control" required="" />
        </div>
        <div class="flex-item">
          <label for="address" class="mb-0 mt-1">Address <span class="required">*</span></label>
          <input type="text" id="address" name="address" class="form-control" required="" />
        </div>
        <div class="flex-item">
          <label for="name" class="mb-0 mt-1">Phone <span class="required">*</span></label>
          <input type="text" id="phone" name="phone" class="form-control" required="" />
        </div>
      </div>

      <div class="flex-row">
        <div class="flex-item">
          <label for="email" class="mb-0 mt-1">Email <span class="required">*</span></label>
          <input type="text" id="email" name="email" class="form-control" required="" />
        </div>
        <div class="flex-item">
          <label for="date" class="mb-0 mt-1">Event Date</label>
          <input type="date" id="date" name="date" class="form-control" />
        </div>
        <div class="flex-item">
          <label for="venue" class="mb-0 mt-1">Venue Name</label>
          <input type="text" id="venue" name="venue" class="form-control" />
        </div>
      </div>

      <div class="flex-row">
        <div class="flex-item">
          <label for="catering" class="mb-0 mt-1">Type of Catering</label>
          <select id="catering" name="catering" class="form-control">
            <option value="">Please Select...</option>
            <option value="pizza">Pizza</option>
            <option value="bbq">BBQ</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div class="flex-item">
          <label for="guests" class="mb-0 mt-1">Number of Guests</label>
          <input type="number" id="guests" name="guests" class="form-control" />
        </div>
      </div>

      <div class="flex-row">
        <div class="flex-item">
          <label for="message" class="mb-0 mt-1"
            >Message<br /><small>Use this box to tell us a bit more about your event</small></label
          >
        </div>
      </div>

      <div class="flex-row">
        <textarea id="message" name="message" class="form-control" rows="3"></textarea>
      </div>

      <div class="flex-row">
        <div class="flex-item">
          <button class="">Submit</button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'ContactUs',
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
