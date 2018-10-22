<template>
  <f7-page name="cart">
    <f7-navbar title="Cart" back-link="Back"></f7-navbar>
    <f7-block-title>About My App</f7-block-title>
    <f7-block strong>
      <f7-list media-list>
        <f7-list-item title="Item 1" subtitle="Subtitle 1" text="Item 1 Text"></f7-list-item>
        <f7-list-item title="Item 1" subtitle="Subtitle 2" text="Item 2 Text"></f7-list-item>
      </f7-list>
    </f7-block>
    <f7-list class="cart-list" media-list>
      <f7-list-item
        link="/item/"
        media="static/img/detail-1.jpg"
        title="Item Title"
        subtitle="Item Subtitle"
        text="Some text"
        after=""
      ></f7-list-item>
    </f7-list>

    <f7-list class="cart-list" media-list>
      <f7-list-item
        link="/home/"
        media="static/img/detail-1.jpg"
        title="Item Title"
        subtitle="Item Subtitle"
        text="Text"
        after="Read more"
        >
          <div slot="root-start">Root Start</div>
          <div slot="root">Root</div>
          <div slot="content-start">Content Start</div>
          <div slot="content">Content</div>
          <div slot="media-start">Media Start</div>
          <div slot="media">Media</div>
          <span slot="after-start">After Start</span>
          <span slot="after">After</span>
          <div slot="inner-start">Inner Start</div>
          <div slot="inner">Inner</div>
      </f7-list-item>
    </f7-list>
  </f7-page>
</template>

<script>
export default {
  data: function () {
    return {

    }
  },
  methods: {

  },
  mounted: function () {
    var $$=this.Dom7;
    $$("#home-searchbar").css("display","none")
    $$("#category-searchbar").css("display","none")
  }
}
</script>