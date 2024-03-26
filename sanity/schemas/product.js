export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "product",
      title: "Product Name",
      type: "string",
    },
    {
      name: "image",
      title: "Product Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
