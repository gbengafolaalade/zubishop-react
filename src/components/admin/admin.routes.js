/**
 * Routes for the admin dashboard
 * Nested Route for the admin
 */
import React from "react";
import HomeComponent from "./home.component";
import Collection from "./collection.component";
import AddProduct from "./addProduct.component";
import AddCollection from "./addCollection.component";
import Products from "./products.component";
import Orders from "./order.component";
import Posts from "./post.component";
import Users from "./users.component";

const AdminRoutes = [
  //  @TODO: Create route for the admin dashboard
  {
    exact: true,
    main: HomeComponent,
    path: "/shop/admin/dashboard",
    name: () => <>Home</>,
  },
  {
    main: Collection,
    path: "/shop/admin/dashboard/collections",
    name: () => <>Collections</>,
  },
  {
    main: AddCollection,
    path: "/shop/admin/dashboard/add-collection",
    name: () => <>Add Collection</>,
  },
  {
    main: AddProduct,
    path: "/shop/admin/dashboard/add-product",
    name: () => <>Add Product</>,
  },
  {
    main: Products,
    path: "/shop/admin/dashboard/products",
    name: () => <>Products</>,
  },
  {
    main: Orders,
    path: "/shop/admin/dashboard/orders",
    name: () => <>Orders</>,
  },
  {
    main: Posts,
    path: "/shop/admin/dashboard/posts",
    name: () => <>Posts</>,
  },
  {
    main: Users,
    path: "/shop/admin/dashboard/users",
    name: () => <>Users</>,
  },
];

export default AdminRoutes;
