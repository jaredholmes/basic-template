<template>
  <div class="view-contact">
    <page-header title="Contact Us" subtitle="We'd love to hear from you"/>
    <div class="container">
      <h2>Our Details</h2>
      <div class="flex justify-between">
        <ul>
          <li><icon class="inline" name="phone"><icon-phone/></icon><a href="tel:+27711111111">+27 711 111 111</a></li>
          <li><icon class="inline" name="mail"><icon-mail/></icon><a href="mailto:contact@mail.com">contact@mail.com</a></li>
          <li><icon class="inline" name="location"><icon-location/></icon><a href="location.maps.com">2 Road Street, Locationville, Country</a></li>
        </ul>
        <div class="contact-map bc-primary">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact'
}
</script>
