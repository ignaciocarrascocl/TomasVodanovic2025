<!-- I'm the all mighty default.vue in the layouts. I just show the Header component, Main content (page in this case) and Footer component. In that order. -->
<template>
    <Header></Header>
    <div>
      <slot />
    </div>
    <Footer></Footer>
  </template>